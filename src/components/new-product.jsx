import React from "react";
import { Divider } from "antd";
import data_new from "../Assets/new_collections";
import Item from "./product-item";
const NewProduct = () => {
    return (
        <div className="product" style={{ marginTop: '200px' }}>
            <Divider orientation="left" style={{ borderColor: "blue", marginTop: '50px' }}>
                Sản Phẩm MỚI
            </Divider>
            <div className="product-item" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                {data_new.map((item, i) => {
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

export default NewProduct;