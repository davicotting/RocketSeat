
    import React from "react";
    import { Container } from './styles';

    export function Tags({title, ...rest}){
        return(
            <Container {...rest}>
                { title }
            </Container>
        )
    }
