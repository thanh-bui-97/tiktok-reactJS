import classNames from 'classnames/bind';
import { Modal } from 'antd';

import style from './ReportModal.module.scss';
import { ChevronRightIcon, XmarkIcon } from '../../Icons';
import ReportOptions from './ReportOptions';

const cx = classNames.bind(style);

function ReportModal() {
  return (
    <Modal
      centered //position center
      width={700}
      maskStyle={{ opacity: 0.1 }} //Style for overlay
      maskClosable //Clicks on outside of modal to close + "must have onCancel"
      // onCancel={handleClose} //event close
      closable={false} //Click Xmarks btn or Cancel btn
      bodyStyle={{ padding: 0, margin: `${0}px ${0}px` }}
      footer={null}
      open //isOpen
      className={cx('global-custom-modal-antd')} //trick: custom ant-modal-content by css global
    >
      <section className={cx('wrapper')}>
        <header className={cx('header')}>
          <h4 className={cx('title')}>Report</h4>
          <XmarkIcon className={cx('icon__close')} />
        </header>
        <section className={cx('container')}>
          <span className={cx('label')}>Please select a scenario</span>
          {/* <ReportOptions /> */}
          <div className={cx('options')}>
            <p className={cx('discrips')}>Minor safety</p>
            <span>
              <ChevronRightIcon className={cx('icon__next')} />
            </span>
          </div>
          <div className={cx('options')}>
            <p className={cx('discrips')}>Minor safety</p>
            <span>
              <ChevronRightIcon className={cx('icon__next')} />
            </span>
          </div>
          <div className={cx('options')}>
            <p className={cx('discrips')}>Minor safety</p>
            <span>
              <ChevronRightIcon className={cx('icon__next')} />
            </span>
          </div>
          <div className={cx('options')}>
            <p className={cx('discrips')}>Minor safety</p>
            <span>
              <ChevronRightIcon className={cx('icon__next')} />
            </span>
          </div>
          <div className={cx('options')}>
            <p className={cx('discrips')}>Minor safety</p>
            <span>
              <ChevronRightIcon className={cx('icon__next')} />
            </span>
          </div>
          <div className={cx('options')}>
            <p className={cx('discrips')}>Minor safety</p>
            <span>
              <ChevronRightIcon className={cx('icon__next')} />
            </span>
          </div>
          <div className={cx('options')}>
            <p className={cx('discrips')}>Minor safety</p>
            <span>
              <ChevronRightIcon className={cx('icon__next')} />
            </span>
          </div>
        </section>
      </section>
    </Modal>
  );
}

export default ReportModal;
