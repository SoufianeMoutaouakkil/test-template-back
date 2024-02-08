const Facebook = () => {
  return (
    <button
      onClick={() => {
        fetch("http://localhost:5000/auth/v1/facebook/authorize", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            redirect_uri: "http://localhost:5173/auth/facebook/callback",
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("data : ", data);
            if (data.url) {
              console.log("data.url : ", data.url);
                window.location.href = data.url;
            }
          })
          .catch((error) => console.error("error : ", error));
      }}
    >
      Sign in with Facebook
    </button>
  );
};

export default Facebook;
