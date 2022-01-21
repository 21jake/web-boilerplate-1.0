import { cilSpeedometer } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {
  CBadge, CNavItem, CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler
} from '@coreui/react-pro';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { toggleSidebar } from './reducer';

const TheSidebar = () => {
  const dispatch = useDispatch();
  const containerState = useSelector((state: RootState) => state.container);
  const { sidebarShow } = containerState;
  const [unfoldable, setUnfoldable] = useState<boolean>(false);

  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
      unfoldable={unfoldable}
      onVisibleChange={(val: boolean) => dispatch(toggleSidebar(val))}
    >
      <CSidebarBrand>Sidebar Brand</CSidebarBrand>
      <CSidebarNav>
        <CNavTitle>Nav Title</CNavTitle>
          <CNavItem href='#/table'>
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Table
          </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          With badge
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>
      </CSidebarNav>
      <CSidebarToggler className="d-none d-lg-flex" onClick={() => setUnfoldable(!unfoldable)} />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
