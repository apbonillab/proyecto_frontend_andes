import { Menu } from 'antd';
import { FileSearchOutlined, HistoryOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './Nav.scss';
const Nav: React.FC = () => {
  const { SubMenu } = Menu;

  return ( <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu key="sub1" icon={<FileSearchOutlined />} title="Analyze">

        <Menu.Item key="1">
          <FileSearchOutlined type="pie-chart" />
          <span>Analyze</span>
          <Link to="/" />
        </Menu.Item>

      </SubMenu>
      <SubMenu key="sub2" icon={<HistoryOutlined />} title="History">
        <Menu.Item key="2">
          <HistoryOutlined type="desktop" />
          <span>    Show History</span>
          <Link to="/history" />
        </Menu.Item>
        <Menu.Item key="3">Show  chart </Menu.Item>
      </SubMenu>

    </Menu> );
};

export default Nav;
