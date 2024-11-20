import React from 'react';

export default function Lista({ lista }) {
    if (lista.length === 0) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {lista.map((produto) => (
                    <li key={produto.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                        <h2>{produto.title}</h2>
                        <img src={produto.image} alt={produto.title} width="100" />
                        <p><strong>Descrição:</strong> {produto.description}</p>
                        <p><strong>Categoria:</strong> {produto.category}</p>
                        <p><strong>Preço:</strong> R$ {produto.price.toFixed(2)}</p>
                        <p><strong>Avaliação:</strong> {produto.rating.rate} ({produto.rating.count} avaliações)</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

