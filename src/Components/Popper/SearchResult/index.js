// library
import classNames from 'classnames/bind';
// Components
import AccountItem from '~/Components/AccountItems';
import Wrapper from '../Wrapper.js';
// SCSS module
import style from './SearchResult.module.scss';

const cx = classNames.bind(style);

function SearchResult() {
  return (
    <Wrapper>
      <h4 className={cx('search-title')}>Accounts</h4>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
    </Wrapper>
  );
}

export default SearchResult;
