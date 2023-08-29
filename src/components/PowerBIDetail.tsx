import { Button } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";

export const PowerBIDetail = () => {
  const { name } = useParams();
  const navigation = useNavigate();

  const getPowerBIContent = (name: string | undefined) => {
    let powerBILink = "https://app.powerbi.com/";
    if (name === "bike-sale-analysis") {
      powerBILink =
        powerBILink +
        "view?r=eyJrIjoiYjZiOGYxM2EtNjllNi00MGFjLTljYjUtMmRlNGI0NmI5NzkxIiwidCI6IjQ3YzgxNDZiLTljNGEtNDU1MC04ODg0LTkyMGM5N2Y4OGMwYyJ9";
    }
    if (name === "garments-sales-dashboard") {
      powerBILink =
        powerBILink +
        "view?r=eyJrIjoiZTllYTM2OWEtYWEwMy00ODY1LWIyY2QtZjBmYzM4Mzc1OTAzIiwidCI6IjQ3YzgxNDZiLTljNGEtNDU1MC04ODg0LTkyMGM5N2Y4OGMwYyJ9&pageName=ReportSectiona275ef88d6cbec42fa7d";
    }
    if (name == "human-resources-dashboard") {
      powerBILink =
        powerBILink +
        "view?r=eyJrIjoiNzZiNDlkYjUtOGQ1ZC00NjViLThkMjktMjkxZjY3OGZiOTY2IiwidCI6IjQ3YzgxNDZiLTljNGEtNDU1MC04ODg0LTkyMGM5N2Y4OGMwYyJ9";
    }
    if (name === "insurance-dashboard") {
      powerBILink =
        powerBILink +
        "reportEmbed?r=eyJrIjoiNzZiNDlkYjUtOGQ1ZC00NjViLThkMjktMjkxZjY3OGZiOTY2IiwidCI6IjQ3YzgxNDZiLTljNGEtNDU1MC04ODg0LTkyMGM5N2Y4OGMwYyJ9";
    }
    if (name === "quick-dashboard") {
      powerBILink =
        powerBILink +
        "view?r=eyJrIjoiODU0MTFlMTctMWY3MC00NzU0LTkwZTAtYzc0OTQ3ZGI0ZDFlIiwidCI6IjQ3YzgxNDZiLTljNGEtNDU1MC04ODg0LTkyMGM5N2Y4OGMwYyJ9";
    }
    if (name === "sales-dashboard") {
      powerBILink =
        powerBILink +
        "view?r=eyJrIjoiMWE0ZDEyNGItZTVhOS00Mzc3LTliMmYtYTVmNTJlMzVhNjc0IiwidCI6IjQ3YzgxNDZiLTljNGEtNDU1MC04ODg0LTkyMGM5N2Y4OGMwYyJ9";
    }
    if (name === "technology-mergers-acquisitions") {
      powerBILink =
        powerBILink +
        "view?r=eyJrIjoiYWY4YzU5MDAtZTE3MS00ZjY3LWEyNTItODAwOTI4ODViOThhIiwidCI6IjQ3YzgxNDZiLTljNGEtNDU1MC04ODg0LTkyMGM5N2Y4OGMwYyJ9";
    }
    return powerBILink;
  };
  return (
    <div className="p-5 w-[100%] h-[100vh] py-1">
      <Button
        size="sm"
        variant="text"
        className="flex items-center gap-2 mb-2"
        onClick={() => navigation(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4 rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>{" "}
        Back
      </Button>
      <iframe
        title="Report Section"
        style={{ width: "100%", height: "100%" }}
        src={getPowerBIContent(name)}
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};
