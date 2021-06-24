import React from "react";
import "styles/Admin/AdminReports.scss";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function Reports() {
  return (
    <div className="adminReports">
      <div className="adminReports__fab">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <h1>Reports</h1>
      <div className="divider" />
    </div>
  );
}

export default Reports;
