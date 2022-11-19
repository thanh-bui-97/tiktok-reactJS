// library CSS:
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// components
import Header from '~/layouts/components/Header';
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

// set rules for props of components
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
