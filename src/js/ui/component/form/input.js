import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';

class InputApp extends LitWithoutShadowDom {
  static get properties() {
    return {
      name: { type: String },
      type: { type: String },
      placeholder: { type: String },
      idscss: { type: String },
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
        class="input-component-textinput input"
      />
    `;
  }
}
  
customElements.define('input-component', InputApp);



// import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
// import { html, nothing } from 'lit';

// class InputApp extends LitWithoutShadowDom {
//   static get properties() {
//     return {
//       name: { type: String, reflect: true },
//       type: { type: String, reflect: true },
//       placeholder: { type: String, reflect: true },
//       idscss: { type: String, reflect: true },
//       value: { type: String, reflect: true },
//       required: { type: Boolean, reflect: true },
//       validFeedbackMessage: { type: String, reflect: true },
//       invalidFeedbackMessage: { type: String, reflect: true },
//     };
//   }

//   constructor() {
//     super();
//     this.name = 'Name';
//     this.type = 'text';
//     this.placeholder = 'Placeholder';
//     this.idscss = 'idscss';
//     this.required = false;
//   }
  
//   render() {
//     return html`
//       <span class="input-component-text"><span>${this.name}</span></span>
//       <input
//         type="${this.type}"
//         placeholder="${this.placeholder}"
//         id="${this.idscss || nothing}"
//         class="input-component-textinput input"
//         value=${this.value || nothing}
//         ?required=${this.required}
//         @input=${(e) => (this.value = e.target.value)}
//       />
//       ${this._validFeedbackTemplate()}
//       <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
//     `;
//   }

//   _validFeedbackTemplate() {
//     if (this.validFeedbackMessage) {
//       return html` <div class="valid-feedback">${this.validFeedbackMessage}</div> `;
//     }

//     return html``;
//   }
// }
  
// customElements.define('input-component', InputApp);