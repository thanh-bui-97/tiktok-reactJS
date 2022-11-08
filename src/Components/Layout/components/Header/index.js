// Library
import classNames from 'classnames/bind'; //Hỗ trợ đặt classNames
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faPerson,
  faVideoCamera,
  faGear,
  faMoon,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
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
import images from '~/assets/images';
import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(style);
//-> Nếu không có ràng buộc này thì khi gọi class sẽ khó
// Vd: <h2 className={classNames(style['post-items'])}>Header</h2>;
//-> Nếu ràng buộc nó với bind thì classNames đã luôn có style bên trong,
// cú pháp gọi class cũng gọn hơn, vd: className={cx('post-items')}
// -----------------------------------------------------------------------------

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
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
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard Shortcuts',
  },
];

const USER_MENU = [
  {
    icon: <FontAwesomeIcon icon={faPerson} />,
    title: 'View profile',
    to: '/profile',
  },
  {
    icon: <FontAwesomeIcon icon={faTiktok} />,
    title: 'Get Coins',
    to: '/coins',
  },
  {
    icon: <FontAwesomeIcon icon={faVideoCamera} />,
    title: 'LIVE Studio',
    to: '/settings',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/feedback',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark mode',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
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
          <img src={images.logo} alt="Tiktok" />
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
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon className={cx('search-loadding')} icon={faSpinner} />
            </div>
            <span></span>
            <button className={cx('search-icon')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        {/* right */}
        <div className={cx('header-right')}>
          <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Up load
          </Button>
          {/* check log-in */}
          {currentUser ? (
            <div className={cx('user-current')}>
              <Tippy delay={[0, 200]} placement="bottom" content="Messages">
                <span className={cx('user-message')}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </span>
              </Tippy>
              <Tippy delay={[0, 200]} placement="bottom" content="Inbox">
                <span className={cx('user-inbox')}>
                  <FontAwesomeIcon icon={faMessage} />
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
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </span>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
