import React from "react";
import { useTranslation } from "react-i18next";
import dompurify from "dompurify";

const RegistrationCompanyNotification: React.FC = () => {
  const { t } = useTranslation();
  const sanitizer = dompurify.sanitize;
  return (
    <>
      <div className="root-0-2-196">
        <h1
          className="h1-0-2-197"
          dangerouslySetInnerHTML={{ __html: sanitizer(t("DOYOUWANTOJOIN")) }}
        ></h1>
        <div
          className="caption-0-2-198"
          dangerouslySetInnerHTML={{
            __html: sanitizer(t("SUBMITYOURCONTACTINFORMATION")),
          }}
        ></div>
        <a
          className="root-0-2-46 button-0-2-199 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
          href="/manager/register"
        >
          {t("REGISTERCOMPANY")}
        </a>
      </div>
    </>
  );
};

export default RegistrationCompanyNotification;
