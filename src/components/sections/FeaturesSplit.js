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
    // title: 'การทำงานของเวิร์กโฟลว์',
    // paragraph: 'ระบบที่เป็นเหมือนตัวช่วยในกระบวนการจัดการเอกสารที่รวมถึงการอนุมัติและตรวจสอบต่าง ๆ ภายในบริษัท'
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

          <h2 className="mt-0 mb-12">Low code platform คือ?</h2>
            <div>
              เครื่องมือในการพัฒนา Application ใน Style Agile
              ที่เน้นความรวดเร็วเป็นหัวใจสำคัญ
              ซึ่งถือว่าเป็นแนวทางใหม่ในการพัฒนาระบบเมื่อเทียบกับการพัฒนาแบบเดิม
              ที่ต้องใช้เวลาหลักเดือน เมื่อใช้ Low code
              อาจจะทำได้ในเวลาเพียงไม่กี่วัน
              ก็สามารถพอเห็นภาพและทดสอบการใช้งานได้แล้ว
            </div>


            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                LOW-CODE
                  </div>
                <h3 className="mt-0 mb-12">
                สำหรับ Low-Code Developer
                  </h3>
                <p className="m-0">
                แพลตฟอร์มที่ช่วยให้การออกแบบและพัฒนาเว็บไซต์หรือซอฟต์แวร์ออกมาได้รวดเร็วที่สุด ด้วยการเขียนโค้ดน้อยที่สุด
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/pg1.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Developer
                  </div>
                <h3 className="mt-0 mb-12">
                สำหรับ Programmer
                  </h3>
                <p className="m-0">
                แพลตฟอร์มที่ช่วยให้การออกแบบและพัฒนาเว็บไซต์ ร่วมกับ low-code
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/pg5.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  เครื่องมือการใช้งานเข้าใจง่าย
                  </div>
                <h3 className="mt-0 mb-12">
                  การผสานการทำงานที่ไม่ต้องปวดหัว และเครื่องมือใช้งานง่าย
                  </h3>
                <p className="m-0">
                  แพลตฟอร์มที่ออกแบบให้สามารถเข้าใจและทำงานได้เหมาะกับผู้ใช้งาน
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/pg4.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
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