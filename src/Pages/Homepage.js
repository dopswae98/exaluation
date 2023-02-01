import React, { Suspense } from "react";
//import Explorer from "../Components/Explorer";

const TablePage = React.lazy(() => import("../Components/Explorer"));
const Homepage = ({ explorer }) => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div
              className="spinner-border spinner-border-sm ms-5"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow spinner-grow-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <TablePage explorer={explorer} />
      </Suspense>
    </div>
  );
};

export default Homepage;
