import * as Constants from '../../constants';
import {
  selectForegroundColor,
  selectScale,
  setBackgroundColor,
  setForegroundColor,
  setScale,
} from '../../library/resumeConfigSlice';
import CheckMark from './CheckMark';
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
  const router = useRouter();
  const foregroundColor = useAppSelector(selectForegroundColor);
  const scale = useAppSelector(selectScale);

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

  const setScaleFactor = (scale: number) => {
    dispatch(setScale(scale));
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
      <MenuListItem
        id="darkBackgroundMenuOption"
        onClick={setBlackBackground}
        scale={scale}
      >
        <CheckMark isActive={foregroundColor === Constants.LIGHT} />
        <MenuLink>Dark Background</MenuLink>
      </MenuListItem>
      <MenuListItem
        id="lightBackgroundMenuOption"
        onClick={setWhiteBackground}
        scale={scale}
      >
        <CheckMark isActive={foregroundColor === Constants.DARK} />
        <MenuLink>Light Background</MenuLink>
      </MenuListItem>
      <MenuDivider />
      <MenuListItem onClick={() => setScaleFactor(1.3)} scale={scale}>
        <CheckMark isActive={scale === 1.3} />
        <MenuLink onClick={dismissMenu}>130%</MenuLink>
      </MenuListItem>
      <MenuListItem onClick={() => setScaleFactor(1.15)} scale={scale}>
        <CheckMark isActive={scale === 1.15} />
        <MenuLink onClick={dismissMenu}>115%</MenuLink>
      </MenuListItem>
      <MenuListItem onClick={() => setScaleFactor(1)} scale={scale}>
        <CheckMark isActive={scale === 1} />
        <MenuLink onClick={dismissMenu}>Real Size</MenuLink>
      </MenuListItem>
      <MenuDivider />
      <MenuListItem
        onClick={() => {
          dismissMenu;
          router.push('/');
        }}
        scale={scale}
      >
        <CheckMark isActive={asPath === '/'} />
        <MenuLink>SVG</MenuLink>
      </MenuListItem>
      <MenuListItem
        onClick={() => {
          dismissMenu;
          router.push('/pdf');
        }}
        scale={scale}
      >
        <CheckMark isActive={asPath === '/pdf'} />
        <MenuLink>PDF Preview</MenuLink>
      </MenuListItem>
      <MenuDivider />
      <MenuListItem onClick={sourceCode} scale={scale}>
        <CheckMark isActive={false} />
        <MenuLink>Source Code</MenuLink>
      </MenuListItem>
    </ul>
  );
};

export default ViewMenu;
