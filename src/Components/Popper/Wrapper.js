// library
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// SCSS module
import style from './Wrapper.module.scss';

const cx = classNames.bind(style);

function Wrapper({ children }) {
  return <div className={cx('popper-base')}>{children}</div>;
}

// set rules for props of components
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
