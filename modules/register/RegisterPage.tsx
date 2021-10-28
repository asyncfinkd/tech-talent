import Header from "ui/header";
import { NextPage } from "next";
import { interest } from "fixtures/register";
import Link from "next/link";
import { ItemProps } from "types/register/firstPage";
import Head from "next/head";
import RegisterFooter from "ui/footer/register";
import SVG from "react-inlinesvg";
import { registerOwnSVG, registerSVG } from "constants/app/strings";
import DOMPurify from "isomorphic-dompurify";

const Register: NextPage = () => {
  const sanitizer = DOMPurify.sanitize;
  const renderLinks = (type: string) => {
    return `/register/candidate?fieldType=${type}`;
  };
  return (
    <>
      <Head>
        <title>Register | Tech Talent</title>
      </Head>
      <Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="root-0-2-233">
          <div className="content-0-2-234">
            <div className="marginOnMobile-0-2-134">
              <div className="root-0-2-244">
                <h1 className="h1-0-2-245">Register</h1>
                <div className="caption-0-2-246">
                  Choose Link field of interest
                </div>
                <div className="grid-0-2-247">
                  {interest.map((item: ItemProps) => {
                    return (
                      <>
                        <Link
                          href={
                            item.localSlug
                              ? `${item.localSlugName}`
                              : renderLinks(`${item.slug}`)
                          }
                        >
                          <a
                            className="root-0-2-46 fieldButton-0-2-249 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59"
                            key={item.id}
                          >
                            <div className="fieldLeft-0-2-248">
                              <div
                                className="root-0-2-30 sizeMd-0-2-31 capsule-0-2-250"
                                style={{
                                  backgroundColor: `${item.backgroundColor}`,
                                }}
                              >
                                <div
                                  className="circle-0-2-34"
                                  style={{ width: "36px", height: "36px" }}
                                >
                                  {item.ownSVG ? (
                                    <SVG
                                      src={registerOwnSVG}
                                      style={{ fill: `${item.fill}` }}
                                      dangerouslySetInnerHTML={{
                                        __html: sanitizer(item.ownSVG),
                                      }}
                                    />
                                  ) : (
                                    <SVG
                                      src={registerSVG}
                                      style={{ fill: `${item.fill}` }}
                                    />
                                  )}
                                </div>
                              </div>
                              {item.text}
                            </div>
                          </a>
                        </Link>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <RegisterFooter index={true} />
        </div>
      </main>
    </>
  );
};

export default Register;
