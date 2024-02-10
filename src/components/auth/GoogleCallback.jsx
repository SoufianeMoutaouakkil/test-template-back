import { useEffect } from "react";

const GoogleCallback = () => {
  const backBaseUrl = import.meta.env.VITE_BACK_URL;
  const currentBaseUrl = import.meta.env.VITE_CURRENT_URL;

  const code = new URLSearchParams(window.location.search).get("code");
  useEffect(() => {
    if (code) {
      fetch(backBaseUrl + "/auth/v1/google/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          redirect_uri: currentBaseUrl + "/auth/google/callback",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data : ", data);
        })
        .catch((error) => console.error("error : ", error));
    }
  }, [code]);
  
  return <div>code : {code}</div>;
};

export default GoogleCallback;
