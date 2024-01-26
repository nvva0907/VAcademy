import git from "../../../assets/git.svg";
import github from "../../../assets/github.svg";
import gitlab from "../../../assets/gitlab.svg";
import './git.css'
import {Flex} from "antd";

export default function Git() {
    return (<Flex vertical={false}>
        <div className="git-container">
                <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: '5px',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <img src={github} alt="github" style={{width: '20%'}}/>
                    <img src={gitlab} alt="gitlab" style={{width: '35%'}}/>
                    <img src={git} alt="git" style={{width: '20%'}}/>
                </span>
            <p className="head2">Git là gì ?</p>
            <p className="content">
                Git là hệ thống kiểm soát phiên bản phân tán mà nguồn mở ( Open
                Source Distributed Version Control
                System). Các dự án thực tế thường có nhiều nhà phát triển làm việc
                song song. Vì vậy, một hệ thống
                kiểm soát phiên bản như Git là cần thiết để đảm bảo không có xung
                đột mã giữa các nhà phát triển.
                Ngoài ra, các yêu cầu trong dự án thay đổi thường xuyên. Vì vậy, cần một hệ thống cho phép nhà phát
                triển
                quay lại phiên bản cũ hơn của mã.
            </p>
            <p className="head2">Lợi ích khi sử dụng Git</p>
            <li className="head3">Quản lý phiên bản</li>
            <p className='content1'>
                Git giúp bạn theo dõi lịch sử của dự án, cho phép bạn quay lại bất kỳ phiên bản nào. Điều này rất
                hữu ích khi bạn muốn xem những thay đổi đã được thực hiện hoặc khôi phục dự án từ một trạng thái cụ
                thể.
            </p>
            <li className="head3">Tăng hiệu quả Team work</li>
            <p className='content1'>
                Git tạo ra mô hình làm việc phân tán, giúp bạn và đồng đội cùng làm việc mà không làm ảnh hưởng đến
                công việc của nhau. Bạn có thể tạo và làm việc trên các nhánh riêng biệt, sau đó hợp nhất chúng một
                cách dễ dàng.
            </p>
            <li className="head3">Quản lý nhánh</li>
            <p className='content1'>
                Học cách tạo và quản lý nhánh giúp bạn thêm tính năng mới mà không làm ảnh hưởng đến bản chính. Điều
                này mang lại sự linh hoạt và an toàn cho quá trình phát triển.
            </p>
            <li className="head3">Duy trì dự án</li>
            <p className='content1'>
                Git giúp duy trì dự án một cách hiệu quả. Bạn có thể áp dụng các thay đổi một cách linh hoạt, giúp
                giảm rủi ro khi phát triển và duy trì ứng dụng.
            </p>
            <li className="head3">Giải quyết xung đột</li>
            <p className='content1'>
                Khi nhiều người làm việc trên cùng một dự án, xung đột có thể xảy ra. Git không chỉ giúp bạn phát
                hiện xung đột mà còn học cách giải quyết chúng một cách hiệu quả.
            </p>
            <p className="head2">Các lệnh cơ bản với git</p>
            <li className="head3">Git clone [url]</li>
            <li className="head3">Git checkout [branch]</li>
            <li className="head3">Git pull</li>
            <li className="head3">Git status</li>
            <li className="head3">Git add .</li>
            <li className="head3">Git commit -m [message]</li>
            <li className="head3">Git push</li>
        </div>
        <div className="content-summary-container">
            <p style={{fontSize: '15px'}}>Nội dung chính</p>
            <p>1. Git là gì ?</p>
            <p>2. Lợi ích khi sử dụng Git</p>
            <p>3. Các lệnh cơ bản với Git</p>
        </div>
    </Flex>);
}