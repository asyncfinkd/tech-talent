import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ApplicationContext } from "../../context/Application/ApplicationContext";

const EduMap: React.FC<any> = ({ item, env }: any) => {
  const [followed, setFollowed] = useState<Boolean>(false);
  const { jwtDecode } = useContext(ApplicationContext);
  const [unFollow, setUnFollow] = useState<Boolean>(false);
  const [changed, setChanged] = useState<Boolean>(false);
  const history = useHistory();
  const [followers, setFollowers] = useState<String | any>(
    item.followedUsersId.length
  );
  useEffect(() => {
    if (!changed) {
      setFollowers(item.followedUsersId.length);
    }
    if (!unFollow) {
      if (item.followedUsersId.length != 0) {
        item.followedUsersId.map((item: any) => {
          if (item.id == jwtDecode._id) {
            setFollowed(true);
          }
        });
      }
    } else {
      setFollowed(false);
    }
  });
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
                <div className="count-0-2-244">{followers}</div>
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
              <button
                className={
                  followed
                    ? "root-0-2-46 followButton-0-2-149 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55"
                    : "root-0-2-46 followButton-0-2-149 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantPrimary-0-2-54"
                }
                onClick={() => {
                  if (!localStorage.getItem("local")) {
                    history.push(
                      `/register?return_to=${
                        window.location.pathname.split("/")[1]
                      }`
                    );
                  } else {
                    setChanged(true);
                    const local = localStorage.getItem("local");
                    if (followed) {
                      axios
                        .post(
                          `${env.host}/api/unfollow/edus`,
                          {
                            id: item._id,
                          },
                          {
                            headers: { Authorization: `Bearer ${local}` },
                          }
                        )
                        .then((result: any) => {
                          if (result.data === "success") {
                            setUnFollow(true);
                            setFollowers(followers - 1);
                          }
                        });
                    } else {
                      axios
                        .post(
                          `${env.host}/api/follow/edus`,
                          {
                            id: item._id,
                          },
                          {
                            headers: { Authorization: `Bearer ${local}` },
                          }
                        )
                        .then((result: any) => {
                          if (result.data === "success") {
                            setUnFollow(false);
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

export default EduMap;
