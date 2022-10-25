// Thư viện
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* left */}
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        {/* middle */}
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
        {/* right */}
        <div className={cx('header-right')}>
          <button className={cx('upload')}>Upload</button>
          <button className={cx('log-in')}>Log in</button>
          <span className={cx('setting')}></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
