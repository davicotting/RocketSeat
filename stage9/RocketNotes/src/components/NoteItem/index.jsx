
    import { IoIosAdd, IoIosClose } from "react-icons/io";
    import { Container } from './styles';

    export function NoteItem({ $isNew, ...rest}){
        return(
            <Container $isNew={$isNew}>

                <input 
                type="text" 
                // value={value}
                readOnly={!$isNew}
                />

                <button
                // onClick={OnClick} 
                type="button">
                    { $isNew ? <IoIosAdd/> : <IoIosClose/> }
                </button>


            </Container>
        )
    }

