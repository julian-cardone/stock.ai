import { useState } from "react";
import "./usernote.css";

function UserNote() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        id="user-note"
        className={`row fixed-bottom ${open ? "expanded" : ""}`}
        onClick={handleToggle}
      >
        <div className="col-12 bg-secondary text-white text-center py-2">
          {open
            ? "Thank you for stopping by. As I work to address the limitations of the free API for fundamental data, the only available model will be Historical Operating Assumptions. This model has proven to be consistently reliable during testing, with the exception of minor discrepancies observed in the depreciation and amortization figures for specific companies."
            : "A note to the user:"}
        </div>
      </div>
    </>
  );
}

export default UserNote;
