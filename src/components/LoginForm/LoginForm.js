import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { setTokenInLocalStorage } from "../../utils/utils";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { login, googleLogin, githubLogin } = useContext(AuthContext);

  // If user is logged in, sign a token and navigate to home page
  const onSubmit = (data) => {
    setLoading(true);
    login(data.email, data.password)
      .then((userCredential) => {
        setError("");
        const uid = userCredential.user.uid;
        getTokenAndNavigate(uid);
      })
      .catch((error) => {
        setLoading(false);
        setError(handleError(error.code));
      });
  };

  const handleError = (error) => {
    switch (error) {
      case "auth/user-not-found":
        return "User not found";
      case "auth/wrong-password":
        return "Wrong password";
      default:
        return "Something went wrong";
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((userCredential) => {
        setError("");
        const uid = userCredential.user.uid;
        getTokenAndNavigate(uid);
      })
      .catch((error) => {
        setError(handleError(error.code));
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((userCredential) => {
        setError("");
        const uid = userCredential.user.uid;
        getTokenAndNavigate(uid);
      })
      .catch((error) => {
        setError(handleError(error.code));
      });
  };

  // Get token from server and navigate to home page
  const getTokenAndNavigate = (uid) => {
    fetch("https://ghost-kitchen-server.vercel.app/api/v1/auth/token", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        uid: uid,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTokenInLocalStorage(data.token);
        navigate("/");
      });
  };

  // show loading spinner if loading is true
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <p className="text-red-600 text-center">{error}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block text-gray-400">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            {...register("email")}
            placeholder="johndoe@mail.com"
            className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-violet-400"
          />
          <p className="text-red-600">
            {errors.email && errors.email.message}
          </p>
        </div>
        <div className="space-y-1 text-sm">
          <label for="password" className="block text-gray-400">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border outline-none border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
          />
          <p className="text-red-600">
            {errors.password && errors.password.message}
          </p>
          <div className="flex justify-end text-xs text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <button className="flex justify-center items-center gap-1 w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
          Sign in <HashLoader loading={loading} color="green" size={20} />
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-sm text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
          onClick={handleGoogleLogin}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
        <button
          aria-label="Log in with GitHub"
          className="p-3 rounded-sm"
          onClick={handleGithubLogin}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 text-gray-400">
        Don't have an account?{" "}
        <Link
          rel="noopener noreferrer"
          to="/register"
          className="underline text-gray-100"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
