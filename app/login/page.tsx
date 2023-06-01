"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { IconMail } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import SiteLogo from "@/assets/no-code-email-builder-logo.svg";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleLogin() {}

  return (
    <section className="login-page-wrapper">
      <div>
        <Image
          className="site-logo"
          src={SiteLogo}
          alt="No Code Email Builder Logo"
        />
        <h3 className="brand-tagline">
          Create stunning emails using our Drag and Drop editor!
        </h3>
        <form action="/" onSubmit={handleSubmit(handleLogin)}>
          <Input
            label="Email"
            type="email"
            errorMessage={errors.email?.message}
            {...register("email", { required: "Please enter a valid email!" })}
          />
          <Button type="submit" leftIcon={<IconMail stroke={1} />}>
            Login using Email
          </Button>
          <Button
            leftIcon={
              <Image
                width={20}
                height={20}
                src="/assets/google-icon.webp"
                alt="Google Icon"
              />
            }
          >
            Login with Google
          </Button>
          <Button
            leftIcon={
              <Image
                width={20}
                height={20}
                src="/assets/facebook-icon.png"
                alt="Google Icon"
              />
            }
          >
            Login with Facebook
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Login;
