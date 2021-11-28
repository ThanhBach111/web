import React from "react";
import Images from "../../assets/images";

const Instruction = () => {
    
        return (
            <div style={styles.page}>
                <h1 style={styles.banner}> Hướng dẫn mua hàng</h1>
                <img src={Images.backIns} style={styles.image}/>
                <p style={styles.para}>Quý khách vui lòng tham khảo thông tin chi tiết về từng bước đặt hàng như sau:</p>
                <h4 style={styles.section}>BƯỚC 1: TÌM KIẾM VÀ CHỌN SẢN PHẨM YÊU THÍCH TRÊN WEBSITE</h4>
                <ol style={styles.sectionIn}>
                    <li>Chọn xem sản phẩm ở mục Shop</li>
                    <li>Xem thông tin sản phẩm, hình ảnh chi tiết của sản phẩm bằng cách nhấp vào sản phẩm</li>
                    <li>Chọn màu sắc, size và số lượng sản phẩm muốn mua sau đó Thêm vào giỏ hàng "<strong>"Add to cart"</strong>.
                    Bạn có thể tiếp tục chọn sản phẩm khác <strong>"Mua thêm"</strong> hoặc tiếp tục xử lý đơn hàng 
                    <strong>"Thanh toán"</strong>.</li>
                </ol>
                <h4 style={styles.section} >BƯỚC 2: TIẾN HÀNH ĐẶT HÀNG ONLINE VÀ THANH TOÁN ĐƠN HÀNG</h4>
                <p style={styles.para}>Trên trang thanh toán, khách hàng lưu ý điền đầy đủ thông tin bắt buộc cho đơn hàng và thêm Mã giảm giá (nếu có):</p>
                <h4 style={styles.section} >I. ĐỊA CHỈ NGƯỜI MUA</h4>
                <ol style={styles.sectionIn} >
                    <li>
                    Đối với khách hàng đã có tài khoản, xin vui lòng đăng nhập bằng tài khoản đã có sẵn trước khi đặt hàng.
                    </li>
                    <li>
                    London Boy khuyến khích khách hàng mua sắm bằng cách đăng ký tài khoản tại londonboy.vn. 
                    Với tài khoản này, bạn sẽ dễ dàng đặt mua sản phẩm mà không cần điền lại thông tin mỗi lần mua hàng và nhận những ưu đãi từ thương hiệu.
                    </li>
                </ol>
                <h4 style={styles.section} >II. PHƯƠNG THỨC VẬN CHUYỂN</h4>
                <p style={styles.para} ><strong>Miễn phí vận chuyển</strong> tại với đơn hàng từ <strong>1.000.000 vnđ</strong> trên website chính thức</p>
                <p style={styles.para} >Đối với những đơn hàng có giá trị dưới <strong> 1.000.000 vnđ</strong>, 
                London Boy áp dụng biểu phí giao hàng của hãng vận chuyển GHN theo từng khu vực.</p>
                <h4 style={styles.section} >III. PHƯƠNG THỨC THANH TOÁN</h4>
                <p style={styles.para} >Bạn có thể chọn 1 trong 2 phương thức thanh toán có sẵn</p>
                <ol style={styles.sectionIn} >
                    <li>
                        Thanh toán khi nhận hàng (OCD).
                    </li>
                    <li>
                        Thanh toán qua chuyển khoản InternetBanking vào số tài khoản dưới đây: 
                    </li>
                </ol>
                <p style={styles.para} ><strong>STK: 085348138413</strong></p>
                <p style={styles.para}><strong>Chủ TK: Tuấn Hoa Hồng</strong></p>
                <p style={styles.para}><strong>Tại Vietcombank chi nhánh Hoàn Kiếm</strong></p>
                <h4 style={styles.section} >BƯỚC 3: XÁC NHẬN ĐƠN HÀNG</h4>
                <p style={styles.para} >London Boy sẽ liên hệ xác nhận đơn đặt hàng thành công trực tiếp qua điện thoại hoặc qua email.</p>
                <p style={styles.para}>Sau khi xác nhận đơn hàng, London Boy sẽ tiến hành đóng gói và gửi đơn hàng trong thời gian sớm nhất.</p>
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
export default Instruction;