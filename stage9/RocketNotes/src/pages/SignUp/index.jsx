
    import { Link } from 'react-router-dom';
    import { Container, Form, Background} from './styles';
    import { Input } from '../../components/Input';
    import { Button } from '../../components/button';

    import { IoIosMail, IoIosLock, IoIosPerson} from "react-icons/io";

    export function SignUp(){
        return(
            <Container>
                <Form>
                   <h1>Rocket Notes</h1>
                   <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                    <h2>Crie sua conta</h2>
                    <Input icon={IoIosPerson} placeholder="Nome" type="text">
                    </Input>
                   <Input 
                   icon={IoIosMail} placeholder={"E-mail"} type="E-mail"/>
                   <Input icon={IoIosLock} placeholder={"Senha"} type="password"/>

                   <Button title={"Cadastrar"}/>

                   <Link to="/">
                   Voltar para o login
                   </Link>

    
                </Form>

                

                <Background/>
            </Container>
        )
    }