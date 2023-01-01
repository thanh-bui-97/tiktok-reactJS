// libraries:
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
// components
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Container/Sidebar';
import Authen from '~/components/Authen';
import MainContainer from '~/layouts/components/Container/MainContainer';
// CSS module
import style from './DefaultLayout.module.scss';
const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  const [showAuthen, setShowAuthen] = useState(false);
  const [triggerClasses, setTriggerClasses] = useState('remove-modal');

  useEffect(() => {
    // prevent scroll global behavior when open modal
    document.body.classList.toggle(cx('modal-open'), showAuthen);
  }, [showAuthen]);

  const handleShowAuthen = useCallback(() => {
    setShowAuthen(true);
    setTriggerClasses('show-modal');
  }, []);

  const handleHideAuthen = useCallback(() => {
    setShowAuthen(false);
    setTriggerClasses('hide-modal');

    // remover component
    setTimeout(() => {
      setTriggerClasses('remove-modal');
    }, 500);
  }, []);

  return (
    <section className={cx('wrapper')}>
      <Header onShowAuthen={handleShowAuthen} />
      <section className={cx('container')}>
        <Sidebar onShowAuthen={handleShowAuthen} />
        <MainContainer children={children} />
      </section>
      <Authen onHideAuthen={handleHideAuthen} triggerClasses={triggerClasses} />
    </section>
  );
}

// set rules for props of components
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
