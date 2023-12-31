"use client";
import useRegisterModal from "../../hooks/useRegisterModal";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import useLoginModal from "../../hooks/useLoginModal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success('Successfully registered')
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // toggle modals
  const toggleModals = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);
  // body content
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create a new Account!" />

      <Input
        id="name"
        label="Name"
        register={register}
        errors={errors}
        disbaled={isLoading}
        required
      />
      <Input
        id="email"
        label="Email"
        register={register}
        errors={errors}
        disbaled={isLoading}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        register={register}
        errors={errors}
        disbaled={isLoading}
        required
      />
    </div>
  );
  // footer content
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        Icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with Github"
        Icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      {/* already have an account */}
      <div className="flex flex-row items-center justify-center gap-4">
        <div>Already have a account?</div>
        <div
          className="cursor-pointer text-blue-600 hover:underline"
          onClick={toggleModals}
        >
          Login
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Continue"
        onSubmit={handleSubmit(onSubmit)}
        onClose={registerModal.onClose}
        body={bodyContent}
        footer={footerContent}
      />
    </div>
  );
};

export default RegisterModal;
