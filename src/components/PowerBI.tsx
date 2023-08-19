import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

import BikeSaleAnalysisImage from "../assets/Images/powerbi/bike-sales-analysis.png";
import GarmentsSaleDashboardImage from "../assets/Images/powerbi/garments-sales-dashboard.png";
import HumanResourcesDashboardImage from "../assets/Images/powerbi/human-resource-dashboard.png";
import InsuranceDashboardImage from "../assets/Images/powerbi/insurance-dashboard.png";
import QuickDashboardImage from "../assets/Images/powerbi/quick-dashboard.png";
import SalesDashboardImage from "../assets/Images/powerbi/sales-dashboard.png";

const powerBIData = [
  {
    name: "Bike Sales Analysis",
    routePath: "/power-bi/bike-sale-analysis",
    img: BikeSaleAnalysisImage,
  },
  {
    name: "Garments Sales Dashboard",
    routePath: "/power-bi/garments-sales-dashboard",
    img: GarmentsSaleDashboardImage,
  },
  {
    name: "Human Resource Dashboard",
    routePath: "/power-bi/human-resources-dashboard",
    img: HumanResourcesDashboardImage,
  },
  {
    name: "Insurance Dashboard",
    routePath: "/power-bi/insurance-dashboard",
    img: InsuranceDashboardImage,
  },
  {
    name: "Quick Dashboard",
    routePath: "/power-bi/quick-dashboard",
    img: QuickDashboardImage,
  },
  {
    name: "Sales Dashboard",
    routePath: "/power-bi/sales-dashboard",
    img: SalesDashboardImage,
  },
];

const PowerBIComponent = () => {
  return (
    <div className="p-5 py-1">
      <div className="text-2xl font-bold">Power BI</div>
      <div className="flex flex-wrap mt-5">
        {powerBIData.map((item, index) => {
          const { name, routePath, img } = item;
          return (
            <Card className=" lg:max-w-[31%] md:max-w-[45%] sm:max-w-[100%]  grow overflow-hidden mr-4 mb-4">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={img} alt={name} className="w-[100%] h-[250px]" />
              </CardHeader>
              <CardBody className=" h-[5rem]">
                <Typography variant="h5" color="blue-gray">
                  {name}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-end">
                <Link to={routePath}>
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2"
                  >
                    View More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PowerBIComponent;
