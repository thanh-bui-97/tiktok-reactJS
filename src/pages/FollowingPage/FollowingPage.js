// libraries
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
// components
import RecommendCard from './RecommendCard';
// services
import * as accountsService from '~/services/accountsService';
// SCSS module
import style from './FollowingPage.module.scss';
const cx = classNames.bind(style);

const currentUser = false;

function FollowingPage() {
  const [recommendCards, setRecommendCards] = useState([]);

  useEffect(() => {
    async function fetchAccountsApi() {
      if (currentUser) {
        // log-in mode------------------
        // if user has already followingAccounts, show following accounts only
        // if not, show suggested accounts
        // const followingAccountsList = await accountsService.getFollowingAccounts(1);
      } else {
        // log-out mode--------------------
        // only show suggested accounts
        const suggestedAccountsList = await accountsService.getSuggestedAccounts(1, [], 20);
        setRecommendCards(suggestedAccountsList);
      }
    }
    fetchAccountsApi();
  }, []);

  return (
    <section className={cx('wrapper')}>
      {recommendCards.map((userCard, index) => (
        <RecommendCard key={index} cardData={userCard} />
      ))}
    </section>
  );
}

export default FollowingPage;
