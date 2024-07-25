import react, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from "next/router";
import axios from "axios";

function LoginForm(props) {
    var loginObject = {
        Email: '',
        Password: ''
    }
    const router = useRouter();
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loginObjectNew, setLoginObject] = useState(loginObject);
    const handleChangeEmail = (e) => {
        var emailVal = e.target.value;
        setLoginObject({ ...loginObjectNew, Email: emailVal })
    }
    const handleChangePassword = (e) => {
        var passwordVal = e.target.value;
        setLoginObject({ ...loginObjectNew, Password: passwordVal })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        var loginEndpoint = props.baseUrl

        var response = await axios.post(loginEndpoint, loginObjectNew);

        if (response.data.userId) {
            setUserLoggedIn(true);
            localStorage.setItem("loginStatus",true);
            localStorage.setItem("userName",response.data.Email);
            localStorage.setItem("name",response.data.Name);
            router.push('/products')
        } else {
            setUserLoggedIn(false)
        }

    }
    return (

        <Form className={{ margin: "10xp" }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => { handleChangeEmail(e) }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => { handleChangePassword(e) }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default LoginForm;