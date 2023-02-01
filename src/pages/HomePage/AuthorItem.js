// libraries
import classNames from 'classnames/bind';
import { useCallback, useEffect, useRef, useState } from 'react';
// components
import Button from '~/components/Button';
import {
  FlagReportIcon,
  HeartIcon,
  MessageDotIcon,
  MusicIcon,
  PauseArrowIcon,
  PlayArrowIcon,
  ShareIcon,
  VolumeOffIcon,
  VolumeOnIcon,
} from '~/components/Icons';
import Images from '~/components/Images';
import Authen from '~/components/Authen';
import ShareExpander from '~/components/Popper/ShareExpander';
import ReportModal from '~/components/Popper/ReportModal';
// SCSS module
import style from './HomePage.module.scss';
const cx = classNames.bind(style);

const currentUser = true;

function AuthorItem({ videoData }) {
  const [likedBtn, setLikedBtn] = useState(false); //liked button
  const [following, setFollowing] = useState(false); // follow button
  const [showAuthen, setShowAuthen] = useState(false); // Authen
  const [triggerClasses, setTriggerClasses] = useState('remove-modal'); // Authen
  const [volumeValues, setVolumeValues] = useState(50); //dash boad video --volume slider
  const [soundOn, setSoundOn] = useState(true); //dash boad video --volume on/off
  const [videoPlaying, setVideoPlaying] = useState(false); //dash boad video  --play/pause
  const progressRef = useRef('');
  const videoRef = useRef('');

  // console.log(volumeValues);

  // console.log(videoData);

  function handleSelectOption() {
    if (likedBtn) {
      setLikedBtn(false);
    } else {
      setLikedBtn(true);
    }
  }

  // Authen --------
  useEffect(() => {
    // prevent scroll global behavior when open modal
    document.body.classList.toggle(cx('modal-open'), showAuthen);
  }, [showAuthen]);

  const handleShowAuthen = useCallback(() => {
    setShowAuthen(true);
    setTriggerClasses('show-modal');
  }, []);

  const handleHideAuthen = useCallback(() => {
    setShowAuthen(false);
    setTriggerClasses('hide-modal');

    // remover component
    setTimeout(() => {
      setTriggerClasses('remove-modal');
    }, 500);
  }, []);

  // follow button ------
  function handleFollow() {
    if (following) {
      setFollowing(false);
    } else {
      if (!currentUser) {
        handleShowAuthen();
      } else {
        setFollowing(true);
      }
    }
  }

  // dash boad video logic ----------
  useEffect(() => {
    // handle volume logic
    videoRef.current.volume = volumeValues * 0.01;
  }, [volumeValues]);

  function handleSliderVolume() {
    // custom volume slider
    setVolumeValues(progressRef.current.value);
    progressRef.current.style.backgroundSize = volumeValues + '% 100%';
  }

  function handleToggleVideo() {
    // handle play/pause video
    if (videoPlaying) {
      setVideoPlaying(false);
      videoRef.current.pause();
    } else {
      setVideoPlaying(true);
      videoRef.current.play();
    }

    // how to handle pause videos when sroll out of video
    // document.body.onscroll = () => {
    //   const videoPosition = videoRef.current.getBoundingClientRect();
    //   if (videoPosition.bottom <= 250) {
    //     setVideoPlaying(false);
    //     videoRef.current.pause();
    //   }
    // };
  }

  function handleToggleSound() {
    if (soundOn) {
      setSoundOn(false);
    } else {
      setSoundOn(true);
    }
  }

  return (
    <section className={cx('author--container')}>
      {/* avatar */}
      <span className={cx('author--avatar')}>
        <Images src={videoData.user.avatar} alt={videoData.user.nickname} />
      </span>
      <section className={cx('author--dash--boad')}>
        {/* dash boad author information  */}
        <section className={cx('dash--boad--header')}>
          <span className={cx('header__name')}>
            <h3 className={cx('nickname')}>{videoData.user.nickname}</h3>
            <h4 className={cx('fullname')}>{`${videoData.user.last_name} ${videoData.user.first_name}`}</h4>
          </span>
          <div className={cx('header__captions')}>
            <p className={cx('text')}>{videoData.description}</p>
            <span className={cx('tag--person')}>
              <strong>''</strong>
            </span>
          </div>
          <div className={cx('header__music')}>
            <MusicIcon className={cx('music--icon')} />
            <h4 className={cx('music--name')}>{videoData.music}</h4>
          </div>

          {/* follow */}
          {following ? (
            <Button text small className={cx('follow--btn')} onClick={handleFollow}>
              Following
            </Button>
          ) : (
            <Button outline small className={cx('follow--btn')} onClick={handleFollow}>
              Follow
            </Button>
          )}
        </section>

        {/* dash boad play video */}
        <section className={cx('dash--boad--body')}>
          <div className={cx('video--container')}>
            {/* video tag */}
            <video ref={videoRef} src={videoData.file_url} muted={!soundOn} loop type="video/mp4" />
            <div className={cx('video--controls')}>
              {/* report */}
              <span className={cx('report')}>
                <span className={cx('report--icon')}>
                  <FlagReportIcon />
                </span>
                <p>Report</p>
              </span>

              {/* play/pause */}
              <span onClick={handleToggleVideo} className={cx('play--pause')}>
                {videoPlaying && <PauseArrowIcon />}
                {!videoPlaying && <PlayArrowIcon />}
              </span>

              {/* volume */}
              <span className={cx('volume')}>
                <span onClick={handleToggleSound} className={cx('volume--icon')}>
                  {soundOn && <VolumeOnIcon />}
                  {!soundOn && <VolumeOffIcon />}
                </span>
                <span className={cx('volume--progress')}>
                  <input
                    ref={progressRef}
                    className={cx('volume--input')}
                    type="range"
                    name="volume"
                    min="0"
                    max="100"
                    value={volumeValues}
                    onChange={handleSliderVolume}
                  />
                </span>
              </span>
            </div>
          </div>

          {/* options */}
          <div className={cx('option--list')}>
            <div className={cx('option--item')}>
              <button
                className={cx('option--item__icon__background', {
                  activeBC: likedBtn,
                })}
                onClick={handleSelectOption}
                onDoubleClick={handleSelectOption}
              >
                <span
                  onClick={handleSelectOption}
                  className={cx('option--item__icon', {
                    activeC: likedBtn,
                  })}
                >
                  <HeartIcon />
                </span>
              </button>
              <strong className={cx('option--item__count')}>349.4K</strong>
            </div>
            <div className={cx('option--item')}>
              <button
                className={cx('option--item__icon__background')}
                onClick={handleSelectOption}
                onDoubleClick={handleSelectOption}
              >
                <span onClick={handleSelectOption} className={cx('option--item__icon')}>
                  <MessageDotIcon />
                </span>
              </button>
              <strong className={cx('option--item__count')}>349.4K</strong>
            </div>
            <div className={cx('option--item')}>
              <ShareExpander>
                <button
                  className={cx('option--item__icon__background')}
                  onClick={handleSelectOption}
                  onDoubleClick={handleSelectOption}
                >
                  <span onClick={handleSelectOption} className={cx('option--item__icon')}>
                    <ShareIcon />
                  </span>
                </button>
              </ShareExpander>
              <strong className={cx('option--item__count')}>349.4K</strong>
            </div>
          </div>
        </section>
      </section>

      {/* Modal */}
      <Authen onHideAuthen={handleHideAuthen} triggerClasses={triggerClasses} />
      <ReportModal />
    </section>
  );
}

export default AuthorItem;
