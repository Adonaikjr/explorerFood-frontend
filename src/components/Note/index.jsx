import { Tags } from "../Tags";
import { ContainerNotes } from "./styled";

export function Note({ data, ...rest }){
    return(
        <ContainerNotes>
            <h1> {data.title} </h1>
                {data.tags &&
                <footer>
                    {data.tags.map(tag => 
                        <Tags key={tag.id} title={tag.name}/>)}
                </footer>}
        </ContainerNotes>
    )
}