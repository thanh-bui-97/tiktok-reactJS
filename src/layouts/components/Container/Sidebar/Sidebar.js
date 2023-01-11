// libraries
import PropTypes from 'prop-types';
import { memo } from 'react';
import classNames from 'classnames/bind';
import Scrollbars from 'react-custom-scrollbars';
// components
import NavMenu from './NavMenu';
import SidebarAccountsList from './SidebarAccounts';
import Hashtag from './Hashtags/Hashtags';
import SidebarFooter from './SidebarFooter';
import SidebarLogin from './SidebarLogin';
// config routes
import config from '~/config';
// SCSS module
import style from './Sidebar.module.scss';
const cx = classNames.bind(style);

const USER_HASHTAG_LIST = [
  { discription: 'text', contents: 'suthatla' },
  { discription: 'text', contents: 'mackedoi' },
  { discription: 'text', contents: 'sansangthaydoi' },
  { discription: 'music', contents: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n' },
  { discription: 'music', contents: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng' },
  { discription: 'music', contents: 'Thiên Thần Tình Yêu - RICKY STAR' },
  { discription: 'text', contents: '7749hieuung' },
  { discription: 'text', contents: 'genzlife' },
  { discription: 'music', contents: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn' },
  { discription: 'music', contents: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham' },
];

const FOOTER_DATA_COMPANY = [
  { title: 'About', to: config.routes.aboutPage },
  { title: 'Newsroom', path: '#' },
  { title: 'Contact', to: config.routes.aboutPage },
  { title: 'Careers', path: '#' },
  { title: 'ByteDance', path: '#' },
];
const FOOTER_DATA_PROGRAMS = [
  { title: 'TikTok for Good', to: config.routes.aboutPage },
  { title: 'Advertise', to: config.routes.aboutPage },
  { title: 'Developers', path: '#' },
  { title: 'Transparency', to: config.routes.aboutPage },
  { title: 'TikTok Rewards', to: config.routes.aboutPage },
  { title: 'TikTok Browse', to: config.routes.aboutPage },
  { title: 'TikTok Embeds', to: config.routes.aboutPage },
];
const FOOTER_DATA_POLICIES = [
  { title: 'Help', path: '#' },
  { title: 'Safety', to: config.routes.aboutPage },
  { title: 'Term', to: config.routes.aboutPage },
  { title: 'Privacy', to: config.routes.aboutPage },
  { title: 'Creator Potal', to: config.routes.aboutPage },
  { title: 'Community Guidelines', to: config.routes.aboutPage },
];
const currentUser = false;

function CustomScrollbars({ children }) {
  return (
    <Scrollbars
      autoHide
      // autoHideTimeout={1000}
      autoHideDuration={400}
      renderThumbVertical={(props) => <div {...props} className={cx('thumb-vertical')} />}
      renderTrackVertical={(props) => <div {...props} className={cx('track-vertical')} />}
    >
      {children}
    </Scrollbars>
  );
}

function defaultFtn() {}
function Sidebar({ onShowAuthen = defaultFtn }) {
  return (
    <aside className={cx('wrapper')}>
      <CustomScrollbars>
        <section className={cx('container')}>
          <NavMenu />
          {!currentUser && (
            <SidebarLogin
              label="Log in to follow creators, like videos, and view comments."
              onShowAuthen={onShowAuthen}
            />
          )}

          <SidebarAccountsList label="Suggested accounts" />
          {currentUser && <SidebarAccountsList label="Following accounts" currentUser={currentUser} />}

          <Hashtag hashtagList={USER_HASHTAG_LIST} />
          <SidebarFooter
            companyData={FOOTER_DATA_COMPANY}
            programsData={FOOTER_DATA_PROGRAMS}
            policiesData={FOOTER_DATA_POLICIES}
          />
        </section>
      </CustomScrollbars>
    </aside>
  );
}
// set rules for props of components
Sidebar.propTypes = {
  onShowAuthen: PropTypes.func.isRequired,
};
CustomScrollbars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Sidebar);
