import holyGrail from '../styles/HolyGrail.module.css';
import packageJson from '../package.json';
import React, {CSSProperties} from 'react';

const versionContainer: CSSProperties = {
  display: 'flex',
  height: '25px',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  fontSize: '12px',
  fontFamily: 'monospace',
  fontWeight: 50,
};

const Footer = () => (
  <footer className={holyGrail.footer}>
    <div className={holyGrail.flexContainerColumnPageWidthBottom}>
      <div className={holyGrail.leftColumn}>
        <div className={holyGrail.flexContainerLeftAlignBottom}>
          <div style={versionContainer}>
            <span>v{[packageJson.version]}</span>
          </div>
        </div>
      </div>
      <div className={holyGrail.centerColumn}>
        <div className={holyGrail.flexContainerCenterAlignBottom}></div>
      </div>
      <div className={holyGrail.rightColumn}>
        <div className={holyGrail.flexContainerRightAlignBottom}></div>
      </div>
    </div>
  </footer>
);
export default Footer;
