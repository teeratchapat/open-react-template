import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    // title: "การทำงานของเวิร์กโฟลว์",
    // paragraph:
    //   "ระบบที่เป็นเหมือนตัวช่วยในกระบวนการจัดการเอกสารที่รวมถึงการอนุมัติและตรวจสอบต่าง ๆ ภายในบริษัท",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <h2 className="mt-0 mb-12">Low code platform คือ?</h2>
            <div>
              เครื่องมือในการพัฒนา Application ใน Style Agile
              ที่เน้นความรวดเร็วเป็นหัวใจสำคัญ
              ซึ่งถือว่าเป็นแนวทางใหม่ในการพัฒนาระบบเมื่อเทียบกับการพัฒนาแบบเดิม
              ที่ต้องใช้เวลาหลักเดือน เมื่อใช้ Low code
              อาจจะทำได้ในเวลาเพียงไม่กี่วัน
              ก็สามารถพอเห็นภาพและทดสอบการใช้งานได้แล้ว
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
