import DropdownMenu from './Menu/DropdownMenu';
import FileMenu from './Menu/FileMenu';
import Head from 'next/head';
import MenuParent from './Menu/MenuParent';
import ViewMenu from './Menu/ViewMenu';
import holyGrail from '../styles/HolyGrail.module.css';
import {selectScale} from '../library/resumeConfigSlice';
import styled from 'styled-components';
import {useAppSelector} from '../library/hooks';

interface IProps {
  scale: number;
}

const StyledHeader = styled.header<IProps>`
  height: calc(var(--header-height) * ${props => props.scale});
  color: white;
  background-color: black;
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
            <div className={holyGrail.flexContainerLeftAlignTop}>
              <MenuParent>
                <DropdownMenu label="File">
                  <FileMenu />
                </DropdownMenu>
                <DropdownMenu label="View">
                  <ViewMenu />
                </DropdownMenu>
              </MenuParent>
            </div>
          </div>
          <div className={holyGrail.centerColumn}>
            <div className={holyGrail.flexContainerCenterAlignTop} />
          </div>
          <div className={holyGrail.rightColumn}>
            <div className={holyGrail.flexContainerRightAlignTop} />
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
