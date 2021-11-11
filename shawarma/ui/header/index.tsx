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
  const [managerPopup, setManagerPopup] = useToggle();
  const [companies, setCompanies] = useState<Boolean>(false);
  const [focusedTranslate, setFocusedTranslate] = useState<any>("");
  const router = useRouter();
  useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };
  useEffect(() => {
    if (!isServer) {
      setFocusedTranslate(localStorage.getItem("i18nextLng") ?? "en");
    }
  }, [router.pathname]);

  const RenderLinker = ({ children }: any) => {
    if (access_token.role == "manager") {
      return (
        <a
          className="root-0-2-46 button-0-2-38 weightLight-0-2-60 sizeZero-0-2-48 variantBlank-0-2-59"
          onClick={setManagerPopup}
        >
          {children}
        </a>
      );
    } else {
      return <Link href="/profile/information">{children}</Link>;
    }
  };

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
                <div
                  className="root-0-2-37 profile-0-2-15"
                  style={{ position: "relative" }}
                >
                  <RenderLinker>
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
                        <svg
                          className="fill-0-2-38 caret-0-2-45"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0.30133 0.298616C0.66658 -0.0633426 1.23813 -0.096248 1.64089 0.1999L1.75628 0.298616L5 3.53895L8.24372 0.298617C8.60897 -0.0633419 9.18052 -0.0962473 9.58328 0.199901L9.69867 0.298617C10.0639 0.660575 10.0971 1.22698 9.79828 1.62611L9.69867 1.74046L5.72748 5.70138C5.36223 6.06334 4.79067 6.09625 4.38791 5.8001L4.27252 5.70138L0.30133 1.74046C-0.100444 1.34231 -0.100444 0.69677 0.30133 0.298616Z"></path>
                        </svg>
                      </div>
                    </a>
                  </RenderLinker>
                  <div
                    className="root-0-2-68"
                    style={{
                      position: "absolute",
                      inset: "0px auto auto 0px",
                      margin: "0px",
                      right: 0,
                      top: 56,
                      display: managerPopup ? "block" : "none",
                      width: 206,
                      marginLeft: "auto",
                    }}
                    data-popper-placement="bottom-start"
                  >
                    <ul
                      className="ul-0-2-69"
                      role="listbox"
                      aria-labelledby="tc-header-account-label"
                      id="tc-header-account-menu"
                    >
                      <li
                        className="li-0-2-70"
                        // active => liActive-0-2-71
                        id="tc-header-account-item-0"
                        role="option"
                        aria-selected="true"
                      >
                        <Link href="/manager/branding">
                          <a className="root-0-2-48 accountOptionsLink-0-2-46 weightMedium-0-2-63 sizeMd-0-2-53 variantBlank-0-2-61">
                            <svg
                              className="fill-0-2-38"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M19.3498 12.0047C19.5622 10.7911 19.3344 9.55604 18.6941 8.48909C17.9893 7.31482 16.8695 6.48535 15.5407 6.15365C15.1329 6.05174 14.7144 6 14.2966 6C12.3966 6 10.6694 7.04639 9.78162 8.70036C9.35706 8.41023 8.85522 8.2541 8.33078 8.2541C7.63259 8.2541 6.97891 8.52841 6.48994 9.02663C6.08142 9.44284 5.82655 9.98987 5.76554 10.5654C3.71751 10.6881 2.05066 12.3911 2.00117 14.4669C1.97564 15.5361 2.36812 16.5515 3.10608 17.3252C3.84427 18.0993 4.83936 18.5395 5.90902 18.565L18.686 18.5661C20.5135 18.5661 22 17.0796 22 15.2521C22 13.6487 20.8847 12.3133 19.3498 12.0047ZM18.686 17.8885H6.00392L5.92461 17.8874C5.03639 17.8663 4.20963 17.5005 3.59662 16.8575C2.98361 16.2144 2.65756 15.3714 2.6788 14.4832C2.72151 12.6927 4.21234 11.236 6.00234 11.236L6.083 11.2369C6.17519 11.2412 6.2658 11.203 6.33133 11.1373C6.39685 11.0713 6.43255 10.9813 6.42984 10.8883C6.41493 10.374 6.61309 9.86853 6.97348 9.50136C7.3341 9.13419 7.81606 8.93173 8.33055 8.93173C8.83171 8.93173 9.30463 9.12492 9.66232 9.47605C9.7423 9.55446 9.85505 9.5888 9.96509 9.56666C10.0747 9.54519 10.1669 9.47086 10.2109 9.36827C10.9145 7.73373 12.5181 6.67741 14.2964 6.67741C14.6588 6.67741 15.0221 6.72237 15.3762 6.81072C16.5292 7.09881 17.5008 7.81847 18.1125 8.83751C18.7241 9.85656 18.9022 11.0528 18.6143 12.2058C18.5904 12.302 18.6096 12.4039 18.6672 12.4848C18.7248 12.5655 18.8147 12.617 18.9137 12.6256C20.2864 12.7449 21.3217 13.874 21.3217 15.2519C21.3221 16.7059 20.1395 17.8885 18.686 17.8885Z"></path>
                            </svg>
                            Business Manager
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`li-0-2-70`}
                        id="tc-header-account-item-1"
                        role="option"
                        aria-selected="false"
                      >
                        <Link href="/profile/information">
                          <a className="root-0-2-48 accountOptionsLink-0-2-46 weightMedium-0-2-63 sizeMd-0-2-53 variantBlank-0-2-61">
                            <svg
                              className="fill-0-2-38"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.0043 2C9.07027 2 6.69177 4.38864 6.69177 7.33517C6.69177 10.2817 9.07027 12.6703 12.0043 12.6703C14.9383 12.6703 17.3168 10.2817 17.3168 7.33517C17.3168 4.38864 14.9383 2 12.0043 2ZM12.0043 3.44767C14.1422 3.44767 15.8753 5.18816 15.8753 7.33517C15.8753 9.48218 14.1422 11.2227 12.0043 11.2227C9.8664 11.2227 8.1333 9.48218 8.1333 7.33517C8.1333 5.18816 9.8664 3.44767 12.0043 3.44767ZM9.83005 14.8209C9.05233 14.8749 8.26621 14.9859 7.4908 15.1521C5.99418 15.4604 4.79685 16.0763 4.28724 17.0999C4.09503 17.5002 3.99839 17.9288 4.00002 18.3627C3.99944 18.7935 4.0953 19.2227 4.28062 19.6153C4.76994 20.6271 5.8278 21.1997 7.25624 21.5171L7.51213 21.5705C8.26648 21.7407 9.05284 21.8553 9.84446 21.909C9.91189 21.9288 10.0726 21.9472 10.248 21.9561L10.3922 21.9615C10.4664 21.9633 10.5506 21.9637 10.676 21.9637C11.8138 22.0263 12.9934 22.0081 14.1675 21.9081C14.7932 21.8653 15.4231 21.7835 16.0477 21.6636L16.5151 21.5666C18.0576 21.2623 19.2126 20.6836 19.7186 19.6164C20.0937 18.8241 20.0937 17.9047 19.7188 17.1127C19.214 16.0483 18.0737 15.4744 16.5034 15.1509C15.8873 15.0194 15.2612 14.922 14.6307 14.8599L14.1697 14.8209C12.7259 14.6935 11.2738 14.6935 9.83005 14.8209ZM14.0436 16.263L14.0562 16.264C14.7799 16.3149 15.4991 16.4165 16.2087 16.568C17.3751 16.8083 18.1667 17.2067 18.4171 17.7348C18.6057 18.133 18.6057 18.5958 18.4169 18.9944C18.1829 19.4879 17.472 19.8691 16.4445 20.1021L16.2195 20.1498C15.496 20.3112 14.7791 20.4152 14.0576 20.4647C12.9379 20.5599 11.8249 20.5771 10.7148 20.5171L10.3212 20.5103C10.2119 20.5048 10.1198 20.4942 10.0345 20.4771C9.35872 20.4261 8.75066 20.3454 8.16027 20.2283L7.80775 20.1537C6.63771 19.9244 5.83915 19.5243 5.58024 18.989C5.48964 18.797 5.44125 18.5803 5.44154 18.3609C5.44073 18.1428 5.48848 17.931 5.58118 17.7379C5.83293 17.2324 6.67919 16.7971 7.78606 16.569C8.50073 16.4159 9.21962 16.3144 9.94294 16.264C11.316 16.143 12.6837 16.143 14.0436 16.263Z"
                              ></path>
                            </svg>
                            Account
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
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
