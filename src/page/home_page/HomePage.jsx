import {Button, Flex} from "antd";
import "./homepage.css";
import mySql from '../../assets/mysql.svg';
import java from '../../assets/java.svg';
import react from '../../assets/react.svg';
import devops from '../../assets/devops.svg';
import {openNotification} from '../../notification/Notification.jsx'

export default function HomePage() {
    return (
        <Flex vertical gap='40px'>
            <Flex className="c1">
                <Flex>
                    <p style={{
                        fontSize: '70px',
                        color: '#013f70',
                        fontWeight: '600',
                        fontFamily: 'FreeMono, monospace'
                    }}>V</p>
                    <p style={{
                        fontSize: '70px',
                        color: 'black',
                        fontWeight: 'lighter',
                        fontFamily: 'FreeMono, monospace'
                    }}>Academy</p>
                </Flex>
                <Flex vertical align='center' gap="20px">
                    <p style={{
                        fontSize: '40px',
                        color: 'black',
                        fontWeight: '300'
                    }}>Lộ trình phát triển Website Developer từ cơ bản đến nâng cao</p>
                    <Button
                        style={{backgroundColor: '#066ab9', color: 'white'}}
                        onClick={() => openNotification("Chức năng tư vấn đang được cập nhật")}
                    >
                        <p style={{
                            fontSize: '15px',
                            color: 'white'
                        }}>Nhận tư vấn miễn phí</p>
                    </Button>
                </Flex>
            </Flex>
            <Flex className="title">
                <p>Tổng quan</p>
            </Flex>
            <Flex className="c2">
                <Flex className="c2-item">
                    <p style={{fontSize: '15px', fontWeight: '400'}}>Hệ quản trị cơ sở dữ liệu</p>
                    <img src={mySql} alt="mysql" style={{width: '40%'}}/>
                </Flex>
                <Flex className="c2-item">
                    <p style={{fontSize: '15px', fontWeight: '400'}}>Ngôn ngữ lập trình Backend</p>
                    <img src={java} alt="java" style={{width: '50%'}}/>
                </Flex>
                <Flex className="c2-item">
                    <p style={{fontSize: '15px', fontWeight: '400'}}>Ngôn ngữ lập trình Frontend</p>
                    <img src={react} alt="react" style={{width: '50%'}}/>
                </Flex>
                <Flex className="c2-item">
                    <p style={{fontSize: '15px', fontWeight: '400'}}>Triển khai hệ thống lên máy chủ</p>
                    <img src={devops} alt="devops" style={{width: '50%'}}/>
                </Flex>
            </Flex>
            <Flex className="title">
                <p>Về chúng tôi</p>
            </Flex>
        </Flex>
    );
}