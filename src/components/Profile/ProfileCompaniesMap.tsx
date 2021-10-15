import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import { ApplicationContext } from "../../context/Application/ApplicationContext";

const ProfileCompaniesMap: React.FC<any> = ({ item, env }: any) => {
  const [followed, setFollowed] = useState<Boolean>(false);
  const [unFollow, setUnFollow] = useState<Boolean>(false);
  const { jwtDecode } = useContext(ApplicationContext);
  const history = useHistory();
  const { t } = useTranslation();
  useEffect(() => {
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
      <div className="root-0-2-223 rootSlice-0-2-224 root-0-2-217">
        <div className="header-0-2-225">
          <div className="IMAGE_0_2_226__ imageSlice-0-2-227 image-0-2-218">
            <Link to={`/c/${item.slug}`}>
              <img
                className="image-0-2-218"
                src={`${env.server}${item.logoUrl}`}
                alt={item.name}
              />
            </Link>
          </div>
          <div className="primaryColumn-0-2-238">
            <div className="primaryColumnTop-0-2-239">
              <Link className="companyName-0-2-219" to={`/c/${item.slug}`}>
                {item.name}
              </Link>
            </div>
            <div className="primaryColumnBottom-0-2-240">
              {item.industry != null && item.industry}
            </div>
          </div>
        </div>
        <div className="lineFirst-0-2-234 lineFirstSlice-0-2-235"></div>
        <div className="secondaryColumn-0-2-241">
          <div className="secondaryColumnTop-0-2-242">
            {item.primaryText != null && item.primaryText}
          </div>
          <div className="secondaryColumnBottom-0-2-243">
            {item.secondaryText != null && item.secondaryText}
          </div>
        </div>
        <div className="lineSecond-0-2-236 lineSecondSlice-0-2-237"></div>
        <div className="tertiaryColumn-0-2-244">
          <div className="secondaryButton-0-2-245"></div>
          <div className="primaryButton-0-2-246">
            <button
              className={
                followed
                  ? "root-0-2-46 followButton-0-2-149 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55"
                  : "root-0-2-46 followButton-0-2-149 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantPrimary-0-2-54"
              }
              onClick={() => {
                if (!localStorage.getItem("local")) {
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
                          setUnFollow(true);
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
    </>
  );
};

export default ProfileCompaniesMap;
