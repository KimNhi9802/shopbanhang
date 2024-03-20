import React from "react";
const Item = (props) => {
  return (
    <div className="item" style={{ width: "350px" }}>
      <img src={props.image} alt="" style={{ width: "200", height: "200" }} />
      <p style={{ margin: "6px 0px" }}>{props.name}</p>
      <div className="item-prices" style={{ display: "flex", gap: "20px" }}>
        <div
          className="item-price-new"
          style={{ fontSize: "18px", fontWeight: "600" }}
        >
          ${props.new_price}
        </div>
        <div
          className="item-price-old"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#8c8c8c",
            textDecoration: "line-through",
          }}
        >
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
