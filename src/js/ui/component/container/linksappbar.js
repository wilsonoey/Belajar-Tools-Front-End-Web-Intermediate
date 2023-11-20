import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import Utils from '../../../utils/utils';
import CheckUserAuth from '../../pages/checkuserauth';
import Config from '../../../config/config';

class HeaderApp extends LitWithoutShadowDom {
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
      <a href="/"> <span>${msg(`Home`)}</span> </a>
      <a href="addpage.html"> <span class="home-nav2">${msg(`Add Story`)}</span> </a>
      <a href="login.html" class="login-appbar"> <span class="home-nav2">${msg(`Login`)}</span> </a>
      <a href="register.html" class="register-appbar">
        <span class="home-nav2">${msg(`Register`)}</span>
      </a>
      <a href="/" class="logout-appbar" @click=${this._userLogOut}>
        <span class="home-nav2">${msg(`Logout`)}</span>
      </a>
    `;
  }
}

customElements.define('links-appbar', HeaderApp);
