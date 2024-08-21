import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';

class ListItemApp extends LitWithoutShadowDom {
  static get properties() {
    return {
      image: { type: String },
      name: { type: String },
      description: { type: String },
      createdAt: { type: String },
    };
  }

  constructor() {
    super();
    this.image = 'https://images.unsplash.com/photo-1517145598654-91f0bb341394?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTI0NzM3M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400';
    this.name = 'Name';
    this.description = 'Description';
    this.createdAt = 'createdAt';
  }
  
  render() {
    return html`
      <img alt="image" src="${this.image}" class="card-img-top"/>
      <div class="card-body">
        <span class="gallery-card3-text"><span>${this.name}</span></span>
        <span class="gallery-card3-text"><span>${this.description}</span></span>
        <span class="gallery-card3-text"><span>${this.createdAt}</span></span>
      </div>
      
    `;
  }
}
  
customElements.define('listitem-component', ListItemApp);