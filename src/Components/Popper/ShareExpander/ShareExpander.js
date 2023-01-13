// libraries
import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
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

const DATA = {
  less: [
    { icon: <EmbedIcon />, title: 'Embed' },
    { icon: <PaperPlaneRedIcon />, title: 'Send to friends' },
    { icon: <FacebookIcon />, title: 'Share to Facebook' },
    { icon: <WhatAppIcon />, title: 'Share to WhatsApp' },
    { icon: <LinkIcon />, title: 'Copy link' },
  ],
  more: [
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
  ],
};

function ShareExpander({ children }) {
  const [reloadData, setReloadData] = useState(false);

  function renderShareBox(attrs) {
    return (
      <div className={cx('share--box')} tabIndex="-1" {...attrs}>
        <PopperWrapper>
          <div className={cx('share--container')}>
            <div className={cx('share--list')}>
              <ShareItem itemData={DATA} isReloadData={reloadData} />
            </div>
          </div>
        </PopperWrapper>
      </div>
    );
  }

  return (
    <div>
      <Tippy
        // visible
        placement="top-start"
        offset={[-27, 13]} //[độ lệch của điểm arrow, khoảng cách giữa tippy vs item]
        delay={[0, 350]} // delay =[show, hide]
        interactive //interaction with tooltips contents vd: onMouse
        onHide={() => setReloadData(true)}
        onShow={() => setReloadData(false)}
        render={renderShareBox}
      >
        {children}
      </Tippy>
    </div>
  );
}

// set rules for the props of components
ShareExpander.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShareExpander;
