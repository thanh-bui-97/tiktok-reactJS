// library
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
// components
import Image from '~/components/Images';
import { CircleCheckSolidIcon } from '~/components/Icons';
// SCSS module
import style from './HeaderAccountItem.module.scss';
const cx = classNames.bind(style);

function HeaderAccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('infor')}>
        <h4 className={cx('nick-name')}>
          <span>{data.nickname}</span>
          {data.tick && <CircleCheckSolidIcon className={cx('check')} />}
        </h4>
        <p className={cx('full-name')}>{data.full_name}</p>
      </div>
    </Link>
  );
}

// set rules for props of components
HeaderAccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HeaderAccountItem;
