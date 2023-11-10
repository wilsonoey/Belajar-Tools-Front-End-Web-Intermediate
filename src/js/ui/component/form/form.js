import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import input from './input';

class FormApp extends LitWithoutShadowDom {
  constructor() {
    super();
  }
  
  render() {
    return html`
      <h1 class="form-input-text"><span>Add Story</span></h1>
      <form class="form-input-form">
        <input-component
          class="input-component-container input-component-root-class-name20"
          name="Name"
          type="text"
          placeholder="Ex: wilson"
          idscss="name-input"
        ></input-component>
        <input-component
          class="input-component-container input-component-root-class-name20"
          name="Description"
          type="text"
          placeholder="Ex: wilson is good"
          idscss="description-input"
        ></input-component>
        <button class="form-input-hero-button1 button">
          <span>Submit</span>
        </button>
      </form>
    `;
  }
}
  
customElements.define('form-component', FormApp);