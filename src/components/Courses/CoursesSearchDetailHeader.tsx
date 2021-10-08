import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CoursesSearchDetailHeaderMap from "./CoursesSearchDetailHeaderMap";
import env from "../../application/environment/env.json";

const CoursesSearchDetailHeader: React.FC<any> = ({ setText }: any) => {
  const [bottomContent, setBottomContent] = useState<any>([]);
  const { pathname } = useLocation();
  const splitedUrlHead = window.location.pathname.split("/");
  useEffect(() => {
    let splitUrl = window.location.pathname.split("/");
    const bottomContent = [
      {
        condition: "dev",
        data: [
          {
            text: "React",
            route: "/courses/dev/react",
          },
          {
            text: "Angular",
            route: "/courses/dev/angular",
          },
          {
            text: "Vue",
            route: "/courses/dev/vue",
          },
          {
            text: "Node.js",
            route: "/courses/dev/node",
          },
          {
            text: "Python",
            route: "/courses/dev/python",
          },
          {
            text: ".NET",
            route: "/courses/dev/dot-net",
          },
          {
            text: "Java",
            route: "/courses/dev/java",
          },
          {
            text: "PHP",
            route: "/courses/dev/php",
          },
          {
            text: "Laravel",
            route: "/courses/dev/laravel",
          },
          {
            text: "iOS",
            route: "/courses/dev/ios",
          },
          {
            text: "Android",
            route: "/courses/dev/android",
          },
        ],
      },
      {
        condition: "design",
        data: [
          {
            text: "UI Design",
            route: "/courses/design/ui",
          },
          {
            text: "UX Design",
            route: "/courses/design/ux",
          },
          {
            text: "Graphic Design",
            route: "/courses/design/graphic",
          },
          {
            text: "Motion Design",
            route: "/courses/design/motion",
          },
          {
            text: "3D Design",
            route: "/courses/design/3d",
          },
          {
            text: "Interior Design",
            route: "/courses/design/interior",
          },
        ],
      },
      {
        condition: "marketing",
        data: [
          {
            text: "Digital Marketing",
            route: "/courses/marketing/digital",
          },
          {
            text: "Social Media",
            route: "/courses/marketing/social",
          },
          {
            text: "Copywriting",
            route: "/courses/marketing/copy",
          },
          {
            text: "Branding",
            route: "/courses/marketing/branding",
          },
        ],
      },
      {
        condition: "product",
        data: [
          {
            text: "Product Owner",
            route: "/courses/product/product-owner",
          },
          {
            text: "Scrum Master",
            route: "/courses/product/scrum-master",
          },
          {
            text: "Agile Coach",
            route: "/courses/product/agile-coach",
          },
          {
            text: "Product Manager",
            route: "/courses/product/product-manager",
          },
          {
            text: "Project Manager",
            route: "/courses/product/project-manager",
          },
          {
            text: "Business Analyst",
            route: "/courses/product/business-analyst",
          },
        ],
      },
      {
        condition: "ops",
        data: [
          {
            text: "DevOps",
            route: "/courses/ops/devops",
          },
          {
            text: "System Administrator",
            route: "/courses/ops/sysadmin",
          },
          {
            text: "Database Administrator",
            route: "/courses/ops/dba",
          },
          {
            text: "Network Administrator",
            route: "/courses/ops/netadmin",
          },
        ],
      },
      {
        condition: "qa",
        data: [
          {
            text: "Manual Testing",
            route: "/courses/qa/manual-testing",
          },
          {
            text: "Test Automation",
            route: "/courses/qa/test-automation",
          },
        ],
      },
      {
        condition: "ai",
        data: [
          {
            text: "Machine Learning",
            route: "/courses/ai/ml",
          },
          {
            text: "Data Science",
            route: "/courses/ai/data-science",
          },
          {
            text: "Data Engineering",
            route: "/courses/ai/data-engineering",
          },
        ],
      },
      {
        condition: "support",
        data: [
          {
            text: "IT Specialist",
            route: "/courses/support/it-specialist",
          },
          {
            text: "Tech Support",
            route: "/courses/support/tech-support",
          },
        ],
      },
    ];
    bottomContent.map((item: any) => {
      if (item.condition == splitUrl[2]) {
        setBottomContent(item.data);
      }
    });
    console.log(splitedUrlHead);
    console.log(splitedUrlHead[1] + splitedUrlHead[2] + splitedUrlHead[3]);
    bottomContent.map((item: any) => {
      item.data.map((item2: any) => {
        if (
          `/${splitedUrlHead[1]}/${splitedUrlHead[2]}/${splitedUrlHead[3]}` ==
          item2.route
        ) {
          setText(item2.text);
        }
      });
    });
    console.log(splitedUrlHead[3]);
    if (splitedUrlHead[3] == undefined) {
      document
        .getElementById("qwmeqwlemqlwmelqwmel")
        ?.classList.add("active__CMOQCMQLMCLQ", "buttonActive-0-2-221");
    }
  }, [pathname]);
  return (
    <>
      <NavLink
        className="root-0-2-46 button-0-2-220 weightMedium-0-2-61 sizeMd-0-2-51 variantBlank-0-2-59"
        type="button"
        to={`/courses/${splitedUrlHead[2]}`}
        id="qwmeqwlemqlwmelqwmel"
      >
        <svg
          className="fill-0-2-36 icon-0-2-223 vi__hidden__qlm1l"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.1377 22C7.7257 22 7.3347 21.968 6.9667 21.905L6.7487 21.864C4.3777 21.371 2.9997 19.555 2.9997 16.791V7.209C2.9997 6.875 3.0197 6.555 3.0597 6.249C3.4087 3.564 5.2537 2 8.1377 2H15.8627C19.0587 2 20.9697 3.92 20.9997 7.132V7.209V16.791C20.9997 20.048 19.0837 22 15.8627 22H8.1377ZM8.1377 3.457C5.6817 3.457 4.4367 4.72 4.4367 7.209V16.791C4.4367 19.28 5.6817 20.543 8.1377 20.543H15.8537C18.3087 20.543 19.5457 19.28 19.5457 16.791V7.209C19.5457 4.72 18.3087 3.457 15.8537 3.457H8.1377ZM16.3057 16.234C16.3057 15.834 15.9867 15.51 15.5927 15.51H8.3817C7.9877 15.51 7.6677 15.834 7.6677 16.234C7.6677 16.634 7.9877 16.958 8.3817 16.958H15.5927C15.9867 16.958 16.3057 16.634 16.3057 16.234ZM15.5927 11.271C15.8677 11.241 16.1367 11.373 16.2837 11.61C16.4307 11.849 16.4307 12.151 16.2837 12.39C16.1367 12.627 15.8677 12.759 15.5927 12.729H8.3817C8.0157 12.687 7.7387 12.374 7.7387 12C7.7387 11.626 8.0157 11.312 8.3817 11.271H15.5927ZM11.7767 7.771C11.7767 7.397 11.4997 7.083 11.1337 7.042H8.3907C8.0237 7.083 7.7467 7.397 7.7467 7.771C7.7467 8.144 8.0237 8.458 8.3907 8.499H11.1337C11.4997 8.458 11.7767 8.144 11.7767 7.771Z"
          ></path>
        </svg>
        All
        <div className="selection-0-2-222 vi__hidden__SelectiON"></div>
      </NavLink>
      {bottomContent?.map((item: any) => {
        return (
          <>
            <CoursesSearchDetailHeaderMap item={item} />
          </>
        );
      })}
    </>
  );
};

export default CoursesSearchDetailHeader;
