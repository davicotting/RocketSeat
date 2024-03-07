    import React from 'react';
    import { Link } from'react-router-dom';
    import { Container, Brand, Menu, Search, Content, NewNote} from './styles';
    import { Header } from '../../components/header';
    import { ButtonText } from '../../components/buttonText';
    import { HiOutlinePlusSm } from "react-icons/hi";
    import { Input } from '../../components/Input';
    import { IoSearchSharp } from "react-icons/io5";
    import { Section } from '../../components/section'
    import { Note } from '../../components/Note'

    export function Home(){
        return(
            <Container>

                <Brand>

                <h1>Rocketnotes</h1>

                </Brand>

                <Header/>

                <Menu>
                    <li><ButtonText title={`Todos`} $isActive /></li>
                    <li><ButtonText title={`FrontEnd`}/></li>
                    <li><ButtonText title={`Node`}/></li>
                    <li><ButtonText title={`React`}/></li>
                </Menu>

                <Search>
                    <Input icon={IoSearchSharp} placeholder="Pesquisar pelo titulo"></Input>
                </Search>

                <Content>
                    <Section title="Minhas Notas">
                        <Note data={
                            { title: "React na veia!", 
                            tags: 
                            [
                                { id: "1", name: 'react'},
                                { id: "2", name: "nodeJS"}

                            ]
                            }}>
                                

                        </Note>

                        <Note data={
                            { title: "React na veia!", 
                            tags: 
                            [
                                { id: "1", name: 'react'},
                                { id: "2", name: "nodeJS"}

                            ]
                            }}>
                                

                        </Note>

                        <Note data={
                            { title: "React na veia!", 
                            tags: 
                            [
                                { id: "1", name: 'react'},
                                { id: "2", name: "nodeJS"}

                            ]
                            }}>
                                

                        </Note>

                        <Note data={
                            { title: "React na veia!", 
                            
                            tags: 
                            [
                                { id: "1", name: 'react'},
                                { id: "2", name: "nodeJS"}

                            ]
                            }}>
                                

                        </Note> 
                        
                    </Section>
                </Content>

                <NewNote to={"/new"}>
                <HiOutlinePlusSm/> Criar Nota
                </NewNote>



            </Container>
        );
    }