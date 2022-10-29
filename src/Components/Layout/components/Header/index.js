// Library
import classNames from 'classnames/bind'; //Hỗ trợ đặt classNames
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; //Làm tooltip
import { useEffect, useState } from 'react';

// components
import SearchResult from '~/Components/Popper/SearchResult';
import Button from '~/Components/Button';
// SCSS module
import style from './Header.module.scss';
//assets-images
import images from '~/assets/images';

const cx = classNames.bind(style);
//-> Nếu không có ràng buộc này thì khi gọi class sẽ khó
// Vd: <h2 className={classNames(style['post-items'])}>Header</h2>;
//-> Nếu ràng buộc nó với bind thì classNames đã luôn có style bên trong,
// cú pháp gọi class cũng gọn hơn, vd: className={cx('post-items')}

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
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
        <Tippy
          visible={searchResult.length > 0} //show/hide
          interactive //interact with tooltips contents
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
        </Tippy>

        {/* right */}
        <div className={cx('header-right')}>
          <Button text rightIcon={<FontAwesomeIcon icon={faPlus} />}>
            Up load
          </Button>
          <Button primary>Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
