import "../../../sass/add-page.scss";
import "../../../sass/style.scss";
import header from "../component/container/linksappbar";
import footer from "../component/container/footer";
import formaddstory from "../component/form/formaddstory";
import alert from "../component/alert/alert";
import loading from "../component/loading/loading";
import Config from '../../config/config';
import Utils from '../../utils/utils';
import Stories from "../../network/stories";

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
  },

  async _showLoading() {
    await setTimeout(() => {
      const loadingComponent = document.querySelector('loading-component');
      loadingComponent.classList.add('hidden');
    }, 3000);
  },

  _getFormData() {
    const evidenceInput = document.querySelector('#validationCustomEvidence');
    const nameInput = document.querySelector('#storyname-input');
    const descriptionInput = document.querySelector('#description-input');
    var date = new Date().toISOString();
    return {
      id: `story-${Math.random().toString(18).substring(2, 18)}`,
      name: nameInput.value,
      description: descriptionInput.value,
      photoUrl: evidenceInput.files[0],
      createdAt: date,
    };
  },

  async _sendPost() {
    const formData = this._getFormData();
    if (this._validateFormData({ ...formData })) {
      const photoUrl = await this._getBase64(formData.photoUrl);
      const data = {
        ...formData,
        photoUrl,
      };
      try {
        const response = await Stories.addNewStoryforGuest(data);
        if (response.status === 201) {
          window.alert('New Stories added successfully');
          this._goToDashboardPage();
        } else {
          window.alert(`${response.response.data.message}`);
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

export default AddPageforGuest;