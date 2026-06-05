import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>Trang chủ</li>
          <li>Tìm sản phẩm</li>
          <li>Giày Futsal</li>
          <li>Giày sân cỏ</li>
        </ul>
      </nav>

      <div className={styles.logo}>Thanh Nhân Futsal</div>
    </div>
  );
}