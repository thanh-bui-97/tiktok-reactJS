// Dùng thư viện className
import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classNames.bind(style);
//-> Nếu không có ràng buộc này thì khi gọi class sẽ khó
// Vd: <h2 className={classNames(style['post-items'])}>Header</h2>;
//-> Nếu ràng buộc nó với bind thì classNames đã luôn có style bên trong,
// cú pháp gọi class cũng gọn hơn, vd: className={cx('post-items')}

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <h2>Header</h2>
        {/* {content 1} */}
        {/* {content 2} */}
      </div>
    </header>
  );
}

export default Header;
