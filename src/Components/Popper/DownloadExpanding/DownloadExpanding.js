// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { memo, useCallback, useEffect, useState } from 'react';
// components
import { ComputerIcon, MobilePhoneIcon, XmarkIcon } from '~/components/Icons';
import DesktopDownload from './DesktopDownload';
import MobiDownload from './MobiDownload';
// SCSS module
import style from './DownloadExpanding.module.scss';
const cx = classNames.bind(style);

function defaultFtn() {}
function DownloadExpanding({ isOpenDownExpand = false, onCloseDownExpand = defaultFtn }) {
  const [triggerClasses, setTriggerClasses] = useState('');
  const [showDesktopDownload, setShowDesktopDownload] = useState(false);
  const [showMobiDownload, setShowMobiDownload] = useState(false);

  // Handle open/close the Download Expanding
  useEffect(() => {
    if (isOpenDownExpand) {
      setTriggerClasses('zoom-in');
    }
  }, [isOpenDownExpand]);

  function handleRemoveClasses() {
    setTriggerClasses('zoom-out');
    onCloseDownExpand();
  }

  // Handle open/close Download for desktop box
  function handleOpenDeskDown() {
    setShowDesktopDownload(true);
  }
  const handleCloseDeskDown = useCallback(() => {
    setShowDesktopDownload(false);
  }, []);

  // Handle open/close Download for Mobile box
  function handleOpenMobiDown() {
    setShowMobiDownload(true);
  }
  const handleCloseMobiDown = useCallback(() => {
    setShowMobiDownload(false);
  }, []);

  return (
    <section
      className={cx('wrapper', {
        [triggerClasses]: true,
      })}
    >
      <div className={cx('dowload--list')}>
        {/* Download for desktop */}
        <div onClick={handleOpenDeskDown} className={cx('dowload--item')}>
          <ComputerIcon />
          <span className={cx('title')}>Get TikTok for desktop</span>
        </div>
        <DesktopDownload isOpenDeskDown={showDesktopDownload} onCloseDeskDown={handleCloseDeskDown} />

        {/* hr */}
        <hr className={cx('dowload--hr')} />

        {/* Download for mobie phone */}
        <div onClick={handleOpenMobiDown} className={cx('dowload--item')}>
          <MobilePhoneIcon />
          <span className={cx('title')}>Get TikTok App</span>
        </div>
        <MobiDownload isOpenMobiDown={showMobiDownload} onCloseMobiDown={handleCloseMobiDown} />
      </div>
      <span onClick={handleRemoveClasses} className={cx('close-btn')}>
        <XmarkIcon />
      </span>
    </section>
  );
}

// set rules for props of component
DownloadExpanding.propTypes = {
  isOpenDownExpand: PropTypes.bool.isRequired,
  onCloseDownExpand: PropTypes.func.isRequired,
};

export default memo(DownloadExpanding);
