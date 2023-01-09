import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import './sidebar.scss';

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-top">
      <span className="logo">My Dashboard</span>
    </div>
    <div className="sidebar-center">
      <ul>
        <p className="title">main</p>
        <li>
          <DashboardIcon className="icon" />
          <span>Dashboard</span>
        </li>
        <p className="title">lists</p>
        <li>
          <Person2OutlinedIcon className="icon" />
          <span>Users</span>
        </li>
        <li>
          <StoreOutlinedIcon className="icon" />
          <span>Products</span>
        </li>
        <li>
          <CreditScoreOutlinedIcon className="icon" />
          <span>Orders</span>
        </li>
        <li>
          <LocalShippingOutlinedIcon className="icon" />
          <span>Delivery</span>
        </li>
        <p className="title">useful</p>
        <li>
          <InsertChartOutlinedIcon className="icon" />
          <span>Stats</span>
        </li>
        <li>
          <NotificationsActiveOutlinedIcon className="icon" />
          <span>Notifications</span>
        </li>
        <p className="title">services</p>
        <li>
          <SettingsSystemDaydreamOutlinedIcon className="icon" />
          <span>System Health</span>
        </li>
        <li>
          <PsychologyOutlinedIcon className="icon" />
          <span>Logs</span>
        </li>
        <li>
          <SettingsOutlinedIcon className="icon" />
          <span>Settings</span>
        </li>
        <p className="title">user</p>
        <li>
          <AccountCircleOutlinedIcon className="icon" />
          <span>Profile</span>
        </li>
        <li>
          <LogoutOutlinedIcon className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className="sidebar-bottom">Top</div>
  </div>
);

export default Sidebar;
