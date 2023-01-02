// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
// components
import Button from '~/components/Button';
import { UpToLineIcon } from '~/components/Icons';
import DownloadExpanding from '~/components/Popper/DownloadExpanding';
// SCSS module
import style from './MainContainer.module.scss';
const cx = classNames.bind(style);

function MainContainer({ children }) {
  const floatBtnGroupRef = useRef('');
  const [showScrollTopBtn, setShowScrollTopBtn] = useState('');
  const [downloadExpanding, setDownloadExpanding] = useState(false);
  const [triggerClasses, setTriggerClasses] = useState('');

  // float group buttons effects
  useEffect(() => {
    document.body.onscroll = () => {
      // document.body.scrollTop ; // For Safari
      // document.documentElement.scrollTop ;  // For Chrome, Firefox, IE and Opera
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setShowScrollTopBtn('show-uptop-btn');
      } else {
        setTimeout(() => {
          setShowScrollTopBtn('hide-uptop-btn');
        }, 400);
      }
    };
  }, []);

  // Expands the App Download
  function handleOpenDownloadExpanding() {
    setDownloadExpanding(true);
    setTriggerClasses('zoom-out');
  }
  function handleCloseDownloadExpanding() {
    setDownloadExpanding(false);
    setTriggerClasses('zoom-in');
  }

  // Scroll back to Top
  function handleBackTop() {
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 300);
  }

  return (
    <main className={cx('warpper')}>
      {children}
      <div
        ref={floatBtnGroupRef}
        className={cx('float-btn-group', {
          [showScrollTopBtn]: true,
        })}
      >
        <div>
          <Button
            text
            router
            medium
            className={cx('download-btn', {
              [triggerClasses]: true,
            })}
            onClick={handleOpenDownloadExpanding}
          >
            Get app
          </Button>
          <DownloadExpanding
            onCloseDownloadExpanding={handleCloseDownloadExpanding}
            onOpenDownloadExpanding={downloadExpanding}
          />
        </div>
        <Button primary iconOnly className={cx('back-top-btn')} onClick={handleBackTop}>
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
