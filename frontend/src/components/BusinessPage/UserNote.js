import { useState } from "react";
import "./usernote.css";

function UserNote() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("A note to the user:");

  const handleToggle = () => {
    setOpen(!open);
    open
      ? setText("A note to the user:")
      : setTimeout(() => {
          setText(
            "Thank you for stopping by. As I work to address the limitations of the free API for fundamental data, the only available model will be Historical Operating Assumptions. This model has proven to be consistently reliable during testing, with the exception of minor discrepancies observed in the depreciation and amortization figures for specific companies."
          );
        }, 250);
  };

  return (
    <>
      <div
        id="user-note"
        className={`row fixed-bottom ${open ? "expanded" : ""}`}
        onClick={handleToggle}
      >
        <div className="col-12 bg-secondary text-white text-center py-2">
          <p className="mb-0 mx-3">{text}</p>
        </div>
      </div>
    </>
  );
}

export default UserNote;
