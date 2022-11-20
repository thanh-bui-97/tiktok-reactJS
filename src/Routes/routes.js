// config router
import config from '~/config';
// Layouts
import { DefaultLayout, HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// Routes cho phép các page public, không cần đăng nhập cũng xem được
const publicRoutes = [
  { path: config.routes.home, component: Home, layout: DefaultLayout },
  { path: config.routes.following, component: Following, layout: DefaultLayout },
  { path: config.routes.profile, component: Profile, layout: DefaultLayout }, //'/@:' là quy ước tìm theo key word, sau ':' là ký tự có thể thay đổi
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: HeaderOnly },
  { path: config.routes.live, component: Live, layout: DefaultLayout },
];

// Routes này chỉ cho phép user đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
