import {notification} from "antd";

export const openNotification = (message) => {
    notification.info({
        message: 'Thông báo',
        description: message,
        duration: 3,
    });
};