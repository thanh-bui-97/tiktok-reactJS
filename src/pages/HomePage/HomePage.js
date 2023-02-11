// libraries
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
// components
import AuthorItem from './AuthorItem';
import * as videosService from '~/services/videosService';
// SCSS modules
import style from './HomePage.module.scss';
const cx = classNames.bind(style);

function HomePage() {
  const [listVideos, setListVideos] = useState([]);
  const [page, setPage] = useState(0);
  const [fetchLoading, setFetchLoading] = useState(false);
  const homePageRef = useRef(null);

  // fetch videos: type "For-You"-----------------
  useEffect(() => {
    async function fetchVideosApi() {
      // .getVideos(type, page, except)
      const suggestedListVideos = await videosService.getVideos('for-you', page, null);
      if (suggestedListVideos) {
        setListVideos((prev) => [...prev, ...suggestedListVideos]);
      }
    }
    fetchVideosApi();
  }, [page]);

  // fetch more videos when scroll to max point ---------------
  useEffect(() => {
    window.addEventListener('scroll', handleFetchMoreVideos);
    return () => window.removeEventListener('scroll', handleFetchMoreVideos);
  }, []);

  function handleFetchMoreVideos() {
    if (homePageRef !== null) {
      if (window.innerHeight + window.scrollY >= homePageRef.current.offsetHeight) {
        setFetchLoading(true);
        setPage((page) => page + 1);
        setTimeout(() => {
          setFetchLoading(false);
        }, 2000);
      }
    }
  }

  return (
    <section ref={homePageRef} className={cx('wrapper')}>
      {listVideos.map((video, index) => (
        <AuthorItem key={index} videoData={video} />
      ))}

      {fetchLoading && <div className={cx('loading--animation--icon')} />}
    </section>
  );
}

export default HomePage;
