// library
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// components
import style from './Setting.module.scss';
import { ChevronLeftIcon } from '../../Icons';

const cx = classNames.bind(style);

function SettingHeader({ title, onBack }) {
  return (
    <header className={cx('menu--header')}>
      <button className={cx('btn')} onClick={onBack}>
        <ChevronLeftIcon />
      </button>
      <h4 className={cx('title')}>{title}</h4>
    </header>
  );
}

// set rules for props of components
SettingHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default SettingHeader;
