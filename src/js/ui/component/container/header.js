import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class HeaderApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  
  render() {
    return html`
      <a href="/"> <span>${msg(`Dashboard`)}</span> </a>
      <a href="add-page.html"> <span class="home-nav2">${msg(`Add Story`)}</span> </a>
    `;
  }
}
  
customElements.define('links-appbar', HeaderApp);