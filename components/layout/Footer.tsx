import FlexContainerCenterAlign from './FlexContainerCenterAlign';
import FlexContainerLeftAlign from './FlexContainerLeftAlign';
import FlexContainerRightAlign from './FlexContainerRightAlign';
import Link from 'next/link';
import React from 'react';
import holyGrail from '../../styles/HolyGrail.module.css';
import packageJson from '../../package.json';
import resume from '../../resume.json';
import styled from 'styled-components';

export const VersionContainer = styled.div`
  display: flex;
  height: 25px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const VersionLink = styled.a`
  color: #202020;
  font-size: 12px;
  font-family: Helvetica;
  font-weight: 10;
  text-decoration: none;
  :hover {
    color: white;
  }
`;

export const StyledFooter = styled.footer`
  height: var(--footer-height);
  color: white;
  background-color: black;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;
`;

const Footer = () => (
  <StyledFooter>
    <div className={holyGrail.flexContainerColumnPageWidthBottom}>
      <div className={holyGrail.leftColumn}>
        <FlexContainerLeftAlign>
          <VersionContainer>
            <Link href={resume.url} passHref>
              <VersionLink>v{packageJson.version}</VersionLink>
            </Link>
          </VersionContainer>
        </FlexContainerLeftAlign>
      </div>
      <div className={holyGrail.centerColumn}>
        <FlexContainerCenterAlign></FlexContainerCenterAlign>
      </div>
      <div className={holyGrail.rightColumn}>
        <FlexContainerRightAlign></FlexContainerRightAlign>
      </div>
    </div>
  </StyledFooter>
);
export default Footer;
