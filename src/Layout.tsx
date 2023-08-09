import Sidebar from "./components/Sidebar";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <main className="flex-1 mx-auto py-2">{children}</main>
    </div>
  );
};

export default Layout;
