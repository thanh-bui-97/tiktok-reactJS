// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '../../Icons';
// components
// SCSS module
import style from './ShareExpander.module.scss';
const cx = classNames.bind(style);
// ------

function ShareItem({ itemData, isReloadData = false }) {
  const [dataRender, setDataRender] = useState(itemData.less);
  const [showMoreBtn, setShowMoreBtn] = useState(true);

  function handleShowMoreList() {
    setDataRender(itemData.more);
    setShowMoreBtn(false);
  }

  useEffect(() => {
    setDataRender(itemData.less);
    setShowMoreBtn(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReloadData]);

  return (
    <>
      {dataRender.map((item, index) => (
        <div key={index} className={cx('share--item')}>
          <span className={cx('icon')}> {item.icon}</span>
          <p className={cx('title')}>{item.title}</p>
        </div>
      ))}
      {showMoreBtn && (
        <div onClick={handleShowMoreList} className={cx('more-btn')}>
          <ChevronDownIcon />
        </div>
      )}
    </>
  );
}

// set rules for the props of components
ShareItem.propTypes = {
  itemData: PropTypes.object.isRequired,
  isReloadData: PropTypes.bool.isRequired,
};

export default ShareItem;
