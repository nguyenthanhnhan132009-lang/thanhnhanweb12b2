import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  const products = [
    {
      id: 1,
      name: "NIKE STREET GATO",
      price: 1200000,
      oldPrice: 2000000,
      image: "/anh1.jpg",
      remain: 20,
      discount: 40,
    },
    {
      id: 2,
      name: "JOMA DZ-7 DYEGO",
      price: 3500000,
      oldPrice: 5000000,
      image: "/anh2.jpg", // ❌ sửa lỗi khoảng trắng
      remain: 15,
      discount: 30,
    },
    {
      id: 3,
      name: "ADIDAS F50 MESSI LEAGUE TF",
      price: 2040000, // ❌ giá bạn bị sai quá lớn -> chỉnh lại
      oldPrice: 3600000,
      image: "/anh3.jpg",
      remain: 10,
      discount: 35,
    },
    {
      id: 4,
      name: "PUMA FUTURE 8 PRO CAGE",
      price: 2500000,
      oldPrice: 3500000, // ❌ sửa giá cũ
      image: "/anh4.jpg",
      remain: 25,
      discount: 28,
    },
    {
      id: 5,
      name: "ADIDAS F50 PRO",
      price: 2790000,
      oldPrice: 3700000,
      image: "/anh5.jpg",
      remain: 12,
      discount: 30,
    },

    {
      id: 6,
      name: "NIKE ZOOM MERCURIAL SUPERFLY 9",
      price: 1500000,
      oldPrice: 2500000,
      image: "/anh6.jpg",
      remain: 18,
      discount: 40,
    },
    {
      id: 7,
      name: "ADIDAS F50 PRO TF",
      price: 2200000,
      oldPrice: 3000000,
      image: "/anh7.jpg",
      remain: 14,
      discount: 25,
    },
    {
      id: 8,
      name: "MIZUNO MORELIA SALA PRO",
      price: 1800000,
      oldPrice: 2800000,
      image: "/anh8.jpg",
      remain: 20,
      discount: 35,
    },
    {
      id: 9,
      name: "NIKE ZOOM MERCURIAL SUPERFLY 10",
      price: 1300000,
      oldPrice: 2000000,
      image: "/anh9.jpg",
      remain: 22,
      discount: 35,
    },
    {
      id: 10,
      name: "NIKE TIEMPO LEGEND 10",
      price: 4500000,
      oldPrice: 6000000,
      image: "/anh10.jpg",
      remain: 10,
      discount: 25,
    },
  ];

  return (
    <div className={styles.container}>

      {/* HEADER */}
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

      {/* CONTENT */}
      <div className={styles.item2}>
        <div className={styles.mainContent}>
          {products.map((item) => (
            <div key={item.id} className={styles.product}>

              <div className={styles.sale}>-{item.discount}%</div>

              <div className={styles.productImage}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                />
              </div>

              <div className={styles.productName}>
                {item.name}
              </div>

              <div className={styles.productPrice}>
                <span className={styles.price}>
                  {item.price.toLocaleString()}₫
                </span>
                <span className={styles.oldPrice}>
                  {item.oldPrice.toLocaleString()}₫
                </span>
              </div>

              <div className={styles.productRemain}>
                Còn {item.remain} sản phẩm
              </div>

              <div className={styles.buyButton}>
                <Link href={`/chitietsanpham/${item.id}`}>
                  Mua ngay
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
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

    </div>
  );
}