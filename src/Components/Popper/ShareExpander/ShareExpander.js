// libraries
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
// components
import {
  EmbedIcon,
  FacebookIcon,
  LineIcon,
  LinkedInIcon,
  LinkIcon,
  MailIcon,
  PaperPlaneRedIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterCircleIcon,
  WhatAppIcon,
} from '~/components/Icons';
import PopperWrapper from '../PopperWrapper';
import ShareItem from './ShareItem';
// SCSS module
import style from './ShareExpander.module.scss';
const cx = classNames.bind(style);
// ------

const SHARE_DATA = [
  { icon: <EmbedIcon />, title: 'Embed' },
  { icon: <PaperPlaneRedIcon />, title: 'Send to friends' },
  { icon: <FacebookIcon />, title: 'Share to Facebook' },
  { icon: <WhatAppIcon />, title: 'Share to WhatsApp' },
  { icon: <LinkIcon />, title: 'Copy link' },
  { icon: <TwitterCircleIcon />, title: 'Share to Twitter' },
  { icon: <LinkedInIcon />, title: 'Share to LinkedIn' },
  { icon: <RedditIcon />, title: 'Share to Reddit' },
  { icon: <TelegramIcon />, title: 'Share to Telegram' },
  { icon: <MailIcon />, title: 'Share to Email' },
  { icon: <LineIcon />, title: 'Share to Line' },
  { icon: <PinterestIcon />, title: 'Share to Pinterest' },
];

function ShareExpander({ children }) {
  function renderShareBox(attrs) {
    return (
      <div className={cx('share--box')} tabIndex="-1" {...attrs}>
        <PopperWrapper>
          <div className={cx('share--container')}>
            <div className={cx('share--list')}>
              <ShareItem itemData={SHARE_DATA} />
            </div>
          </div>
        </PopperWrapper>
      </div>
    );
  }

  return (
    <div>
      <Tippy
        visible
        placement="top-start"
        offset={[-27, 13]} //[độ lệch của điểm arrow, khoảng cách giữa tippy vs item]
        delay={[0, 700]} // delay =[show, hide]
        interactive //interaction with tooltips contents vd: onMouse
        // onHide={handleResetMenu}
        // hideOnClick={hideOnClick}
        render={renderShareBox}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default ShareExpander;
