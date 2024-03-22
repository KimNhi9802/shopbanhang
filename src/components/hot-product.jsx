import React from "react";
import { Divider } from "antd";
import data_product from "../Assets/data";
import Item from "./product-item";
const HotProduct = () => {
    return (
        <div className="product">
            <Divider orientation="left" style={{ borderColor: "blue" }}>
                Sản Phẩm HOT
            </Divider>
            <div className="product-item">
                {data_product.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default HotProduct;