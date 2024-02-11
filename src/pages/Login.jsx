import Facebook from "../components/auth/Facebook";
import Google from "../components/auth/Google";

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
