import '../../../sass/add-page.scss';
import '../../../sass/style.scss';
import header from '../component/container/linksappbar';
import footer from '../component/container/footer';
import formregister from '../component/form/formregister';
import alert from '../component/alert/alert';
import loading from '../component/loading/loading';
import Auth from '../../network/auth';
import CheckUserAuth from './checkuserauth';
import Utils from '../../utils/utils';
import Config from '../../config/config';

const RegisterPage = {
  async init() {
    CheckUserAuth.checkLoginState();
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
    const userToken = Utils.getUserToken(Config.USER_TOKEN_KEY);
    const isUserSignedIn = Boolean(userToken);
    const logoutlabel = document.querySelector('.logout-appbar');
    if (isUserSignedIn) {
      window.location.href = '/dashboard.html';
    } else {
      logoutlabel.classList.add('hidden');
    }
  },

  async _showLoading() {
    const addcontainer = document.querySelector('.add-page-container');
    addcontainer.classList.add('hidden');
    await setTimeout(() => {
      const loadingComponent = document.querySelector('loading-component');
      loadingComponent.classList.add('hidden');
      addcontainer.classList.remove('hidden');
    }, 3000);
  },

  async _sendPost() {
    const formData = this._getFormData();
    if (this._validateFormData({ ...formData })) {
      try {
        const response = await Auth.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        console.log(response.message);
        if (response.status === 201) {
          window.alert('Registered a new user');
          this._goToLoginPage();
        } else {
          if (formData.password.length <= 9) {
            window.alert(`Password harus minimal 8 karakter`);
          } else {
            window.alert(`${response.message}`);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  },

  _getFormData() {
    const nameInput = document.querySelector('#name-input');
    const emailInput = document.querySelector('#email-input');
    const passwordInput = document.querySelector('#password-input');
    var date = new Date().toISOString();
    return {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');
    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },

  _alertNotification() {
    const alertComponent = document.createElement('alert-component');
    alertComponent.classList.add('alert', 'alert-success', 'alert-dismissible', 'alertscss');
    document.body.appendChild(alertComponent);
  },
};

export default RegisterPage;
