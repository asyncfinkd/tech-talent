import React, { useContext, useEffect, useState } from "react";
import { useToggle } from "shared-hooks/use-toggle";
import Link from "next/link";
import { Button } from "components/button";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { isServer } from "lib/isServer";
import SVG from "react-inlinesvg";
import {
  HeaderBurgerMenuSVG,
  HeaderCompaniesSVG,
  HeaderCoursesSVG,
  HeaderEducationSVG,
  HeaderHomeSVG,
  HeaderJobsSVG,
  HeaderTranslateDetailSVG,
  HeaderTranslateSVG,
  HeaderUserSVG,
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
                  <svg
                    className="fill-0-2-36 menuIcon-0-2-82"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                  >
                    <rect width="24" height="24" fill="white"></rect>
                    <path
                      d="M13.4155 12L19.7043 5.71149C20.0986 5.31972 20.0986 4.68688 19.7043 4.2951C19.3201 3.90333 18.6831 3.90332 18.2989 4.28505C18.2989 4.28505 18.2989 4.28506 18.2888 4.2951L12 10.5836L5.71124 4.2951C5.32704 3.90333 4.69006 3.90332 4.30586 4.28505C4.30586 4.28505 4.30585 4.28506 4.29573 4.2951C3.90142 4.68688 3.90142 5.31972 4.29573 5.71149L10.5845 12L4.29573 18.2885C3.90142 18.6803 3.90142 19.3132 4.29573 19.7049C4.67994 20.0967 5.31692 20.0967 5.70112 19.7149C5.70112 19.7149 5.70113 19.715 5.71124 19.7049L12 13.4164L18.2888 19.7049C18.6831 20.0967 19.3201 20.0967 19.7043 19.7049C20.0986 19.3132 20.0986 18.6803 19.7043 18.2985L13.4155 12Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </>
            ) : (
              <>
                <button className="root-0-2-46 menuButton-0-2-81 weightLight-0-2-60 sizeZero-0-2-48 variantBlank-0-2-59">
                  <svg
                    className="fill-0-2-36 menuIcon-0-2-82"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      setShowProfile();
                      setShowClose();
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0043 2C9.07027 2 6.69177 4.38864 6.69177 7.33517C6.69177 10.2817 9.07027 12.6703 12.0043 12.6703C14.9383 12.6703 17.3168 10.2817 17.3168 7.33517C17.3168 4.38864 14.9383 2 12.0043 2ZM12.0043 3.44767C14.1422 3.44767 15.8753 5.18816 15.8753 7.33517C15.8753 9.48218 14.1422 11.2227 12.0043 11.2227C9.8664 11.2227 8.1333 9.48218 8.1333 7.33517C8.1333 5.18816 9.8664 3.44767 12.0043 3.44767ZM9.83005 14.8209C9.05233 14.8749 8.26621 14.9859 7.4908 15.1521C5.99418 15.4604 4.79685 16.0763 4.28724 17.0999C4.09503 17.5002 3.99839 17.9288 4.00002 18.3627C3.99944 18.7935 4.0953 19.2227 4.28062 19.6153C4.76994 20.6271 5.8278 21.1997 7.25624 21.5171L7.51213 21.5705C8.26648 21.7407 9.05284 21.8553 9.84446 21.909C9.91189 21.9288 10.0726 21.9472 10.248 21.9561L10.3922 21.9615C10.4664 21.9633 10.5506 21.9637 10.676 21.9637C11.8138 22.0263 12.9934 22.0081 14.1675 21.9081C14.7932 21.8653 15.4231 21.7835 16.0477 21.6636L16.5151 21.5666C18.0576 21.2623 19.2126 20.6836 19.7186 19.6164C20.0937 18.8241 20.0937 17.9047 19.7188 17.1127C19.214 16.0483 18.0737 15.4744 16.5034 15.1509C15.8873 15.0194 15.2612 14.922 14.6307 14.8599L14.1697 14.8209C12.7259 14.6935 11.2738 14.6935 9.83005 14.8209ZM14.0436 16.263L14.0562 16.264C14.7799 16.3149 15.4991 16.4165 16.2087 16.568C17.3751 16.8083 18.1667 17.2067 18.4171 17.7348C18.6057 18.133 18.6057 18.5958 18.4169 18.9944C18.1829 19.4879 17.472 19.8691 16.4445 20.1021L16.2195 20.1498C15.496 20.3112 14.7791 20.4152 14.0576 20.4647C12.9379 20.5599 11.8249 20.5771 10.7148 20.5171L10.3212 20.5103C10.2119 20.5048 10.1198 20.4942 10.0345 20.4771C9.35872 20.4261 8.75066 20.3454 8.16027 20.2283L7.80775 20.1537C6.63771 19.9244 5.83915 19.5243 5.58024 18.989C5.48964 18.797 5.44125 18.5803 5.44154 18.3609C5.44073 18.1428 5.48848 17.931 5.58118 17.7379C5.83293 17.2324 6.67919 16.7971 7.78606 16.569C8.50073 16.4159 9.21962 16.3144 9.94294 16.264C11.316 16.143 12.6837 16.143 14.0436 16.263Z"
                    ></path>
                  </svg>
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
                  <svg
                    className="fill-0-2-36"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0043 2C9.07027 2 6.69177 4.38864 6.69177 7.33517C6.69177 10.2817 9.07027 12.6703 12.0043 12.6703C14.9383 12.6703 17.3168 10.2817 17.3168 7.33517C17.3168 4.38864 14.9383 2 12.0043 2ZM12.0043 3.44767C14.1422 3.44767 15.8753 5.18816 15.8753 7.33517C15.8753 9.48218 14.1422 11.2227 12.0043 11.2227C9.8664 11.2227 8.1333 9.48218 8.1333 7.33517C8.1333 5.18816 9.8664 3.44767 12.0043 3.44767ZM9.83005 14.8209C9.05233 14.8749 8.26621 14.9859 7.4908 15.1521C5.99418 15.4604 4.79685 16.0763 4.28724 17.0999C4.09503 17.5002 3.99839 17.9288 4.00002 18.3627C3.99944 18.7935 4.0953 19.2227 4.28062 19.6153C4.76994 20.6271 5.8278 21.1997 7.25624 21.5171L7.51213 21.5705C8.26648 21.7407 9.05284 21.8553 9.84446 21.909C9.91189 21.9288 10.0726 21.9472 10.248 21.9561L10.3922 21.9615C10.4664 21.9633 10.5506 21.9637 10.676 21.9637C11.8138 22.0263 12.9934 22.0081 14.1675 21.9081C14.7932 21.8653 15.4231 21.7835 16.0477 21.6636L16.5151 21.5666C18.0576 21.2623 19.2126 20.6836 19.7186 19.6164C20.0937 18.8241 20.0937 17.9047 19.7188 17.1127C19.214 16.0483 18.0737 15.4744 16.5034 15.1509C15.8873 15.0194 15.2612 14.922 14.6307 14.8599L14.1697 14.8209C12.7259 14.6935 11.2738 14.6935 9.83005 14.8209ZM14.0436 16.263L14.0562 16.264C14.7799 16.3149 15.4991 16.4165 16.2087 16.568C17.3751 16.8083 18.1667 17.2067 18.4171 17.7348C18.6057 18.133 18.6057 18.5958 18.4169 18.9944C18.1829 19.4879 17.472 19.8691 16.4445 20.1021L16.2195 20.1498C15.496 20.3112 14.7791 20.4152 14.0576 20.4647C12.9379 20.5599 11.8249 20.5771 10.7148 20.5171L10.3212 20.5103C10.2119 20.5048 10.1198 20.4942 10.0345 20.4771C9.35872 20.4261 8.75066 20.3454 8.16027 20.2283L7.80775 20.1537C6.63771 19.9244 5.83915 19.5243 5.58024 18.989C5.48964 18.797 5.44125 18.5803 5.44154 18.3609C5.44073 18.1428 5.48848 17.931 5.58118 17.7379C5.83293 17.2324 6.67919 16.7971 7.78606 16.569C8.50073 16.4159 9.21962 16.3144 9.94294 16.264C11.316 16.143 12.6837 16.143 14.0436 16.263Z"
                    ></path>
                  </svg>
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
                      d="M9.87743 1.99988C6.92789 1.99988 4.55943 4.36798 4.55943 7.31788C4.55943 10.2671 6.92821 12.6359 9.87743 12.6359C12.8273 12.6359 15.1954 10.2674 15.1954 7.31788C15.1954 4.36766 12.8276 1.99988 9.87743 1.99988ZM9.87743 3.49988C11.9992 3.49988 13.6954 5.19609 13.6954 7.31788C13.6954 9.43904 11.9988 11.1359 9.87743 11.1359C7.75664 11.1359 6.05943 9.43866 6.05943 7.31788C6.05943 5.19646 7.75627 3.49988 9.87743 3.49988ZM9.87743 14.4562C4.84742 14.4562 2.00043 15.4106 2.00043 18.1152C2.00043 20.8227 4.86005 21.7952 9.87743 21.7952L10.5209 21.7897C15.1484 21.7088 17.7544 20.7224 17.7544 18.1362C17.7544 15.4875 15.0178 14.4993 10.2016 14.4576L9.87743 14.4562ZM9.87743 15.9562C14.0789 15.9562 16.2544 16.696 16.2544 18.1362C16.2544 19.5674 14.0842 20.2952 9.87743 20.2952C5.67596 20.2952 3.50043 19.5553 3.50043 18.1152C3.50043 16.722 5.55379 15.996 9.54071 15.9578L9.87743 15.9562ZM19.2041 7.91908C19.5838 7.91908 19.8976 8.20123 19.9473 8.56731L19.9541 8.66908V9.92398H21.25C21.6642 9.92398 22 10.2598 22 10.674C22 11.0537 21.7179 11.3675 21.3518 11.4171L21.25 11.424H19.9541V12.6791C19.9541 13.0933 19.6183 13.4291 19.2041 13.4291C18.8244 13.4291 18.5106 13.1469 18.461 12.7808L18.4541 12.6791V11.424H17.16C16.7458 11.424 16.41 11.0882 16.41 10.674C16.41 10.2943 16.6922 9.98049 17.0583 9.93082L17.16 9.92398H18.4541V8.66908C18.4541 8.25486 18.7899 7.91908 19.2041 7.91908Z"
                    ></path>
                  </svg>
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
                      d="M21.4936 6.23864C21.3848 3.89119 19.4478 2.02197 17.0734 2.02197H12.1894L11.9806 2.0268C9.62755 2.13576 7.75438 4.07656 7.75438 6.45597V7.38897L7.76123 7.49074C7.81089 7.85682 8.12469 8.13897 8.50438 8.13897C8.9186 8.13897 9.25438 7.80319 9.25438 7.38897V6.45597L9.25936 6.28353C9.34859 4.74295 10.6256 3.52197 12.1894 3.52197H17.0734L17.2453 3.52694C18.781 3.61588 19.9984 4.88889 19.9984 6.44697V17.587L19.9934 17.7594C19.9041 19.3 18.6263 20.522 17.0634 20.522H12.1784L12.0066 20.517C10.472 20.428 9.25438 19.1543 9.25438 17.597V16.655L9.24754 16.5532C9.19788 16.1871 8.88408 15.905 8.50438 15.905C8.09017 15.905 7.75438 16.2408 7.75438 16.655V17.597L7.75949 17.8113C7.87131 20.1552 9.80715 22.022 12.1784 22.022H17.0634L17.2721 22.0171C19.6245 21.9081 21.4984 19.9662 21.4984 17.587V6.44697L21.4936 6.23864ZM12.3534 8.57653C12.6191 8.30972 13.0357 8.28466 13.3298 8.50191L13.414 8.57435L16.342 11.4904C16.6096 11.7568 16.6339 12.1749 16.415 12.469L16.4123 12.4721C16.3914 12.4999 16.3685 12.5263 16.344 12.5509L16.342 12.5532L13.414 15.4692C13.1205 15.7615 12.6457 15.7605 12.3534 15.467C12.0876 15.2002 12.0643 14.7835 12.2828 14.4903L12.3555 14.4064L13.9963 12.7718H3.77148C3.35727 12.7718 3.02148 12.436 3.02148 12.0218C3.02148 11.6421 3.30364 11.3283 3.66971 11.2786L3.77148 11.2718H13.9961L12.3555 9.63719C12.0887 9.37147 12.0637 8.95486 12.2809 8.6608L12.3534 8.57653Z"
                    ></path>
                  </svg>
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
                      <svg
                        className="fill-0-2-36"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0043 2C9.07027 2 6.69177 4.38864 6.69177 7.33517C6.69177 10.2817 9.07027 12.6703 12.0043 12.6703C14.9383 12.6703 17.3168 10.2817 17.3168 7.33517C17.3168 4.38864 14.9383 2 12.0043 2ZM12.0043 3.44767C14.1422 3.44767 15.8753 5.18816 15.8753 7.33517C15.8753 9.48218 14.1422 11.2227 12.0043 11.2227C9.8664 11.2227 8.1333 9.48218 8.1333 7.33517C8.1333 5.18816 9.8664 3.44767 12.0043 3.44767ZM9.83005 14.8209C9.05233 14.8749 8.26621 14.9859 7.4908 15.1521C5.99418 15.4604 4.79685 16.0763 4.28724 17.0999C4.09503 17.5002 3.99839 17.9288 4.00002 18.3627C3.99944 18.7935 4.0953 19.2227 4.28062 19.6153C4.76994 20.6271 5.8278 21.1997 7.25624 21.5171L7.51213 21.5705C8.26648 21.7407 9.05284 21.8553 9.84446 21.909C9.91189 21.9288 10.0726 21.9472 10.248 21.9561L10.3922 21.9615C10.4664 21.9633 10.5506 21.9637 10.676 21.9637C11.8138 22.0263 12.9934 22.0081 14.1675 21.9081C14.7932 21.8653 15.4231 21.7835 16.0477 21.6636L16.5151 21.5666C18.0576 21.2623 19.2126 20.6836 19.7186 19.6164C20.0937 18.8241 20.0937 17.9047 19.7188 17.1127C19.214 16.0483 18.0737 15.4744 16.5034 15.1509C15.8873 15.0194 15.2612 14.922 14.6307 14.8599L14.1697 14.8209C12.7259 14.6935 11.2738 14.6935 9.83005 14.8209ZM14.0436 16.263L14.0562 16.264C14.7799 16.3149 15.4991 16.4165 16.2087 16.568C17.3751 16.8083 18.1667 17.2067 18.4171 17.7348C18.6057 18.133 18.6057 18.5958 18.4169 18.9944C18.1829 19.4879 17.472 19.8691 16.4445 20.1021L16.2195 20.1498C15.496 20.3112 14.7791 20.4152 14.0576 20.4647C12.9379 20.5599 11.8249 20.5771 10.7148 20.5171L10.3212 20.5103C10.2119 20.5048 10.1198 20.4942 10.0345 20.4771C9.35872 20.4261 8.75066 20.3454 8.16027 20.2283L7.80775 20.1537C6.63771 19.9244 5.83915 19.5243 5.58024 18.989C5.48964 18.797 5.44125 18.5803 5.44154 18.3609C5.44073 18.1428 5.48848 17.931 5.58118 17.7379C5.83293 17.2324 6.67919 16.7971 7.78606 16.569C8.50073 16.4159 9.21962 16.3144 9.94294 16.264C11.316 16.143 12.6837 16.143 14.0436 16.263Z"
                        ></path>
                      </svg>
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
                      Information
                    </a>
                  </Link>
                  <Link href="/profile/resume">
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
                          d="M14.6067 2.01188C14.5636 2.0042 14.5193 2.00018 14.474 2.00018C14.4287 2.00018 14.3844 2.0042 14.3413 2.01188H8.08369C5.5964 2.01188 3.49969 4.02971 3.49969 6.49088V17.2039C3.49969 19.8045 5.50429 21.8649 8.08369 21.8649H16.0727C18.526 21.8649 20.5517 19.703 20.5517 17.2039V8.03788C20.5517 7.84427 20.4768 7.65815 20.3427 7.51848L15.2777 2.24248C15.1363 2.09516 14.9409 2.01188 14.7367 2.01188H14.6067ZM13.724 3.51108L8.08369 3.51188C6.41223 3.51188 4.99969 4.87128 4.99969 6.49088V17.2039C4.99969 18.9851 6.34208 20.3649 8.08369 20.3649H16.0727C17.675 20.3649 19.0517 18.8956 19.0517 17.2039L19.051 8.98327L18.1755 8.98625C17.8419 8.98585 17.4624 8.98514 17.0404 8.98418C15.2709 8.98044 13.8267 7.59347 13.7292 5.84757L13.724 5.65918V3.51108ZM18.2302 7.48402L17.0437 7.48419C16.0382 7.48206 15.224 6.66564 15.224 5.65918V4.35263L18.2302 7.48402ZM14.284 14.8078C14.6982 14.8078 15.034 15.1436 15.034 15.5578C15.034 15.9375 14.7518 16.2513 14.3858 16.3009L14.284 16.3078H8.88699C8.47278 16.3078 8.13699 15.972 8.13699 15.5578C8.13699 15.1781 8.41915 14.8643 8.78522 14.8146L8.88699 14.8078H14.284ZM12.9925 10.6056C12.9925 10.1914 12.6567 9.85558 12.2425 9.85558H8.88649L8.78472 9.86243C8.41865 9.91209 8.13649 10.2259 8.13649 10.6056C8.13649 11.0198 8.47228 11.3556 8.88649 11.3556H12.2425L12.3443 11.3487C12.7103 11.2991 12.9925 10.9853 12.9925 10.6056Z"
                        ></path>
                      </svg>
                      Resume
                    </a>
                  </Link>
                  <Link href="/profile/security">
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
                          d="M11.3853 2.10169L4.74174 4.37005C3.99797 4.62306 3.5 5.30545 3.5 6.07198V12.7097C3.5 14.7315 4.2529 16.6789 5.60912 18.196C6.24795 18.9121 7.06192 19.5077 8.04931 20.0259L11.6466 21.9118C11.8711 22.0295 12.1414 22.0294 12.3658 21.9116L15.9568 20.0269C16.9415 19.5095 17.7555 18.9127 18.3944 18.1964C19.7486 16.6804 20.5 14.7342 20.5 12.7136V6.07198C20.5 5.30545 20.002 4.62306 19.2574 4.36977L12.6156 2.10202C12.218 1.96605 11.7837 1.96605 11.3853 2.10169ZM12.1131 3.48951L18.7563 5.75777C18.8945 5.80477 18.9861 5.9303 18.9861 6.07198V12.7136C18.9861 14.3792 18.3668 15.9832 17.2508 17.2327L17.0525 17.4427C16.5722 17.9246 15.9672 18.3492 15.2369 18.7329L12.005 20.4283L8.76848 18.7316C7.9313 18.2922 7.26044 17.8013 6.75256 17.232C5.63446 15.9813 5.01389 14.3761 5.01389 12.7097V6.07198C5.01389 5.9303 5.1055 5.80477 5.24283 5.75805L11.8866 3.48962C11.9599 3.46466 12.0404 3.46466 12.1131 3.48951ZM15.7553 9.2399C15.4597 8.95269 14.9804 8.95269 14.6848 9.2399L11.2854 12.5422L9.91181 11.2062L9.82693 11.1349C9.53066 10.9212 9.11013 10.9448 8.84132 11.2059C8.54564 11.493 8.54551 11.9587 8.84104 12.246L10.7506 14.1023L10.8355 14.1735C11.1318 14.3872 11.5524 14.3636 11.8212 14.1024L15.7553 10.28L15.8286 10.1975C16.0485 9.90959 16.024 9.501 15.7553 9.2399Z"
                        ></path>
                      </svg>
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
                        d="M21.7046 4.59148C22.0162 3.18582 20.709 1.91742 19.2937 2.32702L3.63713 6.88275L3.48604 6.93298C2.01645 7.48605 1.79097 9.5328 3.16744 10.3802L9.64297 14.366L13.5387 20.8201L13.6263 20.9534C14.5395 22.2329 16.5618 21.9229 17.0228 20.372L21.668 4.73245L21.7046 4.59148ZM19.7846 3.75317C20.0734 3.72216 20.3202 4.00306 20.2303 4.30467L15.585 19.9447L15.5545 20.0214C15.4093 20.3069 14.9985 20.3359 14.823 20.045L11.135 13.936L16.3875 8.64969L16.4598 8.56533C16.6767 8.27099 16.6511 7.85441 16.3839 7.58904L16.2996 7.5167C16.0052 7.29982 15.5887 7.32541 15.3233 7.59257L10.078 12.872L3.95374 9.10278L3.88762 9.05312C3.64979 8.83646 3.72984 8.41775 4.05573 8.32316L19.7117 3.76759L19.7846 3.75317Z"
                      ></path>
                    </svg>
                    My Job Applications
                  </a>
                  <Link href="/profile/companies">
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
