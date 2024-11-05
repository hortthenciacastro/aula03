  import styles from '../styles/listaProdutos.module.css'
  export default function ListaProdutos({produtos}) {
    return(
    <>
    <ul>
      <h1 className={styles.produto}>Lista de Produto</h1>
      <div className={styles.home}
        {produtos.map(produto => (
        <li key={produtos.id}>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <h3>{produto.price}</h3>
            <img src={produto.image} alt={produto.title} width={100}/>
        </li>
            ))}
        </div>
    </ul>
    </>
    );
  }
