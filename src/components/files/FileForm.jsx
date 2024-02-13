import React from "react";
import Download from "./Download";
import Upload from "./Upload";
import GetFilesList from "./GetFilesList";

export default function FileForm({ formType }) {
  const backBaseUrl = import.meta.env.VITE_BACK_URL;
  const attachmentsUrl = backBaseUrl + "/api/v1/attachments";
  return (
    <div>
      <br />

      {formType === "upload to server" && (
        <div>
          <h2>Upload to Server</h2>
          <Upload url={attachmentsUrl} server={"Server"} />
        </div>
      )}
      {formType === "download from server" && (
        <div>
          <h2>Download from Server</h2>
          <Download url={attachmentsUrl + "/download"} server={"Server"} />
        </div>
      )}
      {formType === "upload to firebase" && (
        <div>
          <h2>Upload to Firebase</h2>
          <Upload
            url={attachmentsUrl + "/upload-to-firebase"}
            server={"Firebase"}
          />
        </div>
      )}
      {formType === "download from firebase" && (
        <div>
          <h2>Download from Firebase</h2>
          <Download url={attachmentsUrl + "/download-from-firebase"} />
        </div>
      )}
      {formType === "get files list" && <GetFilesList />}
    </div>
  );
}
