// libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// components
import Button from '~/components/Button';
import { UpToLineIcon } from '~/components/Icons';
// SCSS module
import style from './MainContainer.module.scss';
const cx = classNames.bind(style);

function MainContainer({ children }) {
  return (
    <main className={cx('warpper')}>
      {children}
      <div className={cx('float-btn-group')}>
        <Button text router medium className={cx('download-btn')}>
          Get app
        </Button>
        <Button primary iconOnly className={cx('up-to-top-btn')}>
          <UpToLineIcon />
        </Button>
      </div>
    </main>
  );
}

// set rules for props of the component
MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
