import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import Utils from '../../../utils/utils';
import CheckUserAuth from '../../pages/checkuserauth';

class HomeLinksApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  _userLogOut(event) {
    event.preventDefault();
    Utils.destroyUserToken(Config.USER_TOKEN_KEY);
    Utils.destroyName(Config.NAME);
    CheckUserAuth.checkLoginState();
  }

  render() {
    return html`
      <a href="/"> <span class="home-nav11">${msg(`Dashboard`)}</span> </a>
      <a href="addpage.html"> <span class="home-nav21">${msg(`Add Story`)}</span> </a>
      <a href="login.html" class="login-appbar">
        <span class="home-nav21">${msg(`Login`)}</span>
      </a>
      <a href="register.html" class="register-appbar">
        <span class="home-nav21">${msg(`Register`)}</span>
      </a>
      <a href="/" class="logout-appbar" @click=${this._userLogOut}>
        <span class="home-nav21">${msg(`Logout`)}</span>
      </a>
      <locale-picker class="dropdown"></locale-picker>
    `;
  }
}

customElements.define('homelinks-component', HomeLinksApp);
