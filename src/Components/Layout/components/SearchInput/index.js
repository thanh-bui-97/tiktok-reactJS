// library
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; //Làm tooltip
// components
import SearchResult from '~/Components/Popper/SearchResult';
import { SearchClearIcon, SearchIcon } from '~/Components/Icons';
import { useDebounce } from '~/hooks'; //hooks
// Until
import * as request from '~/untils/request'; //call API wtth axios
// SCSS module
import style from './SeacrchInput.module.scss';

const cx = classNames.bind(style);

function SearchInput() {
  // handle search results input
  const inputRef = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const [searchValues, setSearchValues] = useState('');
  const [showResults, setShowResults] = useState(true);
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(searchValues, 700); //kỹ thuật chỉ gửi request cuối

  function handleClearValues() {
    setSearchValues('');
    setSearchResult([]);
    inputRef.current.focus();
  }
  function handleClickOutside() {
    setShowResults(false);
  }

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    // call API -->
    async function fetchApi() {
      // xử lý lối của async/await the same then/catch: bỏ code vào trong try/catch
      try {
        const res = await request.get('users/search', {
          params: {
            q: debouncedValue,
            type: 'less',
          },
        });
        setLoading(false);
        setSearchResult(res.data);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchApi();
  }, [debouncedValue]);

  return (
    <HeadlessTippy
      interactive //interaction with tooltips contents
      onClickOutside={handleClickOutside}
      visible={showResults && searchResult.length > 0} //2 dk show/hide: có results + onBlur
      // --->render
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <SearchResult data={searchResult} />
        </div>
      )}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValues}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(event) => {
            setSearchValues(event.target.value);
          }}
          onFocus={() => setShowResults(true)}
        />
        <div>
          {!loading && !!searchValues && (
            <button onClick={handleClearValues} className={cx('search-clear')}>
              <SearchClearIcon />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('search-loadding')} icon={faSpinner} />}
        </div>
        <span></span>
        <Link to={`/search?lang=en&q=${encodeURIComponent(searchValues)}`} className={cx('search-icon')}>
          <SearchIcon />
        </Link>
      </div>
    </HeadlessTippy>
  );
}

export default SearchInput;
