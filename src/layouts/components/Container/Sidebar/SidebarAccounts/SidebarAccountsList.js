// Library
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// components
import SidebarAccountItem from './SidebarAccountItem';
// services
import * as accountsService from '~/services/accountsService';
// SCSS module
import style from './SidebarAccounts.module.scss';
const cx = classNames.bind(style);

function SidebarAccountsList({ label, currentUser = false }) {
  const [showAllAccounts, setShowAllAccounts] = useState(false);
  const [suggestedAccs, setsuggestedAccs] = useState([]);
  const [followingAccs, setfollowingAccs] = useState([]);

  useEffect(() => {
    async function fetchAccountsApi() {
      //The following accounts = The except accounts in List suggested
      let followingAccountsId = [];

      if (currentUser) {
        // log-in mode
        if (showAllAccounts) {
          //get list following accounts API
          const followingAccountsList = await accountsService.getFollowingAccounts(1);
          if (followingAccountsList) {
            setfollowingAccs(followingAccountsList);
            followingAccountsList.map((flowAcc) => followingAccountsId.push(flowAcc.id));
          }
        } else {
          const followingAccountsList = await accountsService.getFollowingAccounts(1);
          if (followingAccountsList) {
            setfollowingAccs(followingAccountsList);
            followingAccountsList.map((flowAcc) => followingAccountsId.push(flowAcc.id));
          }
        }
      } else {
        // log-out mode
        if (showAllAccounts) {
          //get list suggested accounts API
          const suggestedAccountsList = await accountsService.getSuggestedAccounts(1, followingAccountsId, 20);
          if (suggestedAccountsList) {
            setsuggestedAccs(suggestedAccountsList);
          }
        } else {
          const suggestedAccountsList = await accountsService.getSuggestedAccounts(1, followingAccountsId, 5);
          if (suggestedAccountsList) {
            setsuggestedAccs(suggestedAccountsList);
          }
        }
      }
    }
    fetchAccountsApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAllAccounts]);

  function handleShowAll() {
    setShowAllAccounts(true);
  }
  function handleShowLess() {
    setShowAllAccounts(false);
  }
  return (
    <section className={cx('wrapper')}>
      {/* label */}
      <h4 className={cx('label')}>{label}</h4>

      {/* Log-out mode Accounts List */}
      {!currentUser &&
        suggestedAccs.map((accoutns) => <SidebarAccountItem key={accoutns.id} suggAccInfors={accoutns} />)}

      {/* Log-in mode Accounts List */}
      {currentUser &&
        followingAccs.length > 0 &&
        followingAccs.map((accoutns) => <SidebarAccountItem key={accoutns.id} suggAccInfors={accoutns} />)}

      {/* empty following accounts */}
      {currentUser && followingAccs.length < 1 && (
        <p className={cx('following-empty')}>Accounts you follow will appear here </p>
      )}

      {/* See all btn */}
      {(followingAccs.length > 0 || suggestedAccs.length > 0) && !showAllAccounts && (
        <span onClick={handleShowAll} className={cx('btn-show')}>
          See all
        </span>
      )}

      {/* See less btn */}
      {(followingAccs.length > 0 || suggestedAccs.length > 0) && showAllAccounts && (
        <span onClick={handleShowLess} className={cx('btn-show')}>
          See less
        </span>
      )}
    </section>
  );
}

// set rules for props of components
SidebarAccountsList.propTypes = {
  label: PropTypes.string.isRequired,
  currentUser: PropTypes.bool,
};

export default SidebarAccountsList;
