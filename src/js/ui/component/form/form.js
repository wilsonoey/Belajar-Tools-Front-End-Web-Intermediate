import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import input from './input';
import inputimage from './input-image';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class FormApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  
  render() {
    return html`
      <h1 class="form-input-text"><span>${msg(`Add Story`)}</span></h1>
      <form class="form-input-form" novalidate>
        <inputimage-component
          class="input-component-container input-component-root-class-name20"
          inputId="validationCustomEvidence"
          invalidFeedbackMessage="${msg(`Please upload a photo`)}"
          required
        ></inputimage-component>
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
          name="${msg(`Description`)}"
          type="text"
          placeholder="${msg(`Example: Wilson is good`)}"
          idscss="description-input"
          invalidFeedbackMessage="${msg(`Please complete this field`)}"
          required
        ></input-component>
        <button class="btn form-input-hero-button1">
          <span>${msg(`Submit`)}</span>
        </button>
      </form>
    `;
  }
}
  
customElements.define('form-component', FormApp);