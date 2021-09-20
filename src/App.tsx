
 import Router from './shared/Router/Router';
import { BrowserRouter  } from "react-router-dom";
import { Layout  } from 'antd';
import { MenuUnfoldOutlined , MenuFoldOutlined } from '@ant-design/icons';
import Nav from './shared/components/Menu/Nav';
 import './App.scss';
import { useState } from 'react';
const App: React.FC = () => {
  const { Header, Footer, Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggle = () => setCollapsed( !collapsed)

return (
  <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
          <Sider  
            collapsed={collapsed}    
            width={200} className="site-layout-background">         
             <Nav/>
          </Sider>
          <Layout>
              <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
                   {collapsed 
                   ? <MenuUnfoldOutlined  className="trigger"  onClick={toggle} /> 
                   : <MenuFoldOutlined className="trigger"  onClick={toggle} />}
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                  <Router></Router>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                 Analyze  - files
              </Footer>
          </Layout>

      </Layout>
  </BrowserRouter>)
}

export default App;


