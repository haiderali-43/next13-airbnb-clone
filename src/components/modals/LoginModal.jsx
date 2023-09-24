"use client";
import useRegisterModal from "@/hooks/useRegisterModal";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import useLoginModal from "@/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success("Sucessfully Logged in");
        router.refresh();
        loginModal.onClose();
      }
      if (callback.error) {
        toast.error(callback.error);
      }
    });
  };
  // toogle modals 
  const toggleModals = useCallback(()=>{
    loginModal.onClose();
    registerModal.onOpen();
  },[loginModal, registerModal])

  // body content
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welccome Back" subtitle="Login to your account" />

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
        <div>Don&qrsuo;t have an account?</div>
        <div
          className="cursor-pointer text-neutral-800 hover:underline"
          onClick={toggleModals}
        >
          Signup
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Continue"
        onSubmit={handleSubmit(onSubmit)}
        onClose={loginModal.onClose}
        body={bodyContent}
        footer={footerContent}
      />
    </div>
  );
};

export default LoginModal;
