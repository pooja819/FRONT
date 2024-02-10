import React, { useEffect, useState } from "react";
import "./customer.css";
import { Link, useNavigate } from "react-router-dom";
import products from "./productsData";
import categories from "./categories";
import { toast } from "react-toastify";

function Customer() {
  const Redircet = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      Redircet("/");
    }
  }, []);
  const [Prodcuts, setProdcuts] = useState(products);
  const FillterData = (value) => {
    if (value != "all") {
      const filteredProducts = products.filter(
        (product) => product.category_id == value
      );
      setProdcuts(filteredProducts);
    } else {
      setProdcuts(products);
    }
  };
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between">
        <h1 className="title-shop">SHOP</h1>
        <div>
          {/* <label>Fillter Data</label> <br /> */}
          <select
            className="custom-select"
            onChange={(e) => FillterData(e.target.value)}
          >
            <option value="all">Show All Product</option>
            {categories.map((item, index) => (
              <option value={item.category_id} key={index}>
                {item.category_name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <main className="main bd-grid">
        {Prodcuts.map((item, index) => (
          <article className="card" key={index}>
            <div className="card__img">
              <img src={item.image} alt="sdfsd" style={{ height: "120px" }} />
            </div>
            <div className="card__name">
              <p>AIR ZOOM DEMO</p>
            </div>
            <div className="card__precis">
              <Link to="#" className="card__icon">
                <ion-icon name="heart-outline" />
              </Link>
              <div>
                <span className="card__preci card__preci--before">
                  {item.name}
                </span>
                <span className="card__preci card__preci--now">
                  ₹ {item.price}
                </span>
                <span
                  className="card__preci card__preci--now btn  btn-primary btn-sm mt-2"
                  onClick={() => {
                    toast.success("Comeing Soon");
                  }}
                >
                  Buy Product
                </span>
              </div>
              <Link to="#" className="card__icon">
                <ion-icon name="cart-outline" />
              </Link>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Customer;
