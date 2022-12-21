// libraries
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; //Làm tooltip
// components
import SearchResult from '~/components/Popper/SearchResult';
import { XmarkSolidIcon, MagnifyingIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks'; //hooks
// API
import * as searchService from '~/services/searchService';
// SCSS module
import style from './SeacrchInput.module.scss';
const cx = classNames.bind(style);

function SearchInput() {
  // handle search results input
  const inputRef = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const [searchValues, setSearchValues] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(searchValues, 700); //kỹ thuật chỉ gửi request cuối

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
    // call API -->
    async function fetchApi() {
      setLoading(true);

      //searchService.search() là hàm call API đã được tách ra
      const result = await searchService.search(debouncedValue);
      setSearchResult(result);

      setLoading(false);
    }
    fetchApi();
  }, [debouncedValue]);

  function handleClearValues() {
    setSearchValues('');
    setSearchResult([]);
    inputRef.current.focus();
  }
  function handleClickOutside() {
    setShowResults(false);
  }
  function handleFocusInside() {
    setShowResults(true);
  }
  function handleInputvalues(event) {
    const inputValues = event.target.value;
    // không cho phép nhập ký tự đầu tiên là nút space
    if (!inputValues.startsWith(' ')) {
      setSearchValues(event.target.value);
    }
  }

  return (
    // Tippy warnning: Using a wrapper <div> tag
    // around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive //interaction with tooltips contents
        onClickOutside={handleClickOutside}
        visible={showResults && searchResult.length > 0} //2 dk show/hide: có results + onBlur
        // --->render
        render={(attrs) => (
          <div className={cx('search--result')} tabIndex="-1" {...attrs}>
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
            onChange={handleInputvalues}
            onFocus={handleFocusInside}
          />
          <div>
            {!loading && !!searchValues && (
              <button onClick={handleClearValues} className={cx('search--clear')}>
                <XmarkSolidIcon />
              </button>
            )}
            {loading && <FontAwesomeIcon className={cx('search--loadding')} icon={faSpinner} />}
          </div>
          <span></span>
          <button
            className={cx('search--icon__link')}
            to={`/search?lang=en&q=${encodeURIComponent(debouncedValue)}`}
            onMouseDown={(event) => event.preventDefault()}
          >
            <MagnifyingIcon
              className={cx('icon', {
                active: !!searchValues,
              })}
            />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default SearchInput;
