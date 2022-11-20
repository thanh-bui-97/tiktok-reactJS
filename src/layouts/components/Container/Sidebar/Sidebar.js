import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import NavMenu, { NavMenuItem } from './NavMenu';
import config from '~/config';
import {
  HomeIcon,
  HomeSolidIcon,
  LiveIcon,
  LiveSolidIcon,
  UsersGroupIcon,
  UsersGroupSolidIcon,
} from '~/components/Icons';

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <NavMenu>
        <NavMenuItem title={'For You'} icon={<HomeIcon />} iconSolid={<HomeSolidIcon />} to={config.routes.home} />
        <NavMenuItem
          title={'Following'}
          icon={<UsersGroupIcon />}
          iconSolid={<UsersGroupSolidIcon />}
          to={config.routes.following}
        />
        <NavMenuItem title={'LIVE'} icon={<LiveIcon />} iconSolid={<LiveSolidIcon />} to={config.routes.live} />
      </NavMenu>
    </aside>
  );
}

export default Sidebar;
