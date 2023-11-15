import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import Socmed from '../icon/socmed';

class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super();
  }
  
  render() {
    return html`
      <footer class="home-footer1">
        <div class="home-container2">
          <span class="home-logo2">STORYAPP</span>
          <nav class="home-nav1">
            <a href="/"> <span class="home-nav12">DashboardPage</span> </a>
            <a href="add-page.html"> <span class="home-nav22">AddPage</span> </a>
          </nav>
        </div>
        <div class="home-separator"></div>
        <div class="home-container3">
          <span class="home-text">
            © 2023 myCompany, All Rights Reserved.
          </span>
          <socmed-component class="home-icon-group1"></socmed-component>
        </div>
      </footer>
    `;
  }
}
  
customElements.define('footer-component', FooterApp);
