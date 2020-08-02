import React, { Component } from 'react';
import './footer.scss';
import logo from './logo.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div class="footer__wrap">
                        <div class="footer__image">
                            <a href="#">
                                <img src={logo} alt="Logo" />
                            </a>
                        </div>
                        <div class="footer__top">
                            <div class="footer__item">
                                <h3 class="footer__title">ABOUT</h3>				
                                <ul class="footer__linklists">
                                    <li><a href="#" title="Về Chúng Tôi">Về Chúng Tôi</a></li>
                                    <li><a href="#" title="Hạt Cà Phê The Coffee House">Hạt Cà Phê The Coffee House</a></li>
                                    <li><a href="#" title="Blog">Blog</a></li>
                                    <li><a href="#" title="Cơ Hội Nghề Nghiệp">Cơ Hội Nghề Nghiệp</a></li>
                                    <li><a href="#" title="Cửa Hàng">Cửa Hàng</a></li>
                                </ul>
                            </div>
                            <div class="footer__item">
                                <div class="hotline__footer">
                                    <h3 class="footer__title">Always-on Support</h3>
                                    <p>Delivery 1800 6936  (07:00-21:00)</p>
                                    <p>Support 02871 087 088 (07:00-21:00) </p>
                                </div>
                            </div>
                            <div class="footer__item">
                                <div class="address__footer">
                                    <h3 class="footer__title">Address</h3>
                                    <p>62 Tran Quang Khai, Tan Dinh, Quan 1 Ho Chi Minh, Vietnam</p>
                                    <p>02871 087 088</p><p>hi@thecoffeehouse.vn</p>
                                </div>
                            </div>
                            <div class="footer__item">
                                <h3 class="footer__title">Delivery</h3>				
                                <ul class="footer__linklists">
                                    <li><a href="/" title="Shipping methods">Shipping methods</a></li>
                                    <li><a href="/" title="Payment">Payment</a></li>
                                    <li><a href="/" title="Cash voucher">Cash voucher</a></li>
                                    <li><a href="/" title="Return">Return</a></li>
                                    <li><a href="/" title="Exchange">Exchange</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer__bottom">
                        <div class="copyright_footer">
                            <div class="copyright_text">
                                <p></p>Copyright © 2018 The Coffee House. All rights reserved.
                            </div>
                            <div class="copyright_menu">
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;