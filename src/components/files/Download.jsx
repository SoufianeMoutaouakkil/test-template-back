import React, { useState } from "react";

export default function DownloadFromFirebase({ url, server }) {
  const [username, setUsername] = useState("");
  const [filename, setFilename] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleFilenameChange = (event) => {
    setFilename(event.target.value);
  };

  const handleDownload = async () => {
    if (!filename) return;
    console.log("Downloading file", filename);
    const response = await fetch(url, {
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
  const downloadFile = async (response) => {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };
  const clearInputs = () => {
    setUsername("");
    setFilename("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="text"
        placeholder="File Name"
        value={filename}
        onChange={handleFilenameChange}
      />
      <br />
      <button onClick={handleDownload}>Download From {server}</button>
      <button onClick={clearInputs}>Clear</button>
      <br />
    </div>
  );
}
