import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../../context/Application/ApplicationContext";

interface Props {
  wantSponsors?: boolean;
}

const Footer: React.FC<Props> = ({ wantSponsors }) => {
  const { t } = useTranslation();
  const { jwtDecode } = useContext(ApplicationContext);
  return (
    <>
      <footer className="root-0-2-201">
        {wantSponsors && (
          <>
            <div className="root-0-2-225 upper-0-2-203">
              <a className="link-0-2-227" href="/c/omedia">
                <img
                  className="image-0-2-226"
                  src="https://tt.ge/logos/omedia.png"
                  alt="omedia"
                />
              </a>
              <a className="link-0-2-227" href="/c/phubber">
                <img
                  className="image-0-2-226"
                  src="https://tt.ge/logos/phubber.png"
                  alt="phubber"
                />
              </a>
              <a className="link-0-2-227" href="/c/lavapi">
                <img
                  className="image-0-2-226"
                  src="https://tt.ge/logos/lavapi.png"
                  alt="lavapi"
                />
              </a>
              <a className="link-0-2-227" href="/c/redberry">
                <img
                  className="image-0-2-226"
                  src="https://tt.ge/logos/redberry.png"
                  alt="redberry"
                />
              </a>
              <a className="link-0-2-227" href="/c/singular">
                <img
                  className="image-0-2-226"
                  src="https://tt.ge/logos/singular.png"
                  alt="singular"
                />
              </a>
              <a className="link-0-2-227" href="/c/echolize">
                <img
                  className="image-0-2-226"
                  src="https://tt.ge/logos/echolize.png"
                  alt="echolize"
                />
              </a>
              <a className="link-0-2-227" href="/c/meama">
                <img
                  className="image-0-2-226"
                  src="https://tt.ge/logos/meama.png"
                  alt="meama"
                />
              </a>
              <a className="link-0-2-227" href="/c/europebet">
                <img
                  className="image-0-2-226"
                  src="https://tt.ge/logos/europebet.png"
                  alt="europebet"
                />
              </a>
            </div>
            <div className="marginOnMobile-0-2-134 lower-0-2-204">
              <div className="middle-0-2-205">
                <div className="left-0-2-211">
                  <div className="title-0-2-212">
                    Welcome to
                    <br />
                    Tech Talent
                  </div>
                  <div className="caption-0-2-213">
                    Tech companies use our platform <br /> to find people that
                    fit their culture.
                  </div>
                  {localStorage.getItem("local") ? (
                    <Link
                      className="root-0-2-46 register-0-2-214 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                      to="/profile/information"
                    >
                      Profile
                    </Link>
                  ) : (
                    <Link
                      className="root-0-2-46 register-0-2-214 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                      to="/register"
                    >
                      {t("REGISTER")}
                    </Link>
                  )}
                </div>
                <div className="right-0-2-215">
                  <div className="colContainer-0-2-219">
                    <div className="col-0-2-220">
                      <div>
                        <a className="titleEntry-0-2-216" href="/jobs/dev">
                          Development
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/dev/react">
                          React
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/dev/angular">
                          Angular
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/dev/vue">
                          Vue
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/dev/node">
                          Node
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/dev/python">
                          Python
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/dev/php">
                          PHP
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/dev/dot-net">
                          .NET
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/dev/java">
                          Java
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/dev/ios">
                          iOS
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/dev/android">
                          Android
                        </a>
                      </div>
                    </div>
                    <div className="col-0-2-220">
                      <div>
                        <a className="titleEntry-0-2-216" href="/jobs/design">
                          Design
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/design/ui">
                          UI
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/design/ux">
                          UX
                        </a>
                      </div>
                      <div>
                        <a
                          className="entry-0-2-218"
                          href="/jobs/design/graphic"
                        >
                          Graphic
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/design/motion">
                          Motion
                        </a>
                      </div>
                      <div className="spacerEntry-0-2-217"></div>
                      <div>
                        <a
                          className="titleEntry-0-2-216"
                          href="/jobs/marketing"
                        >
                          Marketing
                        </a>
                      </div>
                      <div>
                        <a
                          className="entry-0-2-218"
                          href="/jobs/marketing/digital"
                        >
                          Digital
                        </a>
                      </div>
                      <div>
                        <a
                          className="entry-0-2-218"
                          href="/jobs/marketing/social"
                        >
                          Social
                        </a>
                      </div>
                      <div>
                        <a
                          className="entry-0-2-218"
                          href="/jobs/marketing/copy"
                        >
                          Copywriting
                        </a>
                      </div>
                      <div>
                        <a
                          className="entry-0-2-218"
                          href="/jobs/marketing/branding"
                        >
                          Branding
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="colContainer-0-2-219">
                    <div className="col-0-2-220">
                      <div>
                        <a className="titleEntry-0-2-216" href="/jobs/product">
                          Product
                        </a>
                      </div>
                      <div>
                        <a
                          className="entry-0-2-218"
                          href="/jobs/product/product-owner"
                        >
                          Product Owner
                        </a>
                      </div>
                      <div>
                        <a
                          className="entry-0-2-218"
                          href="/jobs/product/scrum-master"
                        >
                          Scrum Master
                        </a>
                      </div>
                      <div>
                        <a
                          className="entry-0-2-218"
                          href="/jobs/product/project-manager"
                        >
                          Project Manager
                        </a>
                      </div>
                      <div>
                        <a
                          className="entry-0-2-218"
                          href="/jobs/product/business-analyst"
                        >
                          Business Analyst
                        </a>
                      </div>
                      <div className="spacerEntry-0-2-217"></div>
                      <div className="titleEntry-0-2-216">Other</div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/devops">
                          DevOps
                        </a>
                      </div>
                      <div>
                        <a className="entry-0-2-218" href="/jobs/ai">
                          AI
                        </a>
                      </div>{" "}
                      <div>
                        <a className="entry-0-2-218" href="/jobs/qa">
                          QA
                        </a>
                      </div>
                    </div>
                    <div className="col-0-2-220">
                      <div className="titleEntry-0-2-216">{t("COMPANY")}</div>
                      <div>
                        <Link className="entry-0-2-218" to="/about">
                          {t("ABOUT")}
                        </Link>
                      </div>
                      <div>
                        <Link className="entry-0-2-218" to="/terms">
                          {t("TERMSANDCONDITIONS")}
                        </Link>
                      </div>
                      <div>
                        <Link className="entry-0-2-218" to="/privacy">
                          {t("PRIVACYPOLICY")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="line-0-2-208"></div>
        <div className="marginOnMobile-0-2-134">
          <div className="bottom-0-2-206">
            <div className="root-0-2-228 logo-0-2-207">
              <svg
                className="vector-0-2-229"
                width="47"
                height="30"
                viewBox="0 0 47 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.6591 14.3797C40.1323 11.6756 39.6248 8.92362 38.198 6.54623C36.6277 3.92969 34.1325 2.08145 31.1716 1.34236C30.2628 1.11529 29.3304 1 28.3994 1C24.1658 1 20.3172 3.33157 18.3391 7.01697C17.3931 6.37052 16.2749 6.02262 15.1063 6.02262C13.5506 6.02262 12.0941 6.63383 11.0046 7.74398C10.0943 8.67138 9.52636 9.89028 9.39043 11.1726C4.82697 11.446 1.11287 15.2407 1.00261 19.866C0.945719 22.2485 1.82025 24.5111 3.46458 26.2349C5.10942 27.9598 7.3267 28.9406 9.71013 28.9975L38.1799 29C42.2519 29 45.5643 25.6877 45.5643 21.6156C45.5643 18.043 43.0791 15.0675 39.6591 14.3797ZM38.1799 27.4901H9.92159L9.74487 27.4876C7.76573 27.4407 5.92353 26.6256 4.55761 25.1928C3.1917 23.7599 2.46519 21.8814 2.51252 19.9023C2.60767 15.9128 5.92957 12.6669 9.91806 12.6669L10.0978 12.6689C10.3032 12.6785 10.5051 12.5934 10.6511 12.4469C10.7971 12.2999 10.8767 12.0995 10.8706 11.8921C10.8374 10.7462 11.2789 9.61992 12.082 8.80178C12.8855 7.98364 13.9594 7.53253 15.1058 7.53253C16.2225 7.53253 17.2763 7.96299 18.0733 8.74539C18.2515 8.92009 18.5027 8.99662 18.7479 8.94728C18.9921 8.89945 19.1975 8.73381 19.2957 8.50523C20.8635 4.86313 24.4366 2.5094 28.3989 2.5094C29.2065 2.5094 30.0161 2.6096 30.805 2.80645C33.3742 3.44838 35.5392 5.05193 36.9021 7.32258C38.2649 9.59323 38.6617 12.2586 38.0203 14.8278C37.9669 15.0423 38.0097 15.2694 38.1381 15.4496C38.2665 15.6293 38.4668 15.7441 38.6874 15.7633C41.7459 16.0291 44.0528 18.5449 44.0528 21.6151C44.0539 24.8549 41.4187 27.4901 38.1799 27.4901Z"
                  fill="black"
                  stroke="black"
                ></path>
              </svg>
              <div>
                <span className="primaryText-0-2-230">Talent</span>
                <span className="secondaryText-0-2-231">Cloud</span>
              </div>
            </div>
            <div className="copyright-0-2-209">
              Copyright © 2021 Tech Talent.{" "}
              <br className="copyrightBreak-0-2-210" /> All rights reserved.
            </div>
            <div className="socialButtonGroup-0-2-221">
              <a
                className="socialLink-0-2-224"
                target="_blank"
                href="https://facebook.com/techtalent.ge"
              >
                <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-222">
                  <div className="rectangle-0-2-33">
                    <svg
                      className="root-0-2-232"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.6264 14.1588C20.2864 14.0908 19.8272 14.04 19.5384 14.04C18.7564 14.04 18.7056 14.38 18.7056 14.924V15.8924H20.6604L20.49 17.8984H18.7056V24H16.258V17.8984H15V15.8924H16.258V14.6516C16.258 12.952 17.0568 12 19.0624 12C19.7592 12 20.2692 12.102 20.932 12.238L20.6264 14.1588Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
              <div className="capsuleSpacer-0-2-223"></div>
              <a
                className="socialLink-0-2-224"
                target="_blank"
                href="https://www.linkedin.com/company/tt-ge"
              >
                <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-222">
                  <div className="rectangle-0-2-33">
                    <svg
                      className="root-0-2-232"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.6049 14.2436C14.6049 14.9227 14.0878 15.4723 13.2791 15.4723C12.502 15.4723 11.9848 14.9227 12.0008 14.2436C11.9848 13.5314 12.5019 12.9978 13.2946 12.9978C14.0878 12.9978 14.5894 13.5314 14.6049 14.2436ZM12.0659 24.3536V16.443H14.5244V24.3531H12.0659V24.3536Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.4947 18.9677C16.4947 17.981 16.4622 17.1398 16.4297 16.4441H18.5651L18.6786 17.5279H18.7272C19.0507 17.0263 19.8594 16.2666 21.1697 16.2666C22.787 16.2666 24.0003 17.3343 24.0003 19.6628V24.3548H21.5418V19.9709C21.5418 18.9512 21.1862 18.256 20.2965 18.256C19.6169 18.256 19.2128 18.7251 19.0512 19.1777C18.9862 19.3397 18.9542 19.5658 18.9542 19.7928V24.3548H16.4957V18.9677H16.4947Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
