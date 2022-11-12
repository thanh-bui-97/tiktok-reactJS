// Layouts
import { DefaultLayout, HeaderOnly } from '~/Components/Layout';

// Pages
import Home from '~/pages/Home/index.js';
import Following from '~/pages/Following/index.js';
import Profile from '~/pages/Profile/index.js';
import Upload from '~/pages/Upload/index.js';
import Search from '~/pages/Search/index.js';

// Routes cho phép các page public, không cần đăng nhập cũng xem được
const publicRoutes = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/following', component: Following, layout: DefaultLayout },
  { path: '/@:name', component: Profile, layout: DefaultLayout }, //'/@:' là quy ước tìm theo key word, sau ':' là ký tự có thể thay đổi
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: HeaderOnly },
];

// Routes này chỉ cho phép user đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
