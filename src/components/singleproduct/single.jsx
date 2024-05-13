import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./single.css";

export default function Single() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <>
      {item && (
        <div className="single-card">
          <div
            style={{
              width: "100%",
              paddingInlineStart: "30px",
              fontSize: "25px",
              fontWeight: "bold",
              backgroundColor: "lightcoral",
            }}
          >
            {item.title}
          </div>
          <div
            style={{
              width: "100%",
              paddingInlineStart: "30px",
              fontSize: "25px",
              fontWeight: "bold",
              backgroundColor: "yellow",
            }}
          >
            price : {item.price}
          </div>
          <div
            style={{
              width: "100%",
              paddingInlineStart: "30px",
              fontSize: "25px",
              fontWeight: "bold",
              backgroundColor: "green",
            }}
          >
            Brand : {item.brand}
          </div>
        </div>
      )}
    </>
  );
}
