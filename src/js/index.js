// Import our custom CSS
import '../sass/index.scss';
// Import javascript file as needed
import * as bootstrap from 'bootstrap';
//import dashboard
import HomePage from './ui/pages/homepage';
import AddPage from './ui/pages/addstorypage';
import loginPage from './ui/pages/loginpage';
import registerPage from './ui/pages/registerpage';
import Page404 from './ui/pages/404page';
import dropdown from './ui/component/dropdown/dropdown';
import DashboardPage from './ui/pages/dashboardpage';
import AddPageforGuest from './ui/pages/addstorypageforguest';
import './utils/firebase';

const routes = {
  '/': HomePage,
  '/addpage.html': AddPage,
  '/addpageforguest.html': AddPageforGuest,
  '/login.html': loginPage,
  '/register.html': registerPage,
  '/dashboard.html': DashboardPage,
  '/404.html': Page404,
};

const detectRoute = () => {
  const route = routes[window.location.pathname];
  return route ? route : Page404;
};

const initPages = () => {
  document.querySelector('header');
  document.querySelector('main');
  document.querySelector('footer');
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
