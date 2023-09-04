import { useEffect } from "react";

const EmbeddedAnalytics = () => {
  useEffect(() => {
    // Get the parent element
    const divElement = document.getElementById("viz1693241484319");

    if (divElement) {
      // Get the visualization element within the parent
      const vizElement = divElement.getElementsByTagName("object")[0];

      if (vizElement && vizElement.parentNode) {
        // Define the width and height based on parent's width
        vizElement.style.width = "100%";
        vizElement.style.height = "calc(100vh - 18px)";

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
    <div
      className="tableauPlaceholder"
      id="viz1693241484319"
      style={{ position: "relative" }}
    >
      <noscript>
        <a href="#">
          <img
            alt="Tableau Visualization"
            src="https://public.tableau.com/static/images/Ta/TableauPortfolio_16932266939300/EmbeddedAnalytics/1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param
          name="name"
          value="TableauPortfolio_16932266939300/EmbeddedAnalytics"
        />
        <param name="tabs" value="yes" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https://public.tableau.com/static/images/Ta/TableauPortfolio_16932266939300/EmbeddedAnalytics/1.png"
        />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
      </object>
    </div>
  );
};

export default EmbeddedAnalytics;
