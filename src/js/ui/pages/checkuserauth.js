import Utils from '../../utils/utils';
import Config from '../../config/config';

const CheckUserAuth = {
  excludeRedirectPage: ['login.html', 'register.html'],

  checkLoginState() {
    const userToken = Utils.getUserToken(Config.USER_TOKEN_KEY);
    const isUserSignedIn = Boolean(userToken);
    const isUserOnAuthPage = this._isUserOnAuthPage(this.excludeRedirectPage);
    const loginlabel = document.querySelector('.login-appbar');
    const registerlabel = document.querySelector('.register-appbar');
    const logoutlabel = document.querySelector('.logout-appbar');

    if (isUserSignedIn) {
      loginlabel.classList.add('hidden');
      registerlabel.classList.add('hidden');
      logoutlabel.classList.remove('hidden');
      if (isUserOnAuthPage) {
        window.location.href = '/dashboard.html';
      } else {
        return isUserSignedIn;
      }
    } else {
      if (!isUserOnAuthPage) {
        window.location.href = '/login.html';
      }
    }
  },

  _isUserOnAuthPage(pages) {
    const filteredPages = pages.filter((item) => window.location.pathname.endsWith(item));
    return Boolean(filteredPages.length);
  },
};

export default CheckUserAuth;
