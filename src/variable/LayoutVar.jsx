import React from "react";
import {
    GitlabOutlined,
    HomeOutlined,
    ControlOutlined,
    CodeSandboxOutlined,
    CodepenCircleOutlined,
    UserOutlined,
    DatabaseOutlined,
    WindowsOutlined
} from "@ant-design/icons";
import git from "../assets/git.svg";

export const headerItems = [
    {id: 1, text: "Home"},
    {id: 2, text: "Khoá học"},
    {id: 3, text: "Blog"},
    {id: 4, text: "Liên hệ"},
]
export const menuItems = [
    {
        key: "HOME",
        icon: React.createElement(HomeOutlined),
        label: `Trang chủ`,
        children: []
    },
    {
        key: "VCS",
        icon: React.createElement(ControlOutlined),
        label: `Hệ thống quản lý phiên bản`,
        children: [
            {
                path: "/git",
                key: "GIT",
                label: `Git`,
            },
            {
                path: "/svn",
                key: "SVN",
                label: `Subversion (SVN)`,
            },
            {
                path: "/hlc",
                key: "HLC",
                label: `Perforce (Helix Core)`
            }
        ]
    },
    {
        key: "BE",
        icon: React.createElement(CodeSandboxOutlined),
        label: `Lập trình backend`,
        children: [
            {
                path: "/rm",
                key: "RM",
                label: `Roadmap`
            },
            {
                path: "/java",
                key: "JAVA",
                label: `Java`
            },
            {
                path: "/nodejs",
                key: "NODEJS",
                label: `NodeJS`
            }
        ]
    },
    {
        key: "FE",
        icon: React.createElement(CodepenCircleOutlined),
        label: `Lập trình frontend`,
        children: [
            {
                path: "/js",
                key: "JS",
                label: `Javascript`
            },
            {
                path: "/reactjs",
                key: "REACTJS",
                label: `ReactJS`
            }
        ]
    },
    {
        key: "DB",
        icon: React.createElement(DatabaseOutlined),
        label: `Cơ sở dữ liệu`,
        children: [
            {
                path: "/mysql",
                key: "MYSQL",
                label: `MySQL`
            },
            {
                path: "/mongo",
                key: "MONGO",
                label: `Mongo`
            },
            {
                path: "/postgres",
                key: "Postgres",
                label: `Postgres`
            },
            {
                path: "/nosql",
                key: "NOSQL",
                label: `NoSQL`
            }
        ]
    },
    {
        key: "SERVER",
        icon: React.createElement(WindowsOutlined),
        label: `Hạ tầng hệ thống`,
        children: [
            {
                path: "/net",
                key: "NET",
                label: `Mạng`,
            },
            {
                path: "/os",
                key: "OS",
                label: `Hệ đều hành`
            },
            {
                path: "/imp",
                key: "IMP",
                label: `Triển khai hệ thống`
            }
        ]
    }
]