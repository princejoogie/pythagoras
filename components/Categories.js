import { useContext, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import { fadeInLeft } from "components/animation";
import { motion } from "framer-motion";
import { DataContext } from "DataContext";
import "styles/Categories.scss";

function Categories() {
  const [selectedPopularity, setSelectedPopularity] = useState("");
  const [popularities, setPopularities] = useState([
    "Popularity",
    "Lowest Price First",
    "Highest Price First",
  ]);

  const { selectedCategory } = useContext(DataContext);

  return (
    <div className="app__container">
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <h1>{selectedCategory[0]}</h1>
        <div className="divider" />
        <div className="categories__filters">
          <div id="blank-grid" />

          <motion.div variants={fadeInLeft}>
            <form
              className="categories__searchbar"
              action="/search"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <SearchIcon fontSize="small" style={{ color: "#ADB5BD" }} />
              <input type="text" id="query" name="query" placeholder="Search" />
            </form>
          </motion.div>

          <FormControl variant="filled">
            <motion.div variants={fadeInLeft}>
              <InputLabel id="popularityLabel">Sort by Popularity</InputLabel>
              <Select
                style={{
                  height: "50px",
                  background: "white",
                  boxShadow: `0px 0px 5px rgba(50, 50, 93, 0.1),
          0px 0px 5px rgba(0, 0, 0, 0.07)`,
                }}
                labelId="popularityLabel"
                value={selectedPopularity}
                onChange={(e) => {
                  setSelectedPopularity(e.target.value);
                }}
                label="popularityFilter"
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {popularities.map((popularity) => (
                  <MenuItem value={popularity} key={popularity}>
                    {popularity}
                  </MenuItem>
                ))}
              </Select>
            </motion.div>
          </FormControl>
        </div>
        <div className="spacer-25"></div>
      </motion.div>
    </div>
  );
}

export default Categories;
