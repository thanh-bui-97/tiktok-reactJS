// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
// components
import Button from '~/components/Button';
import { UpToLineIcon } from '~/components/Icons';
// SCSS module
import style from './MainContainer.module.scss';
const cx = classNames.bind(style);

function MainContainer({ children }) {
  const floatBtnGroupRef = useRef('');

  // float group buttons effects
  useEffect(() => {
    document.body.onscroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);

      if (scrollPosition > 0) {
        floatBtnGroupRef.current.classList.remove(cx('hide-uptop-btn'));
        floatBtnGroupRef.current.classList.add(cx('show-uptop-btn'));
      } else {
        setTimeout(() => {
          floatBtnGroupRef.current.classList.remove(cx('show-uptop-btn'));
          floatBtnGroupRef.current.classList.add(cx('hide-uptop-btn'));
        }, 400);
      }
    };
  }, []);

  return (
    <main className={cx('warpper')}>
      {children}
      <div ref={floatBtnGroupRef} className={cx('float-btn-group')}>
        <Button text router medium className={cx('download-btn')}>
          Get app
        </Button>
        <Button primary iconOnly className={cx('up-to-top-btn')}>
          <UpToLineIcon />
        </Button>
      </div>
    </main>
  );
}

// set rules for props of the component
MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
