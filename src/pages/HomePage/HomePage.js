// libraries
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
// components
import AuthorItem from './AuthorItem';
import * as videosService from '~/services/videosService';
// SCSS modules
import style from './HomePage.module.scss';
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
