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