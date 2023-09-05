import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

import { SiTableau } from "react-icons/si";
import { BsPerson } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoInfiniteSharp } from "react-icons/io5";
import { SiMicrosoftazure } from "react-icons/si";
import { ImEmbed2 } from "react-icons/im";
import { BiLogoReact, BiSolidTagAlt } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineAnalytics } from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";
import { Button } from "@material-tailwind/react";

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

  const handleLinkedInOpen = () => {
    window.open("https://www.linkedin.com/in/venkat-vootla/", "_blank");
  };

  const handleGithubOpen = () => {
    window.open("https://github.com/venkat3522", "_blank");
  };

  return (
    <div className="fixed z-10">
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
            width={60}
            alt="profile"
          />
          <div>
            <span className="text-xl whitespace-pre">Venkat V</span>
            <div className="text-xs text-gray-500 cursor-pointer hover:text-blue-600">
              venkatv.analytics@gmail.com
            </div>
            <div className="text-xs text-gray-500 pt-1">Georgia, USA</div>
          </div>
        </div>
        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[79%] h-[79%]">
            <li>
              <NavLink to={"/"} className="link">
                <BsPerson size={23} className="min-w-max" />
                Profile Summary
              </NavLink>
            </li>
            <li>
              <NavLink to={"/tableau"} className="link">
                <SiTableau size={23} className="min-w-max" />
                Tableau Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to={"power-bi"} className="link">
                <TbBrandGoogleAnalytics size={23} className="min-w-max" />
                Power BI Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to={"/domo"} className="link">
                <DiGoogleAnalytics size={23} className="min-w-max" />
                Domo Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to={"/apache"} className="link">
                <IoInfiniteSharp size={23} className="min-w-max" />
                Apache Superset
              </NavLink>
            </li>
            <li>
              <NavLink to={"/azure"} className="link">
                <SiMicrosoftazure size={20} className="min-w-max" />
                Azure Data Engineer
              </NavLink>
            </li>
            <li>
              <NavLink to={"/power-platform"} className="link">
                <BiSolidTagAlt size={23} className="min-w-max" />
                Power Platform
              </NavLink>
            </li>
            <li>
              <NavLink to={"/react-portfolio"} className="link">
                <BiLogoReact size={23} className="min-w-max" />
                React Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to={"/embedded"} className="link">
                <ImEmbed2 size={23} className="min-w-max" />
                Embedded Analytics
              </NavLink>
            </li>
            <li>
              <NavLink to={"/skill"} className="link">
                <MdOutlineAnalytics size={23} className="min-w-max" />
                Skill Matrix
              </NavLink>
            </li>
            <li>
              <NavLink to={"/others"} className="link">
                <FiMoreHorizontal size={23} className="min-w-max" />
                Other Experience
              </NavLink>
            </li>
          </ul>
          <div className="flex-1 text-sm z-50 my-auto  whitespace-pre   w-full  font-medium  ">
            <div className="flex border-y border-slate-300 p-4 items-center justify-between">
              <div>
                <Button
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={handleGithubOpen}
                >
                  <AiFillGithub size={20} className="min-w-max" /> Github
                </Button>
              </div>
              <div>
                <Button
                  size="sm"
                  className="flex items-center gap-1"
                  color="blue"
                  onClick={handleLinkedInOpen}
                >
                  <AiFillLinkedin size={20} className="min-w-max" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="m-3 md:hidden " onClick={() => setIsOpenSideBar(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
