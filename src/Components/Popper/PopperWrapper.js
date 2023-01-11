// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// SCSS module
import style from './PopperWrapper.module.scss';

const cx = classNames.bind(style);

function PopperWrapper({ children }) {
  return <section className={cx('popper-base')}>{children}</section>;
}

// set rules for props of components
PopperWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PopperWrapper;
