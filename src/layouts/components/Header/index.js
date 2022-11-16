// Library
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind'; //Hỗ trợ đặt classNames
import Tippy from '@tippyjs/react'; //Làm tooltip
import 'tippy.js/dist/tippy.css';
// components
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
  DarkModeIcon,
  FeedbackAndHelpIcon,
  GetCoinsIcon,
  InboxIcon,
  KeyboardShortcutsIcon,
  LanguagesIcon,
  LIVEStudioIcon,
  LogOutIcon,
  MenuIcon,
  MessageIcon,
  SettingsIcon,
  UploadIcon,
  ViewProfileIcon,
} from '~/components/Icons';
import Image from '~/components/Images';
import { LogoSvg } from '~/assets/images';
import SearchInput from '../SearchInput';
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
    icon: <FeedbackAndHelpIcon />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <KeyboardShortcutsIcon />,
    title: 'Keyboard Shortcuts',
  },
  {
    icon: <DarkModeIcon />,
    title: 'Dark mode',
    to: '/feedback',
  },
];

const USER_MENU = [
  {
    icon: <ViewProfileIcon />,
    title: 'View profile',
    to: '/profile',
  },
  {
    icon: <GetCoinsIcon />,
    title: 'Get Coins',
    to: '/coins',
  },
  {
    icon: <LIVEStudioIcon />,
    title: 'LIVE Studio',
    to: '/settings',
  },
  {
    icon: <SettingsIcon />,
    title: 'Settings',
    to: '/feedback',
  },
  ...MENU_ITEMS,
  {
    icon: <LogOutIcon />,
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

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* left */}
        <Link to={config.routes.home} className={cx('logo')}>
          <LogoSvg />
        </Link>

        {/* middle: vì logic khu vực search xử lý độc lập, nên tách hẳn ra 1 component */}
        <SearchInput />

        {/* right */}
        <div className={cx('header-right')}>
          <Button text leftIcon={<UploadIcon />}>
            Up load
          </Button>
          {/* check log-in */}
          {currentUser ? (
            <div className={cx('user-current')}>
              <Tippy delay={[0, 200]} placement="bottom" content="Messages">
                <span count="15" className={cx('user-message')}>
                  <MessageIcon />
                </span>
              </Tippy>
              <Tippy delay={[0, 200]} placement="bottom" content="Inbox">
                <span count="10" className={cx('user-inbox')}>
                  <InboxIcon />
                </span>
              </Tippy>
            </div>
          ) : (
            <Button primary>Log in</Button>
          )}
          <Menu menuItems={currentUser ? USER_MENU : MENU_ITEMS} onActive={handleActiveItem}>
            {currentUser ? (
              <span className={cx('user-avatar')}>
                <Image
                  className={cx('avatar')}
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8cf4fa65fd16b13e8d042e0379631773~c5_100x100.jpeg?x-expires=1667390400&x-signature=lGN2wBPorptyUxJgm4FOzqNcW3E%3"
                  alt="huyenbaby"
                  fallBack="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b33abf2d0e2ddea25f9e33edefd9b82f~c5_100x100.jpeg?x-expires=1668254400&x-signature=gOuiZgN6OM%2Fh%2FKnUiQSbCdKyNkw%3D" //custom trường hợp nếu ảnh lỗi thì dùng ảnh này làm thay thế
                />
              </span>
            ) : (
              <span className={cx('menu-icon')}>
                <MenuIcon />
              </span>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
