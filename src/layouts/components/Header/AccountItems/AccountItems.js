// library
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// components
import Image from '~/components/Images';
// SCSS module
import style from './AccountItems.module.scss';
const cx = classNames.bind(style);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('infor')}>
        <h4 className={cx('nick-name')}>
          <span>{data.nickname}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
        </h4>
        <p className={cx('full-name')}>{data.full_name}</p>
      </div>
    </Link>
  );
}

// set rules for props of components
AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
