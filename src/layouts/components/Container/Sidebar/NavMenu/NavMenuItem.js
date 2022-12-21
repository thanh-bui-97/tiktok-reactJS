// libraries
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// SCSS module
import style from './NavMenu.module.scss';
const cx = classNames.bind(style);
function NavMenuItem({ title, icon, iconSolid, to }) {
  return (
    // NavLink có props là isActive, nhưng nó nằm trong props style
    <NavLink
      to={to}
      className={(navLink) =>
        cx('menu-item', {
          active: navLink.isActive,
        })
      }
      end
    >
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('icon-solid')}>{iconSolid}</span>
      <h2>{title}</h2>
    </NavLink>
  );
}

// set rules for props of components
NavMenuItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node.isRequired,
  iconSolid: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavMenuItem;
