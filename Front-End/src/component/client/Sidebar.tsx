import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar = (props: Props) => {
	return (
		<div>
			<div className="col-lg-3 col-md-3">
				<div className=" ctn_seller">
					<div className="box_seller">
						<div className="title_seller">
							<h3>Sách nổi bật</h3>
						</div>
						<div className="body_seller">
							<div className="item-seller">
								<p className="image">
									<a href="">
										<img src="/src/assets/client-images/1.webp" alt="Tâm Lý Học Về Tiền – Morgan Housel" />
									</a>
								</p>
								<p className="name">
									<a href="">Tâm Lý Học Về Tiền – Morgan Housel</a>
								</p>
								<p className="author">Kinh Tế - Tài Chính</p>
								<p className="saleoff">
									<span>10 %</span>
								</p>
								<p className="price">110.000 ₫</p>
							</div>
						</div>
						<div className="body_seller">
							<div className="item-seller">
								<p className="image">
									<a href="">
										<img src="/src/assets/client-images/2.webp" alt="Làm Chủ Tuổi 20" />
									</a>
								</p>
								<p className="name">
									<a href="">Làm Chủ Tuổi 20</a>
								</p>
								<p className="author">Sách Bán Chạy</p>
								<p className="saleoff">
									<span>5 %</span>
								</p>
								<p className="price">135.000 ₫</p>
							</div>
						</div>
						<p className="see-all">
							<a href="">Xem tất cả</a>
						</p>
					</div>
					<div className="box_seller">
						<div className="title_seller">
							<h3>Sách mới phát hành</h3>
						</div>
						<div className="body_seller">
							<div className="item-seller">
								<p className="image">
									<a href="">
										<img
											src="/src/assets/client-images/3.webp"
											alt="Thay Đổi Một Suy Nghĩ Thay Đổi Cả Cuộc Đời
                      "
										/>
									</a>
								</p>
								<p className="name">
									<a href="">Thay Đổi Một Suy Nghĩ Thay Đổi Cả Cuộc Đời
</a>
								</p>
								<p className="author">Hoàng Khải Đoàn</p>
								<p className="saleoff">
									<span>25 %</span>
								</p>
								<p className="price">128,000₫</p>
							</div>
						</div>
						<div className="body_seller">
							<div className="item-seller">
								<p className="image">
									<a href="">
										<img
											src="/src/assets/client-images/4.jpg"
											alt="CHIẾN THẮNG CON QUỶ TRONG BẠN (SBOOKS)"
										/>
									</a>
								</p>
								<p className="name">
									<a href="">CHIẾN THẮNG CON QUỶ TRONG BẠN (SBOOKS)</a>
								</p>
								<p className="author">Tư duy và học tập</p>
								<p className="saleoff">
									<span>20 %</span>
								</p>
								<p className="price">110.400đ</p>
							</div>
						</div>
						<div className="body_seller">
							<div className="item-seller">
								<p className="image">
									<a href="">
										<img
											src="/src/assets/client-images/5.webp"
											alt="Tư Duy Nhanh Và Chậm"
										/>
									</a>
								</p>
								<p className="name">
									<a href="">Tư Duy Nhanh Và Chậm</a>
								</p>
								<p className="author">Sách Kỹ Năng</p>
								<p className="saleoff">
									<span>25 %</span>
								</p>
								<p className="price">155.000 ₫</p>
							</div>
						</div>
						<p className="see-all">
							<a href="">Xem tất cả</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
