import PropTypes from 'prop-types';
import SuggestedAccountItem from './SuggestedAccountItem';
import classNames from 'classnames/bind';
import style from './SuggestedAccounts.module.scss';
const cx = classNames.bind(style);

function SuggestedAccounts({ label }) {
  return (
    <section className={cx('wrapper')}>
      <h4 className={cx('label')}>{label}</h4>
      <SuggestedAccountItem />
      <SuggestedAccountItem />
      <SuggestedAccountItem />
      <SuggestedAccountItem />
      <SuggestedAccountItem />
      <p className={cx('btn-show')}>See all</p>
    </section>
  );
}

// set rules for props of components
SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
