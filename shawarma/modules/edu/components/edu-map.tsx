import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function EduMap({ item, access_token, logged }: any) {
  return (
    <>
      <div className="superRoot-0-2-236">
        <div className="root-0-2-237">
          <div className="container-0-2-238">
            <Link href={`/e/${item.slug}`}>
              <a>
                <img
                  className="logo-0-2-239"
                  src={`${process.env.SERVER_APP_API_URL}${item.logoUrl}`}
                  style={{ cursor: "pointer" }}
                />
              </a>
            </Link>
            <div className="name-0-2-240">{item.name}</div>
            <div className="secondaryText-0-2-241">{item.secondaryText}</div>
            <div className="stats-0-2-242">
              <div className="stat-0-2-243">
                <div className="count-0-2-244">
                  {item.coursesId.length ?? 0}
                </div>
                <div className="label-0-2-245">Courses</div>
              </div>
              <div className="stat-0-2-243">
                <div className="count-0-2-244">0</div>
                <div className="label-0-2-245">Followers</div>
              </div>
            </div>
            <div className="buttonGroup-0-2-246">
              <Link href={`/e/${item.slug}`}>
                <a className="root-0-2-46 viewCoursesButton-0-2-247 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55">
                  Courses
                </a>
              </Link>
              {logged ? (
                <button
                  className={
                    "root-0-2-46 followButton-0-2-149 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantPrimary-0-2-54"
                  }
                >
                  Follow
                </button>
              ) : (
                <Link href="/register">
                  <a
                    className={
                      "root-0-2-46 followButton-0-2-149 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantPrimary-0-2-54"
                    }
                  >
                    Follow
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
