import React, { useEffect, useState } from "react";
import Header from "ui/header";
import Footer from "ui/footer";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import Head from "next/head";
import { useMutation } from "react-query";
import { FollowRequest } from "features/follow/follow.api";
import { UnFollowRequest } from "features/unfollow/unfollow.api";

interface Props {
  id: string;
}

export default function ModuleCompanyDetailPage({
  logged,
  access_token,
  data,
}: any) {
  const sanitizer = DOMPurify.sanitize;
  const [collapse, setCollapse] = useState<boolean>(true);
  const [followed, setFollowed] = useState<boolean>(false);
  const [unFollow, setUnFollow] = useState<boolean>(false);
  const [followers, setFollowers] = useState<String | any>(
    data.followedUsersId
  );

  useEffect(() => {
    if (data.followedUsersId) {
      if (!unFollow) {
        if (data.followedUsersId.length != 0) {
          data.followedUsersId.map((item: any) => {
            if (item.id == access_token._id) {
              setFollowed(true);
            }
          });
        }
      } else {
        setFollowed(false);
      }
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
      <Head>
        <title>{data.name && `${data.name} | Tech Talent`}</title>
      </Head>
      <Header ShowLine={true} access_token={access_token} logged={logged} />
      <main className="main-0-2-2">
        <div className="root__SECONDONON">
          <div className="root__ONON">
            <div
              style={{
                backgroundColor: `${
                  data.backgroundColor != null
                    ? data.backgroundColor
                    : "transparent"
                }`,
              }}
            >
              <div className="alwaysNoMargin-0-2-138 container-0-2-104">
                <div
                  className="primaryText-0-2-105"
                  style={{
                    color: `${
                      data.primaryTextColor != null
                        ? data.primaryTextColor
                        : "rgb(23, 23, 37)"
                    }`,
                  }}
                  dangerouslySetInnerHTML={{
                    // @ts-ignore
                    __html: sanitizer(data.primaryText == true ?? "&nbsp;"),
                  }}
                ></div>
                <div
                  className={`headerContent-0-2-106 ${
                    data.backgroundColor == null && "headerContentWhite-0-2-107"
                  }`}
                >
                  {data.logoUrl == null ? (
                    <p
                      className="logo-0-2-108"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: 35,
                        textTransform: "uppercase",
                        cursor: "pointer",
                        background: "#fff",
                      }}
                    >
                      {data.name[0]}
                    </p>
                  ) : (
                    <img
                      className="logo-0-2-108"
                      src={`${process.env.SERVER_APP_API_URL}${data.logoUrl}`}
                    />
                  )}
                  <div className="desktopInfo-0-2-109">
                    <div className="name-0-2-111">{data.name}</div>
                    <div
                      className="secondaryText-0-2-112"
                      style={{
                        color: `${
                          data.secondaryTextColor != null
                            ? data.secondaryTextColor
                            : "rgb(123, 124, 230)"
                        }`,
                      }}
                      dangerouslySetInnerHTML={{
                        // @ts-ignore
                        __html: sanitizer(
                          // @ts-ignore
                          data.secondaryText == true ?? "&nbsp;"
                        ),
                      }}
                    ></div>
                    <div className="row-0-2-113">
                      <div className="column-0-2-114">
                        <div>
                          <div className="label-0-2-115">Remote Friendly</div>
                          <div className="label-0-2-115">Head Office</div>
                        </div>
                        <div>
                          <div
                            className="value-0-2-116"
                            dangerouslySetInnerHTML={{
                              // @ts-ignore
                              __html: sanitizer(
                                data.remoteFriendly ? "Yes" : "&nbsp;"
                              ),
                            }}
                          ></div>
                          <div
                            className="value-0-2-116"
                            dangerouslySetInnerHTML={{
                              // @ts-ignore
                              __html: sanitizer(
                                data.hq == true ? data.hq : "&nbsp;"
                              ),
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="column-0-2-114">
                        <div>
                          <div className="label-0-2-115">Industry</div>
                          <div className="label-0-2-115">Employees</div>
                        </div>
                        <div>
                          <div
                            className="value-0-2-116"
                            dangerouslySetInnerHTML={{
                              // @ts-ignore
                              __html: sanitizer(
                                data.industry != null ? data.industry : "&nbsp;"
                              ),
                            }}
                          ></div>
                          <div
                            className="value-0-2-116"
                            dangerouslySetInnerHTML={{
                              // @ts-ignore
                              __html: sanitizer(
                                data.employees != null
                                  ? data.employees
                                  : "&nbsp;"
                              ),
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="buttonGroup-0-2-118">
                    <div className="buttonContainer-0-2-119">
                      <button
                        className={
                          followed
                            ? "root-0-2-46 button-0-2-136 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55"
                            : "root-0-2-46 button-0-2-136 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                        }
                        onClick={() => {
                          if (followed) {
                            $unfollow.mutate(
                              { loginData: { id: data._id } },
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
                              { loginData: { id: data._id } },
                              {
                                onSuccess: () => {
                                  setFollowers(followers + 1);
                                  setUnFollow(false);
                                  setFollowed(true);
                                },
                              }
                            );
                          }
                        }}
                      >
                        {followed ? "Unfollow" : "Follow"}
                      </button>
                    </div>
                    <button
                      className="root-0-2-46 expandButton-0-2-120 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59"
                      onClick={() => {
                        setCollapse(!collapse);
                      }}
                    >
                      <span>{collapse ? "Collapse" : "Expand"}</span>
                      <div className="caret-0-2-122">
                        <svg
                          className="fill-0-2-36"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            transform: `${
                              collapse ? "rotate(180deg)" : "rotate(0deg)"
                            }`,
                          }}
                        >
                          <path d="M0.30133 0.298616C0.66658 -0.0633426 1.23813 -0.096248 1.64089 0.1999L1.75628 0.298616L5 3.53895L8.24372 0.298617C8.60897 -0.0633419 9.18052 -0.0962473 9.58328 0.199901L9.69867 0.298617C10.0639 0.660575 10.0971 1.22698 9.79828 1.62611L9.69867 1.74046L5.72748 5.70138C5.36223 6.06334 4.79067 6.09625 4.38791 5.8001L4.27252 5.70138L0.30133 1.74046C-0.100444 1.34231 -0.100444 0.69677 0.30133 0.298616Z"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`alwaysNoMargin-0-2-138 ${
                !collapse && "hiddenOnDesktop-0-2-121"
              }`}
            >
              <div className="content-0-2-117">
                <div className="expandedContent-0-2-123">
                  <div className="mobileInfo-0-2-110">
                    <div className="name-0-2-111">{data.name}</div>
                    <div
                      className="secondaryText-0-2-112"
                      style={{ color: "rgb(123, 124, 230)" }}
                    >
                      &nbsp;
                    </div>
                  </div>
                  <div className="expandedContentTop-0-2-124">
                    <div className="capsuleGroup-0-2-126">
                      <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-127">
                        <div className="circle-0-2-34">
                          <svg
                            className="fill-0-2-36 capsuleIcon-0-2-128"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.1377 22C7.7257 22 7.3347 21.968 6.9667 21.905L6.7487 21.864C4.3777 21.371 2.9997 19.555 2.9997 16.791V7.209C2.9997 6.875 3.0197 6.555 3.0597 6.249C3.4087 3.564 5.2537 2 8.1377 2H15.8627C19.0587 2 20.9697 3.92 20.9997 7.132V7.209V16.791C20.9997 20.048 19.0837 22 15.8627 22H8.1377ZM8.1377 3.457C5.6817 3.457 4.4367 4.72 4.4367 7.209V16.791C4.4367 19.28 5.6817 20.543 8.1377 20.543H15.8537C18.3087 20.543 19.5457 19.28 19.5457 16.791V7.209C19.5457 4.72 18.3087 3.457 15.8537 3.457H8.1377ZM16.3057 16.234C16.3057 15.834 15.9867 15.51 15.5927 15.51H8.3817C7.9877 15.51 7.6677 15.834 7.6677 16.234C7.6677 16.634 7.9877 16.958 8.3817 16.958H15.5927C15.9867 16.958 16.3057 16.634 16.3057 16.234ZM15.5927 11.271C15.8677 11.241 16.1367 11.373 16.2837 11.61C16.4307 11.849 16.4307 12.151 16.2837 12.39C16.1367 12.627 15.8677 12.759 15.5927 12.729H8.3817C8.0157 12.687 7.7387 12.374 7.7387 12C7.7387 11.626 8.0157 11.312 8.3817 11.271H15.5927ZM11.7767 7.771C11.7767 7.397 11.4997 7.083 11.1337 7.042H8.3907C8.0237 7.083 7.7467 7.397 7.7467 7.771C7.7467 8.144 8.0237 8.458 8.3907 8.499H11.1337C11.4997 8.458 11.7767 8.144 11.7767 7.771Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="capsuleLabelValuePair-0-2-129">
                        <div className="capsuleLabel-0-2-130">
                          Remote Friendly
                        </div>
                        <div className="capsuleValuePrimary-0-2-131">
                          {data.remoteFriendly && "Yes"}
                        </div>
                      </div>
                    </div>
                    <div className="capsuleGroup-0-2-126">
                      <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-127">
                        <div className="circle-0-2-34">
                          <svg
                            className="fill-0-2-36 capsuleIcon-0-2-128"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.0288 2.00005C7.41977 1.98439 3.6551 5.65135 3.50463 10.2414L3.5 10.5263C3.57661 12.7761 4.34207 14.9207 5.69028 16.6876L6.00692 17.1008C7.2938 18.7371 8.82311 20.1733 10.5403 21.3571L10.9537 21.6354L11.014 21.6828C11.6026 22.1057 12.3973 22.1057 12.9858 21.6828L13.036 21.6415C14.3986 20.7579 15.655 19.7196 16.7805 18.5473C19.0686 16.1252 20.4477 13.4112 20.4998 10.655L20.4999 10.5526C20.5155 5.93192 16.8598 2.15567 12.284 2.00469L12.0288 2.00005ZM12.0237 3.51747C15.8022 3.53038 18.87 6.54942 18.9839 10.3091L18.9871 10.6406C18.9434 12.9514 17.7334 15.3324 15.6866 17.4991C14.6429 18.5862 13.4727 19.5526 12.2036 20.3745L12.119 20.438C12.0506 20.4974 11.9492 20.4974 11.8809 20.438L11.7987 20.376C9.90797 19.1416 8.24857 17.583 6.89636 15.7717C5.80718 14.3442 5.16175 12.6374 5.03184 10.8569L5.01275 10.4999C5.02559 6.71221 8.03532 3.63498 11.7835 3.52071L12.0237 3.51747ZM11.9999 7.40129C10.2115 7.40129 8.76176 8.85554 8.76176 10.6495C8.76176 12.4434 10.2115 13.8976 11.9999 13.8976C13.7883 13.8976 15.2381 12.4434 15.2381 10.6495C15.2381 8.85554 13.7883 7.40129 11.9999 7.40129ZM11.9999 8.91871C12.9528 8.91871 13.7253 9.69359 13.7253 10.6495C13.7253 11.6053 12.9528 12.3802 11.9999 12.3802C11.047 12.3802 10.2745 11.6053 10.2745 10.6495C10.2745 9.69359 11.047 8.91871 11.9999 8.91871Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="capsuleLabelValuePair-0-2-129">
                        <div className="capsuleLabel-0-2-130">Head Office</div>
                        <div className="capsuleValuePrimary-0-2-131">
                          {data.hq != null && data.hq}
                        </div>
                      </div>
                    </div>
                    <div className="capsuleGroup-0-2-126">
                      <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-127">
                        <div className="circle-0-2-34">
                          <svg
                            className="fill-0-2-36 capsuleIcon-0-2-128"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.9378 3.4375C9.38221 3.4375 7.32951 5.4902 7.32951 8.04575C7.32951 10.602 9.38204 12.6549 11.9378 12.6549C14.4935 12.6549 16.546 10.602 16.546 8.04575C16.546 5.4902 14.4933 3.4375 11.9378 3.4375ZM11.9378 4.9375C13.6649 4.9375 15.046 6.31863 15.046 8.04575C15.046 9.77367 13.665 11.1549 11.9378 11.1549C10.2105 11.1549 8.82951 9.77367 8.82951 8.04575C8.82951 6.31863 10.2106 4.9375 11.9378 4.9375ZM6.28999 4.37937C6.7042 4.37937 7.03999 4.71516 7.03999 5.12937C7.03999 5.54359 6.7042 5.87937 6.28999 5.87937C5.10162 5.87937 4.13782 6.84275 4.13782 8.03062C4.13782 9.2185 5.10162 10.1819 6.28999 10.1819C6.7042 10.1819 7.03999 10.5177 7.03999 10.9319C7.03999 11.3461 6.7042 11.6819 6.28999 11.6819C4.27334 11.6819 2.63782 10.0471 2.63782 8.03062C2.63782 6.01418 4.27334 4.37937 6.28999 4.37937ZM21.247 8.03062C21.247 6.01418 19.6115 4.37937 17.5949 4.37937C17.1807 4.37937 16.8449 4.71516 16.8449 5.12937C16.8449 5.54359 17.1807 5.87937 17.5949 5.87937C18.7832 5.87937 19.747 6.84275 19.747 8.03062C19.747 9.2185 18.7832 10.1819 17.5949 10.1819C17.1807 10.1819 16.8449 10.5177 16.8449 10.9319C16.8449 11.3461 17.1807 11.6819 17.5949 11.6819C19.6115 11.6819 21.247 10.0471 21.247 8.03062ZM20.4958 13.555C20.0156 13.4466 19.5025 13.3725 18.9807 13.3365C18.5675 13.308 18.2094 13.6199 18.1809 14.0331C18.1524 14.4464 18.4642 14.8045 18.8775 14.833C19.324 14.8638 19.7616 14.9269 20.1871 15.0227C20.8488 15.1525 21.2801 15.3678 21.3872 15.5921C21.4677 15.7615 21.4677 15.9606 21.3864 16.132C21.2808 16.3541 20.853 16.5682 20.2007 16.7024C19.795 16.7858 19.5337 17.1823 19.6171 17.5881C19.7006 17.9938 20.0971 18.2551 20.5028 18.1716C21.581 17.9499 22.3708 17.5546 22.7414 16.7756C23.0161 16.1964 23.0161 15.5247 22.7414 14.947C22.3682 14.1651 21.5648 13.7643 20.4958 13.555ZM5.704 14.0331C5.67551 13.6199 5.31741 13.308 4.90418 13.3365C4.38239 13.3725 3.86922 13.4466 3.36845 13.5593L3.162 13.603C2.21438 13.8195 1.49143 14.2174 1.14442 14.9469C0.868561 15.5241 0.868561 16.197 1.14471 16.7762C1.51363 17.5544 2.30341 17.9498 3.38205 18.1716C3.78777 18.2551 4.18431 17.9938 4.26774 17.5881C4.35117 17.1823 4.0899 16.7858 3.68418 16.7024C3.03209 16.5683 2.60472 16.3543 2.49939 16.1321C2.41734 15.96 2.41734 15.7621 2.49838 15.5925C2.60537 15.3676 3.03633 15.1525 3.67721 15.027L4.01044 14.9588C4.34262 14.8974 4.67249 14.8561 5.00738 14.833C5.42062 14.8045 5.7325 14.4464 5.704 14.0331ZM5.16709 17.1845C5.16709 14.7986 7.63503 13.9595 11.9378 13.9595L12.2426 13.961C16.3655 13.9997 18.7084 14.8407 18.7084 17.1671C18.7084 19.4388 16.4689 20.3087 12.5397 20.3863L11.9378 20.3921C7.62516 20.3921 5.16709 19.5678 5.16709 17.1845ZM17.2084 17.1671C17.2084 16.0566 15.4279 15.4595 11.9378 15.4595C8.45105 15.4595 6.66709 16.0661 6.66709 17.1845C6.66709 18.2952 8.44707 18.8921 11.9378 18.8921C15.4234 18.8921 17.2084 18.2851 17.2084 17.1671Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="capsuleLabelValuePair-0-2-129">
                        <div className="capsuleLabel-0-2-130">Employees</div>
                        <div className="capsuleValueSecondary-0-2-132">
                          {data.employees != null && data.employees}
                        </div>
                      </div>
                    </div>
                    <div className="capsuleGroup-0-2-126">
                      <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-127">
                        <div className="circle-0-2-34">
                          <svg
                            className="fill-0-2-36 capsuleIcon-0-2-128"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.5 8.389C3.5 7.117 4.54 6.081 5.817 6.081H18.183C19.455 6.081 20.49 7.117 20.49 8.389V11.446C18.847 12.467 16.953 13.182 14.959 13.533C14.411 12.426 13.271 11.7 11.99 11.7C10.72 11.7 9.575 12.423 9.011 13.524C7.029 13.175 5.142 12.463 3.5 11.446V8.389ZM10.704 3.5H13.286C13.958 3.5 14.521 3.961 14.688 4.581H9.301C9.469 3.961 10.031 3.5 10.704 3.5ZM9.384 15.101C9.764 15.154 10.111 14.92 10.211 14.556C10.434 13.744 11.149 13.2 11.99 13.2C12.822 13.2 13.544 13.756 13.746 14.552C13.832 14.888 14.134 15.118 14.473 15.118C14.507 15.118 14.542 15.116 14.576 15.111C17.145 14.755 19.592 13.846 21.654 12.482C21.864 12.342 21.99 12.108 21.99 11.856V8.389C21.99 6.289 20.282 4.581 18.183 4.581H16.206C16.019 3.13 14.788 2 13.286 2H10.704C9.202 2 7.972 3.129 7.784 4.581H5.817C3.712 4.581 2 6.289 2 8.389V11.856C2 12.108 2.126 12.343 2.337 12.482C4.396 13.84 6.833 14.745 9.384 15.101ZM11.2451 15.3841V16.6781C11.2451 17.0921 11.5811 17.4281 11.9951 17.4281C12.4091 17.4281 12.7451 17.0921 12.7451 16.6781V15.3841C12.7451 14.9701 12.4091 14.6341 11.9951 14.6341C11.5811 14.6341 11.2451 14.9701 11.2451 15.3841ZM20.5086 15.4169C20.5386 15.0329 20.8516 14.7269 21.2446 14.7269C21.6576 14.7269 21.9926 15.0619 21.9926 15.4749C21.9926 15.4813 21.9807 15.6353 21.963 15.8639C21.9198 16.4213 21.8423 17.4221 21.8196 17.8079C21.7626 18.7459 21.3986 19.7029 20.8456 20.3689C20.0756 21.2969 19.0946 21.7309 17.7606 21.7339C17.1416 21.7349 14.5836 21.7359 12.0246 21.7359C9.4666 21.7359 6.9076 21.7349 6.2896 21.7339C4.9546 21.7309 3.9736 21.2969 3.2036 20.3679C2.6516 19.7029 2.2866 18.7459 2.2306 17.8079C2.20754 17.4277 2.13173 16.4502 2.08816 15.8884C2.06939 15.6464 2.0566 15.4815 2.0566 15.4749C2.0566 15.0619 2.3916 14.7269 2.8046 14.7269C3.1976 14.7269 3.5106 15.0329 3.5406 15.4169C3.5406 15.4169 3.6946 17.1659 3.7276 17.7179C3.7646 18.3289 4.0126 18.9939 4.3586 19.4099C4.8486 20.0009 5.3906 20.2319 6.2916 20.2339C7.5276 20.2359 16.5206 20.2359 17.7576 20.2339C18.6596 20.2319 19.2016 20.0009 19.6906 19.4109C20.0376 18.9939 20.2856 18.3289 20.3226 17.7179C20.3546 17.1659 20.5086 15.4169 20.5086 15.4169Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="capsuleLabelValuePair-0-2-129">
                        <div className="capsuleLabel-0-2-130">Industry</div>
                        <div className="capsuleValueSecondary-0-2-132">
                          {data.industry != null && data.industry}
                        </div>
                      </div>
                    </div>
                    <div className="capsuleGroup-0-2-126">
                      <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-127">
                        <div className="circle-0-2-34">
                          <svg
                            className="fill-0-2-36 capsuleIcon-0-2-128"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.1377 22C7.7257 22 7.3347 21.968 6.9667 21.905L6.7487 21.864C4.3777 21.371 2.9997 19.555 2.9997 16.791V7.209C2.9997 6.875 3.0197 6.555 3.0597 6.249C3.4087 3.564 5.2537 2 8.1377 2H15.8627C19.0587 2 20.9697 3.92 20.9997 7.132V7.209V16.791C20.9997 20.048 19.0837 22 15.8627 22H8.1377ZM8.1377 3.457C5.6817 3.457 4.4367 4.72 4.4367 7.209V16.791C4.4367 19.28 5.6817 20.543 8.1377 20.543H15.8537C18.3087 20.543 19.5457 19.28 19.5457 16.791V7.209C19.5457 4.72 18.3087 3.457 15.8537 3.457H8.1377ZM16.3057 16.234C16.3057 15.834 15.9867 15.51 15.5927 15.51H8.3817C7.9877 15.51 7.6677 15.834 7.6677 16.234C7.6677 16.634 7.9877 16.958 8.3817 16.958H15.5927C15.9867 16.958 16.3057 16.634 16.3057 16.234ZM15.5927 11.271C15.8677 11.241 16.1367 11.373 16.2837 11.61C16.4307 11.849 16.4307 12.151 16.2837 12.39C16.1367 12.627 15.8677 12.759 15.5927 12.729H8.3817C8.0157 12.687 7.7387 12.374 7.7387 12C7.7387 11.626 8.0157 11.312 8.3817 11.271H15.5927ZM11.7767 7.771C11.7767 7.397 11.4997 7.083 11.1337 7.042H8.3907C8.0237 7.083 7.7467 7.397 7.7467 7.771C7.7467 8.144 8.0237 8.458 8.3907 8.499H11.1337C11.4997 8.458 11.7767 8.144 11.7767 7.771Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="capsuleLabelValuePair-0-2-129">
                        <div className="capsuleLabel-0-2-130">Founded</div>
                        <div className="capsuleValueSecondary-0-2-132">
                          {data.founded != null && data.founded}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="expandedContentBottom-0-2-125">
                    <div className="aboutLabel-0-2-133">About</div>
                    <div className="aboutContent-0-2-134">
                      {data.about != null && data.about}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="marginOnMobile-0-2-137">
              <div className="body-0-2-135">
                <div className="root-0-2-141 root-0-2-139">
                  <h2 className="h2-0-2-142">Latest Jobs</h2>
                  <div className="grid-0-2-143">
                    <div className="root-0-2-149 root-0-2-146">
                      <div className="header-0-2-151">
                        <div className="image-0-2-152 image-0-2-147">
                          <Link href="/c/iigXZ/Iprwc-it">
                            <div className="image-0-2-147">
                              <svg
                                className="root-0-2-173"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6V16.6Z"></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                        <div className="primaryColumn-0-2-164">
                          <div className="primaryColumnTop-0-2-165">
                            <Link href="/c/iigXZ/Iprwc-it">
                              <a className="jobName-0-2-148">
                                IT ბიზნეს ანალიტიკოსი
                              </a>
                            </Link>
                          </div>
                          <div className="primaryColumnBottom-0-2-166">
                            <div className="root-0-2-174">
                              <div className="dot-0-2-175"></div>Added 8 days
                              ago
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lineFirst-0-2-160"></div>
                      <div className="secondaryColumn-0-2-167">
                        <div className="secondaryColumnTop-0-2-168">
                          <div className="root-0-2-176">
                            <div className="tag-0-2-178 md-0-2-180">
                              #Middle
                            </div>
                            <div className="tag-0-2-178 md-0-2-180">
                              #Tbilisi
                            </div>
                            <div className="tag-0-2-178 md-0-2-180">
                              #ITbusinessanalyst
                            </div>
                          </div>
                        </div>
                        <div className="secondaryColumnBottom-0-2-169"></div>
                      </div>
                      <div className="lineSecond-0-2-162"></div>
                      <div className="tertiaryColumn-0-2-170">
                        <div className="secondaryButton-0-2-171">
                          <div className="show-0-2-181">
                            <svg
                              className="fill-0-2-36 money-0-2-186"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{
                                height: "20px",
                                strokeWidth: "0.75",
                                stroke: "rgb(220, 220, 220)",
                                fill: "rgb(220, 220, 220)",
                              }}
                            >
                              <path d="M10.5028 2L9.22455 3.28373L9.06539 3.42974L9.07038 5.23675L8.89852 5.29071L8.75749 5.33968L8.60831 5.38548L8.4954 5.43445L8.3648 5.48569L8.22106 5.53965L8.09273 5.60132L7.96168 5.65755L7.84379 5.71423L7.74357 5.76049L7.62023 5.82714L7.52274 5.88383L7.42253 5.94005L7.29964 6.00671L7.2017 6.06067L7.06067 6.14547L6.9065 6.24568L6.74008 6.35859L6.61175 6.44293L6.46529 6.55358L6.37278 6.62522L6.25489 6.71773L6.14696 6.80252L6.03133 6.89503L5.92613 6.97982L5.84406 7.0619L5.74384 7.15395L5.56156 7.32626L5.4822 7.40289L5.41781 7.47L5.33075 7.55435L5.22555 7.66771L5.12533 7.77518L5.0614 7.85997L4.98159 7.94704L4.90994 8.04226L4.83785 8.13477L4.76847 8.22682L4.69682 8.31433L4.63243 8.4014L4.56577 8.48393L4.51453 8.56056L4.45558 8.65578L4.39391 8.756L4.33995 8.82764L4.28871 8.90473L4.20891 9.03306L4.17308 9.10742L4.12955 9.18451L4.06788 9.28472L4.01936 9.36136L3.99079 9.43844L3.93185 9.53866L3.87562 9.64114L3.81395 9.7672L3.7677 9.8851L3.71646 10.0107L3.66476 10.1164L3.62395 10.2084L3.58541 10.3163L3.52646 10.4496L3.48021 10.5884L3.41355 10.7861L3.37727 10.9067L3.33646 11.0428L3.30064 11.1684L3.2698 11.2944L3.19 11.6431L3.16959 11.7511L3.13604 11.8771L3.11291 12.0308L3.09749 12.1338L3.07437 12.2952L3.05169 12.4725L3.02857 12.7545L3.01043 12.9523L3.00272 13.1037L3 13.286L3.00272 13.7299L3.00771 13.8764L3.02313 14.0868L3.03628 14.2587L3.04897 14.382L3.06167 14.513L3.07437 14.6182L3.09749 14.7493L3.11563 14.8749L3.13377 14.9878L3.15689 15.1007L3.1773 15.1982L3.20813 15.3342L3.23625 15.4526L3.2621 15.5732L3.30291 15.7038L3.33646 15.8376L3.36956 15.9505L3.4004 16.048L3.43395 16.1609L3.4725 16.2661L3.51104 16.379L3.55457 16.4892L3.59312 16.5867L3.62894 16.6715L3.67791 16.7921L3.72643 16.9104L3.78039 17.0206L3.82664 17.1308L3.8729 17.2211L3.91915 17.3031L3.97311 17.421L4.02163 17.5108L4.0706 17.6033L4.12456 17.6958L4.15767 17.7548L4.19122 17.811L4.23974 17.8908L4.28373 17.9652L4.32454 18.0296L4.37351 18.0962L4.41432 18.1679L4.47871 18.2654L4.53494 18.3474L4.59661 18.43L4.64014 18.4966L4.68911 18.5606L4.75078 18.6404L4.80202 18.707L4.87367 18.7941L4.96391 18.902L5.03827 18.9995L5.12533 19.0947L5.18972 19.1741L5.25865 19.2435L5.34118 19.3305L5.41554 19.413L5.48991 19.4874L5.54614 19.5414L5.61552 19.6053L5.68762 19.6774L5.74929 19.7336L5.81594 19.7953L5.8699 19.8466L5.94155 19.9082L6.00821 19.9699L6.06761 20.0107L6.12112 20.0624L6.1778 20.1059L6.22405 20.139L6.27529 20.1803L6.33696 20.2293L6.39591 20.2751L6.4603 20.3213L6.52923 20.3726L6.59089 20.4188L6.63443 20.4474L6.6707 20.4755L6.71151 20.5036L6.7555 20.5344L6.79359 20.5603L6.82714 20.578H4.42475L3.00272 22H17.2942L18.7112 20.578L11.2624 20.5757L11.1009 20.573L10.9055 20.5526L10.6235 20.5295L10.3641 20.4782L10.1641 20.4419L9.95597 20.3934L9.7764 20.3549L9.5787 20.3059L9.44765 20.2674L9.23997 20.193L9.06267 20.1291L8.91121 20.0751L8.77019 20.0161L8.62372 19.9418L8.49041 19.8774L8.31855 19.798L8.14896 19.7055L7.99751 19.6157L7.85149 19.5282L7.74085 19.4566L7.59711 19.3718L7.46606 19.2743L7.35315 19.2022L7.24296 19.1201L7.11735 19.0149L6.98903 18.9124L6.85798 18.7968L6.73237 18.6889L6.5986 18.5583L6.47572 18.4377L6.39092 18.3551L6.29071 18.2345L6.21135 18.1502L6.13155 18.0654L6.03133 17.942L5.92114 17.806C5.92114 17.806 5.82365 17.6753 5.82365 17.665C5.82365 17.6547 5.72843 17.5444 5.72843 17.5444L5.62096 17.3825L5.53344 17.2542L5.44638 17.1181L5.3643 16.9771L5.29493 16.8588L5.23598 16.7409L5.14846 16.579L5.0818 16.4252L5.01741 16.2761L4.94577 16.1223L4.89679 16.0067L4.85598 15.9015L4.81245 15.7682L4.75305 15.5832L4.69183 15.3882L4.63016 15.1701L4.59162 14.9828L4.55036 14.7774L4.51181 14.6028L4.48642 14.3947L4.46556 14.1997L4.44515 13.9789L4.43518 13.8505L4.42475 13.7018V13.5658L4.42747 13.4374L4.43518 13.3041L4.44017 13.091L4.45014 12.9318L4.45785 12.765L4.471 12.6493L4.49141 12.4902L4.51453 12.3442L4.53267 12.195L4.55806 12.0694L4.59162 11.9129L4.61701 11.7846L4.64014 11.6871L4.6737 11.5588L4.70952 11.4481L4.75078 11.2944L4.79159 11.1838L4.84555 11.0301L4.89679 10.8863L4.94849 10.7603L5.00472 10.6011L5.07681 10.4474L5.12806 10.3549L5.187 10.2293L5.25366 10.0955L5.30762 9.99528L5.38199 9.86469L5.46678 9.73364L5.52347 9.63116L5.59012 9.53367L5.68762 9.39219L5.76969 9.27429L5.84406 9.16411L5.92114 9.06117L5.9878 8.96867L6.04947 8.89929L6.12384 8.81721L6.18279 8.74285L6.23947 8.68118L6.30885 8.61225L6.3678 8.54015L6.45486 8.4608L6.53195 8.38099L6.68612 8.23226L6.74008 8.17558L6.81173 8.11164L6.88383 8.04725L6.94776 7.9883L7.02485 7.92164L7.11463 7.85227L7.19943 7.78833L7.28422 7.72122L7.37129 7.66771L7.47649 7.5879L7.5767 7.51626L7.68462 7.44688L7.76126 7.3902L7.86419 7.33125L7.9567 7.27457L8.02562 7.22877L8.11314 7.19022L8.17979 7.14896L8.26958 7.10271L8.36979 7.05147L8.47 7.00522L8.52895 6.96939L8.62372 6.93357L8.7058 6.89729L8.80102 6.85376L8.87811 6.82066L8.95475 6.78982L9.02956 6.76398L9.07038 6.74584V13.4374L10.5001 12.0132L10.5028 6.37628L10.5205 6.36857L10.5822 6.35859L10.6543 6.35088L10.7518 6.33546L10.8466 6.32776L10.9069 6.32549L10.9082 6.3264L10.9327 6.32912L11.052 6.31597L11.1803 6.30826L11.3354 6.30327L11.8142 6.30055L11.9888 6.30962L12.1375 6.32005L12.2495 6.33002L12.3561 6.34181L12.4713 6.35587L12.5574 6.36857L12.6345 6.379L12.6368 13.4402L14.0706 12.0154V6.75128L14.0924 6.75763L14.1409 6.77804L14.2089 6.80524L14.3 6.83834L14.3631 6.86918L14.4556 6.90908L14.5581 6.95534L14.6533 7.00159L14.7467 7.04875L14.8496 7.09908L14.9635 7.15939L15.0446 7.20156L15.1163 7.2401L15.1766 7.28137L15.2473 7.32218L15.3049 7.35301L15.3793 7.40289L15.4437 7.44552L15.5221 7.49313L15.5901 7.53893L15.6581 7.5879L15.7271 7.63778L15.7951 7.68539L15.8749 7.7457L15.9479 7.80239L16.0046 7.84728L16.0649 7.8958L16.1302 7.94704L16.2009 8.00508L16.2857 8.08443L16.3587 8.14746L16.4281 8.21412L16.5038 8.28078L16.5782 8.35787L16.6344 8.40412L16.687 8.4608L16.7718 8.55058L16.8453 8.62858L16.8952 8.68662L16.9478 8.74557L17.0262 8.83399L17.1083 8.9342L17.1777 9.01764L17.2171 9.07931L17.2674 9.15232L17.33 9.23212L17.3804 9.30014L17.4289 9.36816L17.4765 9.43708L17.5332 9.52052L17.5817 9.59897L17.6266 9.66562L17.6665 9.72457L17.7073 9.78896L17.7472 9.8529L17.7844 9.925L17.8179 9.9903L17.8601 10.0687L17.8973 10.1291L17.9259 10.1866L17.959 10.2574L17.9884 10.3086L18.017 10.3676L18.0619 10.4628L18.1068 10.5666L18.1322 10.6206L18.1567 10.6782L18.1812 10.7349L18.2029 10.7925L18.2288 10.8646L18.2505 10.9221L18.2814 10.9861L18.3018 11.0387L18.3186 11.0913L18.3417 11.162L18.3571 11.2124L18.3789 11.2813L18.3993 11.3561L18.4224 11.4314L18.4491 11.5098L18.475 11.6128L18.4981 11.6971L18.529 11.8359L18.5457 11.9075L18.5634 11.9873L18.5838 12.0952L18.5893 12.1156L18.6033 12.2004L18.6224 12.3006L18.6355 12.4095L18.6496 12.5174L18.6663 12.6548L18.6804 12.7804L18.6904 12.9291L18.6995 13.0615L18.7099 13.2348L18.7162 13.4297L20.0344 12.1116L20.0367 12.0875L20.029 12.0308L20.0176 11.9606L20.0049 11.8871L19.9945 11.8295L19.9791 11.7411L19.9596 11.664L19.9469 11.5919L19.9161 11.469L19.9006 11.4033L19.8802 11.3239L19.8558 11.2341L19.8354 11.1593L19.8149 11.0827L19.7954 11.021L19.775 10.9489L19.7492 10.8682L19.7224 10.7834L19.6866 10.6768L19.6581 10.5925L19.6313 10.51L19.5991 10.4306L19.5723 10.3626L19.5388 10.2637L19.5057 10.188L19.4758 10.1213L19.4413 10.0393L19.4077 9.96354L19.3669 9.86696L19.3334 9.79123L19.2962 9.72231L19.2554 9.63615L19.2218 9.57085L19.1797 9.48334L19.1434 9.41804L19.1062 9.34866L19.064 9.27429L19.0151 9.19222L18.9702 9.10878L18.9307 9.04303L18.8894 8.97139L18.8495 8.90972L18.8087 8.83671L18.7716 8.77867L18.7253 8.71337L18.6931 8.66213L18.6595 8.6186L18.6097 8.54151L18.5584 8.46941L18.5135 8.40684L18.4723 8.3488L18.4238 8.2835L18.3734 8.2182L18.3222 8.15245L18.2927 8.10892L18.2465 8.05632L18.217 8.0205L18.1671 7.95883L18.1208 7.90351L18.0696 7.8432L17.9912 7.75069L17.9259 7.67633L17.8656 7.61602L17.8075 7.55208L17.7436 7.48769L17.6497 7.39156L17.569 7.31583L17.5023 7.25053L17.4212 7.17073L17.3482 7.10044L17.2838 7.04648L17.1994 6.96667L17.1287 6.90908L17.0697 6.85512L16.9913 6.79481L16.9246 6.74085L16.8475 6.67782L16.7732 6.62295L16.6911 6.564L16.6181 6.51231L16.5347 6.44701L16.4549 6.39033L16.3909 6.34317L16.3238 6.29964L16.2535 6.2543L16.1737 6.20442L16.0894 6.15046L16.0123 6.09922L15.9456 6.05931L15.8658 6.01578L15.7951 5.97452L15.7157 5.93234L15.6323 5.88383L15.5606 5.84619L15.4772 5.80266L15.396 5.76275L15.3244 5.72693L15.2242 5.67977L15.1344 5.63715L15.0419 5.59362L14.9276 5.54374L14.8419 5.5061L14.7431 5.46801L14.6583 5.43445L14.5798 5.40634L14.495 5.3755L14.3812 5.33197L14.2964 5.30477L14.2003 5.27166L14.1218 5.24854L14.0729 5.23947L14.0706 2.00408L12.6345 3.43246L12.6354 4.9352L12.5202 4.91706L12.3674 4.89938L12.2455 4.88623L12.04 4.87081L11.8491 4.86446L11.7362 4.86084L11.4614 4.86356L11.2819 4.86582L11.0724 4.87353L10.9273 4.88124L10.8892 4.89031L10.7645 4.90074L10.6361 4.91072L10.5464 4.92885L10.5051 4.94654L10.5028 2Z"></path>
                            </svg>
                            <div className="salary-0-2-187 noSalary-0-2-188">
                              No Data
                            </div>
                          </div>
                        </div>
                        <div className="primaryButton-0-2-172">
                          <Link href="/c/iigXZ/Iprwc-it">
                            <a className="root-0-2-46 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54">
                              Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer wantSponsors={true} access_token={access_token} logged={logged} />
    </>
  );
}
