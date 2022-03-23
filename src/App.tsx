import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {NewList} from './components/List';
import { NewPost } from './components/PostForm';
import { api } from './Api';

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    takeInfo();
  },[])

  const takeInfo = async () => {
    try{
      let json = await api.loadPosts();
      setList(json);
      setLoading(false);
    }catch(err){
      alert(`Ocorreu o erro: ${err}`);
    }
  }

  const addPost = async (title: string, body: string) => {
    alert(title +" "+ body);
    let json = await api.addPost(title, body, 1);
    if(json.id){ 
      alert(`Deu certo!`);
      console.log(json);
    }
    else{
      alert(`Algo deu errado!!!`)
    }
  };
  

  return (
    <div>  
      {loading && 
        <div>
          <h1>Carregando...Aguarde</h1>
        </div>
      }
      {!loading && 
        <>
          <NewPost onAdd={addPost} />
          {list.map((item, index) => (
            <NewList list={item} key={index}/>
          ))}
        </>
      }
    </div>
  );
}

export default App;
