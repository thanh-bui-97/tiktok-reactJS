// libraries
import { useEffect, useRef, useState } from 'react';
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
  const [page, setPage] = useState(1);
  const followingPageRef = useRef(null);

  // fetch API videos
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
        const suggestedAccountsList = await accountsService.getSuggestedAccounts(page, [], 15);
        if (suggestedAccountsList) {
          setRecommendCards((prev) => [...prev, ...suggestedAccountsList]);
        }
      }
    }
    fetchAccountsApi();
  }, [page]);

  // fetch more videos when scroll to max point ---------------
  useEffect(() => {
    window.addEventListener('scroll', handleFetchMoreVideos);
    return () => window.removeEventListener('scroll', handleFetchMoreVideos);
  }, []);

  function handleFetchMoreVideos() {
    if (followingPageRef !== null) {
      if (window.innerHeight + window.scrollY >= followingPageRef.current.offsetHeight) {
        setPage((page) => page + 1);
      }
    }
  }

  return (
    <section ref={followingPageRef} className={cx('wrapper')}>
      {recommendCards.map((userCard, index) => (
        <RecommendCard key={index} cardData={userCard} />
      ))}
    </section>
  );
}

export default FollowingPage;
