import "../../../sass/add-page.scss";
import "../../../sass/style.scss";
import header from "../component/container/linksappbar";
import footer from "../component/container/footer";
import formlogin from "../component/form/formlogin";
import alert from "../component/alert/alert";
import loading from "../component/loading/loading";
import Auth from '../../network/auth';
import CheckUserAuth from './checkuserauth';
import Config from '../../config/config';
import Utils from '../../utils/utils';

const LoginPage = {
  async init() {
    this._initialListener();
    await this._showLoading();
  },
  
  _initialListener() {
    const addFormRecord = document.querySelector('.form-input-form');
    addFormRecord.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();
        addFormRecord.classList.add('was-validated');
        await this._sendPost();
        this._alertNotification();
        setTimeout(() => {
          this._goToDashboardPage();
        }, 3000);
      },
      false,
    );
  },

  async _showLoading() {
    await setTimeout(() => {
      const loadingComponent = document.querySelector('loading-component');
      loadingComponent.classList.add('hidden');
    }, 3000);
  },

  _getFormData() {
    const emailInput = document.querySelector('#email-input');
    const passwordInput = document.querySelector('#password-input');
    return {
      email: emailInput.value,
      password: passwordInput.value,
    };
  },

  async _sendPost() {
    const formData = this._getFormData();
    if (this._validateFormData({ ...formData })) {
      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });
        if (response.status === 200) {
          Utils.setUserToken(Config.USER_TOKEN_KEY, response.data.loginResult.token);
          Utils.setName(Config.NAME, response.data.loginResult.name);

          window.alert('Signed user in detected');

          this._goToDashboardPage();
        } else {
          if (formData.password.length <= 8) {
            window.alert(`Password harus minimal 8 karakter`);
          } else {
            window.alert(`${response.response.data.message}`);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === '' || item === undefined || item === null,
    );
    return formDataFiltered.length === 0;
  },

  _getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },

  _alertNotification() {
    const alertComponent = document.createElement('alert-component');
    alertComponent.classList.add('alert', 'alert-success', 'alert-dismissible', 'alertscss');
    document.body.appendChild(alertComponent);
  }
};

export default LoginPage;