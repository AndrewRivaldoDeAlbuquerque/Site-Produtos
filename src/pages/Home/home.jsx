
import './home.css';


function Home() {
    return (
        <div>

            <div class="container-fluid p-5 text-white text-center">
                <h1>Site com CRUD completo</h1>
            </div>

            <div class="container mt-5">
                <div class="row">
                    <div class="col-4"> </div>
                    <div class="col-4">
                        <h3>Objetivo</h3>
                        <p>Poder Criar, Ler, Atualizar e Deletar os produtos.
                            Essas funções é a parte fundamental da manipulação de
                            dados em sistemas de banco de dados ao redor do mundo!</p>
                            <div class="col-4"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <h3>Tecnologias Usadas</h3>
                        <h5>Para o front-end foi utilizado:</h5>
                        <p>React, Bootstrap, Css, Html e Javascript</p>
                            <p>Já para o back-end foi utilizado:
                            Java e Spring boot</p>
                        <div class="col-4"></div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Home;