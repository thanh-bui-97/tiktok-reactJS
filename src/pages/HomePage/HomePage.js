import classNames from 'classnames/bind';
import AuthorItem from './AuthorItem';
import style from './HomePage.module.scss';

const cx = classNames.bind(style);

function HomePage() {
  return (
    <section className={cx('wrapper')}>
      {/* .map() */}
      <AuthorItem />
      <AuthorItem />
      <AuthorItem />
    </section>
  );
}

export default HomePage;
