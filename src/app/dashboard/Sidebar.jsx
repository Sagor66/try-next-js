import Navlink from "@/components/Navlink";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage Product",
  },
  {
    path: "/dashboard/all-products",
    title: "All Product",
  },
  {
    path: "/",
    title: "Home",
  },
];

const Sidebar = () => {
  return (
    <aside className="mr-10">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <ul>
        {navLinks.map(({ path, title }) => (
          <li className="my-2" key={path}>
            <Navlink exact activeClassName="text-blue-500" href={path}>
              {title}
            </Navlink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
