import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccountItems.module.scss';

const cx = classNames.bind(style);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9920a8fe5bd046500b779805f9d5116b~c5_300x300.webp?x-expires=1666965600&x-signature=EqAuHSZG94XEvekRvbNDVRXkFzk%3D"
        alt="huyenbaby"
      />
      <div className={cx('infor')}>
        <h4 className={cx('nick-name')}>
          <span>huyenbaby_official</span>
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
        </h4>
        <p className={cx('full-name')}>Huyen Baby</p>
      </div>
    </div>
  );
}

export default AccountItem;
