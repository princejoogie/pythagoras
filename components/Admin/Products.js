import React from "react";
import "styles/Admin/AdminProducts.scss";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function Products() {
  return (
    <div className="adminProducts">
      <div className="adminProducts__fab">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <h1>Products</h1>
      <div className="divider" />
    </div>
  );
}

export default Products;
