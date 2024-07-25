import react, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useRouter } from "next/router";

function RegisterForm(props) {

    const [userRegistered, setUserRegistered] = useState(false);
    var formDataObject = {
        Email: '',
        Name: '',
        Password: '',
        MobileNumber: ''
    }
    var validationObject = {
        Email: '',
        Name: '',
        Password: '',
        MobileNumber: ''
    }

    const router = useRouter();
    const [formData, setFormData] = useState(formDataObject);
    const [validationErrorData, setvalidationErrorData] = useState(validationObject);
    const [formValidate, setFormValidate]=useState(true);
    const handleChangeName = (e) => {
        var inputValue = e.target.value;
        setFormData({ ...formData, Name: inputValue })
    }
    const handleChangeEmail = (e) => {
        var inputValue = e.target.value;
        setFormData({ ...formData, Email: inputValue })
    }
    const handleChangePassword = (e) => {
        var inputValue = e.target.value;
        setFormData({ ...formData, Password: inputValue })
    }

    const handleChangeMobileNumber = (e) => {
        var inputValue = e.target.value;
        setFormData({ ...formData, MobileNumber: inputValue })
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        let validateStatus = validate();
        try {
            if (validateStatus) {
                let endPoint = props.baseUrl;
                let response = await axios.post(endPoint, formData)
                if (response.status == 200) {
                    setUserRegistered(false)
                    router.push('/login')
                    setFormData(formDataObject)
                } else {
                    setUserRegistered(true)
                }
            } else {
                setFormValidate(false)
            }


        } catch (error) {
            console.log(error.message)

        }

    }

    const validate = () => {
        if (formData.MobileNumber) {
            if (formData.MobileNumber.length > 5) {
                setvalidationErrorData({...validationErrorData, "MobileNumber": "" })
                return true;

            } else {
                setvalidationErrorData({...validationErrorData, "MobileNumber": "Mibile Number length should be more than 5" })
                return false;
            }

        } else {
            setvalidationErrorData({...validationErrorData, "MobileNumber": "Mibile Number can not be empty" })
            return false;
        }
    }
    return (
        <>
            {userRegistered && <p>User has not Registered</p>}
            <Form className={{ margin: "10xp" }} onSubmit={(e) => { handleSubmit(e) }}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="Name" onChange={(e) => {
                        handleChangeName(e)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="Email" onChange={(e) => {
                        handleChangeEmail(e)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="Password" onChange={(e) => {
                        handleChangePassword(e)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMobileNUmber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile NUmber" name="MobileNumber" onChange={(e) => {
                        handleChangeMobileNumber(e)
                    }} />
                    <p className="text-danger">{!formValidate && validationErrorData.MobileNumber}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </>
    );
}

export default RegisterForm;