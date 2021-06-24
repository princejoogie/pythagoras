import { useState } from "react";
import "styles/Register.scss";
import TextField from "@material-ui/core/TextField";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { motion } from "framer-motion";
import { fadeInUp, title, stagger } from "components/animation";
import Layout from "components/Layout";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

function RegisterPage() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [login, setLogin] = useState({
    content: "",
    isValid: true,
  });
  const [firstName, setFirstName] = useState({
    content: "",
    isValid: true,
  });
  const [lastName, setLastName] = useState({
    content: "",
    isValid: true,
  });
  const [email, setEmail] = useState({
    content: "",
    isValid: true,
  });
  const [password, setPassword] = useState({
    content: "",
    isValid: true,
  });
  const [passwordTwo, setPasswordTwo] = useState({
    content: "",
    isValid: true,
  });

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2000-01-01T00:00:00")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const validateForm = () => {
    let validCount = 0;
    if (login.content.trim() === "") {
      setLogin({
        content: "",
        isValid: false,
      });
    } else {
      setLogin({
        content: login.content.trim(),
        isValid: true,
      });
      validCount += 1;
    }

    if (firstName.content.trim() === "") {
      setFirstName({
        content: "",
        isValid: false,
      });
    } else {
      setFirstName({
        content: firstName.content.trim(),
        isValid: true,
      });
      validCount += 1;
    }

    if (lastName.content.trim() === "") {
      setLastName({
        content: "",
        isValid: false,
      });
    } else {
      setLastName({
        content: lastName.content.trim(),
        isValid: true,
      });
      validCount += 1;
    }

    if (email.content.trim() === "") {
      setEmail({
        content: "",
        isValid: false,
      });
    } else {
      setEmail({
        content: email.content.trim(),
        isValid: true,
      });
      validCount += 1;
    }

    if (password.content.trim() === "") {
      setPassword({
        content: "",
        isValid: false,
      });
    } else {
      setPassword({
        content: password.content.trim(),
        isValid: true,
      });
      validCount += 1;
    }

    if (passwordTwo.content.trim() === "") {
      setPasswordTwo({
        content: "",
        isValid: false,
      });
    } else {
      setPasswordTwo({
        content: passwordTwo.content.trim(),
        isValid: true,
      });
      validCount += 1;
    }

    if (password.content.trim() !== passwordTwo.content.trim()) {
      console.log("Passwords do not match");
      setError("Passwords do not match.");
    } else if (validCount === 6) {
      registerUser();
    } else {
      console.log("One (1) or more fields required.");
      setError("One (1) or more fields required.");
    }
  };

  const validatePassword = (pass2) => {
    const p1 = password.content.trim();
    const p2 = pass2.trim();

    if (p1 !== p2) {
      setPasswordTwo({
        content: p2,
        isValid: false,
      });
    } else {
      setPasswordTwo({
        content: p2,
        isValid: true,
      });
    }
  };

  const registerUser = () => {
    setError(null);
    console.log("Registering User");

    setLoading(true);
    axios
      .post(process.env.BASE_URL + "/api/register", {
        firstName: firstName.content,
        lastName: lastName.content,
        email: email.content,
        password: password.content,
        login: login.content,
        langKey: "en",
      })
      .then((response) => {
        if (response.status == 201) {
          setSuccess(true);
          setLoading(false);
        } else {
          setError(response.data.detail);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.response);
        // setError(e.response.data.detail);
      });
  };

  return !success ? (
    <Layout>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={stagger} className="login app__container">
          <motion.div variants={title}>
            <h1>Welcome to Pythagoras</h1>
          </motion.div>
          <div className="spacer-50"></div>
          <motion.div variants={fadeInUp}>
            <p>Register an Account with</p>
          </motion.div>
          <div className="spacer-25"></div>
          <motion.div variants={fadeInUp} className="register__other">
            <div className="register__social">
              <FaFacebook size={24} color={"#4267B2"} />
              <h5>FACEBOOK</h5>
            </div>
            <div className="register__social">
              <FcGoogle size={24} />
              <h5>GOOGLE</h5>
            </div>
          </motion.div>
          <div className="spacer-50"></div>
          <motion.div variants={fadeInUp}>
            <p>Or register with credentials</p>
          </motion.div>
          <div className="spacer-25"></div>

          <motion.div variants={fadeInUp} className="register__w300">
            <TextField
              onChange={(e) =>
                setLogin({ content: e.target.value, isValid: true })
              }
              error={!login.isValid}
              label={login.isValid ? "Username" : "Required"}
              variant="outlined"
              fullWidth
              className="register__input"
            />
          </motion.div>
          <div className="spacer-25"></div>

          <motion.div variants={fadeInUp} className="register__name">
            <TextField
              onChange={(e) =>
                setFirstName({ content: e.target.value, isValid: true })
              }
              error={!firstName.isValid}
              label={firstName.isValid ? "First Name" : "Required"}
              variant="outlined"
              fullWidth
              className="register__input"
            />
            <TextField
              onChange={(e) =>
                setLastName({ content: e.target.value, isValid: true })
              }
              error={!lastName.isValid}
              label={lastName.isValid ? "Last Name" : "Required"}
              variant="outlined"
              fullWidth
              className="register__input"
            />
          </motion.div>
          <div className="spacer-25"></div>

          <motion.div variants={fadeInUp} className="register__w300">
            <TextField
              onChange={(e) =>
                setEmail({ content: e.target.value, isValid: true })
              }
              error={!email.isValid}
              label={email.isValid ? "Email" : "Required"}
              variant="outlined"
              fullWidth
              className="register__input"
            />
          </motion.div>
          <div className="spacer-25"></div>
          <motion.div variants={fadeInUp} className="register__w300">
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              className="register__input"
            />
          </motion.div>
          <div className="spacer-25"></div>

          <motion.div variants={fadeInUp} className="register__w300">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                inputVariant="outlined"
                margin="normal"
                id="date-picker-dialog"
                label="Birthdate"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                fullWidth
                className="register__input"
              />
            </MuiPickersUtilsProvider>
          </motion.div>

          <div className="spacer-25"></div>

          <motion.div variants={fadeInUp} className="register__w300">
            <TextField
              label="Home Address"
              variant="outlined"
              fullWidth
              className="register__input"
            />
          </motion.div>
          <div className="spacer-10"></div>
          <motion.div variants={fadeInUp} v className="register__w300">
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              className="register__input"
            />
          </motion.div>
          <div className="spacer-10"></div>
          <motion.div variants={fadeInUp} className="register__w300">
            <TextField
              label="State/Province"
              variant="outlined"
              fullWidth
              className="register__input"
            />
          </motion.div>
          <div className="spacer-10"></div>
          <motion.div variants={fadeInUp} className="register__w300">
            <TextField
              label="Zip Code"
              variant="outlined"
              className="register__input"
            />
          </motion.div>
          <div className="spacer-50"></div>

          <motion.div variants={fadeInUp} v className="register__w300">
            <TextField
              value={password.content}
              onChange={(e) => {
                setPassword({ content: e.target.value, isValid: true });
                setPasswordTwo({ content: "", isValid: true });
              }}
              error={!password.isValid}
              label={password.isValid ? "Password" : "Required"}
              variant="outlined"
              type="password"
              fullWidth
              className="register__input"
            />
          </motion.div>
          <div className="spacer-10"></div>
          <motion.div variants={fadeInUp} className="register__w300">
            <TextField
              value={passwordTwo.content}
              onChange={(e) => validatePassword(e.target.value)}
              error={!passwordTwo.isValid}
              label={
                passwordTwo.isValid ? "Confirm Password" : "Does not match"
              }
              variant="outlined"
              type="password"
              fullWidth
              className="register__input"
            />
          </motion.div>
          <div className="spacer-25"></div>

          <motion.div
            variants={fadeInUp}
            className="register__button"
            onClick={() => {
              validateForm();
            }}
          >
            {loading ? (
              <ClipLoader size={20} color={"#FFFFFF"} />
            ) : (
              <p>REGISTER</p>
            )}
          </motion.div>
          <div className="spacer-10" />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="spacer-100"></div>
        </motion.div>
      </motion.div>
    </Layout>
  ) : (
    <Layout>
      <div
        className="app__container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h3>
          Successfully registered, please check your email to activate account.
        </h3>
      </div>
    </Layout>
  );
}

export default RegisterPage;
