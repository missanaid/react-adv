import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import { routes } from "./routes";
import logo from "../logo.svg";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <>
      <Suspense fallback={<span>Cargando...</span>}>
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={logo} alt="React logo" />

              <ul>
                {routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Routes>
              {routes.map((r) => (
                <Route key={r.to} path={r.path} element={<r.Component />} />
              ))}
              <Route
                path="/*"
                element={<Navigate to={routes[0].to} replace />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};
