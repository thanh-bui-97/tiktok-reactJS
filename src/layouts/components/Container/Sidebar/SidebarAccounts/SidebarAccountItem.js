// library
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// components
import { CircleCheckSolidIcon } from '~/components/Icons';
import Images from '~/components/Images';
import AccountPreview from '~/components/Popper/AccountPreview';
// SCSS module
import style from './SidebarAccounts.module.scss';
const cx = classNames.bind(style);

function SidebarAccountItem({ suggAccInfors }) {
  return (
    <AccountPreview
      avatar={suggAccInfors.avatar}
      nickname={suggAccInfors.nickname}
      firstName={suggAccInfors.first_name}
      lastName={suggAccInfors.last_name}
      tick={suggAccInfors.tick}
      likes={suggAccInfors.likes_count}
      followers={suggAccInfors.followers_count}
    >
      <div className={cx('account-item')}>
        <Images className={cx('avatar')} src={suggAccInfors.avatar} alt={suggAccInfors.nickname} />
        <div>
          <h4 className={cx('nick-name')}>
            {suggAccInfors.nickname}
            {suggAccInfors.tick && (
              <span className={cx('check')}>
                <CircleCheckSolidIcon />
              </span>
            )}
          </h4>
          <p className={cx('full-name')}>{suggAccInfors.last_name + ' ' + suggAccInfors.first_name}</p>
        </div>
      </div>
    </AccountPreview>
  );
}

// set rules for props of components
SidebarAccountItem.propTypes = {
  suggAccInfors: PropTypes.object.isRequired,
};

export default SidebarAccountItem;
