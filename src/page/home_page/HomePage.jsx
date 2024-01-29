import {Button, Flex} from "antd";
import "./homepage.css"
import mySql from '../../assets/mysql.svg'
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
                        fontWeight: '300'}}>Lộ trình phát triển Website Developer từ cơ bản đến nâng cao</p>
                    <Button style={{backgroundColor: '#066ab9', color: 'white'}}>
                        <p style={{
                            fontSize: '15px',
                            color: 'white'
                        }}>Nhận tư vấn miễn phí</p>
                    </Button>
                </Flex>
            </Flex>
            <Flex className="c2">
                <Flex className="c2-item"><img src={mySql} alt="mysql" style={{width: '70%'}}/></Flex>
                <Flex className="c2-item"><h1>TEST</h1></Flex>
                <Flex className="c2-item"><h1>TEST</h1></Flex>
                <Flex className="c2-item"><h1>TEST</h1></Flex>
            </Flex>
        </Flex>
    );
}