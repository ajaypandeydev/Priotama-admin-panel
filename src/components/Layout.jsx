
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <main className="page-container">
        <Outlet /> 
      </main>
    </div>
  );
}
