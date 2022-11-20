import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './NavMenu.module.scss';

const cx = classNames.bind(style);

function NavMenu({ children }) {
  return <nav className={cx('wrapper')}>{children}</nav>;
}

// set rules for props of components
NavMenu.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NavMenu;
