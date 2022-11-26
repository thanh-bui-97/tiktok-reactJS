// library
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// Components
import HeaderAccountItem from '~/layouts/components/Header/HeaderAccounts';
import PopperWrapper from '../PopperWrapper.js';
// SCSS module
import style from './SearchResult.module.scss';

const cx = classNames.bind(style);

function SearchResult({ data }) {
  return (
    <PopperWrapper>
      <h4 className={cx('search-title')}>Accounts</h4>
      {data.map((result) => (
        <HeaderAccountItem key={result.id} data={result} />
      ))}
    </PopperWrapper>
  );
}

// set rules for props of components
SearchResult.propTypes = {
  data: PropTypes.array,
};

export default SearchResult;
