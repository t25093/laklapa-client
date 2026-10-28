import { useMutation } from "@tanstack/react-query";
import type { RegisterFormValues } from "../components/auth/RegisterForm";
import RegisterForm from "../components/auth/RegisterForm";
import PageTitle from "../components/common/PageTitle";
import { register as registerRequest } from "../api/auth"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import ErrorMessage from "../components/common/ErrorMessage"
import {fieldErrors ,errorMessage } from "../utils/errors";



const RegisterPage = () => {

    const { login } = useAuth()
    const navigate = useNavigate();

    const { mutate, isPending, error } = useMutation({
        mutationFn:  ({ confirmPassword, ...data }: RegisterFormValues) => registerRequest(data),
        onSuccess: (data) => {
            login(data.token,data.user);
            navigate("/")
        }
    });

    const serverErrors = error ? fieldErrors(error) : {};

    return <>
        <PageTitle>הרשמה</PageTitle>
        <ErrorMessage message={error ? errorMessage(error) : null}></ErrorMessage>
        <RegisterForm serverErrors={serverErrors} isPending={isPending} onSubmit={(values) => mutate(values)}></RegisterForm>
    </>
}

export default RegisterPage;