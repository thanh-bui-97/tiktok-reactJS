// library
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// Components
import AccountItem from '~/components/AccountItems';
import Wrapper from '../Wrapper.js';
// SCSS module
import style from './SearchResult.module.scss';

const cx = classNames.bind(style);

function SearchResult({ data }) {
  return (
    <Wrapper>
      <h4 className={cx('search-title')}>Accounts</h4>
      {data.map((result) => (
        <AccountItem key={result.id} data={result} />
      ))}
    </Wrapper>
  );
}

// set rules for props of components
SearchResult.propTypes = {
  data: PropTypes.array,
};

export default SearchResult;
