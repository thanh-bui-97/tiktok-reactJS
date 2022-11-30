// library
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
// components
import PopperWrapper from '../PopperWrapper';
import Images from '~/components/Images';
import Button from '~/components/Button';
import { CircleCheckSolidIcon } from '~/components/Icons';
// SCSS module
import style from './AccountPreview.module.scss';
const cx = classNames.bind(style);

function AccountPreview({ children, avatar, nickname, firstName, lastName, tick, likes, followers }) {
  function accountPreviewBox(props) {
    return (
      <PopperWrapper>
        <div className={cx('wrapper')} tabIndex="-1" {...props}>
          <header className={cx('header')}>
            <Images className={cx('avatar')} src={avatar} alt={nickname} />
            <Button primary className={cx('follow-btn')}>
              Follow
            </Button>
          </header>
          <section className={cx('body')}>
            <h4 className={cx('nick-name')}>
              {nickname}
              {tick && (
                <span className={cx('check')}>
                  <CircleCheckSolidIcon />
                </span>
              )}
            </h4>
            <p className={cx('full-name')}>{lastName + ' ' + firstName}</p>
          </section>
          <footer className={cx('footer')}>
            <span className={cx('number')}>{followers}</span>
            <span className={cx('label')}>Followers</span>
            <span className={cx('number')}>{likes}</span>
            <span className={cx('label')}>Likes</span>
          </footer>
        </div>
      </PopperWrapper>
    );
  }
  return (
    <div>
      <Tippy offset={[-17, 0]} delay={[800, 200]} interactive placement="bottom" render={accountPreviewBox}>
        {children}
      </Tippy>
    </div>
  );
}

// set rules for props of component
AccountPreview.propTypes = {
  children: PropTypes.node.isRequired,
  avatar: PropTypes.string,
  nickname: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  tick: PropTypes.bool,
  likes: PropTypes.number,
  followers: PropTypes.number,
};

export default AccountPreview;
