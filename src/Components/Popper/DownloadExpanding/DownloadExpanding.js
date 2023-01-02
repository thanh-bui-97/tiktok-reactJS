// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
// components
import { ComputerIcon, MobilePhoneIcon, XmarkIcon } from '~/components/Icons';
// SCSS module
import style from './DownloadExpanding.module.scss';
const cx = classNames.bind(style);

function defaultFtn() {}
function DownloadExpanding({ onOpenDownloadExpanding = false, onCloseDownloadExpanding = defaultFtn }) {
  const [triggerClasses, setTriggerClasses] = useState('');

  useEffect(() => {
    if (onOpenDownloadExpanding) {
      setTriggerClasses('zoom-in');
    }
  }, [onOpenDownloadExpanding]);

  function handleRemoveClasses() {
    setTriggerClasses('zoom-out');
    onCloseDownloadExpanding();
  }

  return (
    <section
      className={cx('wrapper', {
        [triggerClasses]: true,
      })}
    >
      <div className={cx('dowload--list')}>
        <div className={cx('dowload--item')}>
          <ComputerIcon />
          <span className={cx('title')}>Get TikTok for desktop</span>
        </div>
        <hr className={cx('dowload--hr')} />
        <div className={cx('dowload--item')}>
          <MobilePhoneIcon />
          <span className={cx('title')}>Get TikTok App</span>
        </div>
      </div>
      <span onClick={handleRemoveClasses} className={cx('close-btn')}>
        <XmarkIcon />
      </span>
    </section>
  );
}

// set rules for props of component
DownloadExpanding.propTypes = {
  onOpenDownloadExpanding: PropTypes.bool.isRequired,
  onCloseDownloadExpanding: PropTypes.func.isRequired,
};

export default DownloadExpanding;
