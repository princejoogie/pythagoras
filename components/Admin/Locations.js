import { useState } from "react";
import "styles/Admin/AdminLocations.scss";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

function Locations() {
  const [locations, setLocations] = useState([
    { name: "Makati", address: "Address Name, City" },
    { name: "Taguig", address: "Address Name, City" },
    { name: "Paranaque", address: "Address Name, City" },
    { name: "Baguio", address: "Address Name, City" },
  ]);

  function compare(a, b) {
    const locA = a.name.toUpperCase();
    const locB = b.name.toUpperCase();

    let comparison = 0;
    if (locA > locB) {
      comparison = 1;
    } else if (locA < locB) {
      comparison = -1;
    }
    return comparison;
  }

  locations.sort(compare);

  const handleDelete = (index) => {
    const temp = [...locations];
    temp.splice(index, 1);
    setLocations(temp);
  };

  return (
    <div className="adminLocations">
      <div className="adminLocations__fab">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <h1>Locations</h1>
      <div className="divider" />
      {locations.map((location, index) => (
        <Location
          key={index}
          location={location}
          index={index}
          handleDelete={handleDelete}
        />
      ))}
      <div className="spacer-100" />
    </div>
  );
}

function Location({ location, index, handleDelete }) {
  return (
    <div className="adminLocations__card">
      <div>
        <h3>{location.name}</h3>
        <p>{location.address}</p>
      </div>
      <div
        className="adminCategories__listTile__card__close"
        onClick={() => handleDelete(index)}
      >
        <CloseIcon style={{ color: "#525F7F" }} />
      </div>
    </div>
  );
}

export default Locations;
