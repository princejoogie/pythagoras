import { useContext } from "react";
import Layout from "components/Layout";
import "styles/ProfileTabs/Settings.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { DataContext } from "DataContext";

function settings() {
  const { user } = useContext(DataContext);

  function PersonalDetails() {
    return (
      <div className="settings__card">
        <h3>PERSONAL DETAILS</h3>
        <div className="divider" />

        <div className="settings__row-2">
          <div>
            <p>First Name</p>
            <input type="text" value={user[0] && user[0].firstName} />
          </div>
          <div>
            <p>Last Name</p>
            <input type="text" value={user[0] && user[0].lastName} />
          </div>
        </div>

        <div className="spacer-10" />
        <div className="settings__row-2">
          <div>
            <p>Birthdate</p>
            <input type="date" />
          </div>
          <div>
            <p>Gender</p>
            <input type="text" />
          </div>
        </div>

        <div className="spacer-25" />
        <div
          className="settings__button"
          style={{
            justifyContent: "center",
            background: "#5E72E4",
            width: "150px",
          }}
        >
          <p>SAVE</p>
        </div>
      </div>
    );
  }

  function AccountSettings() {
    return (
      <div className="settings__card">
        <h3>ACCOUNT SETTINGS</h3>

        <div className="divider" />
        <div className="settings__account">
          <div>
            <p>Email</p>
            <input type="text" value={user[0] && user[0].email} />
          </div>
          <h4>Change</h4>
        </div>

        <div className="divider" />
        <div className="settings__account">
          <div>
            <p>Mobile Number</p>
            <input type="text" />
          </div>
          <h4>Change</h4>
        </div>

        <div className="divider" />
        <div className="settings__account">
          <div>
            <p>Password</p>
            <input type="text" />
          </div>
          <h4>Change</h4>
        </div>
      </div>
    );
  }

  function SocialMedia() {
    return (
      <div className="settings__card">
        <h3>SOCIAL MEDIA</h3>
        <div className="divider" />
        <div className="settings__socMed">
          <strong>
            <p>Facebook</p>
          </strong>
          <div>
            <p>Not Connected</p>
            <div className="w-15" />
            <div
              className="settings__button"
              style={{
                justifyContent: "space-between",
                background: "#2D4474",
                width: "150px",
              }}
            >
              <FacebookIcon style={{ color: "#FFFFFF" }} />
              <p>FACEBOOK</p>
            </div>
          </div>
        </div>

        <div className="divider" />
        <div className="settings__socMed">
          <strong>
            <p>Twitter</p>
          </strong>
          <div>
            <p>Not Connected</p>
            <div className="w-15" />
            <div
              className="settings__button"
              style={{
                justifyContent: "space-between",
                background: "#1DA1F2",
                width: "150px",
              }}
            >
              <TwitterIcon style={{ color: "#FFFFFF" }} />
              <p>TWITTER</p>
            </div>
          </div>
        </div>

        <div className="divider" />
        <div className="settings__socMed">
          <strong>
            <p>Instagram</p>
          </strong>
          <div>
            <p>Not Connected</p>
            <div className="w-15" />
            <div
              className="settings__button"
              style={{
                justifyContent: "space-between",
                background: "#E4405F",
                width: "150px",
              }}
            >
              <InstagramIcon style={{ color: "#FFFFFF" }} />
              <p>INSTAGRAM</p>
            </div>
          </div>
        </div>

        <div className="divider" />
        <div className="settings__socMed">
          <strong>
            <p>Linkedin</p>
          </strong>
          <div>
            <p>Not Connected</p>
            <div className="w-15" />
            <div
              className="settings__button"
              style={{
                justifyContent: "space-between",
                background: "#0077B5",
                width: "150px",
              }}
            >
              <LinkedInIcon style={{ color: "#FFFFFF" }} />
              <p>LINKEDIN</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function SavedAddress() {
    return (
      <div className="settings__card">
        <h3>SAVED ADDRESS</h3>
        <div className="divider" />
      </div>
    );
  }

  return (
    <Layout>
      <div className="app__container settings">
        <h1>Settings</h1>
        <div className="divider" />

        <PersonalDetails />
        <AccountSettings />
        <SocialMedia />
        <SavedAddress />

        <div className="spacer-100" />
      </div>
    </Layout>
  );
}

export default settings;
