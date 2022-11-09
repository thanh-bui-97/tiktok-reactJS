// Library
import classNames from 'classnames/bind'; //Hỗ trợ đặt classNames
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; //Làm tooltip
import Tippy from '@tippyjs/react'; //Làm tooltip
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

// components
import SearchResult from '~/Components/Popper/SearchResult';
import Button from '~/Components/Button';
import Menu from '~/Components/Popper/Menu';
// SCSS module
import style from './Header.module.scss';
//assets-images
import images, { LogoIcon } from '~/assets/images';
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
  SearchCloseIcon,
  SearchIcon,
  SettingsIcon,
  UploadIcon,
  ViewProfileIcon,
} from '~/Components/Icons';

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

const currentUser = false;

// handleActiveItem
function handleActiveItem(menuItems) {
  console.log(menuItems);
}

function Header() {
  // handle search results input
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* left */}
        <div className={cx('logo')}>
          <LogoIcon />
        </div>

        {/* middle */}
        <HeadlessTippy
          visible={searchResult.length > 0} //show/hide
          interactive //interaction with tooltips contents
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <SearchResult />
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <div>
              <button className={cx('search-close')}>
                <SearchCloseIcon />
              </button>
              <FontAwesomeIcon className={cx('search-loadding')} icon={faSpinner} />
            </div>
            <span></span>
            <button className={cx('search-icon')}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>

        {/* right */}
        <div className={cx('header-right')}>
          <Button text leftIcon={<UploadIcon />}>
            Up load
          </Button>
          {/* check log-in */}
          {currentUser ? (
            <div className={cx('user-current')}>
              <Tippy delay={[0, 200]} placement="bottom" content="Messages">
                <span className={cx('user-message')}>
                  <MessageIcon />
                </span>
              </Tippy>
              <Tippy delay={[0, 200]} placement="bottom" content="Inbox">
                <span className={cx('user-inbox')}>
                  <InboxIcon />
                </span>
              </Tippy>
            </div>
          ) : (
            <Button primary>Log in</Button>
          )}
          <Menu menuItems={currentUser ? USER_MENU : MENU_ITEMS} onActive={handleActiveItem}>
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8cf4fa65fd16b13e8d042e0379631773~c5_100x100.jpeg?x-expires=1667390400&x-signature=lGN2wBPorptyUxJgm4FOzqNcW3E%3D"
                alt="huyenbaby"
              />
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
