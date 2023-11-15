import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';

class HeaderApp extends LitWithoutShadowDom {
  constructor() {
    super();
  }
  
  render() {
    return html`
      <a href="/"> <span>DashboardPage</span> </a>
      <a href="add-page.html"> <span class="home-nav2">AddPage</span> </a>
    `;
  }
}
  
customElements.define('links-appbar', HeaderApp);