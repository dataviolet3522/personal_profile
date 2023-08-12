import Sidebar from "./components/Sidebar";
import { useMediaQuery } from "react-responsive";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  const isBigScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="flex gap-5">
      <Sidebar />
      <main
        className="flex-1 mx-auto py-2"
        style={{ marginLeft: isBigScreen ? "45px" : "260px" }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
