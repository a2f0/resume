import FlexColumn from './FlexColumn';
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
  background-color: #202020;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;
`;

const Footer = () => (
  <StyledFooter>
    <div className={holyGrail.flexContainerColumnPageWidthBottom}>
      <FlexColumn>
        <FlexContainerLeftAlign>
          <VersionContainer>
            <Link href={resume.url} passHref>
              <VersionLink>v{packageJson.version}</VersionLink>
            </Link>
          </VersionContainer>
        </FlexContainerLeftAlign>
      </FlexColumn>
      <FlexColumn>
        <FlexContainerCenterAlign></FlexContainerCenterAlign>
      </FlexColumn>
      <FlexColumn>
        <FlexContainerRightAlign></FlexContainerRightAlign>
      </FlexColumn>
    </div>
  </StyledFooter>
);
export default Footer;
