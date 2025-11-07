
import Tables from '../../components/Tables/tables';
import './produtos.css';

  /* spellcheck serve para que o navegador nao verifique erros ortograficos nesse campo e consequentemente nao sublinhe o texto*/
function Produtos() {


    return (
        <div className="page-container">
                <div class="cadastrarProdutos">
                    <form action="" method="">

                        <h2>Cadastro de produtos</h2>
                        <div className="nome_Produto">
                            <label for="nomeProduto">Nome do Produto</label>
                            <input type="nomeProduto" spellcheck="false" id="nomeProduto" placeholder="Digite o nome" />
                        </div>
                        <div className="preco_Produto">
                            <label for="precoProduto">Preço do Produto</label>
                            <input type="precoProduto" spellcheck="false" id="precoProduto" placeholder="Digite o preço" /> 
                        </div>
                        <div className="cadastrar">
                            <button className= 'cadastrar'type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            <Tables/>
        </div>
    )

}
export default Produtos;