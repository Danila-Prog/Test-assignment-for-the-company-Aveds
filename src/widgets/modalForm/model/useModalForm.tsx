import { SubmitHandler, useForm } from "react-hook-form";
import { handleLogin } from "../../../features/handleLogin";
import { useEffect, useState } from "react";
import { TForm } from "./TForm";

export const useModalForm = () => {
  const [loginError, setLoginError] = useState<string | null>(null);

  const { register, handleSubmit, formState } = useForm<TForm>();

  const inputStyle = { backgroundColor: loginError ? "#FCE0E4" : "white" };

  const submit: SubmitHandler<TForm> = (data) => {
    const isSuccess = handleLogin(data.login, data.password);
    if (isSuccess) {
      setLoginError(null);
    } else {
      setLoginError("Неверно введён логин или пароль");
    }
  };

  const useModalEscapeKey = (isOpen: boolean, setIsOpen: () => void) => {
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsOpen();
        }
      };

      if (isOpen) {
        window.addEventListener("keydown", handleKeyDown);
      }

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, setIsOpen]);
  };

  const handleInputChange = () => setLoginError(null);

  const errorLogin = formState.errors["login"]?.message;
  const errorPassword = formState.errors["password"]?.message;
  
  return {
    register,
    handleSubmit,
    loginError,
    inputStyle,
    submit,
    handleInputChange,
    errorLogin,
    errorPassword,
    useModalEscapeKey
  };
};
