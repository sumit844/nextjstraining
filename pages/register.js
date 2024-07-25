import React, { useEffect } from "react";
import Head from "next/head";
import Footer from "@/src/components/footer";
import RegisterForm from "../src/components/RegisterForm"




export const getServerSideProps=()=>{
    let url = process.env.Base_form;
    console.log(url)
    return {
        props: {
            baseUrl: url
        }
    }  
}

const Register = (props) => {

    const { baseUrl } = props
    
console.log(baseUrl)
    return (
        <div style={{ margin: "5rem" }}>

            <RegisterForm baseUrl={baseUrl}></RegisterForm>

        </div>
    )




}

export default Register;