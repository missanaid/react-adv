import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage3, LazyPage2 } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout Page</h1>
      <ul>
        <li>
          <NavLink to="lazy1"> Lazy1 </NavLink>
        </li>
        <li>
          <NavLink to="lazy2"> Lazy2 </NavLink>
        </li>
        <li>
          <NavLink to="lazy3"> Lazy3 </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />
        {/* <Route path="*" element={<div>Not Found</div>} /> */}
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};
export default LazyLayout;
