import Header from "modules/header";
import { NextPage } from "next";
import { interest } from "fixtures/register";
import Link from "next/link";
import { ItemProps } from "types/register/firstPage";
import Head from "next/head";
import RegisterFooter from "modules/footer/register";

const Register: NextPage = () => {
  const renderLinks = (type: string) => {
    // if (urlParameters.get("return_to") != null) {
    //   return `/register/candidate?return_to=${urlParameters.get(
    //     "return_to"
    //   )}&fieldType=${type}`;
    // } else {
    return `/register/candidate?fieldType=${type}`;
    // }
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
                                    <svg
                                      className="fill-0-2-36"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{ fill: `${item.fill}` }}
                                      dangerouslySetInnerHTML={{
                                        __html: item.ownSVG,
                                      }}
                                    ></svg>
                                  ) : (
                                    <svg
                                      className="fill-0-2-36"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{ fill: `${item.fill}` }}
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.0043 2C9.07027 2 6.69177 4.38864 6.69177 7.33517C6.69177 10.2817 9.07027 12.6703 12.0043 12.6703C14.9383 12.6703 17.3168 10.2817 17.3168 7.33517C17.3168 4.38864 14.9383 2 12.0043 2ZM12.0043 3.44767C14.1422 3.44767 15.8753 5.18816 15.8753 7.33517C15.8753 9.48218 14.1422 11.2227 12.0043 11.2227C9.8664 11.2227 8.1333 9.48218 8.1333 7.33517C8.1333 5.18816 9.8664 3.44767 12.0043 3.44767ZM9.83005 14.8209C9.05233 14.8749 8.26621 14.9859 7.4908 15.1521C5.99418 15.4604 4.79685 16.0763 4.28724 17.0999C4.09503 17.5002 3.99839 17.9288 4.00002 18.3627C3.99944 18.7935 4.0953 19.2227 4.28062 19.6153C4.76994 20.6271 5.8278 21.1997 7.25624 21.5171L7.51213 21.5705C8.26648 21.7407 9.05284 21.8553 9.84446 21.909C9.91189 21.9288 10.0726 21.9472 10.248 21.9561L10.3922 21.9615C10.4664 21.9633 10.5506 21.9637 10.676 21.9637C11.8138 22.0263 12.9934 22.0081 14.1675 21.9081C14.7932 21.8653 15.4231 21.7835 16.0477 21.6636L16.5151 21.5666C18.0576 21.2623 19.2126 20.6836 19.7186 19.6164C20.0937 18.8241 20.0937 17.9047 19.7188 17.1127C19.214 16.0483 18.0737 15.4744 16.5034 15.1509C15.8873 15.0194 15.2612 14.922 14.6307 14.8599L14.1697 14.8209C12.7259 14.6935 11.2738 14.6935 9.83005 14.8209ZM14.0436 16.263L14.0562 16.264C14.7799 16.3149 15.4991 16.4165 16.2087 16.568C17.3751 16.8083 18.1667 17.2067 18.4171 17.7348C18.6057 18.133 18.6057 18.5958 18.4169 18.9944C18.1829 19.4879 17.472 19.8691 16.4445 20.1021L16.2195 20.1498C15.496 20.3112 14.7791 20.4152 14.0576 20.4647C12.9379 20.5599 11.8249 20.5771 10.7148 20.5171L10.3212 20.5103C10.2119 20.5048 10.1198 20.4942 10.0345 20.4771C9.35872 20.4261 8.75066 20.3454 8.16027 20.2283L7.80775 20.1537C6.63771 19.9244 5.83915 19.5243 5.58024 18.989C5.48964 18.797 5.44125 18.5803 5.44154 18.3609C5.44073 18.1428 5.48848 17.931 5.58118 17.7379C5.83293 17.2324 6.67919 16.7971 7.78606 16.569C8.50073 16.4159 9.21962 16.3144 9.94294 16.264C11.316 16.143 12.6837 16.143 14.0436 16.263Z"
                                      ></path>
                                    </svg>
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
