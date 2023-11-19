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
      <a href="addpage.html"> <span class="home-nav2">${msg(`Add Story`)}</span> </a>
      <a href="login.html" class="login-appbar"> <span class="home-nav2">${msg(`Login`)}</span> </a>
      <a href="register.html" class="register-appbar"> <span class="home-nav2">${msg(`Register`)}</span> </a>
    `;
  }
}
  
customElements.define('links-appbar', HeaderApp);