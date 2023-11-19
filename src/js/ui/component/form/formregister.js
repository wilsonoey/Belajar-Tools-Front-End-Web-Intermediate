import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import input from './input';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import showpassword from './showpassword';

class FormRegisterApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  
  render() {
    return html`
      <h1 class="form-input-text"><span>${msg(`Register StoryApp`)}</span></h1>
      <form class="form-input-form" novalidate>
        <input-component
          class="input-component-container input-component-root-class-name20"
          name="${msg(`Name`)}"
          type="text"
          placeholder="${msg(`Example: Wilson`)}"
          idscss="name-input"
          invalidFeedbackMessage="${msg(`Please complete this field`)}"
          required
        ></input-component>
        <input-component
          class="input-component-container input-component-root-class-name20"
          name="${msg(`Email`)}"
          type="text"
          placeholder="${msg(`Example: tester@test.tes`)}"
          idscss="email-input"
          invalidFeedbackMessage="${msg(`Please complete this field`)}"
          required
        ></input-component>
        <input-component
          class="input-component-container input-component-root-class-name20"
          name="${msg(`Password`)}"
          type="password"
          placeholder="${msg(`Example: Password0`)}"
          idscss="password-input"
          invalidFeedbackMessage="${msg(`Please complete this field`)}"
          required
        ></input-component>
        <show-password class="input-component-root-class-name20"></show-password>
        <button class="btn form-input-hero-button1">
          <span>${msg(`Submit`)}</span>
        </button>
      </form>
    `;
  }
}
  
customElements.define('formregister-component', FormRegisterApp);