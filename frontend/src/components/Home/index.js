import Cookies from 'js-cookie'

import { HomeBgContainer, LogoutButton, LogoutButtonContainer, MainHeading } from "./styledComponents"


const Home = props => {
    const onClickLogout = () => {
        const {history} = props
        Cookies.remove('userDetails')
        history.replace('/login')
    }

    return (
        <HomeBgContainer>
            <LogoutButtonContainer>
                <LogoutButton type="button" onClick={onClickLogout}>Logout</LogoutButton>
            </LogoutButtonContainer>
            <MainHeading>Welcome to the Dashboard</MainHeading>
        </HomeBgContainer>
    )
}

export default Home