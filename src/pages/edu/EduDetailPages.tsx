import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import env from "application/environment/env.json";
import DOMPurify from "dompurify";
import { ApplicationContext } from "context/Application/ApplicationContext";
import { useHistory, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import EduDetailMap from "components/Edu/EduDetailMap";
import { useQuery } from "react-query";
import EduDetailPagesMap from "components/Edu/EduDetailPagesMap";

const EduDetailPages: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [data, setData] = useState<any>([]);
  const [courses, setCourses] = useState<any>([]);
  const [followed, setFollowed] = useState<Boolean>(false);
  const [unFollow, setUnFollow] = useState<Boolean>(false);
  const [changed, setChanged] = useState<Boolean>(false);
  const sanitizer = DOMPurify.sanitize;
  const [collapse, setCollapse] = useState<Boolean>(false);
  const history = useHistory();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [followers, setFollowers] = useState<String | any>(
    data?.followedUsersId?.length
  );
  const { jwtDecode } = useContext(ApplicationContext);
  const fetchEduProfile = () => {
    let splitURL = window.location.pathname.split("/");
    axios.get(`${env.host}/api/get/edu/${splitURL[2]}`).then((result: any) => {
      setData(result.data[0]);
    });
  };

  const { isFetched } = useQuery("Edu Profile", fetchEduProfile);

  useEffect(() => {
    if (courses.length != 0) {
      setCollapse(false);
    } else {
      setCollapse(true);
    }
  }, [courses]);
  useEffect(() => {
    if (courses.length == 0) {
      if (data._id != "" && data._id != undefined) {
        axios
          .post(`${env.host}/api/get/edu/posts`, {
            id: data._id,
          })
          .then((result: any) => {
            setCourses(result.data);
            setLoaded(true);
          });
      }
    }
  }, [data]);
  useEffect(() => {
    if (!changed) {
      setFollowers(data?.followedUsersId?.length);
    }
    if (!unFollow) {
      if (data?.followedUsersId?.length != 0) {
        data?.followedUsersId?.map((item: any) => {
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
      {loaded ? (
        <>
          <Helmet>
            <title>{data.name && `${data.name} | Tech Talent`}</title>
          </Helmet>
          <Header ShowLine={true} />
          <main className="main-0-2-2">
            <div className="root-0-2-442">
              <div className="root-0-2-444">
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
                        __html: sanitizer(
                          data.primaryText != null ? data.primaryText : "&nbsp;"
                        ),
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
                              data.backgroundColor != null &&
                              data.backgroundColor
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
                              followed
                                ? "root-0-2-46 button-0-2-136 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55"
                                : "root-0-2-46 button-0-2-136 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                            }
                            onClick={() => {
                              if (!localStorage.getItem("local")) {
                                history.push(
                                  `/register?return_to=${`${
                                    window.location.pathname.split("/")[1]
                                  }/${window.location.pathname.split("/")[2]}`}`
                                );
                              } else {
                                setChanged(true);
                                const local = localStorage.getItem("local");
                                if (followed) {
                                  axios
                                    .post(
                                      `${env.host}/api/unfollow/edus`,
                                      {
                                        id: data._id,
                                      },
                                      {
                                        headers: {
                                          Authorization: `Bearer ${local}`,
                                        },
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
                                        id: data._id,
                                      },
                                      {
                                        headers: {
                                          Authorization: `Bearer ${local}`,
                                        },
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
                        <button
                          className="root-0-2-46 expandButton-0-2-462 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59"
                          onClick={() => {
                            setCollapse(!collapse);
                          }}
                        >
                          <span>{collapse ? "Collapse" : "Expand"}</span>
                          <div className="caret-0-2-464">
                            <svg
                              className="fill-0-2-36"
                              width="10"
                              height="6"
                              viewBox="0 0 10 6"
                              fill="none"
                              style={{
                                transform: `${
                                  collapse ? "rotate(180deg)" : "rotate(0deg)"
                                }`,
                              }}
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
                <div className="alwaysNoMargin-0-2-135">
                  <div className="content-0-2-459">
                    <div
                      className={`expandedContent-0-2-465 ${
                        !collapse && "hiddenOnDesktop-0-2-121"
                      }`}
                    >
                      <div className="mobileInfo-0-2-452">
                        <div className="name-0-2-453">{data.name}</div>
                        <div
                          className="secondaryText-0-2-454"
                          style={{
                            color: `${
                              data.backgroundColor != null &&
                              data.backgroundColor
                            }`,
                          }}
                        >
                          {data.secondaryText != null && data.secondaryText}
                        </div>
                        <div className="tagGroup-0-2-479">
                          <div className="root-0-2-183"></div>
                        </div>
                      </div>
                      <div className="expandedContentTop-0-2-466">
                        <div className="capsuleGroup-0-2-468">
                          <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-469">
                            <div className="circle-0-2-34">
                              <svg
                                className="fill-0-2-36 capsuleIcon-0-2-470"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M11.9378 3.4375C9.38221 3.4375 7.32951 5.4902 7.32951 8.04575C7.32951 10.602 9.38204 12.6549 11.9378 12.6549C14.4935 12.6549 16.546 10.602 16.546 8.04575C16.546 5.4902 14.4933 3.4375 11.9378 3.4375ZM11.9378 4.9375C13.6649 4.9375 15.046 6.31863 15.046 8.04575C15.046 9.77367 13.665 11.1549 11.9378 11.1549C10.2105 11.1549 8.82951 9.77367 8.82951 8.04575C8.82951 6.31863 10.2106 4.9375 11.9378 4.9375ZM6.28999 4.37937C6.7042 4.37937 7.03999 4.71516 7.03999 5.12937C7.03999 5.54359 6.7042 5.87937 6.28999 5.87937C5.10162 5.87937 4.13782 6.84275 4.13782 8.03062C4.13782 9.2185 5.10162 10.1819 6.28999 10.1819C6.7042 10.1819 7.03999 10.5177 7.03999 10.9319C7.03999 11.3461 6.7042 11.6819 6.28999 11.6819C4.27334 11.6819 2.63782 10.0471 2.63782 8.03062C2.63782 6.01418 4.27334 4.37937 6.28999 4.37937ZM21.247 8.03062C21.247 6.01418 19.6115 4.37937 17.5949 4.37937C17.1807 4.37937 16.8449 4.71516 16.8449 5.12937C16.8449 5.54359 17.1807 5.87937 17.5949 5.87937C18.7832 5.87937 19.747 6.84275 19.747 8.03062C19.747 9.2185 18.7832 10.1819 17.5949 10.1819C17.1807 10.1819 16.8449 10.5177 16.8449 10.9319C16.8449 11.3461 17.1807 11.6819 17.5949 11.6819C19.6115 11.6819 21.247 10.0471 21.247 8.03062ZM20.4958 13.555C20.0156 13.4466 19.5025 13.3725 18.9807 13.3365C18.5675 13.308 18.2094 13.6199 18.1809 14.0331C18.1524 14.4464 18.4642 14.8045 18.8775 14.833C19.324 14.8638 19.7616 14.9269 20.1871 15.0227C20.8488 15.1525 21.2801 15.3678 21.3872 15.5921C21.4677 15.7615 21.4677 15.9606 21.3864 16.132C21.2808 16.3541 20.853 16.5682 20.2007 16.7024C19.795 16.7858 19.5337 17.1823 19.6171 17.5881C19.7006 17.9938 20.0971 18.2551 20.5028 18.1716C21.581 17.9499 22.3708 17.5546 22.7414 16.7756C23.0161 16.1964 23.0161 15.5247 22.7414 14.947C22.3682 14.1651 21.5648 13.7643 20.4958 13.555ZM5.704 14.0331C5.67551 13.6199 5.31741 13.308 4.90418 13.3365C4.38239 13.3725 3.86922 13.4466 3.36845 13.5593L3.162 13.603C2.21438 13.8195 1.49143 14.2174 1.14442 14.9469C0.868561 15.5241 0.868561 16.197 1.14471 16.7762C1.51363 17.5544 2.30341 17.9498 3.38205 18.1716C3.78777 18.2551 4.18431 17.9938 4.26774 17.5881C4.35117 17.1823 4.0899 16.7858 3.68418 16.7024C3.03209 16.5683 2.60472 16.3543 2.49939 16.1321C2.41734 15.96 2.41734 15.7621 2.49838 15.5925C2.60537 15.3676 3.03633 15.1525 3.67721 15.027L4.01044 14.9588C4.34262 14.8974 4.67249 14.8561 5.00738 14.833C5.42062 14.8045 5.7325 14.4464 5.704 14.0331ZM5.16709 17.1845C5.16709 14.7986 7.63503 13.9595 11.9378 13.9595L12.2426 13.961C16.3655 13.9997 18.7084 14.8407 18.7084 17.1671C18.7084 19.4388 16.4689 20.3087 12.5397 20.3863L11.9378 20.3921C7.62516 20.3921 5.16709 19.5678 5.16709 17.1845ZM17.2084 17.1671C17.2084 16.0566 15.4279 15.4595 11.9378 15.4595C8.45105 15.4595 6.66709 16.0661 6.66709 17.1845C6.66709 18.2952 8.44707 18.8921 11.9378 18.8921C15.4234 18.8921 17.2084 18.2851 17.2084 17.1671Z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="capsuleLabelValuePair-0-2-471">
                            <div className="capsuleLabel-0-2-472">
                              Followers
                            </div>
                            <div className="capsuleValuePrimary-0-2-473">
                              {followers}
                            </div>
                          </div>
                        </div>
                        <div className="capsuleGroup-0-2-468">
                          <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-469">
                            <div className="circle-0-2-34">
                              <svg
                                className="fill-0-2-36 capsuleIcon-0-2-470"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 3.44774C16.7233 3.44774 20.5523 7.27672 20.5523 12C20.5523 16.7233 16.7233 20.5523 12 20.5523C7.27672 20.5523 3.44774 16.7233 3.44774 12C3.44774 7.27672 7.27672 3.44774 12 3.44774ZM15.0084 8.08461L10.0964 9.6218C9.87 9.69266 9.69266 9.87 9.6218 10.0964L8.08461 15.0084C7.91011 15.566 8.43404 16.0899 8.99164 15.9154L13.9036 14.3782C14.13 14.3073 14.3073 14.13 14.3782 13.9036L15.9154 8.99164C16.0899 8.43404 15.566 7.91011 15.0084 8.08461ZM14.1204 9.87856L13.109 13.109L9.87856 14.1204L10.8901 10.8901L14.1204 9.87856Z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="capsuleLabelValuePair-0-2-471">
                            <div className="capsuleLabel-0-2-472">Courses</div>
                            <div className="capsuleValuePrimary-0-2-473">
                              {data.courseCount != null && data.courseCount}
                            </div>
                          </div>
                        </div>
                        <div className="capsuleGroup-0-2-468">
                          <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-469">
                            <div className="circle-0-2-34">
                              <svg
                                className="fill-0-2-36 capsuleIcon-0-2-470"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.0288 2.00005C7.41977 1.98439 3.6551 5.65135 3.50463 10.2414L3.5 10.5263C3.57661 12.7761 4.34207 14.9207 5.69028 16.6876L6.00692 17.1008C7.2938 18.7371 8.82311 20.1733 10.5403 21.3571L10.9537 21.6354L11.014 21.6828C11.6026 22.1057 12.3973 22.1057 12.9858 21.6828L13.036 21.6415C14.3986 20.7579 15.655 19.7196 16.7805 18.5473C19.0686 16.1252 20.4477 13.4112 20.4998 10.655L20.4999 10.5526C20.5155 5.93192 16.8598 2.15567 12.284 2.00469L12.0288 2.00005ZM12.0237 3.51747C15.8022 3.53038 18.87 6.54942 18.9839 10.3091L18.9871 10.6406C18.9434 12.9514 17.7334 15.3324 15.6866 17.4991C14.6429 18.5862 13.4727 19.5526 12.2036 20.3745L12.119 20.438C12.0506 20.4974 11.9492 20.4974 11.8809 20.438L11.7987 20.376C9.90797 19.1416 8.24857 17.583 6.89636 15.7717C5.80718 14.3442 5.16175 12.6374 5.03184 10.8569L5.01275 10.4999C5.02559 6.71221 8.03532 3.63498 11.7835 3.52071L12.0237 3.51747ZM11.9999 7.40129C10.2115 7.40129 8.76176 8.85554 8.76176 10.6495C8.76176 12.4434 10.2115 13.8976 11.9999 13.8976C13.7883 13.8976 15.2381 12.4434 15.2381 10.6495C15.2381 8.85554 13.7883 7.40129 11.9999 7.40129ZM11.9999 8.91871C12.9528 8.91871 13.7253 9.69359 13.7253 10.6495C13.7253 11.6053 12.9528 12.3802 11.9999 12.3802C11.047 12.3802 10.2745 11.6053 10.2745 10.6495C10.2745 9.69359 11.047 8.91871 11.9999 8.91871Z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="capsuleLabelValuePair-0-2-471">
                            <div className="capsuleLabel-0-2-472">Location</div>
                            <div className="capsuleValueSecondary-0-2-474">
                              {data.location != null && data.location}
                            </div>
                          </div>
                        </div>
                        <div className="capsuleGroup-0-2-468">
                          <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-469">
                            <div className="circle-0-2-34">
                              <svg
                                className="fill-0-2-36 capsuleIcon-0-2-470"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 3.44774C16.7233 3.44774 20.5523 7.27672 20.5523 12C20.5523 16.7233 16.7233 20.5523 12 20.5523C7.27672 20.5523 3.44774 16.7233 3.44774 12C3.44774 7.27672 7.27672 3.44774 12 3.44774ZM15.0084 8.08461L10.0964 9.6218C9.87 9.69266 9.69266 9.87 9.6218 10.0964L8.08461 15.0084C7.91011 15.566 8.43404 16.0899 8.99164 15.9154L13.9036 14.3782C14.13 14.3073 14.3073 14.13 14.3782 13.9036L15.9154 8.99164C16.0899 8.43404 15.566 7.91011 15.0084 8.08461ZM14.1204 9.87856L13.109 13.109L9.87856 14.1204L10.8901 10.8901L14.1204 9.87856Z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="capsuleLabelValuePair-0-2-471">
                            <div className="capsuleLabel-0-2-472">Address</div>
                            <div className="capsuleValueSecondary-0-2-474">
                              {data.address != null && data.address}
                            </div>
                          </div>
                        </div>
                        <div className="capsuleGroup-0-2-468">
                          <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-469">
                            <div className="circle-0-2-34">
                              <svg
                                className="fill-0-2-36 capsuleIcon-0-2-470"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.1377 22C7.7257 22 7.3347 21.968 6.9667 21.905L6.7487 21.864C4.3777 21.371 2.9997 19.555 2.9997 16.791V7.209C2.9997 6.875 3.0197 6.555 3.0597 6.249C3.4087 3.564 5.2537 2 8.1377 2H15.8627C19.0587 2 20.9697 3.92 20.9997 7.132V7.209V16.791C20.9997 20.048 19.0837 22 15.8627 22H8.1377ZM8.1377 3.457C5.6817 3.457 4.4367 4.72 4.4367 7.209V16.791C4.4367 19.28 5.6817 20.543 8.1377 20.543H15.8537C18.3087 20.543 19.5457 19.28 19.5457 16.791V7.209C19.5457 4.72 18.3087 3.457 15.8537 3.457H8.1377ZM16.3057 16.234C16.3057 15.834 15.9867 15.51 15.5927 15.51H8.3817C7.9877 15.51 7.6677 15.834 7.6677 16.234C7.6677 16.634 7.9877 16.958 8.3817 16.958H15.5927C15.9867 16.958 16.3057 16.634 16.3057 16.234ZM15.5927 11.271C15.8677 11.241 16.1367 11.373 16.2837 11.61C16.4307 11.849 16.4307 12.151 16.2837 12.39C16.1367 12.627 15.8677 12.759 15.5927 12.729H8.3817C8.0157 12.687 7.7387 12.374 7.7387 12C7.7387 11.626 8.0157 11.312 8.3817 11.271H15.5927ZM11.7767 7.771C11.7767 7.397 11.4997 7.083 11.1337 7.042H8.3907C8.0237 7.083 7.7467 7.397 7.7467 7.771C7.7467 8.144 8.0237 8.458 8.3907 8.499H11.1337C11.4997 8.458 11.7767 8.144 11.7767 7.771Z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="capsuleLabelValuePair-0-2-471">
                            <div className="capsuleLabel-0-2-472">Founded</div>
                            <div className="capsuleValueSecondary-0-2-474">
                              {data.founded != null && data.founded}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="expandedContentBottom-0-2-467">
                        <div className="aboutLabel-0-2-475">About</div>
                        <div className="aboutContent-0-2-476">
                          {data.about != null && data.about}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {courses.length != 0 ? (
                  <>
                    <div className="marginOnMobile-0-2-134">
                      <div className="body-0-2-275">
                        <div className="root-0-2-281 hideOnMobile-0-2-280">
                          <h2 className="h2-0-2-282">Latest Courses</h2>
                          <div className="grid-0-2-283">
                            {courses.slice(0, 4).map((item: any) => {
                              return (
                                <>
                                  <EduDetailMap item={item} />
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2 className="header-0-2-273">
                          All Active Courses ({courses.length})
                        </h2>
                        <div className="root-0-2-194">
                          {courses.map((item: any) => {
                            return (
                              <>
                                <EduDetailPagesMap item={item} />
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="marginOnMobile-0-2-134">
                      <div className="body-0-2-284">
                        <div className="root-0-2-288 placeholder-0-2-250">
                          <img
                            src="https://tt.ge/images/empty-jobs.png"
                            alt="New courses are coming soon"
                            className="image-0-2-289"
                          />
                          <h1 className="h1-0-2-290">
                            New courses are coming soon
                          </h1>
                          <div className="caption-0-2-291">
                            Be first to get notified
                          </div>
                          <a
                            className={
                              followed
                                ? "root-0-2-46 button-0-2-292 animation-0-2-47 weightMedium-0-2-61 sizeLg-0-2-53 variantSecondary-0-2-55"
                                : "root-0-2-46 button-0-2-292 animation-0-2-47 weightMedium-0-2-61 sizeLg-0-2-53 variantPrimary-0-2-54"
                            }
                            onClick={() => {
                              if (!localStorage.getItem("local")) {
                                history.push(
                                  `/register?return_to=${`${
                                    window.location.pathname.split("/")[1]
                                  }/${window.location.pathname.split("/")[2]}`}`
                                );
                              } else {
                                setChanged(true);
                                const local = localStorage.getItem("local");
                                if (followed) {
                                  axios
                                    .post(
                                      `${env.host}/api/unfollow/edus`,
                                      {
                                        id: data._id,
                                      },
                                      {
                                        headers: {
                                          Authorization: `Bearer ${local}`,
                                        },
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
                                        id: data._id,
                                      },
                                      {
                                        headers: {
                                          Authorization: `Bearer ${local}`,
                                        },
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
                            {followed ? "Unfollow" : "Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </main>
          <Footer wantSponsors={true} />
        </>
      ) : (
        <p style={{ marginLeft: "15px" }}>Please wait...</p>
      )}
    </>
  );
};

export default EduDetailPages;
