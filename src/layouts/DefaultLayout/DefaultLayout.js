// library CSS:
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// components
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Container/Sidebar';
import Authen from '~/components/Authen';
// CSS module
import style from './DefaultLayout.module.scss';
const cx = classNames.bind(style);

// Default Layout
function DefaultLayout({ children }) {
  const [showAuthen, setShowAuthen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle(cx('modal-open'), showAuthen);
  }, [showAuthen]);

  function _onShowAuthen(isShowAuthen) {
    console.log(isShowAuthen);
    setShowAuthen(isShowAuthen);
  }
  return (
    <main className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar _onShowAuthen={_onShowAuthen} />
        <div className={cx('contents')}>{children}</div>
      </div>
      {showAuthen && <Authen />}
    </main>
  );
}

// set rules for props of components
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
