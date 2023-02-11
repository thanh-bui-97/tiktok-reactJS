// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useCallback, useEffect, useRef, useState } from 'react';
// components
import Button from '~/components/Button';
import {
  CircleCheckSolidIcon,
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
import AccountPreview from '~/components/Popper/AccountPreview';
const cx = classNames.bind(style);

const currentUser = true;

function AuthorItem({ videoData }) {
  const [likedBtn, setLikedBtn] = useState(false); //liked button
  const [following, setFollowing] = useState(false); // follow button
  const [showAuthen, setShowAuthen] = useState(false); // Authen
  const [triggerClasses, setTriggerClasses] = useState('remove-modal'); // Authen
  const [volumeValues, setVolumeValues] = useState(50); //dash boad video --volume slider
  const [soundOn, setSoundOn] = useState(true); //dash boad video --volume on/off button
  const [videoPlaying, setVideoPlaying] = useState(false); //dash boad video  --play/pause button
  const [showReportModal, setShowReportModal] = useState(false); //report modal
  const progressRef = useRef('');
  const videoRef = useRef('');

  // follow button logic ---------
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

  // dash boad video logic -------------------
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
    // play/pause video
    if (videoPlaying) {
      setVideoPlaying(false);
      videoRef.current.pause();
    } else {
      setVideoPlaying(true);
      videoRef.current.play();
    }
  }

  function handleVideoWhenScroll() {
    // pause video when scrolling
    const videoPosition = videoRef.current.getBoundingClientRect();
    if (
      videoPosition.top >= 0 &&
      videoPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      setVideoPlaying(true);
      videoRef.current.play();
    } else {
      setVideoPlaying(false);
      videoRef.current.pause();
    }
  }
  useEffect(() => {
    // pause video when scrolling
    window.addEventListener('scroll', handleVideoWhenScroll);
    return () => window.removeEventListener('scroll', handleVideoWhenScroll);
  }, []);

  function handleToggleSound() {
    if (soundOn) {
      setSoundOn(false);
    } else {
      setSoundOn(true);
    }
  }

  // options: likes, comments, share logic---------------
  function handleSelectOption() {
    if (likedBtn) {
      setLikedBtn(false);
    } else {
      setLikedBtn(true);
    }
  }

  // Authen modal --------
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

    // remove component
    setTimeout(() => {
      setTriggerClasses('remove-modal');
    }, 500);
  }, []);

  // Report Modal -----------------
  const handleShowReportModal = useCallback(() => {
    setShowReportModal(true);
  }, []);
  const handleHideReportModal = useCallback(() => {
    setShowReportModal(false);
  }, []);

  return (
    <section className={cx('author--container')}>
      {/* avatar */}
      <AccountPreview
        avatar={videoData.user.avatar}
        nickname={videoData.user.nickname}
        firstName={videoData.user.first_name}
        lastName={videoData.user.last_name}
        tick={videoData.user.tick}
        likes={videoData.user.likes_count}
        followers={videoData.user.followers_count}
        delay={[800, 200]} //show/hide
        placement="bottom-start" //check "all props" in tippy library
      >
        <span className={cx('author--avatar')}>
          <Images src={videoData.user.avatar} alt={videoData.user.nickname} />
        </span>
      </AccountPreview>

      <section className={cx('author--dash--boad')}>
        {/* dash boad author information  */}
        <section className={cx('dash--boad--header')}>
          <AccountPreview
            avatar={videoData.user.avatar}
            nickname={videoData.user.nickname}
            firstName={videoData.user.first_name}
            lastName={videoData.user.last_name}
            tick={videoData.user.tick}
            likes={videoData.user.likes_count}
            followers={videoData.user.followers_count}
            delay={[800, 200]} //show/hide
            placement="bottom-start" //check "all props" in tippy library
          >
            <span className={cx('header__name')}>
              <h3 className={cx('nickname')}>
                {videoData.user.nickname}
                {videoData.user.tick && (
                  <span className={cx('check')}>
                    <CircleCheckSolidIcon />
                  </span>
                )}
              </h3>
              <h4 className={cx('fullname')}>{`${videoData.user.last_name} ${videoData.user.first_name}`}</h4>
            </span>
          </AccountPreview>

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
          <div
            style={
              (videoData.meta.video.resolution_x < videoData.meta.video.resolution_y && { maxWidth: '273px' }) ||
              (videoData.meta.video.resolution_x === videoData.meta.video.resolution_y && { maxWidth: '463px' }) ||
              (videoData.meta.video.resolution_x > videoData.meta.video.resolution_y && { width: '486px' })
            }
            className={cx('video--container')}
          >
            {/* video tag */}
            <video ref={videoRef} src={videoData.file_url} muted={!soundOn} loop type="video/mp4" />
            <div className={cx('video--controls')}>
              {/* report */}
              <span onClick={handleShowReportModal} className={cx('report')}>
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
              <button className={cx('option--item__icon__background')}>
                <span className={cx('option--item__icon')}>
                  <MessageDotIcon />
                </span>
              </button>
              <strong className={cx('option--item__count')}>349.4K</strong>
            </div>
            <div className={cx('option--item')}>
              <ShareExpander>
                <button className={cx('option--item__icon__background')}>
                  <span className={cx('option--item__icon')}>
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
      <ReportModal isShow={showReportModal} onHideReportModal={handleHideReportModal} />
    </section>
  );
}

// Set rules for props of component
AuthorItem.propTypes = {
  videoData: PropTypes.object.isRequired,
};

export default AuthorItem;
