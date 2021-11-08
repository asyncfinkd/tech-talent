import React from "react";
import Actions from "actions/ui/notification";

const Notification: React.FC = () => {
  const sanitizer = Actions.DOMPurify.sanitize;
  return (
    <>
      <div className="root-0-2-196">
        <h1
          className="h1-0-2-197"
          dangerouslySetInnerHTML={{
            __html: sanitizer(
              "Do you want to join <br /> the <span>Tech Talent</span> platform?"
            ),
          }}
        ></h1>
        <div
          className="caption-0-2-198"
          dangerouslySetInnerHTML={{
            __html: sanitizer(
              "Submit your contact information <br /> and we will contact you shortly"
            ),
          }}
        ></div>
        <Actions.Link href="/manager/register">
          <a className="root-0-2-46 button-0-2-199 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54">
            Register Company
          </a>
        </Actions.Link>
      </div>
    </>
  );
};

export default Notification;
