import React from "react";
import env from "application/environment/env.json";

export default function EHeader({ data }: any) {
  return (
    <>
      <div
        style={{
          backgroundColor: `${
            data.backgroundColor != null && data.backgroundColor
          }`,
        }}
      >
        <div className="alwaysNoMargin-0-2-135 container-0-2-446">
          <div
            className="primaryText-0-2-447"
            style={{
              color: `${
                data.primaryTextColor != null && data.primaryTextColor
              }`,
            }}
            dangerouslySetInnerHTML={{
              __html: data.primaryText != null ? data.primaryText : "&nbsp;",
            }}
          ></div>
          <div className="headerContent-0-2-448">
            <img
              className="logo-0-2-450"
              src={`${env.server}${data.logoUrl}`}
            />
            <div className="desktopInfo-0-2-451">
              <div className="name-0-2-453">{data.name}</div>
              <div
                className="secondaryText-0-2-454"
                style={{
                  color: `${
                    data.backgroundColor != null && data.backgroundColor
                  }`,
                }}
              >
                {data.secondaryText != null && data.secondaryText}
              </div>
              <div className="tagGroup-0-2-479">
                <div className="tagName-0-2-480">Tags</div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {data?.tags?.map((item: any) => {
                    return (
                      <>
                        <div className="tag-0-2-143 md-0-2-145">
                          #{item.text}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="buttonGroup-0-2-460">
              <div className="buttonContainer-0-2-461">
                <button
                  className={
                    "root-0-2-46 button-0-2-136 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                  }
                >
                  Follow
                </button>
                <div style={{ width: "0.5rem" }}></div>
                <button
                  className="root-0-2-46 button-0-2-478 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55"
                  onClick={() => {
                    window.open(data.url, "_blank");
                  }}
                >
                  Website
                </button>
              </div>
              <button className="root-0-2-46 expandButton-0-2-462 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                <span>Expand</span>
                <div className="caret-0-2-464">
                  <svg
                    className="fill-0-2-36"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.30133 0.298616C0.66658 -0.0633426 1.23813 -0.096248 1.64089 0.1999L1.75628 0.298616L5 3.53895L8.24372 0.298617C8.60897 -0.0633419 9.18052 -0.0962473 9.58328 0.199901L9.69867 0.298617C10.0639 0.660575 10.0971 1.22698 9.79828 1.62611L9.69867 1.74046L5.72748 5.70138C5.36223 6.06334 4.79067 6.09625 4.38791 5.8001L4.27252 5.70138L0.30133 1.74046C-0.100444 1.34231 -0.100444 0.69677 0.30133 0.298616Z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
