import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';

class NotfoundApp extends LitWithoutShadowDom {
  static get properties() {
    return {
      link: { type: String }
    };
  }

  constructor() {
    super();
    this.link = '/';
  }
  
  render() {
    return html`
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div class="not-found-container1">
        <h1 class="not-found-text1">404</h1>
      </div>
      <div class="not-found-container2">
        <h2 class="not-found-text2">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h2>
      </div>
      <button class="btn return-button button" @click=${() => this._goToDashboard()}>Back</button>
    `;
  }

  _goToDashboard() {
    window.location.href = '/';
    document.querySelector;
  }
}
  
customElements.define('notfound-component', NotfoundApp);