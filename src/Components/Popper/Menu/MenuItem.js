// library
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
// components
import Button from '~/Components/Button';

const cx = classNames.bind(style);

function MenuItem({ itemData, onSelect }) {
  return (
    <Button onClick={onSelect} className={cx('menu-item')} leftIcon={itemData.icon} to={itemData.to}>
      {itemData.title}
    </Button>
  );
}

export default MenuItem;
