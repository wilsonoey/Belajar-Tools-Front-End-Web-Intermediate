import '../../../sass/index.scss';
import '../../../sass/style.scss';
import { showFormattedDateTime } from '../../utils/datetime';
import header from '../component/container/linksappbar';
import footer from '../component/container/footer';
import listitem from '../component/list/listitem';
import homelinks from '../component/container/homelinks';
import homebanner from '../component/container/homebanner';
import gallery from '../component/container/gallery';
import galleryubheading from '../component/container/gallerysubheading';
import loading from '../component/loading/loading';
import Utils from '../../utils/utils';
import Config from '../../config/config';

const HomePage = {
  async init() {
    await this._initialData();
    this._bindDropdownEvent();
    await this._showLoading();
  },

  async _initialData() {
    const fetchStory = await fetch('/data/data.json');
    const responseStory = await fetchStory.json();
    this._myStory = responseStory.listStory;
    this._populateStoryRecordToCard(this._myStory);
    const userToken = Utils.getUserToken(Config.USER_TOKEN_KEY);
    const isUserSignedIn = Boolean(userToken);
    const loginlabel = document.querySelector('.login-appbar');
    const registerlabel = document.querySelector('.register-appbar');
    const logoutlabel = document.querySelector('.logout-appbar');
    if (isUserSignedIn) {
      loginlabel.classList.add('hidden');
      registerlabel.classList.add('hidden');
      logoutlabel.classList.remove('hidden');
    } else {
      loginlabel.classList.remove('hidden');
      registerlabel.classList.remove('hidden');
      logoutlabel.classList.add('hidden');
    }
  },

  async _showLoading() {
    await setTimeout(() => {
      const loadingComponent = document.querySelector('loading-component');
      loadingComponent.classList.add('hidden');
    }, 3000);
  },

  _bindDropdownEvent() {
    const dropdownbtn = document.querySelector('#dropdown-primary');
    dropdownbtn.addEventListener('click', () => {
      this._updateTimezone();
    });
  },

  _updateTimezone() {
    const dropdownbtn = document.querySelector('#dropdown-primary');
    let timezonename;
    if (dropdownbtn.innerText === 'Indonesia') {
      timezonename = 'id-ID';
    } else if (dropdownbtn.innerText === 'English') {
      timezonename = 'en';
    } else if (dropdownbtn.innerText === '中国') {
      // https://www.rfc-editor.org/bcp/bcp47.txt
      timezonename = 'zh-Hans';
    }
    const listStory = this._myStory;
    const recordBodyCard = document.querySelector('.home-container1');
    recordBodyCard.innerHTML = '';
    if (listStory.length <= 0) {
      recordBodyCard.innerHTML = this._templateEmptyBodyCard();
      return;
    }
    listStory.forEach((item, idx) => {
      recordBodyCard.innerHTML += this._templateBodyCard(idx, listStory[idx], timezonename);
    });
  },

  _populateStoryRecordToCard(listStory = null) {
    if (!(typeof listStory === 'object')) {
      throw new Error(`Parameter listStory should be an object. The value is ${listStory}`);
    }
    if (!Array.isArray(listStory)) {
      throw new Error(`Parameter listStory should be an array. The value is ${listStory}`);
    }
    const dropdownbtn = document.querySelector('#dropdown-primary');
    let timezonename;
    if (dropdownbtn.innerText === 'Indonesia') {
      timezonename = 'id-ID';
    } else if (dropdownbtn.innerText === 'English') {
      timezonename = 'en';
    }
    const recordBodyCard = document.querySelector('.home-container1');
    recordBodyCard.innerHTML = '';
    if (listStory.length <= 0) {
      recordBodyCard.innerHTML = this._templateEmptyBodyCard();
      return;
    }
    listStory.forEach((item, idx) => {
      recordBodyCard.innerHTML += this._templateBodyCard(idx, listStory[idx], timezonename);
    });
  },

  _templateBodyCard(index, storyRecord, timezonename) {
    const date = showFormattedDateTime(timezonename, storyRecord.createdAt);
    return `
      <listitem-component 
        class="card m-3 gallery-card3-gallery-card"
        image="${storyRecord.photoUrl}"
        name="${storyRecord.name}"
        description="${storyRecord.description}"
        createdAt="${date}"
      >
      </listitem-component>
    `;
  },

  _templateEmptyBodyCard() {
    return `
      <div class="text-center">Tidak ada list cerita</div>
    `;
  },
};

export default HomePage;
