function LandingPage({ children }) {
  return (
    <div>
      <header>
        <nav>
          <h1>NAVIGATION</h1>
          <h1>LOGO</h1>
        </nav>
      </header>
      <div className="container">
        <div className="contents">{children}</div>
      </div>
    </div>
  );
}

export default LandingPage;
