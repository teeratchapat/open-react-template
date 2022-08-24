import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

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
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'แพลตฟอร์มนี้เหมาะสำหรับใคร',
    paragraph: 'สามารถให้ programmer ทำงานคู่กับ low-code ได้'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Low-Code
                  </div>
                <h3 className="mt-0 mb-12">
                สำหรับ Low-Code Developer
                  </h3>
                <p className="m-0">
                แพลตฟอร์มที่ช่วยให้การออกแบบและพัฒนาเว็บไซต์หรือซอฟต์แวร์ออกมาได้รวดเร็วที่สุด ด้วยการเขียนโค้ดน้อยที่สุด
                </p>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                High-Code
                  </div>
                <h3 className="mt-0 mb-12">
                สำหรับ Programmer
                  </h3>
                <p className="m-0">
                แพลตฟอร์มที่ช่วยให้การออกแบบและพัฒนาเว็บไซต์ ร่วมกับ low-code
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;