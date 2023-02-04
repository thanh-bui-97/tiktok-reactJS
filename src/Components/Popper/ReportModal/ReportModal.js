// libraries
import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Modal } from 'antd';
// components
import { ChevronLeftIcon, ChevronRightIcon, XmarkIcon } from '~/components/Icons';
import Button from '~/components/Button';
// SCSS modules
import style from './ReportModal.module.scss';
const cx = classNames.bind(style);

const REPORT_OPTIONS_DATA = [
  {
    title: 'Minor safety',
    data: [
      {
        title: 'Nudity or sexual activity of minors',
        data: [
          {
            label: 'Nudity or sexual activity of minors',
            content: [
              'Content exposing minors genitals, buttocks, or pubic region, or nipples of female minors',
              'Content showing minors undressing or in minimal clothing that is not relevant, such as a swimsuit in a non-swimming setting',
              'Content showing minors along with sexually explicit song lyrics, or minors dancing in a sexual way, such as fondling ones own or someone elses groin or breasts',
              'Sexual comments, emojis, text, or other graphics used within a video to veil or imply nudity or sexual activity of minors',
              '"Nudity or sexual activity of minors" is defined as video, image, or language content that shows or implies minors are nude or engaging in sexual activities.',
            ],
          },
        ],
      },
      {
        title: 'Abuse or crimes against minors',
        data: [
          {
            label: 'We dont allow:',
            content: [
              'Content that requests, promotes, or facilitates sexual assault, molestation, murder, physical abuse or neglect, abduction, international parental kidnapping, trafficking, underage labor, underage marriage, exploitation of minors for prostitution, LIVE online sexual abuse of minors, or sexual exploitation of minors in the context of travel and tourism, attempts to obtain or distribute child sexual abuse material or more general child abuse imagery, and the production, possession, or distribution of child sexual abuse material.',
              'Content that engages with minors in a sexual way, sexualizes a minor through product features such as Duet, or shows, promotes, normalizes, or glorifies grooming behaviors such as attempting to establish a trusting relationship with minors for the purpose of child sexual abuse.',
              'Content that shows, requests, glorifies, or encourages child abuse imagery including nudity, sexualized minors, sexual activity with minors, pedophilia, or sexual assault of minors',
              'Content that revictimizes or capitalizes on minor victims of abuse by resharing or reenacting assaults or confessions',
              'Content that requests real-world contact or contact on another platform or website, between minors and adults, or between minors with a large age gap',
            ],
          },
        ],
      },
      {
        title: 'Dangerous or illegal behaviors by minors',
        data: [
          {
            label: 'We dont allow:',
            content: [
              'Content that suggests, shows, imitates, or promotes the possession or consumption of alcohol, tobacco, or drugs by minors, including using emojis to promote the unauthorized use of over-the-counter medication',
              'Content that instructs minors how to buy, sell, or trade alcohol, tobacco, or controlled substances',
              'Content that shows or promotes activities that may be dangerous for minors, including physical challenges, dares, or stunts such as eating dangerous substances or foods for a challenge',
              '"Dangerous or illegal behaviors by minors" is defined as video, image or language content that suggests, shows, or imitates minors engaging in activities that are harmful to their physical, mental, or emotional well-being.',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Unauthorized or inappropriate promotions',
    data: '',
  },
  {
    title: 'Dangerous acts and challenges',
    data: '',
  },
  {
    title: 'Suicide, self-harm, and disordered eating',
    data: '',
  },
  {
    title: 'Adult nudity and sexual activities',
    data: '',
  },
  {
    title: 'Bullying and harassment',
    data: '',
  },
  {
    title: 'Hateful behavior',
    data: '',
  },
  {
    title: 'Violent extremism',
    data: '',
  },
  {
    title: 'Spam and fake engagement',
    data: '',
  },
  {
    title: 'Illegal activities and regulated goods',
    data: '',
  },
];

function ReportModal({ isShow, onHideReportModal }) {
  const [reportOptions, setReportOptions] = useState([{ data: REPORT_OPTIONS_DATA }]);
  const currentOptionSelect = reportOptions[reportOptions.length - 1];

  // reset data when close modal
  useEffect(() => {
    setReportOptions([{ data: REPORT_OPTIONS_DATA }]);
  }, [isShow]);

  // render Report box
  function renderReportBox() {
    function handleBackOption() {
      setReportOptions((prev) => prev.slice(0, prev.length - 1));
    }

    // render Report options
    function renderReportOptions() {
      return currentOptionSelect.data.map((reportOption, index) => {
        const childOptions = !!reportOption.data;

        function handleSelectOption() {
          if (childOptions) {
            setReportOptions((prev) => [...prev, reportOption]);
          }
        }

        //Main of Report body box
        return reportOptions.length <= 2 ? (
          <div key={index} className={cx('options')} onClick={handleSelectOption}>
            <p className={cx('option--name')}>{reportOption.title}</p>
            <span>
              <ChevronRightIcon className={cx('icon__next')} />
            </span>
          </div>
        ) : (
          <>
            <div className={cx('label')}>{reportOption.label}</div>
            <div className={cx('discriptions')}>
              <span className={cx('text')}>We don't allow:</span>
              <ul className={cx('text__list')}>
                {reportOption.content.map((option, index) => (
                  <li key={index} className={cx('text__item')}>
                    {option}
                  </li>
                ))}
              </ul>
              <div className={cx('footer')}>
                <Button medium primary className={cx('submit--btn')}>
                  Submit
                </Button>
              </div>
            </div>
          </>
        );
      });
    }

    return (
      <>
        {/* Report header box */}
        <header className={cx('header')}>
          {reportOptions.length > 1 && (
            <span onClick={handleBackOption}>
              <ChevronLeftIcon className={cx('icon__back')} />
            </span>
          )}
          <h4 className={cx('title')}>Report</h4>
          <span onClick={onHideReportModal} className={cx('icon__close')}>
            <XmarkIcon />
          </span>
        </header>

        {/* Report body box */}
        <section className={cx('container')}>
          {reportOptions.length <= 2 && <span className={cx('note')}>Please select a scenario</span>}
          {renderReportOptions()}
        </section>
      </>
    );
  }

  return (
    <Modal
      centered //position center
      width={700}
      // maskStyle={{ opacity:  }} //Style for overlay
      bodyStyle={{ padding: 0, margin: 0 }}
      footer={null}
      className={cx('global-custom-modal-antd')} //trick: custom ant-modal-content by css global
      maskClosable //Clicks on outside of modal to close + "must have onCancel"
      // onCancel={handleCloseReportBox} //event close
      closable={false} //Click Xmarks btn or Cancel btn
      open={isShow} //isOpen
    >
      <section className={cx('wrapper')}>{renderReportBox()}</section>
    </Modal>
  );
}

// Set rules for props of component
ReportModal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onHideReportModal: PropTypes.func.isRequired,
};

export default memo(ReportModal);
