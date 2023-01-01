// libraries
import { memo } from 'react';
import classNames from 'classnames/bind';
// components
import NavMenuItem from './NavMenuItem';
import {
  HomeIcon,
  HomeSolidIcon,
  LiveIcon,
  LiveSolidIcon,
  UsersGroupIcon,
  UsersGroupSolidIcon,
} from '~/components/Icons';
// config
import config from '~/config';
// SCSS module
import style from './NavMenu.module.scss';
const cx = classNames.bind(style);

function NavMenu() {
  return (
    <nav className={cx('wrapper')}>
      <NavMenuItem title={'For You'} icon={<HomeIcon />} iconSolid={<HomeSolidIcon />} to={config.routes.homePage} />
      <NavMenuItem
        title={'Following'}
        icon={<UsersGroupIcon />}
        iconSolid={<UsersGroupSolidIcon />}
        to={config.routes.followingPage}
      />
      <NavMenuItem title={'LIVE'} icon={<LiveIcon />} iconSolid={<LiveSolidIcon />} to={config.routes.livePage} />
    </nav>
  );
}

export default memo(NavMenu);
