"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { IconMail } from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import SiteLogo from "@/assets/no-code-email-builder-logo.svg";
import { account } from "@/appwrite/client_init";
import { ID } from "appwrite";
import { useSession } from "@/context/SessionProvider";
import { useRouter } from "next/navigation";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { session, isLoading } = useSession();
  const router = useRouter();
  function handleLoginWithEmail({ email }: FieldValues) {
    account.createMagicURLSession(ID.unique(), email, "/app");
  }

  function handleLoginWithGoogle() {
    account.createOAuth2Session("google", "/app", "/login");
  }

  useEffect(() => {
    if (session && !isLoading) {
      router.push("/app");
    }
  }, [session]);

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
        <form action="/" onSubmit={handleSubmit(handleLoginWithEmail)}>
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
            onClick={handleLoginWithGoogle}
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
        </form>
      </div>
    </section>
  );
}

export default Login;
