import { useState } from "react"
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import { ButtonsContainer, Errmsg, InputContainer, InputText, LabelHeading, LoginBgContainer, LoginButton, LoginContainer, LoginFormContainer, LoginImage } from "./styledComponents"

const LoginForm = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const onChangeEmail = event => setEmail(event.target.value)
    const onChangePassword = event => setPassword(event.target.value)

    const onSubmitSuccess = jwtToken => {
        const {history} = props
        Cookies.set('userDetails', jwtToken, {expires: 30})
        history.replace('/')
    }

    const onSubmitLoginFailure = errMsg => {
        setErrMsg(errMsg)
    }


    const onSubmitLoginForm = async event => {
        event.preventDefault()

        if (
            !email.trim() ||
            !password.trim()
        ) {
                setErrMsg('Please fill in all fields.')
                return
            }

        const userDetails = {email, password}
        const apiUrl = `${process.env.REACT_APP_API_URL}/login`
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
            onSubmitSuccess(data)
        } else {
            onSubmitLoginFailure(data)
        }
    }

    return (
        <LoginBgContainer>
            <LoginContainer>
                <LoginImage src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1757255972/member-log-membership-username-password-concept_aa6pe9.jpg" alt="login" />
                <LoginFormContainer onSubmit={onSubmitLoginForm}>
                    <InputContainer>
                        <LabelHeading htmlFor="email">Email</LabelHeading>
                        <InputText type="text" placeholder="Enter email" value={email} id="email" onChange={onChangeEmail} />
                    </InputContainer>
                    <InputContainer>
                        <LabelHeading htmlFor="password">Password</LabelHeading>
                        <InputText type="password" placeholder="Enter password" value={password} id="password" onChange={onChangePassword} />
                    </InputContainer>
                    <ButtonsContainer>
                        <LoginButton type="submit">Login</LoginButton>
                        <Link to='/register' target="_blank">
                            <LoginButton type="button">Register</LoginButton>
                        </Link>
                    </ButtonsContainer>
                    {errMsg && <Errmsg>{errMsg}</Errmsg>}
                </LoginFormContainer>
            </LoginContainer>
        </LoginBgContainer>
    )
}

export default LoginForm