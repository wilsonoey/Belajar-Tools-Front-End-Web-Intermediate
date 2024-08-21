import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import dropdown from '../dropdown/dropdown';

class NotfoundApp extends LitWithoutShadowDom {
  static get properties() {
    return {
      link: { type: String }
    };
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  
  render() {
    return html`
      <h3>${msg(`OOPS! PAGE NOT FOUND`)}</h3>
      <div class="not-found-container1">
        <h1 class="not-found-text1">404</h1>
      </div>
      <div class="not-found-container2">
        <h2 class="not-found-text2">
          ${msg(`WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND`)}
        </h2>
      </div>
      <locale-picker class="dropdown"></locale-picker>
      <button class="btn return-button button" @click=${() => this._goToDashboard()}>${msg(`Back`)}</button>
    `;
  }

  _goToDashboard() {
    window.location.href = '/';
    document.querySelector;
  }
}
  
customElements.define('notfound-component', NotfoundApp);