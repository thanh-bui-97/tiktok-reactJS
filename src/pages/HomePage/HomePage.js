import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import AuthorItem from './AuthorItem';
import style from './HomePage.module.scss';
import * as videosService from '~/services/videosService';

const cx = classNames.bind(style);

function HomePage() {
  const [listVideos, setListVideos] = useState([]);

  // fetch videos "For-You"
  useEffect(() => {
    async function fetchVideosApi() {
      // .getVideos(type, page, except)
      const suggestedListVideos = await videosService.getVideos();
      if (suggestedListVideos) {
        setListVideos(suggestedListVideos);
      }
    }
    fetchVideosApi();

    // cancel the request before component unmounts
    // return () => {
    //   videosService.controller.abort();
    // };
  }, []);

  return (
    <section className={cx('wrapper')}>
      {listVideos.map((video) => (
        <AuthorItem key={video.id} videoData={video} />
      ))}
    </section>
  );
}

export default HomePage;
