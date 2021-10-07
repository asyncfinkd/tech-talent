import React from "react";
import { Link } from "react-router-dom";

const EduMap: React.FC<any> = ({ item, env }: any) => {
  return (
    <>
      <div className="superRoot-0-2-236">
        <div className="root-0-2-237">
          <div className="container-0-2-238">
            <Link to={`/e/${item.slug}`}>
              <img
                className="logo-0-2-239"
                src={`${env.server}${item.logoUrl}`}
              />
            </Link>
            <div className="name-0-2-240">{item.name}</div>
            <div className="secondaryText-0-2-241">{item.secondaryText}</div>
            <div className="stats-0-2-242">
              <div className="stat-0-2-243">
                <div className="count-0-2-244">{item.courseCount}</div>
                <div className="label-0-2-245">Courses</div>
              </div>
              <div className="stat-0-2-243">
                <div className="count-0-2-244">32</div>
                <div className="label-0-2-245">Followers</div>
              </div>
            </div>
            <div className="buttonGroup-0-2-246">
              <Link
                className="root-0-2-46 viewCoursesButton-0-2-247 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55"
                to={`/e/${item.slug}`}
              >
                Courses
              </Link>
              <a
                className="root-0-2-46 followButton-0-2-248 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantPrimary-0-2-54"
                href="/register?cb=%2Fedu"
              >
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EduMap;
