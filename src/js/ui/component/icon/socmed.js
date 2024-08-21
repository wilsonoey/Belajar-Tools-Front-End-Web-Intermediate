import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';

class SocmedLogoApp extends LitWithoutShadowDom {
  constructor() {
    super();
  }
  
  render() {
    return html`
      <i class="bi bi-instagram home-icon10"></i>
      <i class="bi bi-facebook home-icon12"></i>
    `;
  }
}
  
customElements.define('socmed-component', SocmedLogoApp);