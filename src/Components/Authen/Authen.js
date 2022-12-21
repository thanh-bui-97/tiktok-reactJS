// libraries
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
// commponents
import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  KakaoTalkIcon,
  LineIcon,
  ProfileIcon,
  QrCodeIcon,
  TwitterIcon,
  XmarkIcon,
} from '../Icons';
import AuthenType from './AuthenType';
// config
import config from '~/config';
// SCSS module
import style from './Authen.module.scss';
const cx = classNames.bind(style);

const LOGIN_APPS = {
  title: 'Log in to TikTok',
  list: [
    { discrips: 'Use QR code', icon: <QrCodeIcon /> },
    { discrips: 'Use phone / email / username', icon: <ProfileIcon /> },
    { discrips: 'Continue with Facebook', icon: <FacebookIcon /> },
    { discrips: 'Continue with Google', icon: <GoogleIcon /> },
    { discrips: 'Continue with Twitter', icon: <TwitterIcon /> },
    { discrips: 'Continue with LINE', icon: <LineIcon /> },
    { discrips: 'Continue with KakaoTalk ', icon: <KakaoTalkIcon /> },
    { discrips: 'Continue with Apple ', icon: <AppleIcon /> },
    { discrips: 'Continue with Instagram ', icon: <InstagramIcon /> },
  ],
};
const SIGNUP_APPS = {
  title: 'Sign up for TikTok',
  list: [
    { discrips: 'Use phone or email', icon: <ProfileIcon /> },
    { discrips: 'Continue with Facebook', icon: <FacebookIcon /> },
    { discrips: 'Continue with Google', icon: <GoogleIcon /> },
  ],
  moreList: [
    { discrips: 'Use phone or email', icon: <ProfileIcon /> },
    { discrips: 'Continue with Facebook', icon: <FacebookIcon /> },
    { discrips: 'Continue with Google', icon: <GoogleIcon /> },
    { discrips: 'Continue with Twitter', icon: <TwitterIcon /> },
    { discrips: 'Continue with LINE', icon: <LineIcon /> },
    { discrips: 'Continue with KakaoTalk ', icon: <KakaoTalkIcon /> },
  ],
};

function defaultFtn() {}
function Authen({ onHideAuthen = defaultFtn, triggerClasses }) {
  const [signUpMode, setSignUpMode] = useState(false);

  function onSignUp() {
    setSignUpMode(true);
  }
  function onLogIn() {
    setSignUpMode(false);
  }
  return createPortal(
    <article className={cx('backdrop', { [triggerClasses]: true })}>
      <dialog className={cx('authen', { [triggerClasses]: true })}>
        {/* authen body */}
        <section className={cx('authen--body')}>
          <div className={cx('container')}>
            <AuthenType signUpMode={signUpMode} appData={signUpMode ? SIGNUP_APPS : LOGIN_APPS} />
          </div>
        </section>

        {/* Login-policy */}
        {signUpMode && (
          <section className={cx('authen--policy')}>
            <p className={cx('text')}>
              By continuing, you agree to TikTok's <Link to={config.routes.about}>Terms of Service</Link> and confirm
              that you have read TikTok's <Link to={config.routes.about}>Privacy Policy</Link>.
            </p>
          </section>
        )}

        {/* authen footer */}
        {signUpMode ? (
          <footer className={cx('authen--footer')}>
            <p>Already have an account?</p>
            <span onClick={onLogIn} className={cx('sign--btn')}>
              Log in
            </span>
          </footer>
        ) : (
          <footer className={cx('authen--footer')}>
            <p>Don't have an account?</p>
            <span onClick={onSignUp} className={cx('sign--btn')}>
              Sign up
            </span>
          </footer>
        )}

        {/* Close btn */}
        <span onClick={onHideAuthen} className={cx('authen--close')}>
          <XmarkIcon />
        </span>
      </dialog>
    </article>,
    document.body,
  );
}

// set rules for props of components
Authen.propTypes = {
  onHideAuthen: PropTypes.func.isRequired,
  triggerClasses: PropTypes.string.isRequired,
};

export default memo(Authen);
