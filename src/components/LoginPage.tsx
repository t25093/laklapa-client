import { useMutation } from "@tanstack/react-query"
import PageTitle from "./common/PageTitle"
import { login as loginRequest } from "../api/auth"
import LoginForm, { type LoginFormValues } from "./LoginForm"
import ErrorMessage from "./common/ErrorMessage"
import { errorMessage } from "../utils/errors"
import { useAuth } from "../context/AuthContext"
import { useLocation, useNavigate } from "react-router"

const LoginPage = () => {


    const { login } = useAuth()
    const navigate = useNavigate();
    const location = useLocation()        
    const { mutate, isPending, error } = useMutation({
        mutationFn: (values: LoginFormValues) => loginRequest(values.email, values.password),
        onSuccess: (data) => {
            login(data.token, data.user);
            if(location.state)
                navigate(location.state)
            else if (data.user.role === "ADMIN")
                navigate("/admin/orders");
            else
                navigate("/")
        }
    });


    return <>
        <PageTitle>התחברות</PageTitle>
        <ErrorMessage message={error ? errorMessage(error) : null}></ErrorMessage>
        <LoginForm isPending={isPending} onSubmit={(values) => mutate(values)} ></LoginForm>
    </>
}

export default LoginPage