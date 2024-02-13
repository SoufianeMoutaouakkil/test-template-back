import React, { useState } from "react";

export default function GetFilesList() {
  const backBaseUrl = import.meta.env.VITE_BACK_URL;
  const attachmentsUrl = backBaseUrl + "/api/v1/attachments";
  const [filesList, setFilesList] = useState();
  return (
    <div>
      <h1>Get Files List</h1>
      <button
        onClick={async () => {
          const response = await fetch(attachmentsUrl + "/list");
          if (response.ok) {
            const filesListRes = await response.json();
            setFilesList(filesListRes.files);
          } else {
            console.error("File list failed:", await response.text());
          }
        }}
      >
        Get Files List
      </button>
      <br />
      {filesList && (
        <ul>
          {filesList.map((file) => (
            <li key={file}>{file}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
