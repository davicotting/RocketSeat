
    import {Container, User, UserText, Profile} from './styles';
    import { IoMdPower } from "react-icons/io";

    export function Header(){
        return(
            <Container>
                <User>
                    <Profile to={"/profile"}>
                    <img src="https://github.com/davicotting.png" alt="" />
                    </Profile>
                    
                    <UserText>
                    <h3>Bem vindo,</h3>
                    <h2>Davi Cotting</h2>
                    </UserText>

                   
                </User>

                <IoMdPower/>
            </Container>
        )
    }