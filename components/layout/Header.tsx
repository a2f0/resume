import DropdownMenu from '../menu/DropdownMenu';
import FileMenu from '../menu/FileMenu';
import FlexContainerCenterAlign from './FlexContainerCenterAlign';
import FlexContainerLeftAlign from './FlexContainerLeftAlign';
import FlexContainerRightAlign from './FlexContainerRightAlign';
import Head from 'next/head';
import MenuParent from '../menu/MenuParent';
import ViewMenu from '../menu/ViewMenu';
import holyGrail from '../../styles/HolyGrail.module.css';
import {selectScale} from '../../library/resumeConfigSlice';
import styled from 'styled-components';
import {useAppSelector} from '../../library/hooks';

interface IProps {
  scale: number;
}

const StyledHeader = styled.header<IProps>`
  height: calc(var(--header-height) * ${props => props.scale});
  background-color: #404040;
  color: white;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  border-bottom: var(--header-bottom-border) solid #a9a9a9;
`;

const Header = () => {
  const scale = useAppSelector(selectScale);
  return (
    <>
      <Head>
        <title>&lrm;</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledHeader scale={scale}>
        <div className={holyGrail.flexContainerColumnPageWidth}>
          <div className={holyGrail.leftColumn}>
            <FlexContainerLeftAlign>
              <MenuParent>
                <DropdownMenu label="File">
                  <FileMenu />
                </DropdownMenu>
                <DropdownMenu label="View">
                  <ViewMenu />
                </DropdownMenu>
              </MenuParent>
            </FlexContainerLeftAlign>
          </div>
          <div className={holyGrail.centerColumn}>
            <FlexContainerCenterAlign />
            <FlexContainerCenterAlign />
          </div>
          <div className={holyGrail.rightColumn}>
            <FlexContainerRightAlign></FlexContainerRightAlign>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
