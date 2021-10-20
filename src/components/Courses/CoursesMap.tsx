import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const CoursesMap: React.FC<any> = ({ item, env }: any) => {
  const [date, setDate] = useState<any>("");

  useEffect(() => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    let splitDay = item.createdAt.split("-");
    const firstDate: any = new Date(splitDay[0], splitDay[1] - 1, splitDay[2]);
    const secondDate: any = new Date();
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    setDate(diffDays - 1);
  });
  const history = useHistory();
  return (
    <>
      <div className="root-0-2-156 rootSlice-0-2-157 root-0-2-266">
        <div className="header-0-2-158">
          <div className="image-0-2-159 imageSlice-0-2-160">
            <a href="/e/commschool/im2gE-introduction-to-front-end-development">
              <img
                className="academyLogo-0-2-267"
                src={`${env.server}${item.academy.logoUrl}`}
                alt={item.academy.name}
              />
            </a>
          </div>
          <div className="primaryColumn-0-2-171">
            <div className="primaryColumnTop-0-2-172">
              <Link
                className="courseName-0-2-268"
                to={`/e/${item.academy.slug}/${item.slug}/${item.slugName}`}
              >
                {item.name}
              </Link>
            </div>
            <div className="primaryColumnBottom-0-2-173">
              <Link
                className="academyName-0-2-269"
                to={`/e/${item.academy.slug}`}
              >
                {item.academy.name}
              </Link>
            </div>
          </div>
        </div>
        <div className="lineFirst-0-2-167 lineFirstSlice-0-2-168"></div>
        <div className="secondaryColumn-0-2-174">
          <div className="secondaryColumnTop-0-2-175">
            <div className="root-0-2-141">
              {item?.tags?.map((tag: any) => {
                return (
                  <>
                    <div className="tag-0-2-143 md-0-2-145">#{tag.text}</div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="secondaryColumnBottom-0-2-176">
            <div className="root-0-2-181">
              <div className="dot-0-2-182"></div>
              {`Added ${date} days ago`}
            </div>
          </div>
        </div>
        <div className="lineSecond-0-2-169 lineSecondSlice-0-2-170"></div>
        <div className="tertiaryColumn-0-2-177">
          <div className="secondaryButton-0-2-178">
            {localStorage.getItem("local") ? (
              <>
                {item.price != null ? (
                  <div className="show-0-2-176">
                    <svg
                      className="fill-0-2-36 money-0-2-181"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        height: "20px",
                        strokeWidth: "0.75",
                        stroke: "rgb(23, 23, 37)",
                        fill: "rgb(23, 23, 37)",
                      }}
                    >
                      <path d="M10.5028 2L9.22455 3.28373L9.06539 3.42974L9.07038 5.23675L8.89852 5.29071L8.75749 5.33968L8.60831 5.38548L8.4954 5.43445L8.3648 5.48569L8.22106 5.53965L8.09273 5.60132L7.96168 5.65755L7.84379 5.71423L7.74357 5.76049L7.62023 5.82714L7.52274 5.88383L7.42253 5.94005L7.29964 6.00671L7.2017 6.06067L7.06067 6.14547L6.9065 6.24568L6.74008 6.35859L6.61175 6.44293L6.46529 6.55358L6.37278 6.62522L6.25489 6.71773L6.14696 6.80252L6.03133 6.89503L5.92613 6.97982L5.84406 7.0619L5.74384 7.15395L5.56156 7.32626L5.4822 7.40289L5.41781 7.47L5.33075 7.55435L5.22555 7.66771L5.12533 7.77518L5.0614 7.85997L4.98159 7.94704L4.90994 8.04226L4.83785 8.13477L4.76847 8.22682L4.69682 8.31433L4.63243 8.4014L4.56577 8.48393L4.51453 8.56056L4.45558 8.65578L4.39391 8.756L4.33995 8.82764L4.28871 8.90473L4.20891 9.03306L4.17308 9.10742L4.12955 9.18451L4.06788 9.28472L4.01936 9.36136L3.99079 9.43844L3.93185 9.53866L3.87562 9.64114L3.81395 9.7672L3.7677 9.8851L3.71646 10.0107L3.66476 10.1164L3.62395 10.2084L3.58541 10.3163L3.52646 10.4496L3.48021 10.5884L3.41355 10.7861L3.37727 10.9067L3.33646 11.0428L3.30064 11.1684L3.2698 11.2944L3.19 11.6431L3.16959 11.7511L3.13604 11.8771L3.11291 12.0308L3.09749 12.1338L3.07437 12.2952L3.05169 12.4725L3.02857 12.7545L3.01043 12.9523L3.00272 13.1037L3 13.286L3.00272 13.7299L3.00771 13.8764L3.02313 14.0868L3.03628 14.2587L3.04897 14.382L3.06167 14.513L3.07437 14.6182L3.09749 14.7493L3.11563 14.8749L3.13377 14.9878L3.15689 15.1007L3.1773 15.1982L3.20813 15.3342L3.23625 15.4526L3.2621 15.5732L3.30291 15.7038L3.33646 15.8376L3.36956 15.9505L3.4004 16.048L3.43395 16.1609L3.4725 16.2661L3.51104 16.379L3.55457 16.4892L3.59312 16.5867L3.62894 16.6715L3.67791 16.7921L3.72643 16.9104L3.78039 17.0206L3.82664 17.1308L3.8729 17.2211L3.91915 17.3031L3.97311 17.421L4.02163 17.5108L4.0706 17.6033L4.12456 17.6958L4.15767 17.7548L4.19122 17.811L4.23974 17.8908L4.28373 17.9652L4.32454 18.0296L4.37351 18.0962L4.41432 18.1679L4.47871 18.2654L4.53494 18.3474L4.59661 18.43L4.64014 18.4966L4.68911 18.5606L4.75078 18.6404L4.80202 18.707L4.87367 18.7941L4.96391 18.902L5.03827 18.9995L5.12533 19.0947L5.18972 19.1741L5.25865 19.2435L5.34118 19.3305L5.41554 19.413L5.48991 19.4874L5.54614 19.5414L5.61552 19.6053L5.68762 19.6774L5.74929 19.7336L5.81594 19.7953L5.8699 19.8466L5.94155 19.9082L6.00821 19.9699L6.06761 20.0107L6.12112 20.0624L6.1778 20.1059L6.22405 20.139L6.27529 20.1803L6.33696 20.2293L6.39591 20.2751L6.4603 20.3213L6.52923 20.3726L6.59089 20.4188L6.63443 20.4474L6.6707 20.4755L6.71151 20.5036L6.7555 20.5344L6.79359 20.5603L6.82714 20.578H4.42475L3.00272 22H17.2942L18.7112 20.578L11.2624 20.5757L11.1009 20.573L10.9055 20.5526L10.6235 20.5295L10.3641 20.4782L10.1641 20.4419L9.95597 20.3934L9.7764 20.3549L9.5787 20.3059L9.44765 20.2674L9.23997 20.193L9.06267 20.1291L8.91121 20.0751L8.77019 20.0161L8.62372 19.9418L8.49041 19.8774L8.31855 19.798L8.14896 19.7055L7.99751 19.6157L7.85149 19.5282L7.74085 19.4566L7.59711 19.3718L7.46606 19.2743L7.35315 19.2022L7.24296 19.1201L7.11735 19.0149L6.98903 18.9124L6.85798 18.7968L6.73237 18.6889L6.5986 18.5583L6.47572 18.4377L6.39092 18.3551L6.29071 18.2345L6.21135 18.1502L6.13155 18.0654L6.03133 17.942L5.92114 17.806C5.92114 17.806 5.82365 17.6753 5.82365 17.665C5.82365 17.6547 5.72843 17.5444 5.72843 17.5444L5.62096 17.3825L5.53344 17.2542L5.44638 17.1181L5.3643 16.9771L5.29493 16.8588L5.23598 16.7409L5.14846 16.579L5.0818 16.4252L5.01741 16.2761L4.94577 16.1223L4.89679 16.0067L4.85598 15.9015L4.81245 15.7682L4.75305 15.5832L4.69183 15.3882L4.63016 15.1701L4.59162 14.9828L4.55036 14.7774L4.51181 14.6028L4.48642 14.3947L4.46556 14.1997L4.44515 13.9789L4.43518 13.8505L4.42475 13.7018V13.5658L4.42747 13.4374L4.43518 13.3041L4.44017 13.091L4.45014 12.9318L4.45785 12.765L4.471 12.6493L4.49141 12.4902L4.51453 12.3442L4.53267 12.195L4.55806 12.0694L4.59162 11.9129L4.61701 11.7846L4.64014 11.6871L4.6737 11.5588L4.70952 11.4481L4.75078 11.2944L4.79159 11.1838L4.84555 11.0301L4.89679 10.8863L4.94849 10.7603L5.00472 10.6011L5.07681 10.4474L5.12806 10.3549L5.187 10.2293L5.25366 10.0955L5.30762 9.99528L5.38199 9.86469L5.46678 9.73364L5.52347 9.63116L5.59012 9.53367L5.68762 9.39219L5.76969 9.27429L5.84406 9.16411L5.92114 9.06117L5.9878 8.96867L6.04947 8.89929L6.12384 8.81721L6.18279 8.74285L6.23947 8.68118L6.30885 8.61225L6.3678 8.54015L6.45486 8.4608L6.53195 8.38099L6.68612 8.23226L6.74008 8.17558L6.81173 8.11164L6.88383 8.04725L6.94776 7.9883L7.02485 7.92164L7.11463 7.85227L7.19943 7.78833L7.28422 7.72122L7.37129 7.66771L7.47649 7.5879L7.5767 7.51626L7.68462 7.44688L7.76126 7.3902L7.86419 7.33125L7.9567 7.27457L8.02562 7.22877L8.11314 7.19022L8.17979 7.14896L8.26958 7.10271L8.36979 7.05147L8.47 7.00522L8.52895 6.96939L8.62372 6.93357L8.7058 6.89729L8.80102 6.85376L8.87811 6.82066L8.95475 6.78982L9.02956 6.76398L9.07038 6.74584V13.4374L10.5001 12.0132L10.5028 6.37628L10.5205 6.36857L10.5822 6.35859L10.6543 6.35088L10.7518 6.33546L10.8466 6.32776L10.9069 6.32549L10.9082 6.3264L10.9327 6.32912L11.052 6.31597L11.1803 6.30826L11.3354 6.30327L11.8142 6.30055L11.9888 6.30962L12.1375 6.32005L12.2495 6.33002L12.3561 6.34181L12.4713 6.35587L12.5574 6.36857L12.6345 6.379L12.6368 13.4402L14.0706 12.0154V6.75128L14.0924 6.75763L14.1409 6.77804L14.2089 6.80524L14.3 6.83834L14.3631 6.86918L14.4556 6.90908L14.5581 6.95534L14.6533 7.00159L14.7467 7.04875L14.8496 7.09908L14.9635 7.15939L15.0446 7.20156L15.1163 7.2401L15.1766 7.28137L15.2473 7.32218L15.3049 7.35301L15.3793 7.40289L15.4437 7.44552L15.5221 7.49313L15.5901 7.53893L15.6581 7.5879L15.7271 7.63778L15.7951 7.68539L15.8749 7.7457L15.9479 7.80239L16.0046 7.84728L16.0649 7.8958L16.1302 7.94704L16.2009 8.00508L16.2857 8.08443L16.3587 8.14746L16.4281 8.21412L16.5038 8.28078L16.5782 8.35787L16.6344 8.40412L16.687 8.4608L16.7718 8.55058L16.8453 8.62858L16.8952 8.68662L16.9478 8.74557L17.0262 8.83399L17.1083 8.9342L17.1777 9.01764L17.2171 9.07931L17.2674 9.15232L17.33 9.23212L17.3804 9.30014L17.4289 9.36816L17.4765 9.43708L17.5332 9.52052L17.5817 9.59897L17.6266 9.66562L17.6665 9.72457L17.7073 9.78896L17.7472 9.8529L17.7844 9.925L17.8179 9.9903L17.8601 10.0687L17.8973 10.1291L17.9259 10.1866L17.959 10.2574L17.9884 10.3086L18.017 10.3676L18.0619 10.4628L18.1068 10.5666L18.1322 10.6206L18.1567 10.6782L18.1812 10.7349L18.2029 10.7925L18.2288 10.8646L18.2505 10.9221L18.2814 10.9861L18.3018 11.0387L18.3186 11.0913L18.3417 11.162L18.3571 11.2124L18.3789 11.2813L18.3993 11.3561L18.4224 11.4314L18.4491 11.5098L18.475 11.6128L18.4981 11.6971L18.529 11.8359L18.5457 11.9075L18.5634 11.9873L18.5838 12.0952L18.5893 12.1156L18.6033 12.2004L18.6224 12.3006L18.6355 12.4095L18.6496 12.5174L18.6663 12.6548L18.6804 12.7804L18.6904 12.9291L18.6995 13.0615L18.7099 13.2348L18.7162 13.4297L20.0344 12.1116L20.0367 12.0875L20.029 12.0308L20.0176 11.9606L20.0049 11.8871L19.9945 11.8295L19.9791 11.7411L19.9596 11.664L19.9469 11.5919L19.9161 11.469L19.9006 11.4033L19.8802 11.3239L19.8558 11.2341L19.8354 11.1593L19.8149 11.0827L19.7954 11.021L19.775 10.9489L19.7492 10.8682L19.7224 10.7834L19.6866 10.6768L19.6581 10.5925L19.6313 10.51L19.5991 10.4306L19.5723 10.3626L19.5388 10.2637L19.5057 10.188L19.4758 10.1213L19.4413 10.0393L19.4077 9.96354L19.3669 9.86696L19.3334 9.79123L19.2962 9.72231L19.2554 9.63615L19.2218 9.57085L19.1797 9.48334L19.1434 9.41804L19.1062 9.34866L19.064 9.27429L19.0151 9.19222L18.9702 9.10878L18.9307 9.04303L18.8894 8.97139L18.8495 8.90972L18.8087 8.83671L18.7716 8.77867L18.7253 8.71337L18.6931 8.66213L18.6595 8.6186L18.6097 8.54151L18.5584 8.46941L18.5135 8.40684L18.4723 8.3488L18.4238 8.2835L18.3734 8.2182L18.3222 8.15245L18.2927 8.10892L18.2465 8.05632L18.217 8.0205L18.1671 7.95883L18.1208 7.90351L18.0696 7.8432L17.9912 7.75069L17.9259 7.67633L17.8656 7.61602L17.8075 7.55208L17.7436 7.48769L17.6497 7.39156L17.569 7.31583L17.5023 7.25053L17.4212 7.17073L17.3482 7.10044L17.2838 7.04648L17.1994 6.96667L17.1287 6.90908L17.0697 6.85512L16.9913 6.79481L16.9246 6.74085L16.8475 6.67782L16.7732 6.62295L16.6911 6.564L16.6181 6.51231L16.5347 6.44701L16.4549 6.39033L16.3909 6.34317L16.3238 6.29964L16.2535 6.2543L16.1737 6.20442L16.0894 6.15046L16.0123 6.09922L15.9456 6.05931L15.8658 6.01578L15.7951 5.97452L15.7157 5.93234L15.6323 5.88383L15.5606 5.84619L15.4772 5.80266L15.396 5.76275L15.3244 5.72693L15.2242 5.67977L15.1344 5.63715L15.0419 5.59362L14.9276 5.54374L14.8419 5.5061L14.7431 5.46801L14.6583 5.43445L14.5798 5.40634L14.495 5.3755L14.3812 5.33197L14.2964 5.30477L14.2003 5.27166L14.1218 5.24854L14.0729 5.23947L14.0706 2.00408L12.6345 3.43246L12.6354 4.9352L12.5202 4.91706L12.3674 4.89938L12.2455 4.88623L12.04 4.87081L11.8491 4.86446L11.7362 4.86084L11.4614 4.86356L11.2819 4.86582L11.0724 4.87353L10.9273 4.88124L10.8892 4.89031L10.7645 4.90074L10.6361 4.91072L10.5464 4.92885L10.5051 4.94654L10.5028 2Z"></path>
                    </svg>
                    <div className="price-0-2-182">{item.price}</div>
                  </div>
                ) : (
                  <div className="show-0-2-176">
                    <svg
                      className="fill-0-2-36 money-0-2-181"
                      style={{
                        height: "20px",
                        strokeWidth: "0.75",
                        stroke: "#DCDCDC",
                        fill: "#DCDCDC",
                      }}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.5028 2L9.22455 3.28373L9.06539 3.42974L9.07038 5.23675L8.89852 5.29071L8.75749 5.33968L8.60831 5.38548L8.4954 5.43445L8.3648 5.48569L8.22106 5.53965L8.09273 5.60132L7.96168 5.65755L7.84379 5.71423L7.74357 5.76049L7.62023 5.82714L7.52274 5.88383L7.42253 5.94005L7.29964 6.00671L7.2017 6.06067L7.06067 6.14547L6.9065 6.24568L6.74008 6.35859L6.61175 6.44293L6.46529 6.55358L6.37278 6.62522L6.25489 6.71773L6.14696 6.80252L6.03133 6.89503L5.92613 6.97982L5.84406 7.0619L5.74384 7.15395L5.56156 7.32626L5.4822 7.40289L5.41781 7.47L5.33075 7.55435L5.22555 7.66771L5.12533 7.77518L5.0614 7.85997L4.98159 7.94704L4.90994 8.04226L4.83785 8.13477L4.76847 8.22682L4.69682 8.31433L4.63243 8.4014L4.56577 8.48393L4.51453 8.56056L4.45558 8.65578L4.39391 8.756L4.33995 8.82764L4.28871 8.90473L4.20891 9.03306L4.17308 9.10742L4.12955 9.18451L4.06788 9.28472L4.01936 9.36136L3.99079 9.43844L3.93185 9.53866L3.87562 9.64114L3.81395 9.7672L3.7677 9.8851L3.71646 10.0107L3.66476 10.1164L3.62395 10.2084L3.58541 10.3163L3.52646 10.4496L3.48021 10.5884L3.41355 10.7861L3.37727 10.9067L3.33646 11.0428L3.30064 11.1684L3.2698 11.2944L3.19 11.6431L3.16959 11.7511L3.13604 11.8771L3.11291 12.0308L3.09749 12.1338L3.07437 12.2952L3.05169 12.4725L3.02857 12.7545L3.01043 12.9523L3.00272 13.1037L3 13.286L3.00272 13.7299L3.00771 13.8764L3.02313 14.0868L3.03628 14.2587L3.04897 14.382L3.06167 14.513L3.07437 14.6182L3.09749 14.7493L3.11563 14.8749L3.13377 14.9878L3.15689 15.1007L3.1773 15.1982L3.20813 15.3342L3.23625 15.4526L3.2621 15.5732L3.30291 15.7038L3.33646 15.8376L3.36956 15.9505L3.4004 16.048L3.43395 16.1609L3.4725 16.2661L3.51104 16.379L3.55457 16.4892L3.59312 16.5867L3.62894 16.6715L3.67791 16.7921L3.72643 16.9104L3.78039 17.0206L3.82664 17.1308L3.8729 17.2211L3.91915 17.3031L3.97311 17.421L4.02163 17.5108L4.0706 17.6033L4.12456 17.6958L4.15767 17.7548L4.19122 17.811L4.23974 17.8908L4.28373 17.9652L4.32454 18.0296L4.37351 18.0962L4.41432 18.1679L4.47871 18.2654L4.53494 18.3474L4.59661 18.43L4.64014 18.4966L4.68911 18.5606L4.75078 18.6404L4.80202 18.707L4.87367 18.7941L4.96391 18.902L5.03827 18.9995L5.12533 19.0947L5.18972 19.1741L5.25865 19.2435L5.34118 19.3305L5.41554 19.413L5.48991 19.4874L5.54614 19.5414L5.61552 19.6053L5.68762 19.6774L5.74929 19.7336L5.81594 19.7953L5.8699 19.8466L5.94155 19.9082L6.00821 19.9699L6.06761 20.0107L6.12112 20.0624L6.1778 20.1059L6.22405 20.139L6.27529 20.1803L6.33696 20.2293L6.39591 20.2751L6.4603 20.3213L6.52923 20.3726L6.59089 20.4188L6.63443 20.4474L6.6707 20.4755L6.71151 20.5036L6.7555 20.5344L6.79359 20.5603L6.82714 20.578H4.42475L3.00272 22H17.2942L18.7112 20.578L11.2624 20.5757L11.1009 20.573L10.9055 20.5526L10.6235 20.5295L10.3641 20.4782L10.1641 20.4419L9.95597 20.3934L9.7764 20.3549L9.5787 20.3059L9.44765 20.2674L9.23997 20.193L9.06267 20.1291L8.91121 20.0751L8.77019 20.0161L8.62372 19.9418L8.49041 19.8774L8.31855 19.798L8.14896 19.7055L7.99751 19.6157L7.85149 19.5282L7.74085 19.4566L7.59711 19.3718L7.46606 19.2743L7.35315 19.2022L7.24296 19.1201L7.11735 19.0149L6.98903 18.9124L6.85798 18.7968L6.73237 18.6889L6.5986 18.5583L6.47572 18.4377L6.39092 18.3551L6.29071 18.2345L6.21135 18.1502L6.13155 18.0654L6.03133 17.942L5.92114 17.806C5.92114 17.806 5.82365 17.6753 5.82365 17.665C5.82365 17.6547 5.72843 17.5444 5.72843 17.5444L5.62096 17.3825L5.53344 17.2542L5.44638 17.1181L5.3643 16.9771L5.29493 16.8588L5.23598 16.7409L5.14846 16.579L5.0818 16.4252L5.01741 16.2761L4.94577 16.1223L4.89679 16.0067L4.85598 15.9015L4.81245 15.7682L4.75305 15.5832L4.69183 15.3882L4.63016 15.1701L4.59162 14.9828L4.55036 14.7774L4.51181 14.6028L4.48642 14.3947L4.46556 14.1997L4.44515 13.9789L4.43518 13.8505L4.42475 13.7018V13.5658L4.42747 13.4374L4.43518 13.3041L4.44017 13.091L4.45014 12.9318L4.45785 12.765L4.471 12.6493L4.49141 12.4902L4.51453 12.3442L4.53267 12.195L4.55806 12.0694L4.59162 11.9129L4.61701 11.7846L4.64014 11.6871L4.6737 11.5588L4.70952 11.4481L4.75078 11.2944L4.79159 11.1838L4.84555 11.0301L4.89679 10.8863L4.94849 10.7603L5.00472 10.6011L5.07681 10.4474L5.12806 10.3549L5.187 10.2293L5.25366 10.0955L5.30762 9.99528L5.38199 9.86469L5.46678 9.73364L5.52347 9.63116L5.59012 9.53367L5.68762 9.39219L5.76969 9.27429L5.84406 9.16411L5.92114 9.06117L5.9878 8.96867L6.04947 8.89929L6.12384 8.81721L6.18279 8.74285L6.23947 8.68118L6.30885 8.61225L6.3678 8.54015L6.45486 8.4608L6.53195 8.38099L6.68612 8.23226L6.74008 8.17558L6.81173 8.11164L6.88383 8.04725L6.94776 7.9883L7.02485 7.92164L7.11463 7.85227L7.19943 7.78833L7.28422 7.72122L7.37129 7.66771L7.47649 7.5879L7.5767 7.51626L7.68462 7.44688L7.76126 7.3902L7.86419 7.33125L7.9567 7.27457L8.02562 7.22877L8.11314 7.19022L8.17979 7.14896L8.26958 7.10271L8.36979 7.05147L8.47 7.00522L8.52895 6.96939L8.62372 6.93357L8.7058 6.89729L8.80102 6.85376L8.87811 6.82066L8.95475 6.78982L9.02956 6.76398L9.07038 6.74584V13.4374L10.5001 12.0132L10.5028 6.37628L10.5205 6.36857L10.5822 6.35859L10.6543 6.35088L10.7518 6.33546L10.8466 6.32776L10.9069 6.32549L10.9082 6.3264L10.9327 6.32912L11.052 6.31597L11.1803 6.30826L11.3354 6.30327L11.8142 6.30055L11.9888 6.30962L12.1375 6.32005L12.2495 6.33002L12.3561 6.34181L12.4713 6.35587L12.5574 6.36857L12.6345 6.379L12.6368 13.4402L14.0706 12.0154V6.75128L14.0924 6.75763L14.1409 6.77804L14.2089 6.80524L14.3 6.83834L14.3631 6.86918L14.4556 6.90908L14.5581 6.95534L14.6533 7.00159L14.7467 7.04875L14.8496 7.09908L14.9635 7.15939L15.0446 7.20156L15.1163 7.2401L15.1766 7.28137L15.2473 7.32218L15.3049 7.35301L15.3793 7.40289L15.4437 7.44552L15.5221 7.49313L15.5901 7.53893L15.6581 7.5879L15.7271 7.63778L15.7951 7.68539L15.8749 7.7457L15.9479 7.80239L16.0046 7.84728L16.0649 7.8958L16.1302 7.94704L16.2009 8.00508L16.2857 8.08443L16.3587 8.14746L16.4281 8.21412L16.5038 8.28078L16.5782 8.35787L16.6344 8.40412L16.687 8.4608L16.7718 8.55058L16.8453 8.62858L16.8952 8.68662L16.9478 8.74557L17.0262 8.83399L17.1083 8.9342L17.1777 9.01764L17.2171 9.07931L17.2674 9.15232L17.33 9.23212L17.3804 9.30014L17.4289 9.36816L17.4765 9.43708L17.5332 9.52052L17.5817 9.59897L17.6266 9.66562L17.6665 9.72457L17.7073 9.78896L17.7472 9.8529L17.7844 9.925L17.8179 9.9903L17.8601 10.0687L17.8973 10.1291L17.9259 10.1866L17.959 10.2574L17.9884 10.3086L18.017 10.3676L18.0619 10.4628L18.1068 10.5666L18.1322 10.6206L18.1567 10.6782L18.1812 10.7349L18.2029 10.7925L18.2288 10.8646L18.2505 10.9221L18.2814 10.9861L18.3018 11.0387L18.3186 11.0913L18.3417 11.162L18.3571 11.2124L18.3789 11.2813L18.3993 11.3561L18.4224 11.4314L18.4491 11.5098L18.475 11.6128L18.4981 11.6971L18.529 11.8359L18.5457 11.9075L18.5634 11.9873L18.5838 12.0952L18.5893 12.1156L18.6033 12.2004L18.6224 12.3006L18.6355 12.4095L18.6496 12.5174L18.6663 12.6548L18.6804 12.7804L18.6904 12.9291L18.6995 13.0615L18.7099 13.2348L18.7162 13.4297L20.0344 12.1116L20.0367 12.0875L20.029 12.0308L20.0176 11.9606L20.0049 11.8871L19.9945 11.8295L19.9791 11.7411L19.9596 11.664L19.9469 11.5919L19.9161 11.469L19.9006 11.4033L19.8802 11.3239L19.8558 11.2341L19.8354 11.1593L19.8149 11.0827L19.7954 11.021L19.775 10.9489L19.7492 10.8682L19.7224 10.7834L19.6866 10.6768L19.6581 10.5925L19.6313 10.51L19.5991 10.4306L19.5723 10.3626L19.5388 10.2637L19.5057 10.188L19.4758 10.1213L19.4413 10.0393L19.4077 9.96354L19.3669 9.86696L19.3334 9.79123L19.2962 9.72231L19.2554 9.63615L19.2218 9.57085L19.1797 9.48334L19.1434 9.41804L19.1062 9.34866L19.064 9.27429L19.0151 9.19222L18.9702 9.10878L18.9307 9.04303L18.8894 8.97139L18.8495 8.90972L18.8087 8.83671L18.7716 8.77867L18.7253 8.71337L18.6931 8.66213L18.6595 8.6186L18.6097 8.54151L18.5584 8.46941L18.5135 8.40684L18.4723 8.3488L18.4238 8.2835L18.3734 8.2182L18.3222 8.15245L18.2927 8.10892L18.2465 8.05632L18.217 8.0205L18.1671 7.95883L18.1208 7.90351L18.0696 7.8432L17.9912 7.75069L17.9259 7.67633L17.8656 7.61602L17.8075 7.55208L17.7436 7.48769L17.6497 7.39156L17.569 7.31583L17.5023 7.25053L17.4212 7.17073L17.3482 7.10044L17.2838 7.04648L17.1994 6.96667L17.1287 6.90908L17.0697 6.85512L16.9913 6.79481L16.9246 6.74085L16.8475 6.67782L16.7732 6.62295L16.6911 6.564L16.6181 6.51231L16.5347 6.44701L16.4549 6.39033L16.3909 6.34317L16.3238 6.29964L16.2535 6.2543L16.1737 6.20442L16.0894 6.15046L16.0123 6.09922L15.9456 6.05931L15.8658 6.01578L15.7951 5.97452L15.7157 5.93234L15.6323 5.88383L15.5606 5.84619L15.4772 5.80266L15.396 5.76275L15.3244 5.72693L15.2242 5.67977L15.1344 5.63715L15.0419 5.59362L14.9276 5.54374L14.8419 5.5061L14.7431 5.46801L14.6583 5.43445L14.5798 5.40634L14.495 5.3755L14.3812 5.33197L14.2964 5.30477L14.2003 5.27166L14.1218 5.24854L14.0729 5.23947L14.0706 2.00408L12.6345 3.43246L12.6354 4.9352L12.5202 4.91706L12.3674 4.89938L12.2455 4.88623L12.04 4.87081L11.8491 4.86446L11.7362 4.86084L11.4614 4.86356L11.2819 4.86582L11.0724 4.87353L10.9273 4.88124L10.8892 4.89031L10.7645 4.90074L10.6361 4.91072L10.5464 4.92885L10.5051 4.94654L10.5028 2Z"></path>
                    </svg>
                    <div className="price-0-2-182 noPrice-0-2-183">No Data</div>
                  </div>
                )}
              </>
            ) : (
              <button
                className="root-0-2-46 hide-0-2-184 normal-0-2-187 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantSecondary-0-2-55"
                onClick={() => {
                  history.push(
                    `/register?return_to=${
                      window.location.pathname.split("/")[1]
                    }`
                  );
                }}
              >
                <svg
                  className="fill-0-2-36 money-0-2-188"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5028 2L9.22455 3.28373L9.06539 3.42974L9.07038 5.23675L8.89852 5.29071L8.75749 5.33968L8.60831 5.38548L8.4954 5.43445L8.3648 5.48569L8.22106 5.53965L8.09273 5.60132L7.96168 5.65755L7.84379 5.71423L7.74357 5.76049L7.62023 5.82714L7.52274 5.88383L7.42253 5.94005L7.29964 6.00671L7.2017 6.06067L7.06067 6.14547L6.9065 6.24568L6.74008 6.35859L6.61175 6.44293L6.46529 6.55358L6.37278 6.62522L6.25489 6.71773L6.14696 6.80252L6.03133 6.89503L5.92613 6.97982L5.84406 7.0619L5.74384 7.15395L5.56156 7.32626L5.4822 7.40289L5.41781 7.47L5.33075 7.55435L5.22555 7.66771L5.12533 7.77518L5.0614 7.85997L4.98159 7.94704L4.90994 8.04226L4.83785 8.13477L4.76847 8.22682L4.69682 8.31433L4.63243 8.4014L4.56577 8.48393L4.51453 8.56056L4.45558 8.65578L4.39391 8.756L4.33995 8.82764L4.28871 8.90473L4.20891 9.03306L4.17308 9.10742L4.12955 9.18451L4.06788 9.28472L4.01936 9.36136L3.99079 9.43844L3.93185 9.53866L3.87562 9.64114L3.81395 9.7672L3.7677 9.8851L3.71646 10.0107L3.66476 10.1164L3.62395 10.2084L3.58541 10.3163L3.52646 10.4496L3.48021 10.5884L3.41355 10.7861L3.37727 10.9067L3.33646 11.0428L3.30064 11.1684L3.2698 11.2944L3.19 11.6431L3.16959 11.7511L3.13604 11.8771L3.11291 12.0308L3.09749 12.1338L3.07437 12.2952L3.05169 12.4725L3.02857 12.7545L3.01043 12.9523L3.00272 13.1037L3 13.286L3.00272 13.7299L3.00771 13.8764L3.02313 14.0868L3.03628 14.2587L3.04897 14.382L3.06167 14.513L3.07437 14.6182L3.09749 14.7493L3.11563 14.8749L3.13377 14.9878L3.15689 15.1007L3.1773 15.1982L3.20813 15.3342L3.23625 15.4526L3.2621 15.5732L3.30291 15.7038L3.33646 15.8376L3.36956 15.9505L3.4004 16.048L3.43395 16.1609L3.4725 16.2661L3.51104 16.379L3.55457 16.4892L3.59312 16.5867L3.62894 16.6715L3.67791 16.7921L3.72643 16.9104L3.78039 17.0206L3.82664 17.1308L3.8729 17.2211L3.91915 17.3031L3.97311 17.421L4.02163 17.5108L4.0706 17.6033L4.12456 17.6958L4.15767 17.7548L4.19122 17.811L4.23974 17.8908L4.28373 17.9652L4.32454 18.0296L4.37351 18.0962L4.41432 18.1679L4.47871 18.2654L4.53494 18.3474L4.59661 18.43L4.64014 18.4966L4.68911 18.5606L4.75078 18.6404L4.80202 18.707L4.87367 18.7941L4.96391 18.902L5.03827 18.9995L5.12533 19.0947L5.18972 19.1741L5.25865 19.2435L5.34118 19.3305L5.41554 19.413L5.48991 19.4874L5.54614 19.5414L5.61552 19.6053L5.68762 19.6774L5.74929 19.7336L5.81594 19.7953L5.8699 19.8466L5.94155 19.9082L6.00821 19.9699L6.06761 20.0107L6.12112 20.0624L6.1778 20.1059L6.22405 20.139L6.27529 20.1803L6.33696 20.2293L6.39591 20.2751L6.4603 20.3213L6.52923 20.3726L6.59089 20.4188L6.63443 20.4474L6.6707 20.4755L6.71151 20.5036L6.7555 20.5344L6.79359 20.5603L6.82714 20.578H4.42475L3.00272 22H17.2942L18.7112 20.578L11.2624 20.5757L11.1009 20.573L10.9055 20.5526L10.6235 20.5295L10.3641 20.4782L10.1641 20.4419L9.95597 20.3934L9.7764 20.3549L9.5787 20.3059L9.44765 20.2674L9.23997 20.193L9.06267 20.1291L8.91121 20.0751L8.77019 20.0161L8.62372 19.9418L8.49041 19.8774L8.31855 19.798L8.14896 19.7055L7.99751 19.6157L7.85149 19.5282L7.74085 19.4566L7.59711 19.3718L7.46606 19.2743L7.35315 19.2022L7.24296 19.1201L7.11735 19.0149L6.98903 18.9124L6.85798 18.7968L6.73237 18.6889L6.5986 18.5583L6.47572 18.4377L6.39092 18.3551L6.29071 18.2345L6.21135 18.1502L6.13155 18.0654L6.03133 17.942L5.92114 17.806C5.92114 17.806 5.82365 17.6753 5.82365 17.665C5.82365 17.6547 5.72843 17.5444 5.72843 17.5444L5.62096 17.3825L5.53344 17.2542L5.44638 17.1181L5.3643 16.9771L5.29493 16.8588L5.23598 16.7409L5.14846 16.579L5.0818 16.4252L5.01741 16.2761L4.94577 16.1223L4.89679 16.0067L4.85598 15.9015L4.81245 15.7682L4.75305 15.5832L4.69183 15.3882L4.63016 15.1701L4.59162 14.9828L4.55036 14.7774L4.51181 14.6028L4.48642 14.3947L4.46556 14.1997L4.44515 13.9789L4.43518 13.8505L4.42475 13.7018V13.5658L4.42747 13.4374L4.43518 13.3041L4.44017 13.091L4.45014 12.9318L4.45785 12.765L4.471 12.6493L4.49141 12.4902L4.51453 12.3442L4.53267 12.195L4.55806 12.0694L4.59162 11.9129L4.61701 11.7846L4.64014 11.6871L4.6737 11.5588L4.70952 11.4481L4.75078 11.2944L4.79159 11.1838L4.84555 11.0301L4.89679 10.8863L4.94849 10.7603L5.00472 10.6011L5.07681 10.4474L5.12806 10.3549L5.187 10.2293L5.25366 10.0955L5.30762 9.99528L5.38199 9.86469L5.46678 9.73364L5.52347 9.63116L5.59012 9.53367L5.68762 9.39219L5.76969 9.27429L5.84406 9.16411L5.92114 9.06117L5.9878 8.96867L6.04947 8.89929L6.12384 8.81721L6.18279 8.74285L6.23947 8.68118L6.30885 8.61225L6.3678 8.54015L6.45486 8.4608L6.53195 8.38099L6.68612 8.23226L6.74008 8.17558L6.81173 8.11164L6.88383 8.04725L6.94776 7.9883L7.02485 7.92164L7.11463 7.85227L7.19943 7.78833L7.28422 7.72122L7.37129 7.66771L7.47649 7.5879L7.5767 7.51626L7.68462 7.44688L7.76126 7.3902L7.86419 7.33125L7.9567 7.27457L8.02562 7.22877L8.11314 7.19022L8.17979 7.14896L8.26958 7.10271L8.36979 7.05147L8.47 7.00522L8.52895 6.96939L8.62372 6.93357L8.7058 6.89729L8.80102 6.85376L8.87811 6.82066L8.95475 6.78982L9.02956 6.76398L9.07038 6.74584V13.4374L10.5001 12.0132L10.5028 6.37628L10.5205 6.36857L10.5822 6.35859L10.6543 6.35088L10.7518 6.33546L10.8466 6.32776L10.9069 6.32549L10.9082 6.3264L10.9327 6.32912L11.052 6.31597L11.1803 6.30826L11.3354 6.30327L11.8142 6.30055L11.9888 6.30962L12.1375 6.32005L12.2495 6.33002L12.3561 6.34181L12.4713 6.35587L12.5574 6.36857L12.6345 6.379L12.6368 13.4402L14.0706 12.0154V6.75128L14.0924 6.75763L14.1409 6.77804L14.2089 6.80524L14.3 6.83834L14.3631 6.86918L14.4556 6.90908L14.5581 6.95534L14.6533 7.00159L14.7467 7.04875L14.8496 7.09908L14.9635 7.15939L15.0446 7.20156L15.1163 7.2401L15.1766 7.28137L15.2473 7.32218L15.3049 7.35301L15.3793 7.40289L15.4437 7.44552L15.5221 7.49313L15.5901 7.53893L15.6581 7.5879L15.7271 7.63778L15.7951 7.68539L15.8749 7.7457L15.9479 7.80239L16.0046 7.84728L16.0649 7.8958L16.1302 7.94704L16.2009 8.00508L16.2857 8.08443L16.3587 8.14746L16.4281 8.21412L16.5038 8.28078L16.5782 8.35787L16.6344 8.40412L16.687 8.4608L16.7718 8.55058L16.8453 8.62858L16.8952 8.68662L16.9478 8.74557L17.0262 8.83399L17.1083 8.9342L17.1777 9.01764L17.2171 9.07931L17.2674 9.15232L17.33 9.23212L17.3804 9.30014L17.4289 9.36816L17.4765 9.43708L17.5332 9.52052L17.5817 9.59897L17.6266 9.66562L17.6665 9.72457L17.7073 9.78896L17.7472 9.8529L17.7844 9.925L17.8179 9.9903L17.8601 10.0687L17.8973 10.1291L17.9259 10.1866L17.959 10.2574L17.9884 10.3086L18.017 10.3676L18.0619 10.4628L18.1068 10.5666L18.1322 10.6206L18.1567 10.6782L18.1812 10.7349L18.2029 10.7925L18.2288 10.8646L18.2505 10.9221L18.2814 10.9861L18.3018 11.0387L18.3186 11.0913L18.3417 11.162L18.3571 11.2124L18.3789 11.2813L18.3993 11.3561L18.4224 11.4314L18.4491 11.5098L18.475 11.6128L18.4981 11.6971L18.529 11.8359L18.5457 11.9075L18.5634 11.9873L18.5838 12.0952L18.5893 12.1156L18.6033 12.2004L18.6224 12.3006L18.6355 12.4095L18.6496 12.5174L18.6663 12.6548L18.6804 12.7804L18.6904 12.9291L18.6995 13.0615L18.7099 13.2348L18.7162 13.4297L20.0344 12.1116L20.0367 12.0875L20.029 12.0308L20.0176 11.9606L20.0049 11.8871L19.9945 11.8295L19.9791 11.7411L19.9596 11.664L19.9469 11.5919L19.9161 11.469L19.9006 11.4033L19.8802 11.3239L19.8558 11.2341L19.8354 11.1593L19.8149 11.0827L19.7954 11.021L19.775 10.9489L19.7492 10.8682L19.7224 10.7834L19.6866 10.6768L19.6581 10.5925L19.6313 10.51L19.5991 10.4306L19.5723 10.3626L19.5388 10.2637L19.5057 10.188L19.4758 10.1213L19.4413 10.0393L19.4077 9.96354L19.3669 9.86696L19.3334 9.79123L19.2962 9.72231L19.2554 9.63615L19.2218 9.57085L19.1797 9.48334L19.1434 9.41804L19.1062 9.34866L19.064 9.27429L19.0151 9.19222L18.9702 9.10878L18.9307 9.04303L18.8894 8.97139L18.8495 8.90972L18.8087 8.83671L18.7716 8.77867L18.7253 8.71337L18.6931 8.66213L18.6595 8.6186L18.6097 8.54151L18.5584 8.46941L18.5135 8.40684L18.4723 8.3488L18.4238 8.2835L18.3734 8.2182L18.3222 8.15245L18.2927 8.10892L18.2465 8.05632L18.217 8.0205L18.1671 7.95883L18.1208 7.90351L18.0696 7.8432L17.9912 7.75069L17.9259 7.67633L17.8656 7.61602L17.8075 7.55208L17.7436 7.48769L17.6497 7.39156L17.569 7.31583L17.5023 7.25053L17.4212 7.17073L17.3482 7.10044L17.2838 7.04648L17.1994 6.96667L17.1287 6.90908L17.0697 6.85512L16.9913 6.79481L16.9246 6.74085L16.8475 6.67782L16.7732 6.62295L16.6911 6.564L16.6181 6.51231L16.5347 6.44701L16.4549 6.39033L16.3909 6.34317L16.3238 6.29964L16.2535 6.2543L16.1737 6.20442L16.0894 6.15046L16.0123 6.09922L15.9456 6.05931L15.8658 6.01578L15.7951 5.97452L15.7157 5.93234L15.6323 5.88383L15.5606 5.84619L15.4772 5.80266L15.396 5.76275L15.3244 5.72693L15.2242 5.67977L15.1344 5.63715L15.0419 5.59362L14.9276 5.54374L14.8419 5.5061L14.7431 5.46801L14.6583 5.43445L14.5798 5.40634L14.495 5.3755L14.3812 5.33197L14.2964 5.30477L14.2003 5.27166L14.1218 5.24854L14.0729 5.23947L14.0706 2.00408L12.6345 3.43246L12.6354 4.9352L12.5202 4.91706L12.3674 4.89938L12.2455 4.88623L12.04 4.87081L11.8491 4.86446L11.7362 4.86084L11.4614 4.86356L11.2819 4.86582L11.0724 4.87353L10.9273 4.88124L10.8892 4.89031L10.7645 4.90074L10.6361 4.91072L10.5464 4.92885L10.5051 4.94654L10.5028 2Z"></path>
                </svg>
                Price
              </button>
            )}
          </div>
          <div className="primaryButton-0-2-179">
            <a
              className="root-0-2-46 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
              href="/e/commschool/im2gE-introduction-to-front-end-development"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesMap;
