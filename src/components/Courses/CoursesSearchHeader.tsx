import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const CoursesSearchHeader: React.FC = () => {
  useEffect(() => {
    let splitUrl = window.location.pathname.split("/");
    if (splitUrl[2] == undefined) {
      document
        .getElementById("qmlqml_x1mlml")
        ?.classList.add("variantAccent-0-2-56");
    }
  }, []);
  return (
    <>
      <div className="root-0-2-262 primaryFilter-0-2-246">
        <div className="gap-0-2-263"></div>
        <NavLink
          className="root-0-2-46 button-0-2-265 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55"
          type="button"
          to="/courses"
          id="qmlqml_x1mlml"
        >
          All
        </NavLink>
        <NavLink
          className="root-0-2-46 button-0-2-265 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55"
          type="button"
          to="/courses/dev"
          activeClassName="variantAccent-0-2-56"
        >
          Development
        </NavLink>
        <NavLink
          className="root-0-2-46 button-0-2-265 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55"
          type="button"
          to="/courses/design"
          activeClassName="variantAccent-0-2-56"
        >
          Design
        </NavLink>
        <NavLink
          className="root-0-2-46 button-0-2-265 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55"
          type="button"
          to="/courses/marketing"
          activeClassName="variantAccent-0-2-56"
        >
          Marketing
        </NavLink>
        <NavLink
          className="root-0-2-46 button-0-2-265 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55"
          type="button"
          to="/courses/product"
          activeClassName="variantAccent-0-2-56"
        >
          Product
        </NavLink>
        <NavLink
          className="root-0-2-46 button-0-2-265 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55"
          type="button"
          to="/courses/ops"
          activeClassName="variantAccent-0-2-56"
        >
          Operations
        </NavLink>
        <NavLink
          className="root-0-2-46 button-0-2-265 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55"
          type="button"
          to="/courses/qa"
          activeClassName="variantAccent-0-2-56"
        >
          QA
        </NavLink>
        <NavLink
          className="root-0-2-46 button-0-2-265 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55"
          type="button"
          to="/courses/ai"
          activeClassName="variantAccent-0-2-56"
        >
          AI
        </NavLink>
        <NavLink
          className="root-0-2-46 button-0-2-265 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55"
          type="button"
          to="/courses/support"
          activeClassName="variantAccent-0-2-56"
        >
          Support
        </NavLink>
        <div className="gap-0-2-263"></div>
      </div>
    </>
  );
};

export default CoursesSearchHeader;
