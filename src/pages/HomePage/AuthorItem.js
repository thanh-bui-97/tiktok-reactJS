// libraries
import classNames from 'classnames/bind';
import { useCallback, useEffect, useState } from 'react';
// components
import Button from '~/components/Button';
import { HeartIcon, MessageDotIcon, MusicIcon, ShareIcon } from '~/components/Icons';
import Images from '~/components/Images';
import Authen from '~/components/Authen';
// SCSS module
import style from './HomePage.module.scss';
const cx = classNames.bind(style);

const currentUser = false;

function AuthorItem() {
  const [pressAction, setPressAction] = useState(false);
  // follow
  const [following, setFollowing] = useState(false);
  // authen
  const [showAuthen, setShowAuthen] = useState(false);
  const [triggerClasses, setTriggerClasses] = useState('remove-modal');

  function handlePressAction() {
    if (pressAction) {
      setPressAction(false);
    } else {
      setPressAction(true);
    }
  }

  // Authen
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

  // follow
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

  return (
    <section className={cx('author--container')}>
      {/* avatar */}
      <span className={cx('author--avatar')}>
        <Images src="" />
      </span>
      <section className={cx('author--dash--boad')}>
        {/* dash boad author information  */}
        <section className={cx('dash--boad--header')}>
          <span className={cx('header__name')}>
            <h3 className={cx('nickname')}>phanvanminh_</h3>
            <h4 className={cx('fullname')}>𝓥𝓪̆𝓷 𝓜𝓲𝓷𝓱</h4>
          </span>
          <div className={cx('header__captions')}>
            <p className={cx('text')}>Anh sẽ là một chàng trai luôn gánh vác tương lai cho em </p>
            <span className={cx('tag--person')}>
              <strong>@Võ Thị Diễm Hằng</strong>
            </span>
          </div>
          <div className={cx('header__music')}>
            <MusicIcon className={cx('music--icon')} />
            <h4 className={cx('music--name')}>Chàng Trai Của Em - Vietlouis Brobear #1 - Duy Văn Phạm & ACV</h4>
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
          {/* video */}
          <div className={cx('video')}></div>

          {/* options */}
          <div className={cx('option--list')}>
            <div className={cx('option--item')}>
              <button
                className={cx('option--item__icon__background', {
                  activeBC: pressAction,
                })}
                onClick={handlePressAction}
                onDoubleClick={handlePressAction}
              >
                <span
                  onClick={handlePressAction}
                  className={cx('option--item__icon', {
                    activeC: pressAction,
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
                onClick={handlePressAction}
                onDoubleClick={handlePressAction}
              >
                <span onClick={handlePressAction} className={cx('option--item__icon')}>
                  <MessageDotIcon />
                </span>
              </button>
              <strong className={cx('option--item__count')}>349.4K</strong>
            </div>
            <div className={cx('option--item')}>
              <button
                className={cx('option--item__icon__background')}
                onClick={handlePressAction}
                onDoubleClick={handlePressAction}
              >
                <span onClick={handlePressAction} className={cx('option--item__icon')}>
                  <ShareIcon />
                </span>
              </button>
              <strong className={cx('option--item__count')}>349.4K</strong>
            </div>
          </div>
        </section>
      </section>

      {/* Authen */}
      <Authen onHideAuthen={handleHideAuthen} triggerClasses={triggerClasses} />
    </section>
  );
}

export default AuthorItem;
