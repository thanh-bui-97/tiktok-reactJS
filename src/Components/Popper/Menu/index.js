// library
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
// components
import Wrapper from '../Wrapper';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
// SCSS module
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function defaultFn() {}
function Menu({ children, menuItems = [], onActive = defaultFn }) {
  //idea: mỗi lần setState là thay đổi menu (gồm các menu items), nên state là 1 array, setState là set lại array khác (add/remove child array)
  const [history, setHistory] = useState([menuItems]);
  const currentMenu = history[history.length - 1];
  // currentMenu = [{data: menuItems}, {data: childsMenu}...]

  function handleBack() {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  }
  function handleHideItem() {
    setHistory([menuItems]);
  }

  function renderItems() {
    //-->
    return currentMenu.map((item, index) => {
      const isChildsMenu = !!item.childsMenu;

      function handleSelectItem() {
        if (isChildsMenu) {
          const { title, data } = item.childsMenu;
          setHistory((prev) => [...prev, data]); //onClick -> setState
        } else {
          onActive(item);
        }
      }

      return (
        <div key={index}>
          <MenuItem key={index} itemData={item} onSelect={handleSelectItem} />
        </div>
      );
    });
  }

  return (
    <Tippy
      visible
      placement="bottom-end"
      offset={[12, 20]} //[độ lệch của điểm arrow, khoảng cách giữa tippy vs item]
      delay={[0, 700]} // delay =[show, hide]
      interactive //interaction with tooltips contents vd: onMouse
      onHide={handleHideItem}
      render={(attrs) => (
        <div className={cx('menu-box')} tabIndex="-1" {...attrs}>
          <Wrapper>
            {history.length > 1 && <MenuHeader onBack={handleBack} title="Languages" />}
            {renderItems()}
          </Wrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
