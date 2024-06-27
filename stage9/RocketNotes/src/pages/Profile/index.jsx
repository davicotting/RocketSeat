
    import { Link } from 'react-router-dom';
    import { Container, Form, Avatar } from './styles';
    import { Button } from '../../components/button'
    import { Input } from '../../components/Input';
    import { IoIosArrowRoundBack, IoMdPerson, IoMdMail, IoIosLock, IoIosCamera} from "react-icons/io";

    export function Profile(){
        return(
            <Container>
                <header>
                    <Link to={"/"}><IoIosArrowRoundBack/></Link>
                </header>

                <Form>

                <Avatar>

                    <img 
                    src="https://github.com/davicotting.png" 
                    alt="Foto do usuario" 
                    />

                    <label htmlFor="avatar">
                        <IoIosCamera/>
                        <input

                        type="file" 
                        id="avatar" 
                        />
                    </label>

                </Avatar>

                    <Input icon={IoMdPerson} placeholder="Nome" type="text"/>
                    <Input icon={IoMdMail} placeholder="E-mail" type="E-mail"/>

                    <Input icon={IoIosLock} placeholder="Senha atual" type="password"/>
                    <Input icon={IoIosLock} placeholder="Nova senha" type="password"/>

                    <Button title={"Salvar"} />

                </Form>

            </Container>
        )
    }