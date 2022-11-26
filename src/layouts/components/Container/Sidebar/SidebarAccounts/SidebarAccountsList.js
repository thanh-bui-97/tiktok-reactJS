// Library
import PropTypes from 'prop-types';
import SidebarAccountItem from './SidebarAccountItem';
import classNames from 'classnames/bind';
// SCSS module
import style from './SidebarAccounts.module.scss';
const cx = classNames.bind(style);

function SidebarAccountsList({ label }) {
  return (
    <section className={cx('wrapper')}>
      <h4 className={cx('label')}>{label}</h4>
      <SidebarAccountItem />
      <SidebarAccountItem />
      <SidebarAccountItem />
      <SidebarAccountItem />
      <SidebarAccountItem />
      <p className={cx('btn-show')}>See all</p>
    </section>
  );
}

// set rules for props of components
SidebarAccountsList.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SidebarAccountsList;
