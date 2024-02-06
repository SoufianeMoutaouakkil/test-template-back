const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          fetch("http://localhost:5000/auth/v1/google/authorize", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              redirect_uri: "http://localhost:5173/auth/google/callback",
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("data : ", data);
              if (data.url) {
                window.location.href = data.url;
              }
            })
            .catch((error) => console.error("error : ", error));
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
