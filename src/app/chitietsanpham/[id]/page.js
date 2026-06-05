"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./style.module.css";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "NIKE STREET GATO",
      price: 1200000,
      code: "GIAY001",
      color: "Trắng",
      images: ["/anh1.jpg"],
    },
    {
      id: 2,
      name: "JOMA DZ-7 DYEGO",
      price: 3500000,
      code: "GIAY002",
      color: "Xanh",
      images: ["/ANH2.jpg"],
    },
    {
      id: 3,
      name: "ADIDAS F50 MESSI LEAGUE TF",
      price: 2040000,
      code: "GIAY003",
      color: "Cam",
      images: ["/anh3.jpg"],
    },
    {
      id: 4,
      name: "PUMA FUTURE 8 PRO CAGE",
      price: 2500000,
      code: "GIAY004",
      color: "Đen",
      images: ["/anh4.jpg"],
    },
    {
      id: 5,
      name: "ADIDAS F50 PRO",
      price: 2790000,
      code: "GIAY005",
      color: "Trắng",
      images: ["/anh5.jpg"],
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  const [mainImg, setMainImg] = useState(
    product ? product.images[0] : ""
  );
  const [size, setSize] = useState(40);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className={styles.container}>
        <h2>❌ Không tìm thấy sản phẩm</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* LEFT */}
      <div className={styles.left}>
        <div className={styles.mainImage}>
          {mainImg && (
            <Image
              src={mainImg}
              width={400}
              height={400}
              alt={product.name}
            />
          )}
        </div>

        <div className={styles.subImages}>
          {product.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              width={80}
              height={80}
              alt=""
              onClick={() => setMainImg(img)}
              className={mainImg === img ? styles.activeImg : ""}
            />
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <h2 className={styles.title}>{product.name}</h2>

        <p className={styles.code}>
          Mã sản phẩm: <b>{product.code}</b>
        </p>

        <div className={styles.price}>
          {product.price.toLocaleString()}₫
        </div>

        <p className={styles.color}>
          Màu sắc: <b>{product.color}</b>
        </p>

        {/* SIZE GIÀY */}
        <div className={styles.sizeBox}>
          <p>Size:</p>
          {[38, 39, 40, 41, 42, 43].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={size === s ? styles.activeSize : ""}
            >
              {s}
            </button>
          ))}
        </div>

        {/* QUANTITY */}
        <div className={styles.quantity}>
          <button onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>

        {/* BUTTON */}
        <div className={styles.actions}>
          <button className={styles.add}>THÊM VÀO GIỎ</button>
          <button className={styles.buy}>MUA NGAY</button>
        </div>
      </div>
    </div>
  );
}