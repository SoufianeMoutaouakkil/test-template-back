import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate("/upload-file");
        }}
      >
        Upload File
      </button>
    </div>
  );
};

export default Home;
