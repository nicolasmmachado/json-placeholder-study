import axios from "axios";

const BASE = "https://jsonplaceholder.typicode.com";

export const api =  {
    loadPosts: async () => { 
        /*let response = await fetch(`${BASE}/posts`);
        let json = await response.json();
        return json*/

        let response = await axios.get(`${BASE}/posts`);
        return response.data;
    },
    addPost: async (title: string, body: string, userId: number) => {
        /*let response = await fetch(`${BASE}/posts`, {
            method:"POST",
            body: JSON.stringify({
            title,
            body,
            userId
            }),
            headers:{
            "Content-Type" : "application/json"
            }
        });
        let json = await response.json();
        return json*/

        let response = await axios.post(`${BASE}/posts`, {
            title, body, userId
        });
        return response.data;
    }
}