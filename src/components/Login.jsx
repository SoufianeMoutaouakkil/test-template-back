import Facebook from "./auth/Facebook";
import Google from "./auth/Google";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
        <Google />
        <Facebook />
    </div>
  );
};

export default Login;
