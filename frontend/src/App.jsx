import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((i, index) => {
          const Layout = i.layout;
          return (
            <Route key={index} path={i.path} element={<Layout />}>
              {i.children?.map((child) => {
                const Component = child.element;
                return <Route key={child.path} path={child.path} element={<Component />} />;
              })}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
