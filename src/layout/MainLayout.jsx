import {Link, Route, Routes} from "react-router-dom";
import {Layout, Menu, theme, Flex} from 'antd';
import {headerItems, homeMenu, menuItems} from '../variable/LayoutVar.jsx'
import {routers} from '../router/router.jsx'
import './Layout.css'

const {Header, Content, Footer, Sider} = Layout;
export default function MainLayout() {
    const {token: {colorBgContainer, borderRadiusLG}} = theme.useToken();
    return (<Flex vertical style={{minHeight: '100vh'}}>
        <Header className="header-sticky">
            <Menu
                theme="light"
                mode="horizontal"
                items={headerItems.map((item) => ({
                    key: item.id, label: item.text
                }))}
                style={{
                    flex: 1,
                    minWidth: 0,
                    justifyContent: 'right',
                    fontSize: 'medium',
                    backgroundColor: 'rgb(255, 255, 255)'
                }}
            />
        </Header>
        <Flex horizontal>
            <Sider width={300} className="menu-sticky">
                <Menu
                    mode="inline"
                    style={{height: '100%', fontSize: '14px', borderRight: 'none', fontWeight:'600'}}
                    items={homeMenu.map((item) => ({
                        key: item.key,
                        icon: item.icon,
                        label: (<Link style={{textDecoration:'none'}} to={item.path}>{item.label}</Link>)
                    }))}
                    className="custom-menu"
                />
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{height: '100%', fontSize: '14px', borderRight: 'none', fontWeight:'600'}}
                    items={menuItems.map((item) => ({
                        key: item.key,
                        icon: item.icon,
                        label: item.label,
                        children: item.children.map((itemChild) => {
                            return {
                                key: itemChild.key,
                                label: (<Link to={itemChild.path}>{itemChild.label}</Link>),
                            };
                        }),
                    }))}
                />
            </Sider>
            <Content style={{padding: '0 10px', overflow: 'auto', paddingLeft:'320px'}}>
                <Layout style={{padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG}}>
                    <Content>
                        <Routes>
                            {routers.map(item =>
                            (<Route path={item.path} element={item.component}></Route>))}
                        </Routes>
                    </Content>
                </Layout>
            </Content>
        </Flex>
        <Footer className="footer-sticky">
            <p>Viet Anh Design ©{new Date().getFullYear()} base on Ant Design</p>
            <p style={{fontSize: 'smaller'}}>Phone: +84914917499 | Email: anhnvv5@fpt.com</p>
        </Footer>
    </Flex>);
}

