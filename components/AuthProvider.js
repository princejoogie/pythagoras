import { useContext } from "react";
import { DataContext } from "DataContext";
import { ClipLoader } from "react-spinners";

function AuthProvider({ children }) {
  const { user, token } = useContext(DataContext);

  if (!token[0]) {
    // console.log("Guest");
    return <>{children}</>;
  } else if (!user[0]) {
    // console.log("Logging In");
    return (
      <div className="auth-container">
        <ClipLoader />
        <div className="spacer-25" />
        <p>Loading</p>
        <style jsx>{`
          .auth-container {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
        `}</style>
      </div>
    );
  } else {
    // console.log("Logged In");
    return <>{children}</>;
  }
}

export default AuthProvider;
