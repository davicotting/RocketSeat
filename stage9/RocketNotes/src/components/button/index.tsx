    import React from 'react'
    import { Container } from './styles'


    export function Button({title}){
        return(
            <Container
            type='button'
            >
                {title}
            </Container>
        )
    }