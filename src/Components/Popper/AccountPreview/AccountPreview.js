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

function AccountPreview({ children }) {
  function accountPreviewBox(props) {
    return (
      <PopperWrapper>
        <div className={cx('wrapper')} tabIndex="-1" {...props}>
          <header className={cx('header')}>
            <Images
              className={cx('avatar')}
              src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1669208400&x-signature=YKRWKhTajszR9KGf7sYPs%2FE4MwQ%3D"
              alt=""
            />
            <Button primary className={cx('follow-btn')}>
              Follow
            </Button>
          </header>
          <section className={cx('body')}>
            <h4 className={cx('nick-name')}>
              theanh28entertainment
              <span className={cx('check')}>
                <CircleCheckSolidIcon />
              </span>
            </h4>
            <p className={cx('full-name')}>Theanh28 Entertainment</p>
          </section>
          <footer className={cx('footer')}>
            <span className={cx('number')}>8.15M</span>
            <span className={cx('label')}>Followers</span>
            <span className={cx('number')}>700.17M</span>
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
};

export default AccountPreview;
