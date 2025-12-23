import { Link, Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <div>
      <nav className="flex gap-2">
        <Link to="">Admin</Link>
      </nav>
      <section className="mt-4">
        <Outlet />
      </section>
    </div>
  );
};
