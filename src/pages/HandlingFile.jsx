import { useState } from "react";

const HandlingFile = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [filename, setFilename] = useState("");
  const backBaseUrl = import.meta.env.VITE_BACK_URL;
  const attachmentsUrl = backBaseUrl + "/api/v1/attachments";

  const handleFileChange = (event) => {
    console.log("File changed : ", event.target.files[0]);
    setFile(event.target.files[0]);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleFilenameChange = (event) => {
    setFilename(event.target.value);
  };

  const handleUpload = async () => {
    console.log("Uploading file", file);
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("filename", filename);
    formData.append("username", username);
    const response = await fetch(attachmentsUrl, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  };
  const handleUploadFirebase = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("filename", filename);
    formData.append("username", username);
    const response = await fetch(attachmentsUrl + "/upload-to-firebase", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  };
  const handleDownload = async () => {
    if (!filename) return;
    console.log("Downloading file", filename);
    const response = await fetch(attachmentsUrl + "/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filename,
        username,
      }),
    });
    if (response.ok) {
      await downloadFile(response);
    } else {
      console.error("File download failed:", await response.text());
    }
  };
  const handleDownloadFirebase = async () => {
    if (!filename) return;
    console.log("Downloading file", filename);
    const response = await fetch(attachmentsUrl + "/download-from-firebase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filename,
        username,
      }),
    });
    if (response.ok) {
      //   const data = await response.json();
      //   console.log(data);
      await downloadFile(response);
    } else {
      console.error("File download failed:", await response.text());
    }
  };

  const downloadFile = async (response) => {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Username"
        onChange={handleUsernameChange}
      />
      <input
        type="text"
        placeholder="File Name"
        onChange={handleFilenameChange}
      />
      <br />
      <button onClick={handleDownload}>Download</button>
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleUploadFirebase}>Upload Firebase</button>
      <button onClick={handleDownloadFirebase}>Download Firebase</button>
      <button onClick={() => setFile(null)}>Clear</button>
    </div>
  );
};

export default HandlingFile;
