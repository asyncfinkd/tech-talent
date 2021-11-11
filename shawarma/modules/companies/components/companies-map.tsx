import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useMutation } from "react-query";
import { FollowRequest } from "features/follow/follow.api";
import { UnFollowRequest } from "features/unfollow/unfollow.api";
import { useRouter } from "next/router";

interface Props {
  id: string;
}

export default function CompaniesMap({ item, _id, logged }: any) {
  const router = useRouter();
  const [followed, setFollowed] = useState<boolean>(false);
  const [unFollow, setUnFollow] = useState<boolean>(false);
  const [changed, setChanged] = useState<boolean>(false);
  const [followers, setFollowers] = useState<string | any>(
    item.followedUsersId.length
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

  const $follow = useMutation(({ loginData }: { loginData: Props }) =>
    FollowRequest(loginData)
  );

  const $unfollow = useMutation(({ loginData }: { loginData: Props }) =>
    UnFollowRequest(loginData)
  );
  return (
    <>
      <div className="superRoot-0-2-137">
        <div className="root-0-2-138">
          <div className="container-0-2-139">
            <Link href={`/c/${item.slug}`}>
              {item.logoUrl == null ? (
                <p
                  className="logo-0-2-140"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    marginTop: 0,
                    fontSize: 19,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    border: "1px solid lightgray",
                    background: "#fff",
                  }}
                >
                  {item.name[0]}
                </p>
              ) : (
                <img
                  className="logo-0-2-140"
                  style={{
                    cursor: "pointer",
                  }}
                  src={`${process.env.SERVER_APP_API_URL}${item.logoUrl}`}
                />
              )}
            </Link>
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
              <Link href={`/c/${item.slug}`}>
                <a className="root-0-2-46 viewJobsButton-0-2-148 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55">
                  View Jobs
                </a>
              </Link>
              <button
                className={
                  followed
                    ? "root-0-2-46 followButton-0-2-149 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55"
                    : "root-0-2-46 followButton-0-2-149 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantPrimary-0-2-54"
                }
                onClick={() => {
                  if (!logged) {
                    router.push("/register");
                  } else {
                    setChanged(true);
                    if (followed) {
                      $unfollow.mutate(
                        { loginData: { id: item._id } },
                        {
                          onSuccess: () => {
                            setFollowers(followers - 1);
                            setUnFollow(true);
                            setFollowed(false);
                          },
                        }
                      );
                    } else {
                      $follow.mutate(
                        { loginData: { id: item._id } },
                        {
                          onSuccess: () => {
                            setFollowers(followers + 1);
                            setUnFollow(false);
                            setFollowed(true);
                          },
                        }
                      );
                    }
                  }
                }}
              >
                {followed ? "Unfollow" : "Follow"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
