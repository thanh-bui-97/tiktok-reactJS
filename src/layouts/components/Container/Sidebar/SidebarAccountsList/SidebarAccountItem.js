// library
import classNames from 'classnames/bind';
// components
import { CircleCheckSolidIcon } from '~/components/Icons';
import Images from '~/components/Images';
import AccountPreview from '~/components/Popper/AccountPreview';
// SCSS module
import style from './SidebarAccountsList.module.scss';
const cx = classNames.bind(style);

function SidebarAccountItem() {
  return (
    <AccountPreview>
      <div className={cx('account-item')}>
        <Images
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1669208400&x-signature=YKRWKhTajszR9KGf7sYPs%2FE4MwQ%3D"
          alt=""
        />
        <div>
          <h4 className={cx('nick-name')}>
            theanh28entertainment
            <span className={cx('check')}>
              <CircleCheckSolidIcon />
            </span>
          </h4>
          <p className={cx('full-name')}>Theanh28 Entertainment</p>
        </div>
      </div>
    </AccountPreview>
  );
}

export default SidebarAccountItem;
