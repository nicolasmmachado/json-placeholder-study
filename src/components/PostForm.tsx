import { useState } from "react";

type Props = {
    onAdd: (title: string, body: string) => void
}

export const NewPost = ({ onAdd }: Props) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handlePost = () => {
        if(title && body) {
            onAdd(title, body);
        } else {
            alert("Favor preencher ambos os campos.")
        }
    }

    return(
        <fieldset>
            <input type="text" placeholder="Título" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <input type="text" placeholder="Corpo" onChange={(e) => setBody(e.target.value)} value={body}/>
            <button onClick={handlePost}>Enviar</button>
        </fieldset>
    )
}