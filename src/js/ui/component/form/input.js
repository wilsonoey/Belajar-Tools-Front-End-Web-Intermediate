import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';

class InputApp extends LitWithoutShadowDom {
  static get properties() {
    return {
      name: { type: String },
      type: { type: String },
      placeholder: { type: String },
      idscss: { type: String },
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
    `;
  }
}
  
customElements.define('input-component', InputApp);
