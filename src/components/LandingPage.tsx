import logo from "../assets/landingImg.png";

const LandingPage = ({ handleGoogleSignIn }) => {
  return (
    <div className="container">
      <div className="sign-in">
        <img src={logo} alt="icon" />
      </div>
      <div className="right">
        <h1>Welcome to Invito!</h1>
        <i>please sign in to continue</i>

        <button className="btn" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
