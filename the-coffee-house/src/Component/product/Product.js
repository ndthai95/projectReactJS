import React, { Component } from 'react';
import './product.scss';

class Product extends Component {
    render() {
        return (
            <div className="product">
                <div className="container">
                    <div className="product__menu">
                        <h2 className="product__title">Menu</h2>
                        <div className="product__viewmore">
                            <a href="#" className="viewmore-btn">xem thêm tất cả sản phẩm</a>
                        </div>
                    </div>

                    <div className="product__list">
                        <div className="product__wrap">
                            <div className="product__item">
                                <a href="#" className="product__image">
                                    <div className="product__image__inner"></div>
                                </a>
                                <h3><a href="#">trà oolong bưởi mật ong</a></h3>
                                <div class="product__price">
                                    <p>50000 đ</p>
                                </div>
                                <div class="product__btn">
                                    <a href="#" class="btn-action">mua ngay</a>
                                    <a href="#" class="btn-view">tìm hiểu thêm</a>
                                </div>
                            </div>

                            <div className="product__item">
                                <a href="#" className="product__image">
                                    <div className="product__image__inner"></div>
                                </a>
                                <h3><a href="#">trà oolong bưởi mật ong</a></h3>
                                <div class="product__price">
                                    <p>50000 đ</p>
                                </div>
                                <div class="product__btn">
                                    <a href="#" class="btn-action">mua ngay</a>
                                    <a href="#" class="btn-view">tìm hiểu thêm</a>
                                </div>
                            </div>

                            <div className="product__item">
                                <a href="#" className="product__image">
                                    <div className="product__image__inner"></div>
                                </a>
                                <h3><a href="#">trà oolong bưởi mật ong</a></h3>
                                <div class="product__price">
                                    <p>50000 đ</p>
                                </div>
                                <div class="product__btn">
                                    <a href="#" class="btn-action">mua ngay</a>
                                    <a href="#" class="btn-view">tìm hiểu thêm</a>
                                </div>
                            </div>

                            <div className="product__item">
                                <a href="#" className="product__image">
                                    <div className="product__image__inner"></div>
                                </a>
                                <h3><a href="#">trà oolong bưởi mật ong</a></h3>
                                <div class="product__price">
                                    <p>50000 đ</p>
                                </div>
                                <div class="product__btn">
                                    <a href="#" class="btn-action">mua ngay</a>
                                    <a href="#" class="btn-view">tìm hiểu thêm</a>
                                </div>
                            </div>

                            <div className="product__item">
                                <a href="#" className="product__image">
                                    <div className="product__image__inner"></div>
                                </a>
                                <h3><a href="#">trà oolong bưởi mật ong</a></h3>
                                <div class="product__price">
                                    <p>50000 đ</p>
                                </div>
                                <div class="product__btn">
                                    <a href="#" class="btn-action">mua ngay</a>
                                    <a href="#" class="btn-view">tìm hiểu thêm</a>
                                </div>
                            </div>

                            <div className="product__item">
                                <a href="#" className="product__image">
                                    <div className="product__image__inner"></div>
                                </a>
                                <h3><a href="#">trà oolong bưởi mật ong</a></h3>
                                <div class="product__price">
                                    <p>50000 đ</p>
                                </div>
                                <div class="product__btn">
                                    <a href="#" class="btn-action">mua ngay</a>
                                    <a href="#" class="btn-view">tìm hiểu thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;