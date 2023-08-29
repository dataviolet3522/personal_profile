import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    // Get the parent element
    const divElement = document.getElementById("viz1693240752770");

    if (divElement) {
      // Get the visualization element within the parent
      const vizElement = divElement.getElementsByTagName("object")[0];

      if (vizElement && vizElement.parentNode) {
        // Define the width and height based on parent's width
        vizElement.style.width = "100%";
        vizElement.style.height = "calc(100vh - 18px)";
        // vizElement.style.height = "calc(100vh - 48px)"; // if use header in a page, Use this style

        // Create a script element for Tableau API
        const scriptElement = document.createElement("script");
        scriptElement.src =
          "https://public.tableau.com/javascripts/api/viz_v1.js";

        // Append the script element after the visualization element
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
      }
    }
  }, []);

  return (
    <>
      {/* <div className="text-2xl font-bold">Venkat Vootla Portfolio</div> */}

      <div
        className="tableauPlaceholder"
        id="viz1693240752770"
        style={{ position: "relative" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Tableau Resume - Venkat Vootla"
              src="https://public.tableau.com/static/images/Ta/TableauResume-VV/TableauResume-TylerEricksonMobile/1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https://public.tableau.com/" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param
            name="name"
            value="TableauResume-VV/TableauResume-TylerEricksonMobile"
          />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/Ta/TableauResume-VV/TableauResume-TylerEricksonMobile/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>
    </>
  );
};

export default Profile;
