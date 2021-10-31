import React, { useEffect, useState } from "react";
import Footer from "ui/footer";
import Header from "ui/header";
import Head from "next/head";
import CompaniesMap from "./components/companies-map";
import DOMPurify from "isomorphic-dompurify";

export default function CompaniesPage({
  access_token,
  logged,
  data,
  setData,
  _id,
}: any) {
  const sanitizer = DOMPurify.sanitize;
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<any>(data);

  function identificationSearch(): void {
    if (search.length == 0) {
      setData(result);
    } else {
      setData(
        result.filter((val: any) => {
          if (search == "") {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
      );
    }
  }

  useEffect(() => {
    identificationSearch();
  }, [search]);
  return (
    <>
      <Head>
        <title>Companies | Tech Talent</title>
      </Head>
      <Header access_token={access_token} logged={logged} ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="new__MAIN__02-20">
          <div className="root-0-2-103">
            <div className="marginOnMobile-0-2-135">
              <form>
                <div className="header-0-2-104">
                  <h1
                    className="h1-0-2-105"
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(
                        "Find a <span>company </span>that you trust"
                      ),
                    }}
                  ></h1>
                  <div className="buttonGroup-0-2-116"></div>
                </div>
                <div className="topLine-0-2-113"></div>
                <div className="mobileFilter-0-2-123">
                  <button className="root-0-2-46 primaryMobileFilter-0-2-124 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55">
                    Field
                    <svg
                      className="fill-0-2-36 caret-0-2-128"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.30133 0.298616C0.66658 -0.0633426 1.23813 -0.096248 1.64089 0.1999L1.75628 0.298616L5 3.53895L8.24372 0.298617C8.60897 -0.0633419 9.18052 -0.0962473 9.58328 0.199901L9.69867 0.298617C10.0639 0.660575 10.0971 1.22698 9.79828 1.62611L9.69867 1.74046L5.72748 5.70138C5.36223 6.06334 4.79067 6.09625 4.38791 5.8001L4.27252 5.70138L0.30133 1.74046C-0.100444 1.34231 -0.100444 0.69677 0.30133 0.298616Z"></path>
                    </svg>
                  </button>
                  <button className="root-0-2-46 secondaryMobileFilter-0-2-125 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55">
                    Category
                    <svg
                      className="fill-0-2-36 caret-0-2-128"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.30133 0.298616C0.66658 -0.0633426 1.23813 -0.096248 1.64089 0.1999L1.75628 0.298616L5 3.53895L8.24372 0.298617C8.60897 -0.0633419 9.18052 -0.0962473 9.58328 0.199901L9.69867 0.298617C10.0639 0.660575 10.0971 1.22698 9.79828 1.62611L9.69867 1.74046L5.72748 5.70138C5.36223 6.06334 4.79067 6.09625 4.38791 5.8001L4.27252 5.70138L0.30133 1.74046C-0.100444 1.34231 -0.100444 0.69677 0.30133 0.298616Z"></path>
                    </svg>
                  </button>
                  <button className="root-0-2-46 detailMobileFilter-0-2-126 animation-0-2-47 weightMedium-0-2-61 sizeSm-0-2-50 variantSecondary-0-2-55">
                    <svg
                      className="fill-0-2-36 detailMobileFilterIcon-0-2-127"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0288 2.00005C7.41977 1.98439 3.6551 5.65135 3.50463 10.2414L3.5 10.5263C3.57661 12.7761 4.34207 14.9207 5.69028 16.6876L6.00692 17.1008C7.2938 18.7371 8.82311 20.1733 10.5403 21.3571L10.9537 21.6354L11.014 21.6828C11.6026 22.1057 12.3973 22.1057 12.9858 21.6828L13.036 21.6415C14.3986 20.7579 15.655 19.7196 16.7805 18.5473C19.0686 16.1252 20.4477 13.4112 20.4998 10.655L20.4999 10.5526C20.5155 5.93192 16.8598 2.15567 12.284 2.00469L12.0288 2.00005ZM12.0237 3.51747C15.8022 3.53038 18.87 6.54942 18.9839 10.3091L18.9871 10.6406C18.9434 12.9514 17.7334 15.3324 15.6866 17.4991C14.6429 18.5862 13.4727 19.5526 12.2036 20.3745L12.119 20.438C12.0506 20.4974 11.9492 20.4974 11.8809 20.438L11.7987 20.376C9.90797 19.1416 8.24857 17.583 6.89636 15.7717C5.80718 14.3442 5.16175 12.6374 5.03184 10.8569L5.01275 10.4999C5.02559 6.71221 8.03532 3.63498 11.7835 3.52071L12.0237 3.51747ZM11.9999 7.40129C10.2115 7.40129 8.76176 8.85554 8.76176 10.6495C8.76176 12.4434 10.2115 13.8976 11.9999 13.8976C13.7883 13.8976 15.2381 12.4434 15.2381 10.6495C15.2381 8.85554 13.7883 7.40129 11.9999 7.40129ZM11.9999 8.91871C12.9528 8.91871 13.7253 9.69359 13.7253 10.6495C13.7253 11.6053 12.9528 12.3802 11.9999 12.3802C11.047 12.3802 10.2745 11.6053 10.2745 10.6495C10.2745 9.69359 11.047 8.91871 11.9999 8.91871Z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="searchContainer-0-2-109">
                  <div className="iconInputPair-0-2-108">
                    <div className="iconContainer-0-2-110">
                      <svg
                        className="fill-0-2-36 searchIcon-0-2-111"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.6115 2C6.30323 2 2 6.20819 2 11.3993C2 16.5903 6.30323 20.7985 11.6115 20.7985C13.8819 20.7985 15.9684 20.0287 17.613 18.7415L20.7371 21.7886L20.8202 21.8586C21.1102 22.0685 21.5214 22.0446 21.7839 21.7873C22.0726 21.5043 22.072 21.0459 21.7825 20.7636L18.6952 17.7523C20.2649 16.0794 21.2231 13.8487 21.2231 11.3993C21.2231 6.20819 16.9198 2 11.6115 2ZM11.6115 3.44774C16.1022 3.44774 19.7426 7.00776 19.7426 11.3993C19.7426 15.7908 16.1022 19.3508 11.6115 19.3508C7.12086 19.3508 3.48044 15.7908 3.48044 11.3993C3.48044 7.00776 7.12086 3.44774 11.6115 3.44774Z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="input-0-2-112"
                      placeholder="Find your future employer"
                      value={search}
                      onChange={(e: any) => setSearch(e.target.value)}
                    />
                  </div>
                  <button
                    className="root-0-2-46 button-0-2-117 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                    type="submit"
                  >
                    <div className="countContainer-0-2-129">
                      <div className="count-0-2-130">{data.length}</div>
                      <div className="countLabel-0-2-131">Companies</div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
            <div className="bottomLine-0-2-114"></div>
          </div>
          <div className="marginOnMobile-0-2-135">
            <div className="grid-0-2-101">
              {data.map((item: any) => {
                return (
                  <>
                    <CompaniesMap item={item} _id={_id} logged={logged} />
                  </>
                );
              })}
            </div>
            {data.length > 12 && (
              <button className="root-0-2-46 root-0-2-150 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55">
                Load More
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer wantSponsors={true} access_token={access_token} logged={logged} />
    </>
  );
}
