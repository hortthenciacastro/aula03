import { useEffect, useState } from "react";
import ListarProdutos from "../components/ListarProdutos";

export default function Home(){
       const [lista, setLista] = useState([]);

useEffect(()=>{
    const receberListaProdutos= async()=>{
        try{
            const resposta= await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
        setLista(dados);
        } catch(erro){
          alert("A conexão com a API falhou!");
        }
    }
    receberListaProdutos();
},[]);

return(
    <>
    <h1>Lista de Produtos</h1>
    <ListarProdutos produtos={lista}/>
            </>
);
}