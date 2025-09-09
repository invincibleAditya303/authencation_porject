import { useState } from "react"
import { RegisterBgContainer, RegisterContainer, RegisterErrmsg, RegisterFormContainer, RegisterImage, RegisterInputContainer, RegisterLabelHeading, RegisterSuccessMsg, RegsiterInputText, SubmitButton } from "./styledComponents"

const RegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    
    const onChangeRegisterEmail = event => setEmail(event.target.value)
    const onChangeRegisterPassword = event => setPassword(event.target.value)
    const onChangeRegisterGender = event => setGender(event.target.value)

    const onSubmitRegisterForm = async event => {
        event.preventDefault()

        event.preventDefault()
        if (
            !email.trim() ||
            !password.trim() ||
            !gender.trim()
        ) {
                setErrMsg('Please fill in all fields.')
                return
            }

        const userDetails = {email, password, gender}
        const apiUrl = `${process.env.REACT_APP_API_URL}/register`
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userDetails)
        }

        const response = await fetch(apiUrl, options)
        console.log(response)
        const data = await response.json()
        console.log(data)

        if (response.ok) {
            setSuccessMsg(data)
            setErrMsg('')
            setEmail('')
            setPassword('')
            setGender('')
        } else {
            setErrMsg(data)
            setSuccessMsg('')
        }
    }

    return (
        <RegisterBgContainer>
            <RegisterContainer>
                <RegisterImage src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1757266176/sign-up-membership-registration-follow-concept_zsef50.jpg" alt="register" />
                <RegisterFormContainer onSubmit={onSubmitRegisterForm}>
                    <RegisterInputContainer>
                        <RegisterLabelHeading htmlFor="email">Email</RegisterLabelHeading>
                        <RegsiterInputText type="text" placeholder="Enter email" value={email} id="email" onChange={onChangeRegisterEmail} />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <RegisterLabelHeading htmlFor="password">Password</RegisterLabelHeading>
                        <RegsiterInputText type="password" placeholder="Enter password" value={password} id="password" onChange={onChangeRegisterPassword} />
                    </RegisterInputContainer>
                    <RegisterInputContainer>
                        <RegisterLabelHeading htmlFor="gender">Gender</RegisterLabelHeading>
                        <RegsiterInputText type="text" placeholder="Enter gender" value={gender} id="gender" onChange={onChangeRegisterGender} />
                    </RegisterInputContainer>
                    <SubmitButton type="submit">Submit</SubmitButton>
                    {errMsg && <RegisterErrmsg>{errMsg}</RegisterErrmsg>}
                    {successMsg && <RegisterSuccessMsg>{successMsg}</RegisterSuccessMsg>}
                </RegisterFormContainer>
            </RegisterContainer>
        </RegisterBgContainer>
    )
}

export default RegisterForm