import Head from 'next/head';
import holyGrail from '../styles/HolyGrail.module.css';
import Link from 'next/link';
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
            <div className={holyGrail.flexContainerLeftAlign}>
              <DropdownMenu label="File">
                <FileMenu />
              </DropdownMenu>
              <DropdownMenu label="View">
                <ViewMenu />
              </DropdownMenu>
            </div>
          </div>
          <div className={holyGrail.centerColumn}>
            <div className={holyGrail.flexContainerCenterAlign} />
          </div>
          <div className={holyGrail.rightColumn}>
            <div className={holyGrail.flexContainerRightAlign}>
              <div className={holyGrail.menuItem}>
                <Link href="/">SVG</Link>
              </div>
              <div className={holyGrail.menuItem}>
                <Link href="/pdf">PDF</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
