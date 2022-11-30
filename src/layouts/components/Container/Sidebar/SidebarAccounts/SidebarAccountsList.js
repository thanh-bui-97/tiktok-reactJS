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

function SidebarAccountsList({ label }) {
  const [showAllAccounts, setShowAllAccounts] = useState(false);

  const [renderAccounts, setRenderAccounts] = useState([]);

  useEffect(() => {
    async function fetchAccountsApi() {
      if (showAllAccounts) {
        const suggestedAccountsList = await accountsService.getSuggestedAccounts(1, false, 20);
        setRenderAccounts(suggestedAccountsList);
      } else {
        const suggestedAccountsList = await accountsService.getSuggestedAccounts(1, false, 5);
        setRenderAccounts(suggestedAccountsList);
      }
    }
    fetchAccountsApi();
  }, [showAllAccounts]);

  function handleShowAll() {
    setShowAllAccounts(false);
  }
  function handleShowLess() {
    setShowAllAccounts(true);
  }
  return (
    <section className={cx('wrapper')}>
      {/* label */}
      <h4 className={cx('label')}>{label}</h4>

      {/* Accounts List */}
      {renderAccounts.map((accoutns) => (
        <SidebarAccountItem key={accoutns.id} suggAccInfors={accoutns} />
      ))}

      {/* show btn */}
      {showAllAccounts && (
        <span onClick={handleShowAll} className={cx('btn-show')}>
          See all
        </span>
      )}
      {!showAllAccounts && (
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
};

export default SidebarAccountsList;
