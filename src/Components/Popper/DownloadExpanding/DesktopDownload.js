import PropTypes from 'prop-types';
import { memo } from 'react';
import classNames from 'classnames/bind';
import { Button, Modal } from 'antd';
// components
import Images from '~/components/Images';
// SCSS module
import style from './DownloadExpanding.module.scss';
const cx = classNames.bind(style);

function DesktopDownload({ isOpenDeskDown, onCloseDeskDown }) {
  function handleClose() {
    onCloseDeskDown();
  }

  return (
    <Modal
      maskStyle={{ backgroundColor: 'transparent' }} //Style for overlay
      width={350}
      style={{ top: 0, right: -390 }}
      open={isOpenDeskDown}
      maskClosable //Clicks on outside of modal to close + "must have onCancel"
      onCancel={handleClose} //event close
      footer={[
        <Button key="dowload" type="primary">
          Cài đặt
        </Button>,
        <Button key="cancel" onClick={handleClose} style={{ color: '#1677ff', width: 75 }}>
          Hủy
        </Button>,
      ]}
    >
      <section className={cx('desktop-download-container')}>
        <h4 className={cx('desktop-title')}>Cài đặt ứng dụng?</h4>
        <div className={cx('desktop-body')}>
          <Images
            alt="logo"
            src="https://sf16-sg.tiktokcdn.com/obj/eden-sg/uvkuhyieh7lpqpbj/pwa/128x128.png"
            className={cx('desktop-logo')}
          />
          <div className={cx('desktop-contents')}>
            <h4 className={cx('desktop-label')}>TikTok</h4>
            <p className={cx('desktop-link')}>www.tiktok.com</p>
          </div>
        </div>
      </section>
    </Modal>
  );
}

// set rules for props of component
DesktopDownload.propTypes = {
  isOpenDeskDown: PropTypes.bool.isRequired,
  onCloseDeskDown: PropTypes.func.isRequired,
};

export default memo(DesktopDownload);
