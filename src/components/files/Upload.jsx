import React, { useState } from "react";

export default function Upload({ url, server}) {
  const [file, setFile] = useState("");
  const [username, setUsername] = useState("");
  const [filename, setFilename] = useState("");
  const [response, setResponse] = useState(null);

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
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setResponse(data);
    console.log(data);
  };

  const clearInputs = () => {
    setFile("");
    setUsername("");
    setFilename("");
    setResponse(null);
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Username"
        onChange={handleUsernameChange}
        value={username}
      />
      <input
        type="text"
        placeholder="File Name"
        onChange={handleFilenameChange}
        value={filename}
      />
      <br />
      <button onClick={handleUpload}>Upload from {server}</button>
      <button onClick={clearInputs}>Clear</button>
      <br />

      {response && (
        <div>
          <h3>Response</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
