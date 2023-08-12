import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    // Get the parent element
    const divElement = document.getElementById("viz1691423385297");

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
        id="viz1691423385297"
        style={{ position: "relative" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Tableau Resume - Tyler Erickson (Mobile) "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ta&#47;TableauResume-TylerErickson&#47;TableauResume-TylerEricksonMobile&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />{" "}
          <param name="site_root" value="" />
          <param
            name="name"
            value="TableauResume-TylerErickson&#47;TableauResume-TylerEricksonMobile"
          />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ta&#47;TableauResume-TylerErickson&#47;TableauResume-TylerEricksonMobile&#47;1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
        </object>
      </div>
    </>
  );
};

export default Profile;
