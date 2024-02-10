const Facebook = () => {
  const backBaseUrl = import.meta.env.VITE_BACK_URL;
  const currentBaseUrl = import.meta.env.VITE_CURRENT_URL;

  return (
    <button
      onClick={() => {
        fetch(backBaseUrl + "/auth/v1/facebook/authorize", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            redirect_uri: currentBaseUrl + "/auth/facebook/callback",
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
