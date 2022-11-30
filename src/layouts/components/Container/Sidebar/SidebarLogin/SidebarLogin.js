// library
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// components
import Button from '~/components/Button';
// SCSS module
import style from './SidebarLogin.module.scss';
const cx = classNames.bind(style);

function SidebarLogin({ label }) {
  return (
    <section className={cx('wrapper')}>
      <h4 className={cx('label')}>{label}</h4>
      <Button outline large className={cx('login--btn')}>
        Log in
      </Button>
    </section>
  );
}

// set rules for props of components
SidebarLogin.propTypes = {
  label: PropTypes.string,
};

export default SidebarLogin;
