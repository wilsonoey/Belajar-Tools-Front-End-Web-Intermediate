import LitShadowDom from '../../../base/LitShadowDom';
import { html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class HomeBannerApp extends LitShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  
  static styles = css`
    h1 {
      margin: 0;
      padding: 0;
    }

    .home-banner-heading {
      color: #FFFFFF;
      text-align: center;
      font-family: "Raleway";
      line-height: 1.6;
    }

    .heading2 {
      font-size: 2.5rem;
    }

    .home-banner-sub-heading {
      color: #FFFFFF;
      max-width: 1400px;
      text-align: center;
      line-height: 1.6;
    }
    
    .home-banner-button {
      color: #291477ff;
      transition: 0.3s;
      font-weight: 700;
      padding-top: 1.5rem;
      border-width: 0px;
      padding-left: 3rem;
      border-radius: 45px;
      padding-right: 3rem;
      padding-bottom: 1.5rem;
      background-color: #FFFFFF;
    }

    .home-banner-button:hover {
      border-color: rgba(97, 85, 141, 0.9);
      background-color: rgba(97, 85, 141, 0.9);
      color: #FFFFFF;
    }

    @media (max-width: 767px) {
      .heading2 {
        font-size: 1.8rem;
      }

      .home-banner-sub-heading {
        padding-left: 16px;
        padding-right: 16px;
      }
    }

    @media (max-width: 991px) {
      .home-banner-sub-heading {
        max-width: 100%;
      }
    }
  `;

  render() {
    return html`
      <style>
        ${HomeBannerApp.styles}
      </style>
      <h1 class="home-banner-heading heading2">
        ${msg(`Introducing our Story Application`)}
      </h1>
      <span class="home-banner-sub-heading">
        ${msg(`Easily create and organize your stories with our user-friendly application.`)}
      </span>
      <button class="home-banner-button button">${msg(`Learn More`)}</button>
    `;
  }
}
  
customElements.define('homebanner-component', HomeBannerApp);