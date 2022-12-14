// library
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
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
  { title: 'About', to: config.routes.about },
  { title: 'Newsroom', path: '#' },
  { title: 'Contact', to: config.routes.about },
  { title: 'Careers', path: '#' },
  { title: 'ByteDance', path: '#' },
];
const FOOTER_DATA_PROGRAMS = [
  { title: 'TikTok for Good', to: config.routes.about },
  { title: 'Advertise', to: config.routes.about },
  { title: 'Developers', path: '#' },
  { title: 'Transparency', to: config.routes.about },
  { title: 'TikTok Rewards', to: config.routes.about },
  { title: 'TikTok Browse', to: config.routes.about },
  { title: 'TikTok Embeds', to: config.routes.about },
];
const FOOTER_DATA_POLICIES = [
  { title: 'Help', path: '#' },
  { title: 'Safety', to: config.routes.about },
  { title: 'Term', to: config.routes.about },
  { title: 'Privacy', to: config.routes.about },
  { title: 'Creator Potal', to: config.routes.about },
  { title: 'Community Guidelines', to: config.routes.about },
];
const currentUser = false;

const defaultFtn = () => {};
function Sidebar({ _onShowAuthen = defaultFtn }) {
  function onShowAuthen(isShowAuthen) {
    _onShowAuthen(isShowAuthen);
  }
  return (
    <aside className={cx('wrapper')}>
      <NavMenu />
      {!currentUser && (
        <SidebarLogin label="Log in to follow creators, like videos, and view comments." onShowAuthen={onShowAuthen} />
      )}

      <SidebarAccountsList label="Suggested accounts" />
      {currentUser && <SidebarAccountsList label="Following accounts" currentUser={currentUser} />}

      <Hashtag hashtagList={USER_HASHTAG_LIST} />
      <SidebarFooter
        companyData={FOOTER_DATA_COMPANY}
        programsData={FOOTER_DATA_PROGRAMS}
        policiesData={FOOTER_DATA_POLICIES}
      />
    </aside>
  );
}

// set rules for props of components
Sidebar.propTypes = {
  _onShowAuthen: PropTypes.func.isRequired,
};

export default Sidebar;
