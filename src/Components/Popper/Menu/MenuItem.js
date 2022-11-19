// library
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
// components
import Button from '~/components/Button/Button';
const cx = classNames.bind(style);

function MenuItem({ itemData, onSelect }) {
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
MenuItem.propTypes = {
  itemData: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
};

export default MenuItem;
