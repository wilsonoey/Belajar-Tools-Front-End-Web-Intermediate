import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class AlertApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  
  render() {
    return html`
      ${msg(`Data added successfully`)}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
  }
}
  
customElements.define('alert-component', AlertApp);
