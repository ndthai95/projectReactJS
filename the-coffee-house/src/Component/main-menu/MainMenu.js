import React, { Component } from 'react';
import './mainMenu.scss';
import logo from './logo.png';

class MainMenu extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header__wrap">
                        <div className="header__logo">
                            <a href="#">
                                <img src={logo} alt="Logo" />
                            </a>
                        </div>
                        <div className="header__menu">
                            <ul className="clearfix">
                                <li className="has-child">
                                    <a href="#">thương hiệu</a>
                                    <ul className="menu-child">
                                        <li><a href="#">thông cáo báo chí</a></li>
                                        <li><a href="#">trách nhiệm cộng động</a></li>
                                    </ul>
                                </li>
                                <li className="has-child-2">
                                    <a href="#">chuyện cà phê</a>
                                    <ul className="menu-child">
                                        <li><a href="#">hành trình từ nông trại đến ly cà phê</a></li>
                                        <li><a href="#">hạt cà phê the coffee house</a></li>
                                        <li><a href="#">Nghệ thuật pha chế</a></li>
                                        <li><a href="#">workshop cà phê </a></li>
                                        <li><a href="#">truy xuất nguồn gốc</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">thực đơn</a></li>
                                <li><a href="#">ưu đãi</a></li>
                                <li><a href="#">tin tức</a></li>
                                <li><a href="#">tuyển dụng</a></li>
                                <li><a href="#">cửa hàng</a></li>
                                <li><a href="#">đăng nhập</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;