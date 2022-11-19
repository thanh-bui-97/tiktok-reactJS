// library
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// components
import style from './Menu.module.scss';

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

// set rules for props of components
MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default MenuHeader;
