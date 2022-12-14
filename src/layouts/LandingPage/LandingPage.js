import classNames from 'classnames/bind';
import style from './LandingPage.module.scss';
const cx = classNames.bind(style);

function LandingPage({ children }) {
  return (
    <div className={cx('wrapper')}>
      <header>
        <nav>
          <h1>NAVIGATION</h1>
          <h1>LOGO</h1>
        </nav>
      </header>
      <div className={cx('container')}>
        <div className={cx('contents')}>{children}</div>
      </div>
    </div>
  );
}

export default LandingPage;
