// libraries
import classNames from 'classnames/bind';
// components
// SCSS module
import style from './ShareExpander.module.scss';
const cx = classNames.bind(style);
// ------

function ShareItem({ itemData }) {
  return (
    <>
      {itemData.map((item, index) => (
        <div key={index} className={cx('share--item')}>
          <span className={cx('icon')}> {item.icon}</span>
          <p className={cx('title')}>{item.title}</p>
        </div>
      ))}
    </>
  );
}

export default ShareItem;
