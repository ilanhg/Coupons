const GoogleSignup = () => {
    const responseGoogle = (response) => {
      console.log(response);
    };
  
    const onFailure = (error) => {
      console.error(error);
    };
  
    return (
      <GoogleLogin
        clientId="your-client-id-here"
        buttonText="Sign up with Google"
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    );
  };
  
  export default GoogleSignup;