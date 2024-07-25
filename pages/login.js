import React, { useEffect } from "react";
import { useRef } from "react";
import LoginForm from "@/src/components/LoginForm";

export const getStaticProps = () => {
    let url = process.env.Login_API;
    console.log(url)
    return {
        props: {
            baseUrl: url
        }
    }

}
const Login = (props) => {

    var {baseUrl}=props

    const inputRef = useRef(null);

    return (
        <div style={{ margin: "5rem" }}>

            <LoginForm baseUrl={baseUrl}></LoginForm>


        </div>
    )




}

export default Login;