import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

export default function RecentActivity() {
  return (

    <MDBContainer className="py-5" style={{ width: "100%" }}>
      <MDBRow>
        <MDBCol>
          <div id="content">
            <ul className="timeline-1 text-black">
              <li className="event" data-date="12:30 - 1:00pm">
                <p>Quia quae rerum explicabo officiis beatae</p>
              </li>
              <li className="event" data-date="2:30 - 4:00pm">
                <p>
                Est sit eum reiciendis exercitationem
                </p>
              </li>
              <li className="event" data-date="5:00 - 8:00pm">
                <p>Voluptatem blanditiis blanditiis eveniet</p>
              </li>
              <li className="event" data-date="8:30 - 9:30pm">
                <p className="mb-0">Voluptates corrupti molestias voluptatem</p>
              </li>
            </ul>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
