import Link from 'next/link';
import React from 'react';
import holyGrail from '../styles/HolyGrail.module.css';
import packageJson from '../package.json';
import resume from '../resume.json';
import styled from 'styled-components';

export const VersionContainer = styled.div`
  display: flex;
  height: 25px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const VersionLink = styled.a`
  color: white;
  font-size: 12px;
  font-family: Helvetica;
  font-weight: 10;
  text-decoration: none;
`;

const Footer = () => (
  <footer className={holyGrail.footer}>
    <div className={holyGrail.flexContainerColumnPageWidthBottom}>
      <div className={holyGrail.leftColumn}>
        <div className={holyGrail.flexContainerLeftAlignBottom}>
          <VersionContainer>
            <Link href={resume.url} passHref>
              <VersionLink>v{packageJson.version}</VersionLink>
            </Link>
          </VersionContainer>
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
