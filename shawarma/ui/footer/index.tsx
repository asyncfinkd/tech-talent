import React from "react";
import Link from "next/link";
import * as s from "constants/app/strings";
import SVG from "react-inlinesvg";

interface Props {
  wantSponsors?: boolean;
  access_token?: any;
  logged?: any;
}

const Footer: React.FC<Props> = ({ wantSponsors, access_token, logged }) => {
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
                  <Link
                    href={`${logged ? `/profile/information` : `/register`}`}
                  >
                    <a className="root-0-2-46 register-0-2-214 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54">
                      {logged ? "Profile" : "Register"}
                    </a>
                  </Link>
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
                      <div className="titleEntry-0-2-216">Company</div>
                      <div>
                        <Link href="/about">
                          <a className="entry-0-2-218">About</a>
                        </Link>
                      </div>
                      <div>
                        <Link href="/terms">
                          <a className="entry-0-2-218">Terms & Conditions</a>
                        </Link>
                      </div>
                      <div>
                        <Link href="/privacy">
                          <a className="entry-0-2-218">Privacy Policy</a>
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
              <SVG src={s.TalentCloudSVG} />
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
                rel="noreferrer"
                href="https://facebook.com/techtalent.ge"
              >
                <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-222">
                  <div className="rectangle-0-2-33">
                    <SVG src={s.FacebookSVG} />
                  </div>
                </div>
              </a>
              <div className="capsuleSpacer-0-2-223"></div>
              <a
                className="socialLink-0-2-224"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/tt-ge"
              >
                <div className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-222">
                  <div className="rectangle-0-2-33">
                    <SVG src={s.LinkedinSVG} />
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
