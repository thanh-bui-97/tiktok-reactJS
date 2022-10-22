// library CSS:
import classNames from 'classnames/bind';

// components
import Header from '~/Components/Layout/components/Header';
import Sidebar from './Sidebar/index.js';

// CSS module
import style from './DefaultLayout.module.scss';

const cx = classNames.bind(style);

// DefaultLayout chứa tất cả layout
function DefaultLayout({ children }) {
  return (
    <main className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('contents')}>{children}</div>
      </div>
    </main>
  );
}

export default DefaultLayout;
