// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useCallback, useEffect, useRef, useState } from 'react';
// components
import Button from '~/components/Button';
import Image from '~/components/Images/Images';
import Authen from '~/components/Authen';
import { CircleCheckSolidIcon } from '~/components/Icons';
// SCSS module
import style from './FollowingPage.module.scss';
const cx = classNames.bind(style);

const currentUser = false;

function RecommendCard({ cardData }) {
  const [showAuthen, setShowAuthen] = useState(false); // Authen
  const [triggerClasses, setTriggerClasses] = useState('remove-modal'); // Authen
  const [following, setFollowing] = useState(false); // follow button
  const videoRef = useRef(null);

  // logic auto play video when user hover----------
  function handleMouseOver() {
    videoRef.current.play();
  }
  function handleMouseOut() {
    videoRef.current.pause();
  }

  // logic follow button-----------
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

  return (
    <section onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={cx('card--wrapper')}>
      <video ref={videoRef} className={cx('video')} src={cardData.popular_video.file_url} loop type="video/mp4" muted />
      <div className={cx('card--infor')}>
        <span>
          <Image className={cx('avatar')} src={cardData.avatar} alt={cardData.nickname} />
        </span>
        <h5 className={cx('full--name')}>{cardData.first_name + cardData.last_name}</h5>
        <h6 className={cx('nick--name')}>
          {cardData.nickname}

          {cardData.tick && (
            <span className={cx('check')}>
              <CircleCheckSolidIcon width="12" height="12" />
            </span>
          )}
        </h6>
        {following ? (
          <Button text className={cx('following--btn')} onClick={handleFollow}>
            Following
          </Button>
        ) : (
          <Button primary className={cx('follow--btn')} onClick={handleFollow}>
            Follow
          </Button>
        )}
      </div>

      {/* Modal */}
      <Authen onHideAuthen={handleHideAuthen} triggerClasses={triggerClasses} />
    </section>
  );
}

// set rules for props of component
RecommendCard.propType = {
  cardData: PropTypes.object.isRequired,
};

export default RecommendCard;
