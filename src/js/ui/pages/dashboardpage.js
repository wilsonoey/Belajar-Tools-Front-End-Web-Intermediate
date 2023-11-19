import '../../../sass/index.scss';
import '../../../sass/style.scss';
import { showFormattedDateTime } from '../../utils/datetime';
import header from '../component/container/linksappbar';
import footer from '../component/container/footer';
import listitem from '../component/list/listitem';
import homelinks from '../component/container/homelinks';
import loading from '../component/loading/loading';
import CheckUserAuth from './checkuserauth';
import Stories from '../../network/stories';

const DashboardPage = {
  async init() {
    CheckUserAuth.checkLoginState();
    await this._initialData();
    this._bindDropdownEvent();
    await this._showLoading();
  },

  async _initialData() {
    try {
      const response = await Stories.getAllStories();
      const responseRecords = response.data;
      this._listStory = responseRecords.listStory;
      this._populateStoryRecordToCard(this._listStory);
    } catch (error) {
      console.error(error);
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

export default DashboardPage;
