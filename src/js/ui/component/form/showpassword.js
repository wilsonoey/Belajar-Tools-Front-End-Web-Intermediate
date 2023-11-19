import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';

class ShowPassword extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <input
        class="form-check-input"
        id="showPassword"
        type="checkbox"
        @click=${() => this._showPassword()}
      />
      <label for="showPassword">Show Password</label>
    `;
  }

  _showPassword() {
    var passwordText = document.getElementById('password-input');
    if (passwordText.type === 'password') {
      passwordText.type = 'text';
    } else {
      passwordText.type = 'password';
    }
  }
}

customElements.define('show-password', ShowPassword);
