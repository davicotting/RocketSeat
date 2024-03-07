
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Header } from '../../components/header';
    import { Container, Form } from './styles';
    import { Input } from '../../components/Input';
    import { Section } from '../../components/section';
    import { NoteItem } from '../../components/NoteItem';
    import { TextArea } from '../../components/TextArea';
    import { Button } from '../../components/button';

    export function New(){
        return(
            <Container>

                <Header/>

                <main>
                    <Form>
                        <header>
                            <h1>Criar nota</h1>
                            <Link to={"/"}>
                            Voltar
                            </Link>
                        </header>

                        <Input placeholder="Título" icon={false}>
                        
                        </Input>

                        <TextArea value={""} placeholder="Observações"/>

                        <Section title='Links uteis' >
                            
                            <NoteItem $isNew={false} />
                            <NoteItem $isNew/>
                            
                        </Section>

                        <Section title="Marcadores">

                            <div className="tags">
                            <NoteItem $isNew={false} />
                            <NoteItem $isNew/>
                            </div>
                        </Section>

                        <Button title="Salvar">

                        </Button>
                    </Form>
                </main>

            </Container>
        )
    }