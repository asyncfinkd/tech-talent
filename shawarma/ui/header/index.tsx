import React, { useContext, useEffect, useState } from "react";
import { useToggle } from "shared-hooks/use-toggle";
import Link from "next/link";
import { Button } from "components/button";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { isServer } from "lib/is-server";
import SVG from "react-inlinesvg";
import * as s from "constants/app/strings";

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
                  <SVG src={s.HeaderHomeSVG} />
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
                        src={s.HeaderJobsSVG}
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
                          src={s.HeaderCompaniesSVG}
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
                          src={s.HeaderCoursesSVG}
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
                          src={s.HeaderEducationSVG}
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
                          <SVG src={s.HeaderUserSVG} />
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
                <SVG src={s.HeaderTranslateSVG} />
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
                      <SVG src={s.HeaderTranslateDetailSVG} />
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
                      <SVG src={s.HeaderTranslateDetailSVG} />
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
                src={s.HeaderBurgerMenuSVG}
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
                  <SVG src={s.HeaderHomeSVG} />
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
                    src={s.HeaderPersonalSVG}
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
                    src={s.HeaderPersonalCloseSVG}
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
                  <SVG src={s.HeaderUserSVG} />
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
                  <SVG src={s.RegisterPersonalSVG} />
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
                  <SVG src={s.LoginPersonalSVG} />
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
                      <SVG src={s.PersonalLoggedSVG} />
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
                      <SVG src={s.InformationSVG} />
                      Information
                    </a>
                  </Link>
                  <Link href="/profile/resume">
                    <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                      <SVG src={s.ResumeSVG} />
                      Resume
                    </a>
                  </Link>
                  <Link href="/profile/security">
                    <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                      <SVG src={s.SecuritySVG} />
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
                    <SVG src={s.MyJobApplicationsSVG} />
                    My Job Applications
                  </a>
                  <Link href="/profile/companies">
                    <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                      <SVG src={s.CompaniesIFollowSVG} />
                      Companies I Follow
                    </a>
                  </Link>
                  <Link href="/profile/jobs">
                    <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                      <SVG src={s.JobsForMeSVG} />
                      Jobs For Me
                    </a>
                  </Link>
                </section>
                <div className="sectionLine-0-2-86"></div>
                <section className="section-0-2-85">
                  <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                    <SVG src={s.LogoutSVG} />
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
                <SVG src={s.JobsSVG} />
                Jobs
              </a>
              <Link href="/companies">
                <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                  <SVG src={s.CompaniesSVG} />
                  {t("COMPANIES")}
                </a>
              </Link>
              <Link href="/courses">
                <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                  <SVG src={s.CoursesSVG} />
                  Courses
                </a>
              </Link>
              <Link href="/edu">
                <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                  <SVG src={s.EducationSVG} />
                  Education
                </a>
              </Link>
            </section>
            <div className="sectionLine-0-2-86"></div>
            <section className="section-0-2-85">
              <Link href="/about">
                <a className="root-0-2-46 option-0-2-87 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59">
                  <SVG src={s.AboutSVG} />
                  About
                </a>
              </Link>
            </section>
            <div className="sectionLine-0-2-86"></div>
            <div className="root-0-2-95">
              <div className="title-0-2-96">Language</div>
              <div className="buttonGroup-0-2-97">
                <button
                  className="root-0-2-46 button-0-2-98 weightLight-0-2-60 sizeZero-0-2-48 variantBlank-0-2-59"
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
