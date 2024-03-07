
    import React from 'react';

    import { Container } from './styles';

    export function ButtonText({title, isActive = false, ...rest}){

        return(
            <Container
            
            $isactive={isActive.toString()}

            {...rest}
            >
            {title}
            </Container>
        )
        
    }

