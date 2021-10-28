import Footer from "ui/footer";
import Head from "next/head";
import React from "react";
import Image from "next/image";

interface Props {
  pageTitle: string;
}

const ComingSoon: React.FC<Props> = ({ pageTitle }) => {
  const imageLoader = () => {
    return `https://tt.ge/images/empty-jobs.png`;
  };
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="main-0-2-2">
        <div className="marginOnMobile-0-2-102">
          <div className="root-0-2-163" style={{ margin: "2rem 0px" }}>
            <Image
              loader={imageLoader}
              src="https://tt.ge/images/empty-jobs.png"
              width="100%"
              height="100%"
              alt="Coming Soon"
              className="image-0-2-164"
            />
            <h1 className="h1-0-2-165">Coming Soon</h1>
            <div className="caption-0-2-166">info@tt.ge</div>
          </div>
        </div>
      </main>
      <Footer wantSponsors={true} />
    </>
  );
};

export default ComingSoon;
