import { useEffect } from "react";

const FacebookCallback = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  useEffect(() => {
    if (code) {
      fetch("http://localhost:5000/auth/v1/facebook/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          redirect_uri: "http://localhost:5173/auth/facebook/callback",
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

export default FacebookCallback;
