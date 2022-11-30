// library
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Setting.module.scss';
// components
import Button from '~/components/Button/Button';
const cx = classNames.bind(style);

function SettingItem({ itemData, onSelect }) {
  const classes = cx('menu-item', {
    separate: itemData.separate,
  });

  return (
    <Button onClick={onSelect} className={classes} leftIcon={itemData.icon} to={itemData.to}>
      {itemData.title}
    </Button>
  );
}

// set rules for props of components
SettingItem.propTypes = {
  itemData: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
};

export default SettingItem;
