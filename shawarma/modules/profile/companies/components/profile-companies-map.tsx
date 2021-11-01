import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { UnFollowRequest } from "features/unfollow/unfollow.api";
import { FollowRequest } from "features/follow/follow.api";

interface Props {
  id: string;
}

export default function ProfileCompaniesMap({ item, _id, logged }: any) {
  const router = useRouter();
  const [followed, setFollowed] = useState<boolean>(false);
  const [unFollow, setUnFollow] = useState<boolean>(false);

  useEffect(() => {
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
      <div className="root-0-2-223 rootSlice-0-2-224 root-0-2-217">
        <div className="header-0-2-225">
          <div className="IMAGE_0_2_226__ imageSlice-0-2-227 image-0-2-218">
            <Link href={`/c/${item.slug}`}>
              <img
                className="image-0-2-218"
                src={`${process.env.SERVER_APP_API_URL}${item.logoUrl}`}
                alt={item.name}
              />
            </Link>
          </div>
          <div className="primaryColumn-0-2-238">
            <div className="primaryColumnTop-0-2-239">
              <Link href={`/c/${item.slug}`}>
                <a className="companyName-0-2-219">{item.name}</a>
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
                if (!logged) {
                  alert("not logged");
                } else {
                  if (followed) {
                    $unfollow.mutate(
                      { loginData: { id: item._id } },
                      {
                        onSuccess: () => {
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
    </>
  );
}
