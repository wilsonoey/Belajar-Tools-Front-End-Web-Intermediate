import LitShadowDom from '../../../base/LitShadowDom';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class GallerySubHeadingApp extends LitShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`${msg(`Explore some of the stories created using our application`)}`;
  }
}

customElements.define('gallerysubheading-component', GallerySubHeadingApp);
