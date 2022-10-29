import classNames from 'classnames/bind';
import style from './Wrapper.module.scss';

const cx = classNames.bind(style);

function Wrapper({ children }) {
  return <div className={cx('popper-base')}>{children}</div>;
}

export default Wrapper;
