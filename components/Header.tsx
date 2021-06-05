import DropdownMenu from './Menu/DropdownMenu';
import FileMenu from './Menu/FileMenu';
import Head from 'next/head';
import MenuParent from './Menu/MenuParent';
import ViewMenu from './Menu/ViewMenu';

import holyGrail from '../styles/HolyGrail.module.css';

const Header = () => {
  return (
    <>
      <Head>
        <title>&lrm;</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={holyGrail.header}>
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
      </header>
    </>
  );
};

export default Header;
