import React, { Component } from 'react';
import './store.scss';

class Store extends Component {
	render() {
		return (
			<div className="store">
				<div className="container">
					<h2 className="store__title c-title c-title--black">CỬA HÀNG</h2>
					<div className="store__highlight">
						<div className="store__highlight__content">
							<div className="store__highlight__content__inner">
								<h3 className="store__highlight__title">THE COFFEE HOUSE SIGNATURE</h3>
								<p className="store__highlight__description">Với những nghệ nhân rang tâm huyết và đội ngũ Barista tài năng cùng những câu chuyện cà phê đầy cảm hứng, ngôi nhà Signature 19B Phạm Ngọc Thạch, Q.3, TP.HCM là không gian dành riêng cho những ai trót yêu say đắm hương vị của những hạt cà phê tuyệt hảo.</p>
							</div>
						</div>
						<div className="store__highlight__image">
								<img src="https://file.hstatic.net/1000075078/file/3e0a8783_master.jpg" alt="x" /> 
						</div>
					</div>
					<div className="store__slider">
						<div className="row">
							<div className="col-3">
								<div className="store__slider__item">
									<div className="store__slider__background"></div>
									<img className="store__slider__image" src="https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/store/5e0968f6d6af531e6178a3c2_Screen%20Shot%202020-05-16%20at%2022.56.34.png" alt="x" /> 
									<p className="store__slider__name">682 Trần Hưng Đạo</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Store;