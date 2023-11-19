import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class HomeLinksApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  
  render() {
    return html`
      <a href="/"> <span class="home-nav11">${msg(`Dashboard`)}</span> </a>
      <a href="addpage.html"> <span class="home-nav21">${msg(`Add Story`)}</span> </a>
      <a href="login.html" class="login-appbar"> <span class="home-nav21">${msg(`Login`)}</span> </a>
      <a href="register.html" class="register-appbar"> <span class="home-nav21">${msg(`Register`)}</span> </a>
      <locale-picker class="dropdown"></locale-picker>
    `;
  }
}
  
customElements.define('homelinks-component', HomeLinksApp);