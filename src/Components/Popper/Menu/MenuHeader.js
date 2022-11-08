// library
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// components

const cx = classNames.bind(style);

function MenuHeader({ title, onBack }) {
  return (
    <header className={cx('menu--header')}>
      <button className={cx('btn')} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx('title')}>{title}</h4>
    </header>
  );
}

export default MenuHeader;
