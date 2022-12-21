// libraries
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { memo } from 'react';
// SCSS module config
import style from './SidebarFooter.module.scss';
const cx = classNames.bind(style);

function SidebarFooter({ companyData, programsData, policiesData }) {
  return (
    <footer className={cx('wrapper')}>
      <section className={cx('group')}>
        {companyData.map((data, index) => {
          if (data.to) {
            return (
              <Link key={index} to={data.to}>
                {data.title}
              </Link>
            );
          } else {
            return (
              <a key={index} href={data.path}>
                {data.title}
              </a>
            );
          }
        })}
      </section>
      <section className={cx('group')}>
        {programsData.map((data, index) => {
          if (data.to) {
            return (
              <Link key={index} to={data.to}>
                {data.title}
              </Link>
            );
          } else {
            return (
              <a key={index} href={data.path}>
                {data.title}
              </a>
            );
          }
        })}
      </section>
      <section className={cx('group')}>
        {policiesData.map((data, index) => {
          if (data.to) {
            return (
              <Link key={index} to={data.to}>
                {data.title}
              </Link>
            );
          } else {
            return (
              <a key={index} href={data.path}>
                {data.title}
              </a>
            );
          }
        })}
      </section>
      <span className={cx('copy-right')}>© 2022 TikTok</span>
    </footer>
  );
}

// set rules for props of components
SidebarFooter.propTypes = {
  companyData: PropTypes.array.isRequired,
  programsData: PropTypes.array.isRequired,
  policiesData: PropTypes.array.isRequired,
};

export default memo(SidebarFooter);
