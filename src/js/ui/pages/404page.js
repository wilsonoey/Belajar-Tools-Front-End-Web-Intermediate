import '../../../sass/style.scss';
import '../../../sass/404.scss';
import '../component/notfound/notfound';
import '../component/loading/loading';

const Page404 = {
  async init() {
    await this._showLoading();
  },

  async _showLoading() {
    await setTimeout(() => {
      const loadingComponent = document.querySelector('loading-component');
      loadingComponent.classList.add('hidden');
    }, 3000);
  },
};

export default Page404;
