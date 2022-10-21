// Layouts
import { HeaderOnly } from '~/Components/Layout';

// Pages
import Home from '~/pages/Home/index.js';
import Following from '~/pages/Following/index.js';
import Profile from '~/pages/Profile/index.js';
import Upload from '~/pages/Upload/index.js';
import Search from '~/pages/Search/index.js';

// Routes cho phép các page public, không cần đăng nhập cũng xem được
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/Profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

// Routes này chỉ cho phép user đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
