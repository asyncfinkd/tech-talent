import React, { useContext, useEffect, useState } from "react";
import { useToggle } from "shared-hooks/use-toggle";
import Link from "next/link";
import { Button } from "components/button";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { isServer } from "lib/isServer";
import SVG from "react-inlinesvg";
import {
  CompaniesIFollowSVG,
  HeaderBurgerMenuSVG,
  HeaderCompaniesSVG,
  HeaderCoursesSVG,
  HeaderEducationSVG,
  HeaderHomeSVG,
  HeaderJobsSVG,
  HeaderPersonalCloseSVG,
  HeaderPersonalSVG,
  HeaderTranslateDetailSVG,
  HeaderTranslateSVG,
  HeaderUserSVG,
  InformationSVG,
  LoginPersonalSVG,
  MyJobApplicationsSVG,
  PersonalLoggedSVG,
  RegisterPersonalSVG,
  ResumeSVG,
  SecuritySVG,
} from "constants/app/strings";

interface Props {
  ShowLine?: boolean;
  ShowShadow?: boolean;
  logged?: any;
  access_token?: any;
}

const Header: React.FC<Props> = ({
  ShowLine,
  ShowShadow,
  logged,
  access_token,
}) => {
  const [showProfile, setShowProfile] = useToggle();
  const [showHeader, setShowHeader] = useToggle();
  const [showLanguage, setShowLanguage] = useToggle();
  const [showClose, setShowClose] = useToggle();
  const [companies, setCompanies] = useState<Boolean>(false);
  const [focusedTranslate, setFocusedTranslate] = useState<any>("");
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };
  useEffect(() => {
    if (!isServer) {
      setFocusedTranslate(localStorage.getItem("i18nextLng") ?? "en");
    }
  }, [router.pathname]);

  return (
    <>
      <div className="root-0-2-4 fixed-0-2-5 onlyOnDesktop-0-2-6">
        <div className="fluid-0-2-7">
          <div className="gap-0-2-8"></div>
          <header
            className={`container-0-2-9 header-0-2-10 ${
              ShowShadow == true && "shadow-0-2-11"
            }`}
          >
            <div className="logo-0-2-12">
              <Link href="/" passHref>
                <div className="root-0-2-18" style={{ cursor: "pointer" }}>
                  <SVG src={HeaderHomeSVG} />
                  <div>
                    <span className="primaryText-0-2-20">Tech</span>
                    <span className="secondaryText-0-2-21">Talent</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="root-0-2-22 fieldList-0-2-13">
              <a className="field-0-2-23" href="/jobs">
                <div
                  className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-26"
                  style={{ backgroundColor: "rgb(237, 227, 255)" }}
                >
                  <div
                    className="circle-0-2-34"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <div style={{ position: "relative", display: "flex" }}>
                      <SVG
                        src={HeaderJobsSVG}
                        style={{ fill: "rgb(117, 41, 251)" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="fieldName-0-2-25">{t("JOBS")}</div>
              </a>
              <Link href="/companies">
                <a
                  className={`field-0-2-23 ${
                    router.pathname === "/companies" &&
                    "active__NAVLINK__HEADER"
                  }`}
                >
                  <div
                    className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-26"
                    style={{ backgroundColor: "rgb(213, 247, 255)" }}
                  >
                    <div
                      className="circle-0-2-34"
                      style={{ width: "36px", height: "36px" }}
                    >
                      <div style={{ position: "relative", display: "flex" }}>
                        <SVG
                          src={HeaderCompaniesSVG}
                          style={{ fill: "rgb(49,170,225)" }}
                        />
                        <div
                          className="selectionLine-0-2-29 hiddeN__FOR__SELECTHEADER"
                          style={{ backgroundColor: "rgb(49, 170, 225)" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="fieldName-0-2-25">{t("COMPANIES")}</div>
                </a>
              </Link>
              <Link href="/courses">
                <a
                  className={`field-0-2-23 ${
                    router.pathname === "/courses" &&
                    "COURSES__CLASSNAME__ACTIVE"
                  }`}
                >
                  <div
                    className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-26"
                    style={{ backgroundColor: "rgb(255, 213, 201)" }}
                  >
                    <div
                      className="circle-0-2-34"
                      style={{ width: "36px", height: "36px" }}
                    >
                      <div style={{ position: "relative", display: "flex" }}>
                        <SVG
                          src={HeaderCoursesSVG}
                          style={{ fill: "rgb(255, 94, 54)" }}
                        />
                        <div
                          className="selectionLine-0-2-29 hide__COURSES__CLASSNAME__ACTIVE"
                          style={{ backgroundColor: "rgb(255, 94, 54)" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="fieldName-0-2-25">{t("COURSES")}</div>
                </a>
              </Link>
              <Link href="/edu">
                <a
                  className={`field-0-2-23 ${
                    router.pathname === "/edu" &&
                    "active__NAVLINK__HEADER__EDUCATION"
                  }`}
                >
                  <div
                    className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-26"
                    style={{ backgroundColor: "rgb(204, 224, 255)" }}
                  >
                    <div
                      className="circle-0-2-34"
                      style={{ width: "36px", height: "36px" }}
                    >
                      <div style={{ position: "relative", display: "flex" }}>
                        <SVG
                          src={HeaderEducationSVG}
                          style={{ fill: "rgb(0, 98, 255)" }}
                        />
                        <div
                          className="selectionLine-0-2-29 hiddeN__FOR__SELECTHEADER__EDU"
                          style={{ backgroundColor: "#0062FF" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="fieldName-0-2-25">{t("EDUCATION")}</div>
                </a>
              </Link>
            </div>
            <div className="gapColumn-0-2-14"></div>
            {logged ? (
              <>
                <div className="root-0-2-37 profile-0-2-15">
                  <Link href="/profile/information">
                    <a className="root-0-2-46 button-0-2-38 weightLight-0-2-60 sizeZero-0-2-48 variantBlank-0-2-59">
                      <div
                        className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-42"
                        style={{ backgroundColor: "#EFF3FF" }}
                      >
                        <div
                          className="circle-0-2-34"
                          style={{ width: "36px", height: "36px" }}
                        >
                          <SVG src={HeaderUserSVG} />
                        </div>
                      </div>
                      <div>
                        {!access_token?.fullName
                          ? access_token?.email
                          : access_token?.fullName}
                      </div>
                    </a>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="root-0-2-37 profile-0-2-15">
                  <Link href="/login">
                    <a className="root-0-2-46 loginButton-0-2-40 animation-0-2-47 weightLight-0-2-60 sizeMd-0-2-51 variantOutline-0-2-57">
                      {t("LOGIN")}
                    </a>
                  </Link>
                  <Link href="/register">
                    <a className="root-0-2-46 registerButton-0-2-41 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54">
                      {t("REGISTER")}
                    </a>
                  </Link>
                </div>
              </>
            )}
            <div
              className="root-0-2-65 lang-0-2-16"
              aria-expanded="false"
              aria-haspopup="listbox"
              aria-labelledby="downshift-0-label"
            >
              <button
                className="root-0-2-46 button-0-2-66 weightLight-0-2-60 sizeZero-0-2-48 variantBlank-0-2-59"
                type="button"
                onClick={setShowLanguage}
              >
                <span className="name-0-2-69">
                  {focusedTranslate == "en" ? "EN" : "KA"}
                </span>
                <SVG src={HeaderTranslateSVG} />
              </button>
              <div
                className="root-0-2-70"
                data-popper-placement="bottom-end"
                style={{
                  position: "absolute",
                  visibility: `${showLanguage ? "visible" : "hidden"}`,
                  pointerEvents: `${showLanguage ? "visible" : "none"}`,
                  inset: "0px auto auto 0px",
                  margin: "0px",
                  transform: `translate(${
                    showLanguage ? "1129.5px, 75px" : "0px 8px"
                  }`,
                }}
                data-popper-reference-hidden=""
                data-popper-escaped=""
              >
                <ul
                  className="ul-0-2-71"
                  role="listbox"
                  aria-labelledby="downshift-0-label"
                  id="downshift-0-menu"
                >
                  <li
                    className={`li-0-2-72 ${
                      focusedTranslate == "en" && "liActive-0-2-73"
                    }`}
                    id="downshift-0-item-0"
                    role="option"
                    aria-selected="false"
                    onClick={() => {
                      changeLanguage("en");
                      setFocusedTranslate("en");
                      setShowLanguage();
                    }}
                  >
                    <Button
                      className="root-0-2-46 option-0-2-67 weightLight-0-2-60 sizeZero-0-2-48 variantBlank-0-2-59"
                      style={{ marginRight: "0.75rem" }}
                    >
                      <SVG src={HeaderTranslateDetailSVG} />
                      English
                    </Button>
                  </li>
                  <li
                    className={`li-0-2-72 ${
                      focusedTranslate == "ka" && "liActive-0-2-73"
                    }`}
                    id="downshift-0-item-1"
                    role="option"
                    aria-selected="false"
                    onClick={() => {
                      changeLanguage("ka");
                      setFocusedTranslate("ka");
                      setShowLanguage();
                    }}
                  >
                    <Button
                      className="root-0-2-46 option-0-2-67 weightLight-0-2-60 sizeZero-0-2-48 variantBlank-0-2-59"
                      style={{ marginRight: "0.75rem" }}
                    >
                      <SVG src={HeaderTranslateDetailSVG} />
                      ქართული
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className="gap-0-2-8"></div>
        </div>
        {ShowLine && <div className="line-0-2-17"></div>}
      </div>

      <header className="root-0-2-75 onlyOnMobile-0-2-76">
        <div className="placeholder-0-2-79"></div>
        <div className="container-0-2-77 fixed-0-2-78">
          <div className="menu-0-2-80">
            <button className="root-0-2-46 menuButton-0-2-81 weightLight-0-2-60 sizeZero-0-2-48 variantBlank-0-2-59">
              <SVG
                src={HeaderBurgerMenuSVG}
                onClick={() => {
                  setShowHeader();
                  if (!showProfile) {
                    setShowClose();
                  }
                }}
              />
            </button>
            <div className="logo-0-2-83">
              <Link href="/" passHref>
                <div className="root-0-2-18" style={{ cursor: "pointer" }}>
                  <SVG src={HeaderHomeSVG} />
                  <div>
                    <span className="primaryText-0-2-20">Tech</span>
                    <span className="secondaryText-0-2-21">Talent</span>
                  </div>
                </div>
              </Link>
            </div>
            {showClose ? (
              <>
                <button className="root-0-2-46 menuButton-0-2-81 weightLight-0-2-60 sizeZero-0-2-48 variantBlank-0-2-59">
                  <SVG
                    src={HeaderPersonalSVG}
                    style={{ opacity: "0.3" }}
                    onClick={() => {
                      if (showHeader) {
                        setShowHeader();
                      } else {
                        setShowProfile();
                      }
                      if (!showHeader && showProfile) {
                        setShowClose();
                      }
                      if (showHeader && !showProfile) {
                        setShowClose();
                      }
                    }}
                  />
                </button>
              </>
            ) : (
              <>
                <button className="root-0-2-46 menuButton-0-2-81 weightLight-0-2-60 sizeZero-0-2-48 variantBlank-0-2-59">
                  <SVG
                    src={HeaderPersonalCloseSVG}
                    onClick={() => {
                      setShowProfile();
                      setShowClose();
                    }}
                  />
                </button>
              </>
            )}
          </div>
          <div
            className="root-0-2-84"
            style={{
              inset: "57px 0px 0px",
              position: "fixed",
              overflow: "scroll",
              transition: "all 0.2s ease-in-out 0s",
              transform: `translateX(${showProfile ? "0" : "100vw"})`,
              backgroundColor: "white",
            }}
          >
            <div className="root-0-2-90">
              <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-91">
                <div
                  className="circle-0-2-34"
                  style={{ width: "36px", height: "36px" }}
                >
                  <SVG src={HeaderUserSVG} />
                </div>
              </div>
              <div className="section-0-2-92">
                <div className="name-0-2-93">Guest</div>
                <div className="caption-0-2-94">Inactive</div>
              </div>
            </div>
            <div className="sectionLine-0-2-86"></div>
            <section className="section-0-2-85">
              <Link
                href="/register"
                // onClick={() => {
                //   setShowProfile();
                //   setShowClose();
                // }}
              >
                <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                  <SVG src={RegisterPersonalSVG} />
                  Register
                </a>
              </Link>
              <Link
                href="/login"
                // onClick={() => {
                //   setShowProfile();
                //   setShowClose();
                // }}
              >
                <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                  <SVG src={LoginPersonalSVG} />
                  Login
                </a>
              </Link>
            </section>
          </div>
          {logged && (
            <>
              <div
                className="root-0-2-84"
                style={{
                  inset: "57px 0px 0px",
                  position: "fixed",
                  overflow: "scroll",
                  transition: "all 0.2s ease-in-out 0s",
                  backgroundColor: "white",
                  transform: `translateX(${showProfile ? "0" : "100vw"})`,
                }}
              >
                <div className="root-0-2-90">
                  <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-91">
                    <div
                      className="circle-0-2-34"
                      style={{ width: "36px", height: "36px" }}
                    >
                      <SVG src={PersonalLoggedSVG} />
                    </div>
                  </div>
                  <div className="section-0-2-92">
                    <div className="name-0-2-93">{access_token.fullName}</div>
                    <div className="caption-0-2-94">{access_token.email}</div>
                  </div>
                </div>
                <div className="sectionLine-0-2-86"></div>
                <section className="section-0-2-85">
                  <Link href="/profile/information">
                    <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                      <SVG src={InformationSVG} />
                      Information
                    </a>
                  </Link>
                  <Link href="/profile/resume">
                    <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                      <SVG src={ResumeSVG} />
                      Resume
                    </a>
                  </Link>
                  <Link href="/profile/security">
                    <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                      <SVG src={SecuritySVG} />
                      Security
                    </a>
                  </Link>
                </section>
                <div className="sectionLine-0-2-86"></div>
                <section className="section-0-2-85">
                  <a
                    className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59"
                    href="/profile/applications"
                  >
                    <SVG src={MyJobApplicationsSVG} />
                    My Job Applications
                  </a>
                  <Link href="/profile/companies">
                    <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                      <SVG src={CompaniesIFollowSVG} />
                      Companies I Follow
                    </a>
                  </Link>
                  <Link href="/profile/jobs">
                    <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                      <svg
                        className="fill-0-2-36 optionIcon-0-2-89"
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
                      Jobs For Me
                    </a>
                  </Link>
                </section>
                <div className="sectionLine-0-2-86"></div>
                <section className="section-0-2-85">
                  <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                    <svg
                      className="fill-0-2-36 optionIcon-0-2-89"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.331 2.02148C13.7102 2.02148 15.6521 3.89542 15.7611 6.24772L15.766 6.45648V7.38948C15.766 7.8037 15.4302 8.13948 15.016 8.13948C14.6363 8.13948 14.3225 7.85733 14.2728 7.49125L14.266 7.38948V6.45648C14.266 4.89358 13.044 3.61575 11.5034 3.52647L11.331 3.52148H6.45597C4.89392 3.52148 3.61623 4.74362 3.52696 6.28406L3.52197 6.45648V17.5865C3.52197 19.1493 4.74388 20.4272 6.28363 20.5165L6.45597 20.5215H11.341C12.8983 20.5215 14.172 19.3039 14.261 17.7693L14.266 17.5975V16.6545C14.266 16.2403 14.6018 15.9045 15.016 15.9045C15.3957 15.9045 15.7095 16.1866 15.7591 16.5527L15.766 16.6545V17.5975C15.766 19.9687 13.8992 21.9046 11.5553 22.0164L11.341 22.0215H6.45597C4.07753 22.0215 2.13581 20.1474 2.0268 17.7952L2.02197 17.5865V6.45648C2.02197 4.07743 3.89573 2.13535 6.24728 2.02631L6.45597 2.02148H11.331ZM22.3282 11.4797C22.4707 11.6162 22.5595 11.8084 22.5595 12.0214C22.5595 12.2365 22.4689 12.4304 22.3239 12.5672L19.4104 15.4687C19.1169 15.761 18.642 15.76 18.3498 15.4665C18.084 15.1997 18.0607 14.783 18.2791 14.4898L18.3519 14.4059L19.992 12.7714H9.76847C9.35426 12.7714 9.01847 12.4356 9.01847 12.0214C9.01847 11.6417 9.30063 11.3279 9.6667 11.2782L9.76847 11.2714H19.9937L18.352 9.63779C18.0852 9.37212 18.06 8.95551 18.2772 8.66142L18.3497 8.57714C18.6153 8.31028 19.0319 8.28514 19.326 8.50234L19.4103 8.57478L22.3282 11.4797Z"
                      ></path>
                    </svg>
                    Logout
                  </a>
                </section>
              </div>
            </>
          )}
          <div
            className="root-0-2-84"
            style={{
              inset: "57px 0px 0px",
              position: "fixed",
              overflow: "scroll",
              transition: "all 0.2s ease-in-out 0s",
              transform: `translateX(${showHeader ? "0" : "-100vw"})`,
              backgroundColor: "white",
            }}
          >
            <section className="section-0-2-85">
              <a
                className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59"
                href="/jobs"
              >
                <svg
                  className="fill-0-2-36 optionIcon-0-2-89"
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
                Jobs
              </a>
              <Link href="/companies">
                <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                  <svg
                    className="fill-0-2-36 optionIcon-0-2-89"
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
                  {t("COMPANIES")}
                </a>
              </Link>
              <Link href="/courses">
                <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                  <svg
                    className="fill-0-2-36 optionIcon-0-2-89"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 3.44774C16.7233 3.44774 20.5523 7.27672 20.5523 12C20.5523 16.7233 16.7233 20.5523 12 20.5523C7.27672 20.5523 3.44774 16.7233 3.44774 12C3.44774 7.27672 7.27672 3.44774 12 3.44774ZM15.0084 8.08461L10.0964 9.6218C9.87 9.69266 9.69266 9.87 9.6218 10.0964L8.08461 15.0084C7.91011 15.566 8.43404 16.0899 8.99164 15.9154L13.9036 14.3782C14.13 14.3073 14.3073 14.13 14.3782 13.9036L15.9154 8.99164C16.0899 8.43404 15.566 7.91011 15.0084 8.08461ZM14.1204 9.87856L13.109 13.109L9.87856 14.1204L10.8901 10.8901L14.1204 9.87856Z"
                    ></path>
                  </svg>
                  Courses
                </a>
              </Link>
              <Link href="/edu">
                <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                  <svg
                    className="fill-0-2-36 optionIcon-0-2-89"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 3.44774C16.7233 3.44774 20.5523 7.27672 20.5523 12C20.5523 16.7233 16.7233 20.5523 12 20.5523C7.27672 20.5523 3.44774 16.7233 3.44774 12C3.44774 7.27672 7.27672 3.44774 12 3.44774ZM15.0084 8.08461L10.0964 9.6218C9.87 9.69266 9.69266 9.87 9.6218 10.0964L8.08461 15.0084C7.91011 15.566 8.43404 16.0899 8.99164 15.9154L13.9036 14.3782C14.13 14.3073 14.3073 14.13 14.3782 13.9036L15.9154 8.99164C16.0899 8.43404 15.566 7.91011 15.0084 8.08461ZM14.1204 9.87856L13.109 13.109L9.87856 14.1204L10.8901 10.8901L14.1204 9.87856Z"
                    ></path>
                  </svg>
                  Education
                </a>
              </Link>
            </section>
            <div className="sectionLine-0-2-86"></div>
            <section className="section-0-2-85">
              <Link href="/about">
                <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                  <svg
                    className="fill-0-2-36 optionIcon-0-2-89"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.3346 2.00018H7.66561C4.26804 2.00018 2.00061 4.43278 2.00061 7.91618V16.0842C2.00061 19.5709 4.26198 22.0002 7.66561 22.0002H16.3336C19.7382 22.0002 22.0006 19.5709 22.0006 16.0842V7.91618C22.0006 4.42969 19.7384 2.00018 16.3346 2.00018ZM7.66561 3.50018H16.3346C18.8851 3.50018 20.5006 5.23515 20.5006 7.91618V16.0842C20.5006 18.7653 18.885 20.5002 16.3336 20.5002H7.66561C5.11537 20.5002 3.50061 18.7655 3.50061 16.0842V7.91618C3.50061 5.23856 5.12095 3.50018 7.66561 3.50018ZM11.9999 7.45428C12.4141 7.45428 12.7499 7.79007 12.7499 8.20428C12.7499 8.58398 12.4678 8.89777 12.1017 8.94744L11.9899 8.95428C11.5757 8.95428 11.2399 8.6185 11.2399 8.20428C11.2399 7.82459 11.5221 7.51079 11.8881 7.46113L11.9999 7.45428ZM11.9899 10.6271C12.3696 10.6271 12.6834 10.9092 12.7331 11.2753L12.7399 11.3771V15.7961C12.7399 16.2103 12.4041 16.5461 11.9899 16.5461C11.6102 16.5461 11.2964 16.2639 11.2468 15.8979L11.2399 15.7961V11.3771C11.2399 10.9629 11.5757 10.6271 11.9899 10.6271Z"
                    ></path>
                  </svg>
                  About
                </a>
              </Link>
            </section>
            <div className="sectionLine-0-2-86"></div>
            <div className="root-0-2-95">
              <div className="title-0-2-96">Language</div>
              <div className="buttonGroup-0-2-97">
                <button
                  // className={renderLanguageClassName()}
                  onClick={() => {
                    changeLanguage("en");
                  }}
                >
                  English
                </button>
                <button
                  className={`root-0-2-46 button-0-2-98 weightLight-0-2-60 sizeZero-0-2-48 variantBlank-0-2-59`}
                  onClick={() => {
                    changeLanguage("ka");
                  }}
                >
                  ქართული
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
