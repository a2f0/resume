import {useDropdownMenu} from './DropdownMenuContext';
import {useMenuParent} from './MenuParentContext';
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import Link from 'next/link';
import MenuDivider from './MenuDivider';
import MenuListItem from './MenuListItem';
import CheckMark from './CheckMark';
import MenuLink from './MenuLink';
import {
  selectForegroundColor,
  setForegroundColor,
  setBackgroundColor,
} from '../../library/resumeConfigSlice';
import {useAppSelector} from '../../library/hooks';
import * as Constants from '../../constants';
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

  return (
    <ul>
      <MenuListItem>
        <div onClick={setBlackBackground}>
          <CheckMark isActive={foregroundColor === Constants.LIGHT} />
          <MenuLink>Dark Background</MenuLink>
        </div>
      </MenuListItem>
      <MenuListItem>
        <div onClick={setWhiteBackground}>
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
    </ul>
  );
};

export default ViewMenu;
