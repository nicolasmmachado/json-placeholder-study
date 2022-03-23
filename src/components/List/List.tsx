type PropList = {
    list: { title: string, body: string, id: number, userID: number }
}

export const NewList = ({list}: PropList) => {
    return(
        <div>
            <p>Titulo: {list.title}</p>
            <p>ID: {list.id}</p>
            <p>ID de usuário: {list.userID}</p>
            <p>Corpo: {list.body}</p>
        </div>
    )
}