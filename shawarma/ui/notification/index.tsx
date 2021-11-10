import React from "react";
import Actions from "actions/ui/notification";
import { useTranslation } from "react-i18next";

const Notification: React.FC = () => {
  const sanitizer = Actions.DOMPurify.sanitize;
  const { t } = useTranslation();
  return (
    <>
      <div className="root-0-2-196">
        <h1
          className="h1-0-2-197"
          dangerouslySetInnerHTML={{
            __html: sanitizer(`${t("DOYOUWANTOJOIN")}`),
          }}
        ></h1>
        <div
          className="caption-0-2-198"
          dangerouslySetInnerHTML={{
            __html: sanitizer(`${t("SUBMITYOURCONTACTINFORMATION")}`),
          }}
        ></div>
        <Actions.Link href="/manager/register">
          <a className="root-0-2-46 button-0-2-199 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54">
            {t("REGISTERCOMPANY")}
          </a>
        </Actions.Link>
      </div>
    </>
  );
};

export default Notification;
