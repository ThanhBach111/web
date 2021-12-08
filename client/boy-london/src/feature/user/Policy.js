import React from "react";
import Images from "../../assets/images";

const Policy = () => {
    
        return (
            <div style={styles.page}>
                <h1 style={styles.banner}>CHÍNH SÁCH ĐỔI TRẢ VÀ BẢO HÀNH</h1>
                <img src={Images.backIns} style={styles.image}/>
            
                <h4 style={styles.section}>CHÍNH SÁCH BẢO HÀNH</h4>
                <ol style={styles.sectionIn}>
                    <li> Thời hạn bảo hành: <strong>07</strong> ngày kể từ ngày nhận hàng</li>
                    <li> Điều kiện bảo hành</li>
                </ol>
                <ul style={styles.section}>
                    <li>
                    Đối với các sản phẩm có mác LondonBoy, chúng mình hỗ trợ bảo hành những lỗi về kỹ thuật của nhà sản xuát như lỗi vải, đường may, hình in, lỗi phụ liệu hoặc lỗi trong quá trình vận chuyển.
                    </li>
                    <li>
                    Không hỗ trợ bảo hành với các sản phẩm đã qua sử dụng như giặt ngâm, đã qua xử lý chất tẩy mạnh, rách, trầy xước, ẩm mốc, ố vàng, bạc màu do tiếp xúc với mồ hôi, ...
                    </li>
                </ul>
                <ol start="3" style={styles.sectionIn}>
                    <li>
                        Cách thức bảo hành
                    </li>
                </ol>
                <p style={styles.para}>Trong trường hợp sản phẩm đã mua có lỗi từ phía nhà sản xuất, 
                    London Boy có trách nhiệm nhận lại sản phẩm và chuyển về xưởng sản xuất 
                    để tiến hành bảo hành sản phẩm theo quy trình. London Boy chi trả mọi chi phí phát sinh.</p>
                <p style={styles.para}>Nếu sản phẩm đó không thể khắc phục, London Boy sẽ đổi sang sản phẩm mới theo yêu cầu của khách hàng hoặc hoàn lại 100% tiền và chi phí phát sinh sau khi đã nhận lại sản phẩm đó.</p>
                <h4 style={styles.section} >CHÍNH SÁCH ĐỔI TRẢ VÀ HOÀN HÀNG VỚI ĐƠN HÀNG TRÊN WEBSITE</h4>
                <ol style={styles.sectionIn}>
                    <li> Đối với sản phẩm đã mua, xin vui lòng không trả lại.</li>
                    <li> Sản phẩm đã mua sẽ được hỗ trợ đổi size. Trong trường hợp hết size, khách hàng sẽ được hỗ trợ đổi sang sản phẩm khác. Vui lòng liên hệ với London Boy qua hai phương thức:</li>
                </ol>
                <ul style={styles.section}>
                    <li>
                        <p>
                            <strong>TRỰC TUYẾN</strong>
                        </p>
                        <p>
                        Quý khách có thể liên hệ qua Fanpage London Boy hoặc Hotline 0982759821 để được nhân viên hỗ trợ đổi size trong thời gian sớm nhất.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>TẠI CỬA HÀNG LONDON BOY</strong>
                        </p>
                        <p>
                        Quý khách có thể đổi size sản phẩm tại bất kỳ cửa hàng nào trong hệ thống của London Boy                         </p>
                    </li>
                </ul>
                <p style={styles.para}>Trên trang thanh toán, khách hàng lưu ý điền đầy đủ thông tin bắt buộc cho đơn hàng và thêm Mã giảm giá (nếu có):</p>
                <h4 style={styles.section} >LƯU Ý</h4>
                <ul style={styles.section}>
                    <li>
                        Thời gian áp dụng đổi trả là trong vòng <strong>7 ngày</strong> kể từ thời điểm nhận hàng.
                    </li>
                    <li>
                    Mặt hàng phải ở trong tình trạng ban đầu, còn nguyên tem mác, chưa qua sử dụng, chưa giặt giũ và có hoá đơn dạng giấy in hoặc định dạng điện tử tương ứng.
                    </li>
                    <li>
                    Nếu hoá đơn đã mua có giá trị cao hơn hoá đơn được đổi, 21ST URBAN sẽ không hoàn lại số tiền chênh lệch.
                    </li>
                    <li>
                    Không áp dụng đổi hàng với các sản phẩm khuyến mãi, giảm giá.
                    </li>
                </ul>
            </div>
        )
    
}
const styles = {
    banner: {
        marginLeft: 100,
    },
    image: {
        marginLeft: 150,
        borderRadius: 10,
        width: 650,
        height: 350,
    },
    para: {
        marginTop: 15,
        marginLeft: 75,
        
    },
    section: {
        marginLeft: 75,
    },
    sectionIn: {
        marginLeft: 85,
    },
    page: {
        marginRight:30,
        marginBottom: 20,
    },
}
export default Policy;