// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { memo, useCallback, useEffect, useState } from 'react';
// components
import { ComputerIcon, MobilePhoneIcon, XmarkIcon } from '~/components/Icons';
import DownloadModal from '~/components/Popper/DownloadModal';
import DownloadAlert from '~/components/Popper/DownloadAlert';
// SCSS module
import style from './DownloadExpanding.module.scss';
const cx = classNames.bind(style);

function defaultFtn() {}
function DownloadExpanding({ isOpenDownExpand = false, onCloseDownExpand = defaultFtn }) {
  const [triggerClasses, setTriggerClasses] = useState('');
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showDownloadAlert, setShowDownloadAlert] = useState(false);

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
  function handleOpenDownloadModal() {
    setShowDownloadModal(true);
  }
  const handleCloseDownloadModal = useCallback(() => {
    setShowDownloadModal(false);
  }, []);

  // Handle open/close Download for Mobile box
  function handleOpenDownloadAlert() {
    setShowDownloadAlert(true);
  }
  const handleCloseDownloadAlert = useCallback(() => {
    setShowDownloadAlert(false);
  }, []);

  return (
    <section
      className={cx('wrapper', {
        [triggerClasses]: true,
      })}
    >
      <div className={cx('dowload--list')}>
        {/* Download for desktop */}
        <div onClick={handleOpenDownloadModal} className={cx('dowload--item')}>
          <ComputerIcon />
          <span className={cx('title')}>Get TikTok for desktop</span>
        </div>
        <DownloadModal isOpenDownloadModal={showDownloadModal} onCloseDownloadModal={handleCloseDownloadModal} />

        {/* hr */}
        <hr className={cx('dowload--hr')} />

        {/* Download for mobie phone */}
        <div onClick={handleOpenDownloadAlert} className={cx('dowload--item')}>
          <MobilePhoneIcon />
          <span className={cx('title')}>Get TikTok App</span>
        </div>
        <DownloadAlert isOpenDownloadAlert={showDownloadAlert} onCloseDownloadAlert={handleCloseDownloadAlert} />
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
