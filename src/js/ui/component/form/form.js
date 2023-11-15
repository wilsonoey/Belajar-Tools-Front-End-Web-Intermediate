import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import input from './input';
import inputimage from './input-image';

class FormApp extends LitWithoutShadowDom {
  constructor() {
    super();
  }
  
  render() {
    return html`
      <h1 class="form-input-text"><span>Add Story</span></h1>
      <form class="was-validated form-input-form" novalidate>
        <inputimage-component
          class="input-component-container input-component-root-class-name20"
          inputId="validationCustomEvidence"
          invalidFeedbackMessage="Please upload a photo"
          required
        ></inputimage-component>
        <input-component
          class="input-component-container input-component-root-class-name20"
          name="Name"
          type="text"
          placeholder="Ex: wilson"
          idscss="name-input"
          invalidFeedbackMessage="Please complete this field"
          required
        ></input-component>
        <input-component
          class="input-component-container input-component-root-class-name20"
          name="Description"
          type="text"
          placeholder="Ex: wilson is good"
          idscss="description-input"
          invalidFeedbackMessage="Please complete this field"
          required
        ></input-component>
        <button class="btn form-input-hero-button1">
          <span>Submit</span>
        </button>
      </form>
    `;
  }
}
  
customElements.define('form-component', FormApp);