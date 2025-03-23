import "../css/Produtos.css"
import produto1 from "../assets/produtos/produto1.png"
import produto2 from "../assets/produtos/produto2.png"
import produto3 from "../assets/produtos/produto3.png"
import produto4 from "../assets/produtos/produto4.png"

function Produtos() {
  return (
    <div>

      <h1 className="titulo">Produtos</h1>

      <div className="container">

        <div className="cardProduto">
          <img src={produto1} alt="Bola de Futebol - Copa 2014" /> 
            <h1>Bola de Futebol - Copa do Mundo 2014</h1>
            <p className="preco">R$250,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div className="cardProduto">
          <img src={produto2} alt="Camiseta do Melhor Time do Brasil" /> 
            <h1>Camiseta do Melhor Time do Brasil</h1>
            <p className="preco">R$ 120,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div className="cardProduto">
          <img src={produto3} alt="Mochila Paraquedista com Paraquedas" /> 
            <h1>Mochila de Paraquedista com Paraquedas</h1>
            <p className="preco">R$130,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

        <div className="cardProduto">
          <img src={produto4} alt="Um tenis sensacional" /> 
            <h1>Tênis Sensacional, <br /> beleza e qualidade</h1>
            <p className="preco">R$280,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>

      </div>
    </div>
  );
}

export default Produtos;