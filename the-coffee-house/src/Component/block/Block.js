import React, { Component } from "react";
import './block.scss';

class Block extends Component {
  render() {
    return (
      <div className="block">
        <div className="container">
          <div className="block__header">
            <h2 className="block__title c-title">BLOG</h2>
            <div>
              <span className="block__link-page c-button-white">XEM THÊM</span>
            </div>
          </div>
          <div className="block__body">
            <div className="block-item block-item--highlight">
              <a href="#" className="block-item__image">
                <div className="block-item__image__inner"></div>
              </a>
              <div className="block-item__contents">
                <div className="block-item__contents__status">TIN TỨC</div>
                <h3 className="block-item__contents__title">
                  <a href="#">The Coffee House đã trở lại - Mình cà phê nhé!</a>
                </h3>
                <p className="block-item__contents__description">
                  The Coffee House xin thông báo lịch hoạt động của 154 cửa hàng
                  trên toàn quốc từ ngày 25/04/2020.Nhằm đảm bảo sức khoẻ của
                  bạn và cộng đồng trong thời...
                </p>
                <div className="block-item__contents__button">
                  <a href="#" className="c-button-orange">XEM THÊM</a>
                </div>
              </div>
            </div>
            <div className="block-item">
              <a href="#" className="block-item__image">
                <div className="block-item__image__inner"></div>
              </a>
              <div className="block-item__contents">
                <div className="block-item__contents__status">TIN TỨC</div>
                <h3 className="block-item__contents__title">
                  <a href="#">The Coffee House đã trở lại - Mình cà phê nhé!</a>
                </h3>
                <p className="block-item__contents__description">
                  The Coffee House xin thông báo lịch hoạt động của 154 cửa hàng
                  trên toàn quốc từ ngày 25/04/2020.Nhằm đảm bảo sức khoẻ của
                  bạn và cộng đồng trong thời...
                </p>
                <div className="block-item__contents__button">
                  <a href="#" className="c-button-orange">XEM THÊM</a>
                </div>
              </div>
            </div>
            <div className="block-item">
              <a href="#" className="block-item__image">
                <div className="block-item__image__inner"></div>
              </a>
              <div className="block-item__contents">
                <div className="block-item__contents__status">TIN TỨC</div>
                <h3 className="block-item__contents__title">
                  <a href="#">The Coffee House đã trở lại - Mình cà phê nhé!</a>
                </h3>
                <p className="block-item__contents__description">
                  The Coffee House xin thông báo lịch hoạt động của 154 cửa hàng
                  trên toàn quốc từ ngày 25/04/2020.Nhằm đảm bảo sức khoẻ của
                  bạn và cộng đồng trong thời...
                </p>
                <div className="block-item__contents__button">
                  <a href="#" className="c-button-orange">XEM THÊM</a>
                </div>
              </div>
            </div>
            <div className="block-item">
              <a href="#" className="block-item__image">
                <div className="block-item__image__inner"></div>
              </a>
              <div className="block-item__contents">
                <div className="block-item__contents__status">TIN TỨC</div>
                <h3 className="block-item__contents__title">
                  <a href="#">The Coffee House đã trở lại - Mình cà phê nhé!</a>
                </h3>
                <p className="block-item__contents__description">
                  The Coffee House xin thông báo lịch hoạt động của 154 cửa hàng
                  trên toàn quốc từ ngày 25/04/2020.Nhằm đảm bảo sức khoẻ của
                  bạn và cộng đồng trong thời...
                </p>
                <div className="block-item__contents__button">
                  <a href="#" className="c-button-orange">XEM THÊM</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Block;
