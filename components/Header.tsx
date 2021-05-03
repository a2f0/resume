import Head from 'next/head';
import holyGrail from '../styles/HolyGrail.module.css';
import DropdownMenu from './Menu/DropdownMenu';
import ViewMenu from './Menu/ViewMenu';
import FileMenu from './Menu/FileMenu';

const Header = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={holyGrail.header}>
        <div className={holyGrail.flexContainerColumnPageWidth}>
          <div className={holyGrail.leftColumn}>
            <div className={holyGrail.flexContainerLeftAlignTop}>
              <DropdownMenu label="File">
                <FileMenu />
              </DropdownMenu>
              <DropdownMenu label="View">
                <ViewMenu />
              </DropdownMenu>
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
