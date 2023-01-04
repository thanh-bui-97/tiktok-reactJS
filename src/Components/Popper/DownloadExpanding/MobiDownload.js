// libraries
import PropTypes from 'prop-types';
import { memo } from 'react';
import classNames from 'classnames/bind';
import { Modal } from 'antd';
// components
import Images from '~/components/Images';
import { XmarkIcon } from '~/components/Icons';
// SCSS module
import style from './DownloadExpanding.module.scss';
const cx = classNames.bind(style);

function MobiDownload({ isOpenMobiDown, onCloseMobiDown }) {
  function handleClose() {
    onCloseMobiDown();
  }

  return (
    <Modal
      centered //position center
      open={isOpenMobiDown} //isOpen
      maskClosable //Clicks on outside of modal to close + "must have onCancel"
      onCancel={handleClose} //event close
      closable={false} //Click Xmarks btn or Cancel btn
      width={400}
      bodyStyle={{ padding: 0, margin: 0 }}
      footer={null}
    >
      <section className={cx('mobi--download__container')}>
        <div className={cx('mobi--header')}>
          <h2 className={cx('mobi--title')}>Get the TikTok app</h2>
          <span onClick={handleClose} className={cx('mobi--close')}>
            <XmarkIcon />
          </span>
        </div>
        <section className={cx('mobi--body')}>
          {/* QR code downloading */}
          <div className={cx('QRcode')}>
            <p className={cx('QRcode--label')}>Scan QR code to download TikTok</p>
            <Images
              src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png"
              alt="QRcode"
              className={cx('QRcode--img')}
            />
          </div>

          {/* Socical app downloading */}
          <div className={cx('social--app')}>
            <p className={cx('app--label')}>Download from app stores</p>
            <div className={cx('app--img__group')}>
              <Images
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/512px-Get_it_from_Microsoft_Badge.svg.png?20171029232220"
                alt="Microsoft"
                className={cx('app--img__item')}
              />
              <Images
                src="https://www.digitaler-impfnachweis-app.de/svg/app-store-de.svg"
                alt="AppleStore"
                className={cx('app--img__item')}
              />
              <Images
                src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/devportal2/res/images/amazon-appstore-badge-english-black.png"
                alt="AmazonAppstore"
                className={cx('app--img__item')}
              />
              <Images
                src="https://www.ald-vt.com/wp-content/uploads/2018/09/google-play-badge-DE-2-300x89.png"
                alt="GooglePlayStore"
                className={cx('app--img__item')}
              />
            </div>
          </div>
        </section>
      </section>
    </Modal>
  );
}

// set rules for props of component
MobiDownload.propTypes = {
  isOpenMobiDown: PropTypes.bool.isRequired,
  onCloseMobiDown: PropTypes.func.isRequired,
};

export default memo(MobiDownload);
