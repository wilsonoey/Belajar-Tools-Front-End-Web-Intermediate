import LitShadowDom from '../../../base/LitShadowDom';
import { html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class LoadingApp extends LitShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  static styles = css`
    .loading {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 50);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .loading-indicator {
      display: inline-block;
      width: 50px;
      height: 50px;
      border: 3px solid rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      border-top-color: #000;
      margin-right: 20px;
      animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  render() {
    return html`
      <style>
        ${LoadingApp.styles}
      </style>
      <div class="loading">
        <div class="loading-indicator"></div>
        <div>${msg(`Loading`)}</div>
      </div>
    `;
  }
}

customElements.define('loading-component', LoadingApp);
