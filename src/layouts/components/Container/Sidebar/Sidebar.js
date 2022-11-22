// library
import classNames from 'classnames/bind';
// components
import NavMenu from './NavMenu';
import SuggestedAccounts from './SuggestedAccounts';
// SCSS module
import style from './Sidebar.module.scss';
const cx = classNames.bind(style);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <NavMenu />
      <SuggestedAccounts label="Suggested accounts" />
    </aside>
  );
}

export default Sidebar;
