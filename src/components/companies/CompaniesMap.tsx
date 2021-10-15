import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CompaniesMap: React.FC<any> = ({
  item,
  env,
  history,
  jwtDecode,
}: any) => {
  const [followed, setFollowed] = useState<Boolean>(false);
  const [unFollow, setUnFollow] = useState<Boolean>(false);
  const { t } = useTranslation();
  const [changed, setChanged] = useState<Boolean>(false);
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
      <div className="superRoot-0-2-137">
        <div className="root-0-2-138">
          <div className="container-0-2-139">
            <Link to={`/c/${item.slug}`}>
              <img
                className="logo-0-2-140"
                src={`${env.server}${item.logoUrl}`}
              />
            </Link>
            <div className="name-0-2-141">{item.name}</div>
            <div className="secondaryText-0-2-142">&nbsp;</div>
            <div className="stats-0-2-143">
              <div className="stat-0-2-144">
                <div className="count-0-2-145">{item.jobCount}</div>
                <div className="label-0-2-146">{t("ACTIVEJOBS")}</div>
              </div>
              <div className="stat-0-2-144">
                <div className="count-0-2-145">{followers}</div>
                <div className="label-0-2-146">{t("FOLLOWERS")}</div>
              </div>
            </div>
            <div className="buttonGroup-0-2-147">
              <Link
                className="root-0-2-46 viewJobsButton-0-2-148 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55"
                to={`/c/${item.slug}`}
              >
                {t("VIEWJOBS")}
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
                            setUnFollow(true);
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
                            setUnFollow(false);
                            setFollowed(true);
                            setFollowers(followers + 1);
                          }
                        });
                    }
                  }
                }}
              >
                {followed ? t("UNFOLLOW") : t("FOLLOW")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompaniesMap;
