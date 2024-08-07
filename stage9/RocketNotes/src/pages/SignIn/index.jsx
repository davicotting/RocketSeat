
    import { Link } from 'react-router-dom';
    import { Container, Form, Background} from './styles';
    import { Input } from '../../components/Input';
    import { Button } from '../../components/button';

    import { IoIosMail, IoIosLock} from "react-icons/io";

    import { useContext } from 'react';
    import { myContext } from '../../myContext';

    export function SignIn(){

        const data = useContext(myContext);

        function showData(){
            console.log(data);
        }

        return(
            <Container>
                <Form>
                   <h1>Rocket Notes</h1>
                   <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                    <h2>Faça seu login</h2>
                   <Input 
                   icon={IoIosMail} placeholder={"E-mail"} type="E-mail"/>
                   <Input icon={IoIosLock} placeholder={"Senha"} type="password"/>

                   <Button title={"Entrar"} onClick={showData}/>

                    <Link to={'/register'}>
                    Criar conta
                    </Link>

    
                </Form>

                

                <Background/>
            </Container>
        )
    }