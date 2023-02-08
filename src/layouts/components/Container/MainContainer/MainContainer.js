// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useCallback, useEffect, useRef, useState } from 'react';
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
  function handleFloatGroupButton() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setShowScrollTopBtn('show-uptop-btn');
    } else {
      setTimeout(() => {
        setShowScrollTopBtn('hide-uptop-btn');
      }, 400);
    }
  }
  useEffect(() => {
    // float group buttons effects
    window.addEventListener('scroll', handleFloatGroupButton);
    return () => window.removeEventListener('scroll', handleFloatGroupButton);
  }, []);

  // Handle open/close the Download expanding
  function handleOpenDownExpand() {
    setDownloadExpanding(true);
    setTriggerClasses('zoom-out');
  }
  const handleCloseDownExpand = useCallback(() => {
    setDownloadExpanding(false);
    setTriggerClasses('zoom-in');
  }, []);

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

      {/* float group button */}
      <div
        ref={floatBtnGroupRef}
        className={cx('float-btn-group', {
          [showScrollTopBtn]: true,
        })}
      >
        {/* Download button */}
        <div>
          <Button
            text
            router
            medium
            className={cx('download-btn', {
              [triggerClasses]: true,
            })}
            onClick={handleOpenDownExpand}
          >
            Get app
          </Button>
          {/* Expanding */}
          <DownloadExpanding onCloseDownExpand={handleCloseDownExpand} isOpenDownExpand={downloadExpanding} />
        </div>
        {/* Back top button */}
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
