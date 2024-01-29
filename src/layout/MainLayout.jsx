import {Link, Route, Routes} from "react-router-dom";
import {Layout, Menu, theme, Flex, Tooltip, Button} from 'antd';
import {headerItems, menuItems} from '../variable/LayoutVar.jsx'
import {routers} from '../router/router.jsx'
import './Layout.css'
import {useState} from "react";

const {Header, Content, Footer, Sider} = Layout;
export default function MainLayout() {
    const [openMenu, setOpenMenu] = useState(true);
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
            {openMenu ?
                <Sider width={300} className="menu-sticky">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{height: '100%', fontSize: '14px', borderRight: 'none', fontWeight: '600'}}
                        items={menuItems.map((item) => ({
                            key: item.key,
                            icon: item.icon,
                            label: item.label === "Trang chủ" ? (
                                <Link to="/" onClick={() => setOpenMenu(false)}>{item.label}</Link>) : item.label,
                            children: item?.children?.map((itemChild) => {
                                return {
                                    key: itemChild.key,
                                    label: (<Link to={itemChild.path}>{itemChild.label}</Link>),
                                };
                            }),
                        }))}
                    />
                </Sider> :
                <Sider width={70} className="menu-sticky">
                    <Menu
                        mode="inline"
                        onClick={() => setOpenMenu(true)}
                        defaultSelectedKeys={['1']}
                        style={{height: '100%', fontSize: '14px', borderRight: 'none', fontWeight: '600'}}
                    >
                        {menuItems.map((item) => {
                            return (
                                <Flex key={item.key}>
                                    <Tooltip placement="rightTop" title={item.label}>
                                        <Menu.Item key={item.key} icon={item.icon} style={{paddingLeft:'25px', marginBottom:'0px'}}></Menu.Item>
                                    </Tooltip>
                                </Flex>
                            )
                        })}
                    </Menu>
                </Sider>
            }
            <Content style={{padding: '0 10px', overflow: 'auto', paddingLeft: openMenu ? '320px' : '70px'}}>
                <Layout style={{padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG}}>
                    <Content>
                        <Routes>
                            {routers?.map((item, index) => {
                                return (
                                    <Route key={index} path={item.path} element={item.component}></Route>
                                )
                            })}
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

