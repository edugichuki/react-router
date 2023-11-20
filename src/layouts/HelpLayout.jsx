import { NavLink, Outlet } from "react-router-dom";
const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Web Help</h2>
      <p>
        Officia duis commodo anim commodo quis nisi nostrud minim mollit Lorem
        nulla consequat duis culpa. Culpa ad ad Lorem quis amet proident mollit
        adipisicing nostrud officia mollit. Enim aute adipisicing reprehenderit
        duis pariatur.
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
