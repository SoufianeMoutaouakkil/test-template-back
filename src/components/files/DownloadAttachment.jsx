const DownloadAttachment = () => {
  const attachment = {
    _id: "65edbf4d099136d4027563f9",
    name: "drp",
    extension: "jpg",
  };
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3N2Y1ODBiZjQ0YmJkMmIwNWJjZjQiLCJlbWFpbCI6InRyYW5zcG9ydGVyMUBkaWdpZnJldC5kZW1vIiwicm9sZSI6InRyYW5zcG9ydGVyIiwiY29tcGFueUlkIjoiNjVkN2FlNTRjZjVmNDQ5ZWE2ZmY1MjQ0IiwiZnVsbG5hbWUiOiJ0cmFuc3BvcnRlcjEiLCJpc0NvbXBsZXRlZCI6dHJ1ZSwiaWF0IjoxNzEwMDc5ODIwLCJleHAiOjE3MTAwODM0MjB9.jLBhqMigFaunYrhdVihD1FIA_DiEY8UVtnjGFhlx-H0";


  const handleDownload = async () => {
    if (!attachment._id) return;
    console.log("Downloading file", attachment._id);
    const response = await fetch(
      `http://localhost:5000/api/v1/attachments/download/${attachment._id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
    link.setAttribute("download", `download_${attachment.name}.${attachment.extension}`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <>
      <div>
        <button onClick={handleDownload}>Download attachment</button>
      </div>
      <div>
        <h3>Attachment data :</h3>
        <p>Attachment id: {attachment._id}</p>
        <p>Attachment name: {attachment.name}</p>
        <p>Attachment extension: {attachment.extension}</p>
      </div>
    </>
  );
};

export default DownloadAttachment;
