import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

import { SiTableau } from "react-icons/si";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { MdMenu } from "react-icons/md";

const Sidebar = () => {
  const isBigScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [isOpenSideBar, setIsOpenSideBar] = useState(
    isBigScreen ? true : false
  );
  const { pathname } = useLocation();

  useEffect(() => {
    if (isBigScreen) {
      setIsOpenSideBar(false);
    } else {
      setIsOpenSideBar(true);
    }
  }, [isBigScreen]);

  useEffect(() => {
    isBigScreen && setIsOpenSideBar(false);
  }, [isBigScreen, pathname]);

  const Nav_animation = isBigScreen
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div>
      <div
        onClick={() => setIsOpenSideBar(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          isOpenSideBar ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        variants={Nav_animation}
        initial={{ x: isOpenSideBar ? -250 : 0 }}
        animate={isOpenSideBar ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img
            src="https://img.freepik.com/premium-vector/avatar-man-with-beard-office-worker-creative-team-young-student-brown-hair_277909-134.jpg"
            width={45}
            alt=""
          />
          <div>
            <span className="text-xl whitespace-pre">Venkat</span>
            <div className="text-xs text-gray-500 cursor-pointer hover:text-blue-600">
              v.venki05@gmail.com
            </div>
          </div>
        </div>
        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link">
                <BsPerson size={23} className="min-w-max" />
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Tableau"} className="link">
                <SiTableau size={23} className="min-w-max" />
                Tableau Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to={"/section3"} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Section 3
              </NavLink>
            </li>
            <li>
              <NavLink to={"/section4"} className="link">
                <HiOutlineDatabase size={23} className="min-w-max" />
                Section 4
              </NavLink>
            </li>
          </ul>
        </div>
      </motion.div>
      <div className="m-3 md:hidden " onClick={() => setIsOpenSideBar(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
