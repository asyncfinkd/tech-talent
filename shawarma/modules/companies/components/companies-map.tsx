import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CompaniesMap({ item, _id }: any) {
  const [followed, setFollowed] = useState<boolean>(false);
  const [unFollow, setUnFollow] = useState<boolean>(false);
  const [changed, setChanged] = useState<boolean>(false);
  const [followers, setFollowers] = useState<string | any>(
    item?.followedUsersId.length
  );

  useEffect(() => {
    if (!changed) {
      setFollowers(item.followedUsersId.length);
    }
    if (!unFollow) {
      if (item.followedUsersId.length != 0) {
        item.followedUsersId.map((item: any) => {
          if (item.id == _id) {
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
            <Link href={`/c/${item.slug}`}>
              <img
                className="logo-0-2-140"
                src={`${process.env.SERVER_APP_API_URL}${item.logoUrl}`}
              />
            </Link>
            <div className="name-0-2-141">{item.name}</div>
            <div className="secondaryText-0-2-142">&nbsp;</div>
            <div className="stats-0-2-143">
              <div className="stat-0-2-144">
                <div className="count-0-2-145">{item.jobCount}</div>
                <div className="label-0-2-146">Active Jobs</div>
              </div>
              <div className="stat-0-2-144">
                <div className="count-0-2-145">1</div>
                <div className="label-0-2-146">Followers</div>
              </div>
            </div>
            <div className="buttonGroup-0-2-147">
              <Link href={`/c/${item.slug}`}>
                <a className="root-0-2-46 viewJobsButton-0-2-148 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55">
                  View Jobs
                </a>
              </Link>
              <button
                className={
                  "root-0-2-46 followButton-0-2-149 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantPrimary-0-2-54"
                }
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
