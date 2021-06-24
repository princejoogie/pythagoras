import { useContext, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { DataContext } from "DataContext";
import { motion } from "framer-motion";
import { title } from "components/animation";

function SelectLocation() {
  const { location } = useContext(DataContext);
  const setCurrentLoc = location[1];
  const [input, setInput] = useState("");

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      id="location-modal"
      className="location"
    >
      <motion.div variants={title} className="location__card">
        <h1>Search for your location</h1>
        <p>
          To check which branch would cater you, please search and set your
          location
        </p>
        <div className="location__select">
          <form
            className="location__searchbar location__search"
            action="/search"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <SearchIcon fontSize="small" style={{ color: "#ADB5BD" }} />
            <input
              type="text"
              key="select-location-modal"
              id="select-location"
              name="select-location"
              placeholder="Search"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </form>
        </div>

        <div
          className="location__button location__btn"
          onClick={() => {
            setCurrentLoc(input);
          }}
        >
          <p>Confirm</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SelectLocation;
