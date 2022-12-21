// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
// components
import PopperWrapper from '../PopperWrapper';
import SettingItem from './SettingItem';
import SettingHeader from './SettingHeader';
// SCSS module
import style from './Setting.module.scss';
const cx = classNames.bind(style);
// ------------------------------------------------------------------------------------------------

function defaultFn() {}
function Setting({ children, menuItems = [], hideOnClick = false, onActive = defaultFn }) {
  //idea: mỗi lần setState là thay đổi menu (gồm các menu items), nên state là 1 array, setState là set lại array khác (add/remove child array)
  // history+n = [{data: menuItems}, {title: "children 1", data: menuItems}...]
  const [history, setHistory] = useState([{ data: menuItems }]);
  const currentMenu = history[history.length - 1];

  function handleBack() {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  }

  // go to first menu
  function handleResetMenu() {
    setHistory([{ data: menuItems }]);
  }

  function renderMenuItems() {
    //-->
    return currentMenu.data.map((item, index) => {
      const isChildsMenu = !!item.childsMenu;

      function handleSelectItem() {
        if (isChildsMenu) {
          // const { title, data } = item.childsMenu;
          setHistory((prev) => [...prev, item.childsMenu]); //onClick -> setState
        } else {
          onActive(item);
        }
      }

      return (
        <div key={index}>
          <SettingItem key={index} itemData={item} onSelect={handleSelectItem} />
        </div>
      );
    });
  }

  function renderMenuBox(attrs) {
    return (
      <div className={cx('menu--box')} tabIndex="-1" {...attrs}>
        <PopperWrapper>
          {history.length > 1 && <SettingHeader onBack={handleBack} title={currentMenu.title} />}
          <div className={cx('menu--body')}>{renderMenuItems()}</div>
        </PopperWrapper>
      </div>
    );
  }

  return (
    <Tippy
      placement="bottom-end"
      offset={[12, 20]} //[độ lệch của điểm arrow, khoảng cách giữa tippy vs item]
      delay={[0, 700]} // delay =[show, hide]
      interactive //interaction with tooltips contents vd: onMouse
      onHide={handleResetMenu}
      hideOnClick={hideOnClick}
      render={renderMenuBox}
    >
      {children}
    </Tippy>
  );
}

// set rules for props of components
Setting.propTypes = {
  children: PropTypes.node.isRequired,
  menuItems: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onActive: PropTypes.func,
};

export default Setting;
