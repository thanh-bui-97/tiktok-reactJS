// library
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
// components
import { ChevronDownIcon } from '~/components/Icons';
// SCSS module
import style from './Authen.module.scss';
const cx = classNames.bind(style);

function AuthenType({ appData, signUpMode }) {
  const [moreList, setMoreList] = useState(false);

  useEffect(() => {
    setMoreList(false);
  }, [signUpMode]);

  function handleShowMoreList() {
    setMoreList(true);
  }

  // render
  function renderAppData() {
    return moreList && signUpMode
      ? //less list
        appData.moreList.map((app, index) => {
          return (
            <li className={cx('authen--item')} key={index}>
              <div className={cx('icon')}>{app.icon}</div>
              <p className={cx('discription')}>{app.discrips}</p>
            </li>
          );
        })
      : // more list
        appData.list.map((app, index) => {
          return (
            <li className={cx('authen--item')} key={index}>
              <div className={cx('icon')}>{app.icon}</div>
              <p className={cx('discription')}>{app.discrips}</p>
            </li>
          );
        });
  }

  return (
    <div>
      <header className={cx('title')}>{appData.title}</header>
      <ul>{renderAppData()}</ul>
      {!!appData.moreList && !moreList && (
        <div onClick={handleShowMoreList} className={cx('more-btn')}>
          <ChevronDownIcon />
        </div>
      )}
    </div>
  );
}

// set rules for props of components
AuthenType.propTypes = {
  appData: PropTypes.object.isRequired,
  signUpMode: PropTypes.bool,
};

export default AuthenType;
