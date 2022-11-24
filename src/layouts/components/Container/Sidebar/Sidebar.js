// library
import classNames from 'classnames/bind';
// components
import NavMenu from './NavMenu';
import SidebarAccountsList from './SidebarAccountsList';
// SCSS module
import style from './Sidebar.module.scss';
const cx = classNames.bind(style);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <NavMenu />
      <SidebarAccountsList label="Suggested accounts" />
      <SidebarAccountsList label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
