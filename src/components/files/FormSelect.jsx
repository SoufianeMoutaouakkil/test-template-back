import React from "react";

export default function FormSelect({ setFormType, formType }) {
  return (
    <div>
      {formType !== "upload to server" && (
        <button onClick={() => setFormType("upload to server")}>
          Upload To Server
        </button>
      )}
      {formType !== "download from server" && (
        <button onClick={() => setFormType("download from server")}>
          Download From Server
        </button>
      )}
      {formType !== "upload to firebase" && (
        <button onClick={() => setFormType("upload to firebase")}>
          Upload To Firebase
        </button>
      )}
      {formType !== "download from firebase" && (
        <button onClick={() => setFormType("download from firebase")}>
          Download From Firebase
        </button>
      )}
      {formType !== "get files list" && (
        <button onClick={() => setFormType("get files list")}>
          Get Files List
        </button>
      )}
    </div>
  );
}
