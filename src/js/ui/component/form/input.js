import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';

class InputApp extends LitWithoutShadowDom {
  static get properties() {
    return {
      name: { type: String },
      type: { type: String },
      placeholder: { type: String },
      idscss: { type: String },
      validFeedbackMessage: { type: String, reflect: true },
      invalidFeedbackMessage: { type: String, reflect: true },
      required: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.name = 'Name';
    this.type = 'text';
    this.placeholder = 'Placeholder';
    this.idscss = 'idscss';
  }
  
  render() {
    return html`
      <span class="input-component-text"><span>${this.name}</span></span>
      <input
        type="${this.type}"
        placeholder="${this.placeholder}"
        id="${this.idscss}"
        class="form-control input-component-textinput input"
        ?required=${this.required}
      />

      ${this._feedbackTemplate()}
    `;
  }

  _feedbackTemplate() {
    let validFeedbackTemplate = '';
    let invalidFeedbackTemplate = '';
    if (this.validFeedbackMessage) {
      validFeedbackTemplate = html`
        <div class="valid-feedback">${this.validFeedbackMessage}</div>
      `;
    }
    if (this.invalidFeedbackMessage) {
      invalidFeedbackTemplate = html`
        <div class="was-validated invalid-feedback">${this.invalidFeedbackMessage}</div>
      `;
    }

    return html`${validFeedbackTemplate}${invalidFeedbackTemplate}`;
  }
}
  
customElements.define('input-component', InputApp);
