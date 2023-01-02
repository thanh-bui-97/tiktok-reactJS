import classNames from 'classnames/bind';
import style from './HomePage.module.scss';

const cx = classNames.bind(style);

function HomePage() {
  return <section className={cx('wrapper')}>Home page</section>;
}

export default HomePage;
