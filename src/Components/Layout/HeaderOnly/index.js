import Header from '~/Components/Layout/components/Header/index.js';

// DefaultLayout chứa tất cả layout
function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="contents">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
