import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import Lista from "../Components/listaProdutos"; // Certifique-se de que o caminho esteja correto

export default function Home() {
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        const buscar = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }
                const data = await response.json();
                setProduto(data);
            } catch (error) {
                console.error(error);
                alert('Erro ao carregar a página :)');
            }
        };
        buscar();
    }, []);

    const ordemAZ = () => setProduto([...produto].sort((a, b) => a.title.localeCompare(b.title)));
    const ordemZA = () => setProduto([...produto].sort((a, b) => b.title.localeCompare(a.title)));
    const MenorPreco = () => setProduto([...produto].sort((a, b) => a.price - b.price));
    const MaiorPreco = () => setProduto([...produto].sort((a, b) => b.price - a.price));

    return (
        <>
            <h1>Lista de Produtos</h1>
            <div>
                <button onClick={ordemAZ}>Listar de A a Z</button>
                <button onClick={ordemZA}>Listar de Z a A</button>
                <button onClick={MenorPreco}>Listar por Menor Preço</button>
                <button onClick={MaiorPreco}>Listar por Maior Preço</button>
            </div>
            <Lista lista={produto} />
        </>
    );
}
