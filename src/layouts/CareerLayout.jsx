import { Outlet } from "react-router-dom";

export const CareerLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Fugiat do quis excepteur id deserunt ut reprehenderit ipsum fugiat duis
        reprehenderit laborum. Nostrud quis do cillum adipisicing veniam
        pariatur. Ad consectetur sit exercitation nostrud id.
      </p>
      <Outlet />
    </div>
  );
};
