import { useState, useContext } from "react";
import "styles/SpecialInstructions.scss";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import { DataContext } from "DataContext";

function SpecialInstructions() {
  const { localUser } = useContext(DataContext);
  const [_instructions, _setInstructions] = useState("");
  const [editInstructions, setEditInstructions] = useState(false);
  const [userDetails, setUserDetails] = localUser;

  function handleInstructions(value) {
    const temp = userDetails;
    temp.specialInstructions = value;
    setUserDetails(temp);
  }

  return (
    <div className="instruct">
      <div className="instruct__comment">
        <ModeCommentIcon />
        <div className="w-15" />

        {!editInstructions ? (
          userDetails.specialInstructions ? (
            <p onClick={() => setEditInstructions(true)}>
              {userDetails.specialInstructions}
            </p>
          ) : (
            <p onClick={() => setEditInstructions(true)}>
              Add Special Instructions
            </p>
          )
        ) : (
          <textarea
            placeholder="Add Special Instructions"
            onChange={(e) => handleInstructions(e.target.value)}
            onBlur={() => setEditInstructions(false)}
            rows={4}
          />
        )}
      </div>
      {editInstructions ? (
        <p onClick={() => setEditInstructions(false)}>Confirm</p>
      ) : (
        <p onClick={() => setEditInstructions(true)}>Edit</p>
      )}
    </div>
  );
}

export default SpecialInstructions;
