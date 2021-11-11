import Actions from "actions/manager/info";
import React, { useState } from "react";
import RegisterForm from "./components/register-form";
import RegisterHeader from "./components/register-header";

export default function ManagerRegisterInfoModules({}) {
  const [previewImage, setPreviewImage] = useState<boolean>(false);
  const [image, setImage] = useState<any>("");

  const onChangeForImage = (e: any) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e: any) => {
      setImage(e.target.result);
    };
  };
  return (
    <>
      <Actions.Header />
      <main className="main-0-2-2">
        <div>
          <div className="content-0-2-101">
            <div className="marginOnMobile-0-2-111">
              <div className="root-0-2-113">
                <RegisterHeader />
                <RegisterForm
                  previewImage={previewImage}
                  setPreviewImage={setPreviewImage}
                  image={image}
                  setImage={setImage}
                  onChangeForImage={onChangeForImage}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Actions.Footer />
      {previewImage && (
        <div className="root-0-2-133">
          <div
            className="backdrop-0-2-134"
            onClick={() => {
              setPreviewImage(false);
            }}
          ></div>
          <div className="modal-0-2-135" style={{ width: "620px" }}>
            <div
              className="closeButton-0-2-137"
              onClick={() => {
                setPreviewImage(false);
              }}
            >
              <svg
                className="fill-0-2-62 closeIcon-0-2-138"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.69867 9.70138C9.33342 10.0633 8.76187 10.0962 8.35911 9.8001L8.24372 9.70138L5 6.46105L1.75628 9.70138C1.39103 10.0633 0.819478 10.0962 0.416718 9.8001L0.301331 9.70138C-0.0639191 9.33943 -0.0971222 8.77302 0.201717 8.37389L0.301331 8.25954L4.27252 4.29862C4.63777 3.93666 5.20933 3.90375 5.61209 4.1999L5.72748 4.29862L9.69867 8.25954C10.1004 8.65769 10.1004 9.30323 9.69867 9.70138Z"></path>
                <path d="M0.30133 0.298616C0.66658 -0.0633426 1.23813 -0.0962481 1.64089 0.1999L1.75628 0.298616L5 3.53895L8.24372 0.298616C8.60897 -0.0633426 9.18052 -0.0962481 9.58328 0.1999L9.69867 0.298616C10.0639 0.660574 10.0971 1.22698 9.79828 1.62611L9.69867 1.74046L5.72748 5.70138C5.36223 6.06334 4.79067 6.09625 4.38791 5.8001L4.27252 5.70138L0.30133 1.74046C-0.100443 1.34231 -0.100443 0.69677 0.30133 0.298616Z"></path>
              </svg>
            </div>
            <h1 className="title-0-2-136">Image Preview</h1>
            <div className="modalContent-0-2-121">
              <img src={image} className="modalImage-0-2-120" />
            </div>
            <div className="modalFooter-0-2-122">
              <div>
                <span className="fileInfo-0-2-123">File uploaded:</span>{" "}
                <span>Logo</span>
              </div>
              <div className="buttonGroup-0-2-124">
                <button
                  className="root-0-2-41 button-0-2-125 weightMedium-0-2-56 sizeMd-0-2-46 variantBlank-0-2-54"
                  style={{ padding: "0 0.625rem" }}
                >
                  <svg
                    className="fill-0-2-62"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5013 8.16528C16.2803 8.16528 16.0683 8.25308 15.912 8.40936C15.7558 8.56564 15.668 8.7776 15.668 8.99862C15.6779 10.5595 15.1432 12.0749 14.156 13.284C13.1688 14.493 11.7909 15.32 10.2596 15.6225C8.7283 15.9249 7.13945 15.6839 5.76672 14.9409C4.39399 14.198 3.32331 12.9996 2.73907 11.5522C2.15484 10.1047 2.09363 8.49888 2.56599 7.01118C3.03834 5.52348 4.0147 4.24706 5.32689 3.40177C6.63908 2.55647 8.20497 2.19521 9.75485 2.38021C11.3047 2.56521 12.7416 3.28488 13.818 4.41528H11.818C11.597 4.41528 11.385 4.50308 11.2287 4.65936C11.0724 4.81564 10.9846 5.0276 10.9846 5.24862C10.9846 5.46963 11.0724 5.68159 11.2287 5.83787C11.385 5.99415 11.597 6.08195 11.818 6.08195H15.593C15.814 6.08195 16.0259 5.99415 16.1822 5.83787C16.3385 5.68159 16.4263 5.46963 16.4263 5.24862V1.49862C16.4263 1.2776 16.3385 1.06564 16.1822 0.909361C16.0259 0.75308 15.814 0.665283 15.593 0.665283C15.372 0.665283 15.16 0.75308 15.0037 0.909361C14.8474 1.06564 14.7596 1.2776 14.7596 1.49862V2.97362C13.3719 1.647 11.5686 0.840243 9.65465 0.689724C7.74071 0.539204 5.8335 1.05415 4.2554 2.14752C2.67731 3.2409 1.52515 4.84562 0.993662 6.69044C0.462178 8.53526 0.58398 10.507 1.33848 12.2724C2.09298 14.0378 3.43389 15.4885 5.13455 16.3793C6.83521 17.2702 8.79131 17.5465 10.6722 17.1615C12.553 16.7766 14.2433 15.754 15.4572 14.2667C16.6712 12.7793 17.3344 10.9185 17.3346 8.99862C17.3346 8.7776 17.2468 8.56564 17.0906 8.40936C16.9343 8.25308 16.7223 8.16528 16.5013 8.16528Z"
                      fill="#24242D"
                    ></path>
                  </svg>
                  <span className="buttonText-0-2-127">Re-upload</span>
                </button>
                <button
                  className="root-0-2-41 button-0-2-125 deleteButton-0-2-126 weightMedium-0-2-56 sizeMd-0-2-46 variantBlank-0-2-54"
                  style={{ padding: "0 0 0 0.625rem" }}
                  onClick={() => {
                    setImage("");
                    setPreviewImage(false);
                  }}
                >
                  <svg
                    className="fill-0-2-62 deleteIcon-0-2-128"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.9391 3.39039C15.6523 2.54628 14.9075 2 14.0639 2H9.93592L9.779 2.00633C8.9492 2.07349 8.24111 2.66897 8.02304 3.50533L7.77543 4.76813L7.74642 4.87929C7.62785 5.23928 7.29636 5.48913 6.91772 5.48913H3.73139L3.63214 5.49598C3.27515 5.54564 3 5.85945 3 6.23916C3 6.65338 3.32745 6.98918 3.73139 6.98918L6.91772 6.98918H17.0821L20.2686 6.98918L20.3679 6.98234C20.7248 6.93267 21 6.61887 21 6.23916C21 5.82493 20.6725 5.48913 20.2686 5.48913H17.0821L16.9701 5.48177C16.6025 5.4332 16.2987 5.14872 16.2243 4.76783L15.9874 3.55209L15.9391 3.39039ZM14.9143 5.48913C14.881 5.40445 14.8522 5.31721 14.8282 5.22768L14.79 5.06208L14.5636 3.8928C14.5107 3.68991 14.3473 3.54138 14.1502 3.50742L14.0639 3.50006H9.93592C9.73071 3.50006 9.54829 3.62322 9.47252 3.77803L9.44682 3.84604L9.20979 5.06238C9.18087 5.21048 9.13899 5.35311 9.08551 5.48913H14.9143ZM18.9784 8.72017C19.3475 8.75069 19.6304 9.05716 19.65 9.42605L19.6405 9.63174L19.326 13.483L18.9961 17.2414C18.9263 17.9917 18.8638 18.6245 18.8099 19.1227C18.6225 20.8588 17.4955 21.9323 15.7966 21.9641C13.1494 22.013 10.6048 22.0125 8.13373 21.9591C6.48398 21.9244 5.37366 20.8393 5.18955 19.1297L5.0623 17.8702L4.83994 15.427L4.61216 12.7461L4.35172 9.52788C4.31935 9.11498 4.61951 8.75335 5.02215 8.72016C5.39123 8.68973 5.7183 8.94584 5.79519 9.30677L5.82511 9.60173L6.06966 12.6187L6.33669 15.7459C6.45646 17.0996 6.56034 18.1952 6.64346 18.9648C6.74838 19.939 7.26138 20.4404 8.16411 20.4593C10.6159 20.5124 13.1415 20.5129 15.7701 20.4643C16.7277 20.4464 17.2489 19.9499 17.356 18.9574L17.4827 17.7046C17.5198 17.3185 17.5594 16.8923 17.6014 16.4293L17.8686 13.3538L18.1906 9.4075C18.2204 9.02902 18.5192 8.7389 18.879 8.71882L18.9784 8.72017Z"
                    ></path>
                  </svg>
                  <span className="buttonText-0-2-127">Delete</span>
                </button>
              </div>
            </div>
            {/* <input type="file" accept="image/*" hidden="" /> */}
          </div>
        </div>
      )}
    </>
  );
}
