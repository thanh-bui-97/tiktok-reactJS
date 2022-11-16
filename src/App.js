import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/index.js';
// import { DefaultLayout } from '~/layouts/DefaultLayout/index.js'; //kiểu này import cho newbie
import DefaultLayout from '~/layouts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((routes, index) => {
            const Page = routes.component; // vì element nhận component có cú pháp JSX,nên không thể nhét trực tiếp router.component vô được

            //kiểm tra nếu pages có dùng chung layout default không?
            let Layout = DefaultLayout; //Mặc định thì đùng layout default
            if (routes.layout) {
              Layout = routes.layout; //hay sử dụng layout khác vd: HeaderOnly
            } else if (routes.layout === null) {
              Layout = Fragment; //Hoặc không có layout
            }

            return (
              <Route
                key={index}
                path={routes.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
