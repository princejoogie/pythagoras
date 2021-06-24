import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "styles/Activate.scss";
import logo from "assets/logo.png";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import ClipLoader from "react-spinners/ClipLoader";

function activate() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (router.query.key) {
      const key = router.query.key;

      setLoading(true);
      axios
        .get(process.env.BASE_URL + "/api/activate?key=" + key)
        .then((response) => {
          if (response.status == 200) {
            setSuccess(true);
          }
          setLoading(false);
        })
        .catch((error) => {
          setError(error.response.data.detail);
          setLoading(false);
        });
    } else {
      setError("No key was provided");
    }
  }, [router.query]);

  return loading ? (
    <div className="activate">
      <div className="activate__content">
        <img src={logo} alt="logo" />
        <h1>Pythagoras Coffee & Tea</h1>
        <div className="activate__content__icon">
          <ClipLoader color="#A4A4A4" size={100} />
        </div>
        <p>Activating your Account...</p>
      </div>
    </div>
  ) : (
    <div className="activate">
      {success ? (
        <div className="activate__content">
          <img src={logo} alt="logo" />
          <h1>Pythagoras Coffee & Tea</h1>
          <div className="activate__content__icon">
            <DoneIcon fontSize="inherit" style={{ color: "#A4A4A4" }} />
          </div>
          <p>Congratulations, your account has been activated</p>
          <div
            className="activate__content__button"
            onClick={() => router.replace("/")}
          >
            <p>CLOSE</p>
          </div>
        </div>
      ) : (
        <div className="activate__content">
          <img src={logo} alt="logo" />
          <h1>Pythagoras Coffee & Tea</h1>
          <div className="activate__content__icon">
            <CloseIcon fontSize="inherit" style={{ color: "red" }} />
          </div>
          <p>{error}</p>
          <div
            className="activate__content__button"
            onClick={() => router.replace("/")}
          >
            <p>CLOSE</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default activate;
