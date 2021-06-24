import DateRangeIcon from "@material-ui/icons/DateRange";
import "styles/DeliveryDetails.scss";
import { fadeInLeft } from "components/animation";
import { motion } from "framer-motion";

function DeliveryDetails() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="d-details"
    >
      <motion.div variants={fadeInLeft} className="d-details__main">
        <DateRangeIcon />
        <div className="w-15" />
        <div>
          <h3>Delivery via Sukimove</h3>
          <p>Estimated arrival: Today, September 9, 2020 4:00 PM</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default DeliveryDetails;
