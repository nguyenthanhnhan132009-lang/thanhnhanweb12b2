import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        
        <div className={styles.footerCol}>
          <h3>Thanh Nhân Futsal</h3>
          <p>Chuyên bán giày bóng đá chất lượng cao, giá tốt.</p>
        </div>

        <div className={styles.footerCol}>
          <h4>Liên kết</h4>
          <ul>
            <li>Trang chủ</li>
            <li>Sản phẩm</li>
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Hỗ trợ</h4>
          <ul>
            <li>Chính sách đổi trả</li>
            <li>Chính sách bảo mật</li>
            <li>Hướng dẫn mua hàng</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Liên hệ</h4>
          <p>Email: nguyenthanhnhan@gmail.com</p>
          <p>Hotline: 0766559192</p>
        </div>

      </div>

      <div className={styles.footerBottom}>
        © 2026 Thanh Nhân Futsal | All Rights Reserved
      </div>
    </div>
  );
}