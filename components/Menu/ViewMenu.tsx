import * as Constants from '../../constants';
import {
  selectForegroundColor,
  setBackgroundColor,
  setForegroundColor,
} from '../../library/resumeConfigSlice';
import CheckMark from './CheckMark';
import Link from 'next/link';
import MenuDivider from './MenuDivider';
import MenuLink from './MenuLink';
import MenuListItem from './MenuListItem';
import resume from '../../resume.json';
import {useAppSelector} from '../../library/hooks';
import {useDispatch} from 'react-redux';
import {useDropdownMenu} from './DropdownMenuContext';
import {useMenuParent} from './MenuParentContext';
import {useRouter} from 'next/router';

const ViewMenu = () => {
  const context = useDropdownMenu();
  const parentContext = useMenuParent();
  const dispatch = useDispatch();
  const {asPath} = useRouter();
  const foregroundColor = useAppSelector(selectForegroundColor);

  const setBlackBackground = () => {
    dispatch(setForegroundColor(Constants.LIGHT));
    dispatch(setBackgroundColor(Constants.DARK));
    context.setIsActive(false);
    parentContext.setActiveDropdown('');
    parentContext.setIsActive(false);
  };

  const setWhiteBackground = () => {
    dispatch(setForegroundColor(Constants.DARK));
    dispatch(setBackgroundColor(Constants.LIGHT));
    context.setIsActive(false);
    parentContext.setActiveDropdown('');
    parentContext.setIsActive(false);
  };

  const dismissMenu = () => {
    context.setIsActive(false);
    parentContext.setActiveDropdown('');
    parentContext.setIsActive(false);
  };

  const sourceCode = () => {
    context.setIsActive(false);
    parentContext.setActiveDropdown('');
    parentContext.setIsActive(false);
    window.open(resume.url);
  };

  return (
    <ul>
      <MenuListItem>
        <div id="darkBackgroundMenuOption" onClick={setBlackBackground}>
          <CheckMark isActive={foregroundColor === Constants.LIGHT} />
          <MenuLink>Dark Background</MenuLink>
        </div>
      </MenuListItem>
      <MenuListItem>
        <div id="lightBackgroundMenuOption" onClick={setWhiteBackground}>
          <CheckMark isActive={foregroundColor === Constants.DARK} />
          <MenuLink>Light Background</MenuLink>
        </div>
      </MenuListItem>
      <MenuDivider />
      <MenuListItem>
        <Link href="/">
          <div onClick={dismissMenu}>
            <CheckMark isActive={asPath === '/'} />
            <MenuLink onClick={dismissMenu}>SVG</MenuLink>
          </div>
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Link href="/pdf">
          <div onClick={dismissMenu}>
            <CheckMark isActive={asPath === '/pdf'} />
            <MenuLink>PDF Preview</MenuLink>
          </div>
        </Link>
      </MenuListItem>
      <MenuDivider />
      <MenuListItem>
        <div onClick={sourceCode}>
          <CheckMark isActive={false} />
          <MenuLink>Source Code</MenuLink>
        </div>
      </MenuListItem>
    </ul>
  );
};

export default ViewMenu;
