import "../../../sass/add-page.scss";
import "../../../sass/style.scss";
import header from "../component/container/header";
import footer from "../component/container/footer";
import form from "../component/form/form";

const AddPage = {
  async init() {
    this._initialListener();
  },
  
  _initialListener() {
    const addFormRecord = document.querySelector('.form-input-form');
    addFormRecord.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        this._sendPost();
      },
      false,
    );
  },

  _getFormData() {
    const evidenceInput = document.querySelector('#validationCustomEvidence');
    const nameInput = document.querySelector('#name-input');
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

  _sendPost() {
    const formData = this._getFormData();
    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);
    }
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');
    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default AddPage;