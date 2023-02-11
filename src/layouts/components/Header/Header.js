// libraries
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind'; //Hỗ trợ đặt classNames
import Tippy from '@tippyjs/react'; //Làm tooltip
import 'tippy.js/dist/tippy.css';
// components
import Button from '~/components/Button';
import Setting from '~/components/Popper/Setting';
import Image from '~/components/Images';
import { LogoSvg } from '~/assets/images';
import SearchInput from '~/layouts/components/Header/SearchInput';
import {
  MoonIcon,
  CircleQuestion,
  TikTokCoinIcon,
  MessageMinusIcon,
  KeyboardIcon,
  LanguagesIcon,
  CameraIcon,
  ArrowRightFromBracket,
  BarsIcon,
  PaperPlaneIcon,
  GearIcon,
  PlusIcon,
  ProfileIcon,
} from '~/components/Icons';

// SCSS module
import style from './Header.module.scss';
import config from '~/config';
const cx = classNames.bind(style);
//-> Nếu không có ràng buộc này thì khi gọi class sẽ khó
// Vd: <h2 className={classNames(style['post-items'])}>Header</h2>;
//-> Nếu ràng buộc nó với bind thì classNames đã luôn có style bên trong,
// cú pháp gọi class cũng gọn hơn, vd: className={cx('post-items')}
// -----------------------------------------------------------------------------

const MENU_ITEMS = [
  {
    icon: <LanguagesIcon />,
    title: 'English',
    childsMenu: {
      title: 'Languages',
      data: [
        { code: 'en', title: 'English' },
        { code: 'vi', title: 'Tiếng Việt' },
      ],
    },
  },
  {
    icon: <CircleQuestion />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <KeyboardIcon />,
    title: 'Keyboard Shortcuts',
  },
  {
    icon: <MoonIcon />,
    title: 'Dark mode',
    to: '/feedback',
  },
];

const USER_MENU = [
  {
    icon: <ProfileIcon />,
    title: 'View profile',
    to: '/profile',
  },
  {
    icon: <TikTokCoinIcon />,
    title: 'Get Coins',
    to: '/coins',
  },
  {
    icon: <CameraIcon />,
    title: 'LIVE Studio',
    to: '/settings',
  },
  {
    icon: <GearIcon />,
    title: 'Settings',
    to: '/feedback',
  },
  ...MENU_ITEMS,
  {
    icon: <ArrowRightFromBracket />,
    title: 'Log out',
    to: '/feedback',
    separate: true,
  },
];

const currentUser = true;

// handleActiveItem
function handleActiveItem(menuItems) {
  console.log(menuItems);
}

function defaultFtn() {}
function Header({ onShowAuthen = defaultFtn }) {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* left */}
        <Link to={config.routes.homePage} className={cx('logo')}>
          <LogoSvg />
        </Link>

        {/* middle: vì logic khu vực search xử lý độc lập, nên tách hẳn ra 1 component */}
        <SearchInput />

        {/* right */}
        <div className={cx('header-right')}>
          <Button text leftIcon={<PlusIcon />}>
            Upload
          </Button>
          {/* check log-in */}
          {currentUser ? (
            <div className={cx('user-current')}>
              <Tippy delay={[0, 200]} placement="bottom" content="Messages">
                <span count="15" className={cx('user-message')}>
                  <PaperPlaneIcon />
                </span>
              </Tippy>
              <Tippy delay={[0, 200]} placement="bottom" content="Inbox">
                <span count="10" className={cx('user-inbox')}>
                  <MessageMinusIcon />
                </span>
              </Tippy>
            </div>
          ) : (
            <Button onClick={onShowAuthen} primary>
              Log in
            </Button>
          )}
          <Setting menuItems={currentUser ? USER_MENU : MENU_ITEMS} onActive={handleActiveItem}>
            {currentUser ? (
              <span className={cx('user-avatar')}>
                <Image className={cx('avatar')} src="#" alt="huyenbaby" />
              </span>
            ) : (
              <span className={cx('menu-icon')}>
                <BarsIcon />
              </span>
            )}
          </Setting>
        </div>
      </div>
    </header>
  );
}

// set rules for props of components
Header.propTypes = {
  onShowAuthen: PropTypes.func.isRequired,
};

export default memo(Header);
