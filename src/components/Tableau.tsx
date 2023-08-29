import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Spinner,
} from "@material-tailwind/react";
import { AiOutlineEye, AiOutlineStar } from "react-icons/ai";
import { TABLEAU_DASHBOARD_DATA } from "../assets/temp/tableauDashboardData";

interface vizType {
  authorDisplayName: string;
  authorProfileName: string;
  defaultViewName: string;
  defaultViewRepoUrl: string;
  numberOfFavorites: number;
  title: string;
  viewCount: number;
  workbookRepoUrl: string;
}

const Tableau = () => {
  // const [vizzes, setVizzes] = useState([]);
  const [isLoading] = useState(false);

  const publicTableauLink = "https://public.tableau.com";

  // TODO: Need to use once tableau API ready
  // useEffect(() => {
  //   setIsLoading(true);
  //   const corsAnywhereUrl = "https://thingproxy.freeboard.io/fetch/";
  //   const apiUrl = `${publicTableauLink}/public/apis/workbooks?profileName=venkat5345&start=0&count=50&visibility=NON_HIDDEN`;
  //   axios
  //     .get(`${corsAnywhereUrl}${apiUrl}`)
  //     .then((res) => {
  //       setVizzes(res?.data?.contents);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       setVizzes([]);
  //       setIsLoading(false);
  //       console.log(err);
  //     });
  // }, []);

  const getImageUrl = (viz: vizType) => {
    return `${publicTableauLink}/static/images/aa/${viz.workbookRepoUrl}/${viz.defaultViewName}/4_3.png`;
  };

  const openNewTab = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-[100vh]">
          <Spinner color="blue" className="h-16 w-16" />
        </div>
      ) : (
        <div className="p-5 py-1">
          <div className="text-2xl font-bold">Tableau Portfolio</div>
          <div className="flex flex-wrap mt-5">
            {TABLEAU_DASHBOARD_DATA.length ? (
              TABLEAU_DASHBOARD_DATA?.map((viz: vizType, i: number) => {
                return (
                  <Card
                    key={i}
                    className="lg:max-w-[32%] md:max-w-[45%] sm:max-w-[100%] grow overflow-hidden mr-4 mb-4"
                  >
                    <CardHeader
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 rounded-none cursor-pointer"
                      onClick={() =>
                        openNewTab(
                          `${publicTableauLink}/app/profile/${viz.authorProfileName}/viz/${viz.workbookRepoUrl}/${viz.defaultViewName}`
                        )
                      }
                    >
                      <img
                        src={getImageUrl(viz)}
                        alt={viz?.title}
                        className="w-[100%]"
                      />
                    </CardHeader>
                    <CardBody className="max-h-[7rem]">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="cursor-pointer hover:underline"
                        onClick={() =>
                          openNewTab(
                            `${publicTableauLink}/app/profile/${viz.authorProfileName}/viz/${viz.workbookRepoUrl}/${viz.defaultViewName}`
                          )
                        }
                      >
                        {viz?.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="gray"
                        className="mt-3 font-normal cursor-pointer hover:underline"
                        onClick={() =>
                          openNewTab(
                            `${publicTableauLink}/app/profile/${viz.authorProfileName}`
                          )
                        }
                      >
                        {viz.authorDisplayName}
                      </Typography>
                    </CardBody>
                    <CardFooter className="flex items-center">
                      <Tooltip content={`${viz.numberOfFavorites} Favourite`}>
                        <Typography
                          color="gray"
                          className="flex items-center justify-between"
                        >
                          <AiOutlineStar size={23} className="min-w-max pr-1" />
                          {viz.numberOfFavorites}
                        </Typography>
                      </Tooltip>
                      <Tooltip content={`${viz.viewCount} Views`}>
                        <Typography
                          color="gray"
                          className="flex items-center justify-between pl-3"
                        >
                          <AiOutlineEye size={23} className="min-w-max pr-1" />
                          {viz.viewCount}
                        </Typography>
                      </Tooltip>
                    </CardFooter>
                  </Card>
                );
              })
            ) : (
              <div className="text-center w-[100%]">
                <Typography variant="h6" color="gray">
                  No data found. Something went wrong
                </Typography>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Tableau;
