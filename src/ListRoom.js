import React from "react";

import { Room } from "./Room";

export function ListRoom({ hallList }) {
  return (
    <div
      className="startpage"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "80px",
        padding: "40px",
        height: "fit-content",
      }}
    >
      {hallList.map((data) => (
        <Room
          img={data.img}
          Price={data.Price}
          Amenities={data.Amenities}
          id={data.id}
        />
      ))}
    </div>
  );
}
