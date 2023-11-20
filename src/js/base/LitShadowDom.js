import { LitElement } from 'lit';

class LitShadowDom extends LitElement {
  createRenderRoot() {
    return this.attachShadow({ mode: 'open' });
  }
}

export default LitShadowDom;
