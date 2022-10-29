// library
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
// components
import style from './Menu.module.scss';
import Wrapper from '../Wrapper';
import MenuItem from './MenuItem';
// SCSS module
const cx = classNames.bind(style);

function Menu({ children, menuItems = [] }) {
  return (
    <Tippy
      delay={[0, 700]} // delay =[show, hide]
      interactive //interaction with tooltips contents
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-box')} tabIndex="-1" {...attrs}>
          <Wrapper>
            {menuItems.map((item, index) => (
              <MenuItem key={index} itemData={item} />
            ))}
          </Wrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
