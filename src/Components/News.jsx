import React from "react";
import watch from "../Images/watch.avif";
import headphone from "../Images/headphone.jpg";
import drop from "../Images/drop.jpg";
import shoe from "../Images/shoe.jpg";
export const News = () => {
  return (
    <div>
      <div>
        <span style={{ fontSize: "22px", color: "#5c75a3" }}>
          News & updates
        </span>
        <span
          style={{ fontSize: "20px", color: "#95a5d3", marginBottom: "5%" }}
        >
          {" "}
          | Today
        </span>
        <div className="News">
          <img src={watch} className="rounded-pill newsImage" alt={watch} />

          <div>
            <p style={{ color: "blue" }}>Nihil blanditiis at in nihil autem</p>
            <p>
              Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed
              ut harum..
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="News">
          <img src={shoe} className="rounded-pill newsImage" alt={watch} />

          <div>
            <p style={{ color: "blue" }}>Quidem autem et impedit</p>
            <p>
              Illo nemo neque maiores vitae officiis cum eum turos elan dries
              werona nande.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="News">
          <img
            src={headphone}
            className="rounded-pill newsImage"
            alt={watch}
          />

          <div>
            <p style={{ color: "blue" }}>
              Id quia et et ut maxime similique occaecati ut
            </p>
            <p>
              Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam
              et totam.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="News">
          <img src={drop} className="rounded-pill newsImage" alt={watch} />
          <div>
            <p style={{ color: "blue" }}>Laborum corporis quo dara net para</p>
            <p>
              Qui enim quia optio. Eligendi aut asperiores enim repellendusvel
              rerum cuder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
