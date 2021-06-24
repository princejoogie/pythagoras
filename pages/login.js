import React, { useContext, useState, useEffect } from "react";
import "styles/Login.scss";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { DataContext } from "DataContext";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { fadeInUp, title, stagger } from "components/animation";
import Layout from "components/Layout";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function LoginPage() {
  const router = useRouter();
  const { token, user } = useContext(DataContext);
  const [bearerToken, setBearerToken] = token;
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (bearerToken) {
      router.push("/");
    }
  }, [bearerToken]);

  const handleLogin = async () => {
    setLoading(true);
    axios
      .post(process.env.BASE_URL + "/api/authenticate", {
        username,
        password,
      })
      .then((response) => {
        setLoading(false);
        if (response.status != 200) {
          user[1](null);
          token[1](null);
          localStorage.removeItem("token");
        } else {
          setBearerToken(response.data.id_token);
          localStorage.setItem("token", response.data.id_token);
          router.replace("/");
        }
      })
      .catch((e) => {
        setLoading(false);
        setError(e.response.data.detail);
        user[1](null);
        token[1](null);
        localStorage.removeItem("token");
      });
  };

  return (
    <Layout>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={stagger} className="login app__container">
          <motion.div variants={title}>
            <h1>Welcome to Pythagoras</h1>
          </motion.div>
          <div className="spacer-50"></div>
          <motion.div variants={fadeInUp}>
            <p>Login with</p>
          </motion.div>
          <div className="spacer-25"></div>
          <motion.div variants={fadeInUp} className="login__other">
            <div className="login__social">
              <FaFacebook size={24} color={"#4267B2"} />
              <h5>FACEBOOK</h5>
            </div>

            <div className="login__social">
              <FcGoogle size={24} />
              <h5>GOOGLE</h5>
            </div>
          </motion.div>
          <div className="spacer-50"></div>
          <motion.div variants={fadeInUp}>
            <p>Or login with credentials</p>
          </motion.div>

          <div className="spacer-25"></div>

          <motion.div variants={fadeInUp} className="login__input">
            <TextField
              label="Username"
              autoComplete="current-username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </motion.div>
          <div className="spacer-25"></div>
          <motion.div variants={fadeInUp} className="login__input">
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </motion.div>
          <div className="spacer-10"></div>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="spacer-25"></div>
          <motion.div variants={fadeInUp} className="login__remember">
            <div>
              <Checkbox
                checked={rememberMe}
                onChange={(e) => {
                  setRememberMe(!rememberMe);
                }}
                name="checkedB"
                color="primary"
              />
              <p>Remember me</p>
            </div>

            <p>Forgot Password</p>
          </motion.div>
          <div className="spacer-25"></div>
          <motion.div
            variants={fadeInUp}
            className="login__button"
            onClick={() => handleLogin()}
          >
            {loading ? (
              <ClipLoader size={20} color={"#FFFFFF"} />
            ) : (
              <p>LOGIN</p>
            )}
          </motion.div>
          <div className="spacer-100"></div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}

export default LoginPage;
