import axios from "axios";
import React, { useEffect, useState } from "react";

const CompaniesMap: React.FC<any> = ({
  item,
  env,
  history,
  jwtDecode,
}: any) => {
  const [followed, setFollowed] = useState<Boolean>(false);
  const [followers, setFollowers] = useState<String | any>(
    item.followedUsersId.length
  );
  useEffect(() => {
    if (item.followedUsersId.length != 0) {
      item.followedUsersId.map((item: any) => {
        console.log(jwtDecode._id);
        console.log(item.id);
        if (item.id == jwtDecode._id) {
          setFollowed(true);
        } else {
          setFollowed(false);
        }
      });
    }
  });
  return (
    <>
      <div className="superRoot-0-2-137">
        <div className="root-0-2-138">
          <div className="container-0-2-139">
            <a href="/c/u0QWg">
              <img
                className="logo-0-2-140"
                src={`${env.server}${item.logoUrl}`}
              />
            </a>
            <div className="name-0-2-141">{item.name}</div>
            <div className="secondaryText-0-2-142">&nbsp;</div>
            <div className="stats-0-2-143">
              <div className="stat-0-2-144">
                <div className="count-0-2-145">{item.jobCount}</div>
                <div className="label-0-2-146">Active Jobs</div>
              </div>
              <div className="stat-0-2-144">
                <div className="count-0-2-145">{followers}</div>
                <div className="label-0-2-146">Followers</div>
              </div>
            </div>
            <div className="buttonGroup-0-2-147">
              <a
                className="root-0-2-46 viewJobsButton-0-2-148 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55"
                href="/c/u0QWg"
              >
                View Jobs
              </a>
              <button
                className="root-0-2-46 followButton-0-2-149 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantPrimary-0-2-54"
                onClick={() => {
                  if (!jwtDecode) {
                    history.push("/register");
                  } else {
                    const local = localStorage.getItem("local");
                    if (followed) {
                      axios
                        .post(
                          `${env.host}/api/unfollow/companies`,
                          {
                            id: item._id,
                          },
                          {
                            headers: { Authorization: `Bearer ${local}` },
                          }
                        )
                        .then((result: any) => {
                          if (result.data === "success") {
                            setFollowed(!followed);
                            setFollowers(followers - 1);
                          }
                        });
                    } else {
                      axios
                        .post(
                          `${env.host}/api/follow/companies`,
                          {
                            id: item._id,
                          },
                          {
                            headers: { Authorization: `Bearer ${local}` },
                          }
                        )
                        .then((result: any) => {
                          if (result.data === "success") {
                            setFollowed(true);
                            setFollowers(followers + 1);
                          }
                        });
                    }
                  }
                }}
              >
                {followed ? "Unfollow" : " Follow"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompaniesMap;
