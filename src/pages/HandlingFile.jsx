import { useState } from "react";
import FormSelect from "../components/files/FormSelect";
import FileForm from "../components/files/FileForm";

const HandlingFile = () => {
  const [formType, setFormType] = useState("upload to server");

  return (
    <div>
      <h1>Handling File</h1>
      <FormSelect setFormType={setFormType} formType={formType} />
      <br />
      <FileForm formType={formType} />
    </div>
  );
};

export default HandlingFile;
