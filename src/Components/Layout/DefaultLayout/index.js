import Header from './Header/index.js';
import Sidebar from './Sidebar/index.js';

// DefaultLayout chứa tất cả layout
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="contents">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
