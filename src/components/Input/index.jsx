import { useContext } from "react";
import { AuthProvider } from "../../hooks/auth";
import { ContainerInput } from "./style";

export function Input({ icon:Icon,OrderId ,...rest  }){
 
    return(
        <ContainerInput>
            { Icon && <Icon size={20} /> }
            <input {...rest} />
        </ContainerInput>
    )
}