import { useContext, useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Radio from "@material-ui/core/Radio";
import { DataContext } from "DataContext";
import { fadeInLeft, stagger } from "components/animation";
import { motion, AnimatePresence } from "framer-motion";
import "styles/DeliveryAddress.scss";

function DeliveryAddress() {
  const { user, location, localUser } = useContext(DataContext);
  const [address, setAddress] = useState("current");
  const [editPhone, setEditPhone] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [userDetails, setUserDetails] = localUser;

  const [_homeAddress, _setHomeAddress] = useState("");
  const [_city, _setCity] = useState("");
  const [_state, _setState] = useState("");
  const [_zip, _setZip] = useState("");

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  function handlePhone(value) {
    const temp = userDetails;
    temp.phone = value;
    setUserDetails(temp);
  }

  function handleEmail(value) {
    const temp = userDetails;
    temp.email = value;
    setUserDetails(temp);
  }

  function handleLocation() {
    location[1](_homeAddress + ", " + _city + " City, " + _state + ", " + _zip);
    _setHomeAddress("");
    _setCity("");
    _setState("");
    _setZip("");
    setAddress("current");
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="d-address"
    >
      <div className="spacer-10" />
      <div className="choose-address">
        <div className="choose-address__details">
          <PersonIcon />
          <div className="choose-address__details__column">
            {location[0] && (
              <>
                <div className="address">
                  <div className="w-15" />
                  <Radio
                    checked={address === "current"}
                    color="primary"
                    onChange={handleAddress}
                    value="current"
                    style={{ padding: "0" }}
                  />
                  <div className="w-15" />
                  <div className="address__details">
                    <h3>
                      {user[0]
                        ? user[0].firstName + " " + user[0].lastName
                        : "Guest"}
                    </h3>
                    <p>{location[0]}</p>
                  </div>
                </div>
                <div className="spacer-25" />
                <div className="address">
                  <div className="w-15" />
                  <Radio
                    checked={address === "new"}
                    color="primary"
                    onChange={handleAddress}
                    value="new"
                    style={{ padding: "0" }}
                  />
                  <div className="w-15" />
                  <div className="address__details">
                    <h3>Add new delivery address</h3>
                    <AnimatePresence>
                      {address === "new" && (
                        <motion.div
                          variants={stagger}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <div className="spacer-25" />
                          <motion.input
                            variants={fadeInLeft}
                            placeholder="Home Address"
                            value={_homeAddress}
                            onChange={(e) => _setHomeAddress(e.target.value)}
                          />

                          <motion.div
                            variants={fadeInLeft}
                            className="address__row"
                          >
                            <input
                              placeholder="City"
                              value={_city}
                              onChange={(e) => _setCity(e.target.value)}
                            />
                            <input
                              placeholder="State/Province"
                              value={_state}
                              onChange={(e) => _setState(e.target.value)}
                            />
                          </motion.div>

                          <motion.input
                            variants={fadeInLeft}
                            style={{ width: "120px" }}
                            maxLength={4}
                            placeholder="Zip Code"
                            value={_zip}
                            onChange={(e) => _setZip(e.target.value)}
                          />
                          <motion.div
                            variants={fadeInLeft}
                            className="address__button"
                            onClick={() => handleLocation()}
                          >
                            <p>CONFIRM</p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <p>Edit</p>
      </div>
      <div className="spacer-10" />
      <div className="divider" />
      <div className="spacer-10" />
      <div className="choose-phone">
        <div>
          <PhoneIcon />
          <div className="w-15" />
          {!editPhone ? (
            userDetails.phone ? (
              <p onClick={() => setEditPhone(true)}>{userDetails.phone}</p>
            ) : (
              <p onClick={() => setEditPhone(true)}>Enter your Phone Number</p>
            )
          ) : (
            <input
              placeholder="Enter your Phone Number"
              onChange={(e) => handlePhone(e.target.value)}
              onBlur={() => setEditPhone(false)}
            />
          )}
        </div>
        {editPhone ? (
          <p onClick={() => setEditPhone(false)}>Confirm</p>
        ) : (
          <p onClick={() => setEditPhone(true)}>Edit</p>
        )}
      </div>
      <div className="spacer-10" />
      <div className="divider" />
      <div className="spacer-10" />
      <div className="choose-email">
        <div>
          <EmailIcon />
          <div className="w-15" />
          {!editEmail ? (
            userDetails.email ? (
              <p onClick={() => setEditEmail(true)}>{userDetails.email}</p>
            ) : (
              <p onClick={() => setEditEmail(true)}>Enter your Email</p>
            )
          ) : (
            <input
              placeholder="Enter your Email"
              onChange={(e) => handleEmail(e.target.value)}
              onBlur={() => setEditEmail(false)}
            />
          )}
        </div>
        {editEmail ? (
          <p onClick={() => setEditEmail(false)}>Confirm</p>
        ) : (
          <p onClick={() => setEditEmail(true)}>Edit</p>
        )}
      </div>
      <div className="spacer-10" />
    </motion.div>
  );
}

export default DeliveryAddress;
