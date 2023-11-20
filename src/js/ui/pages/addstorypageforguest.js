import '../../../sass/add-page.scss';
import '../../../sass/style.scss';
import header from '../component/container/linksappbar';
import footer from '../component/container/footer';
import FormAddPageForGuest from '../component/form/formaddstoryforguest';
import alert from '../component/alert/alert';
import loading from '../component/loading/loading';
import Config from '../../config/config';
import Utils from '../../utils/utils';
import Stories from '../../network/stories';

const AddPageforGuest = {
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
    const userToken = Utils.getUserToken(Config.USER_TOKEN_KEY);
    const isUserSignedIn = Boolean(userToken);
    const loginlabel = document.querySelector('.login-appbar');
    const registerlabel = document.querySelector('.register-appbar');
    const logoutlabel = document.querySelector('.logout-appbar');
    if (isUserSignedIn) {
      loginlabel.classList.add('hidden');
      registerlabel.classList.add('hidden');
      logoutlabel.classList.remove('hidden');
    } else {
      loginlabel.classList.remove('hidden');
      registerlabel.classList.remove('hidden');
      logoutlabel.classList.add('hidden');
    }
  },

  async _showLoading() {
    await setTimeout(() => {
      const loadingComponent = document.querySelector('loading-component');
      loadingComponent.classList.add('hidden');
    }, 3000);
  },

  _getFormData() {
    const evidenceInput = document.querySelector('#validationCustomEvidence');
    const descriptionInput = document.querySelector('#description-input');
    return {
      description: descriptionInput.value,
      photo: evidenceInput.files[0],
    };
  },

  async _sendPost() {
    const formData = this._getFormData();
    if (this._validateFormData({ ...formData })) {
      try {
        const response = await Stories.addNewStoryforGuest(formData);
        if (response.status === 201) {
          window.alert('New Stories added successfully');
          this._goToDashboardPage();
        } else {
          window.alert(`${response.message}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
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

export default AddPageforGuest;
