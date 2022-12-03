import { FiPlus, FiX } from "react-icons/fi";
import { ContainerNoteItem } from "./styled";

export function NoteItem({ isNew, value, onClick, ...rest }){
    return(
        <ContainerNoteItem isNew={isNew}>
            <input type="text"
            value={value}
            readOnly={!isNew}
            {...rest} />

            <button
            type='button'
            onClick={onClick}
            className={isNew ? 'button_add' : 'button_delete'}
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </ContainerNoteItem>
    )
}