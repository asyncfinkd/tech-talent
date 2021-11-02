import Actions from "actions/register/modules/index";
import { NextPage } from "next";
import { ItemProps } from "types/register/firstPage";

const Register: NextPage = () => {
  const sanitizer = Actions.DOMPurify.sanitize;
  const renderLinks = (type: string) => {
    return `/register/candidate?fieldType=${type}`;
  };
  return (
    <>
      <Actions.Head>
        <title>Register | Tech Talent</title>
      </Actions.Head>
      <Actions.Header ShowShadow={true} />
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
                  {Actions.interest.map((item: ItemProps) => {
                    return (
                      <>
                        <Actions.Link
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
                                    <Actions.SVG
                                      src={Actions.registerOwnSVG}
                                      style={{ fill: `${item.fill}` }}
                                      dangerouslySetInnerHTML={{
                                        __html: sanitizer(item.ownSVG),
                                      }}
                                    />
                                  ) : (
                                    <Actions.SVG
                                      src={Actions.registerSVG}
                                      style={{ fill: `${item.fill}` }}
                                    />
                                  )}
                                </div>
                              </div>
                              {item.text}
                            </div>
                          </a>
                        </Actions.Link>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Actions.RegisterFooter index={true} />
        </div>
      </main>
    </>
  );
};

export default Register;
