import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {
  CBadge,
  CNavGroup,
  CNavGroupItems,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from '@coreui/react-pro';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../reducers';
import { toggleSidebar } from './reducer';

const TheSidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const containerState = useSelector((state: RootState) => state.container);
  const { sidebarShow } = containerState;
  const [unfoldable, setUnfoldable] = useState<boolean>(false);
  const highlightNavItem = (path: string): 'bg-dark text-white' | '' => {
    if (path === '/') return '';
    return location.includes(path) ? 'bg-dark text-white' : '';
  };

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
        <CNavItem href="#/table" className={`${highlightNavItem('/table')}`}>
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Table
        </CNavItem>
        <CNavItem href="#/dashboard" className={`${highlightNavItem('/dashboard')}`}>
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Dashboard
          <CBadge color="info ms-auto">NEW</CBadge>
        </CNavItem>
        <CNavTitle>Theme</CNavTitle>
        <CNavItem href="#/theme/colors" className={`${highlightNavItem('/theme/colors')}`}>
          <CIcon icon={cilDrop} customClassName="nav-icon" />
          Colors
        </CNavItem>
        <CNavItem href="#/theme/typography" className={`${highlightNavItem('/theme/typography')}`}>
          <CIcon icon={cilPencil} customClassName="nav-icon" />
          Typography
        </CNavItem>
        <CNavTitle>Components</CNavTitle>
        <CNavGroup
          toggler={
            <>
              <CIcon icon={cilPuzzle} customClassName="nav-icon" /> Base
            </>
          }
        >
          <CNavGroupItems>
            <CNavItem href="#/base/accordion" className={`${highlightNavItem('/base/accordion')}`}>
              Accordion
            </CNavItem>
            <CNavItem href="#/base/breadcrumbs" className={`${highlightNavItem('/base/breadcrumbs')}`}>
              Breadcrumb
            </CNavItem>
            <CNavItem href="#/base/cards" className={`${highlightNavItem('/base/cards')}`}>
              Cards
            </CNavItem>
            <CNavItem href="#/base/carousels" className={`${highlightNavItem('/base/carousels')}`}>
              Carousel
            </CNavItem>
            <CNavItem href="#/base/collapses" className={`${highlightNavItem('/base/collapses')}`}>
              Collapse
            </CNavItem>
            <CNavItem href="#/base/jumbotrons" className={`${highlightNavItem('/base/jumbotrons')}`}>
              Jumbotron
            </CNavItem>
            <CNavItem href="#/base/list-groups" className={`${highlightNavItem('/base/list-groups')}`}>
              List group
            </CNavItem>
            <CNavItem href="#/base/navs" className={`${highlightNavItem('/base/navs')}`}>{`Navs & Tabs`}</CNavItem>
            <CNavItem href="#/base/paginations" className={`${highlightNavItem('/base/paginations')}`}>
              Pagination
            </CNavItem>
            <CNavItem href="#/base/placeholders" className={`${highlightNavItem('/base/placeholders')}`}>
              Placeholders
            </CNavItem>
            <CNavItem href="#/base/popovers" className={`${highlightNavItem('/base/popovers')}`}>
              Popovers
            </CNavItem>
            <CNavItem href="#/base/progress" className={`${highlightNavItem('/base/progress')}`}>
              Progress
            </CNavItem>
            <CNavItem href="#/base/spinners" className={`${highlightNavItem('/base/spinners')}`}>
              Spinners
            </CNavItem>
            <CNavItem href="#/base/tables" className={`${highlightNavItem('/base/tables')}`}>
              Tables
            </CNavItem>
            <CNavItem href="#/base/tooltips" className={`${highlightNavItem('/base/tooltips')}`}>
              Tooltips
            </CNavItem>
          </CNavGroupItems>
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <CIcon icon={cilCursor} customClassName="nav-icon" /> Buttons
            </>
          }
        >
          <CNavGroupItems>
            <CNavItem href="#/buttons/buttons" className={`${highlightNavItem('/buttons/buttons')}`}>
              Buttons
            </CNavItem>
            <CNavItem href="#/buttons/button-groups" className={`${highlightNavItem('/buttons/button-groups')}`}>
              Buttons groups
            </CNavItem>
            <CNavItem href="#/buttons/dropdowns" className={`${highlightNavItem('/buttons/dropdowns')}`}>
              Dropdowns
            </CNavItem>
          </CNavGroupItems>
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <CIcon icon={cilNotes} customClassName="nav-icon" /> Forms
            </>
          }
        >
          <CNavGroupItems>
            <CNavItem href="#/forms/form-control" className={`${highlightNavItem('/forms/form-control')}`}>Form Control</CNavItem>
            <CNavItem href="#/forms/select" className={`${highlightNavItem('/forms/select')}`}>Select</CNavItem>
            <CNavItem href="#/forms/checks-radios" className={`${highlightNavItem('/forms/checks-radios')}`}>{'Checks & Radios'}</CNavItem>
            <CNavItem href="#/forms/range" className={`${highlightNavItem('/forms/range')}`}>Range</CNavItem>
            <CNavItem href="#/forms/input-group" className={`${highlightNavItem('/forms/input-group')}`}>Input Group</CNavItem>
            <CNavItem href="#/forms/floating-labels" className={`${highlightNavItem('/forms/floating-labels')}`}>Floating Labels</CNavItem>
            <CNavItem href="#/forms/layout" className={`${highlightNavItem('/forms/layout')}`}>Layout</CNavItem>
            <CNavItem href="#/forms/validation" className={`${highlightNavItem('/forms/validation')}`}>Validation</CNavItem>
          </CNavGroupItems>
        </CNavGroup>
        <CNavItem href="#/charts" className={`${highlightNavItem('/charts')}`}>
          <CIcon icon={cilChartPie} customClassName="nav-icon" />
          Charts
        </CNavItem>
        <CNavGroup
          toggler={
            <>
              <CIcon icon={cilStar} customClassName="nav-icon" /> Icons
            </>
          }
        >
          <CNavGroupItems>
            <CNavItem href="#/icons/coreui-icons" className={`${highlightNavItem('/icons/coreui-icons')}`}>
              CoreUI Free <CBadge color="success ms-auto">NEW</CBadge>
            </CNavItem>
            <CNavItem href="#/icons/flags" className={`${highlightNavItem('/icons/flags')}`}>CoreUI Flags</CNavItem>
            <CNavItem href="#/icons/brands" className={`${highlightNavItem('/icons/brands')}`}>CoreUI Brands</CNavItem>
          </CNavGroupItems>
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <CIcon icon={cilBell} customClassName="nav-icon" /> Notifications
            </>
          }
        >
          <CNavGroupItems>
            <CNavItem href="#/notifications/alerts" className={`${highlightNavItem('/notifications/alerts')}`}>Alerts</CNavItem>
            <CNavItem href="#/notifications/badges" className={`${highlightNavItem('/notifications/badges')}`}>Badges</CNavItem>
            <CNavItem href="#/notifications/modals" className={`${highlightNavItem('/notifications/modals')}`}>Modal</CNavItem>
            <CNavItem href="#/notifications/toasts" className={`${highlightNavItem('/notifications/toasts')}`}>Toasts</CNavItem>
          </CNavGroupItems>
        </CNavGroup>
        <CNavItem href="#/widgets" className={`${highlightNavItem('/widgets')}`}>
          <CIcon customClassName="nav-icon" icon={cilCalculator} />
          Widgets
          <CBadge color="info ms-auto">NEW</CBadge>
        </CNavItem>
        <CNavTitle>Extras</CNavTitle>
        <CNavGroup
          toggler={
            <>
              <CIcon icon={cilStar} customClassName="nav-icon" /> Pages
            </>
          }
        >
          <CNavGroupItems>
            <CNavItem href="#/login">Login</CNavItem>
            <CNavItem href="#/register">Register</CNavItem>
            <CNavItem href="#/404">Error 404</CNavItem>
            <CNavItem href="#/500">Error 500</CNavItem>
          </CNavGroupItems>
        </CNavGroup>
      </CSidebarNav>
      <CSidebarToggler className="d-none d-lg-flex" onClick={() => setUnfoldable(!unfoldable)} />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
