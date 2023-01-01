// config router
import config from '~/config';
// Layouts
import { DefaultLayout, HeaderOnly, LandingPage } from '~/layouts';
// pages
import {
  AboutPage,
  HomePage,
  FollowingPage,
  LivePage,
  TagPage,
  MusicPage,
  ProfilePage,
  UploadPage,
  SearchPage,
} from '~/pages';

// Routes cho phép các page public, không cần đăng nhập cũng xem được
const publicRoutes = [
  { path: config.routes.homePage, component: HomePage, layout: DefaultLayout },
  { path: config.routes.followingPage, component: FollowingPage, layout: DefaultLayout },
  { path: config.routes.profilePage, component: ProfilePage, layout: DefaultLayout }, //'/@:' là quy ước tìm theo key word, sau ':' là ký tự có thể thay đổi
  { path: config.routes.uploadPage, component: UploadPage, layout: HeaderOnly },
  { path: config.routes.searchPage, component: SearchPage, layout: HeaderOnly },
  { path: config.routes.livePage, component: LivePage, layout: DefaultLayout },
  { path: config.routes.tagPage, component: TagPage, layout: DefaultLayout },
  { path: config.routes.musicPage, component: MusicPage, layout: DefaultLayout },
  { path: config.routes.aboutPage, component: AboutPage, layout: LandingPage },
];

// Routes này chỉ cho phép user đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
