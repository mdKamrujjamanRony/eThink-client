import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const LogIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let signInError;
  useEffect( () => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  },[user, gUser, from, navigate]);
  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (error || gError) {
      signInError = <p><small className="text-red-600">Error: {error.message}</small></p>;
  }
  
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    navigate('/');
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-4xl text-secondary font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email must be required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Enter valid email",
                  },
                })}
              />
              <label class="label">
                {errors.email?.type === "required" && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                {errors.email?.type === "pattern" && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password required",
                  },
                  minLength: {
                    value: 8,
                    message: "Must be 8 character or longer",
                  },
                })}
              />
              <label class="label text-red-600">
                {errors.password?.type === "required" && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                {errors.password?.type === "minLength" && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
              </label>
            </div>
            {signInError}
            

            <input className="btn w-full btn-primary max-w-xs mt-5" type="submit" value='Login' />
            <p><small>New to eThink? <Link to='/signup' className="text-neutral">Create an account</Link></small></p>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-secondary btn-outline"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
