import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import './Login.css';

function Login() {




    return (
        <>
       
            <div class="container-cadastro">

                <div class="coluna-form">
                    <div class="form-secao">
                        <h2>Faça seu login </h2>
                        <div class="email">
                            <label for="email">E-mail:</label>
                            <input type="email" class="form-control" id="email" placeholder="Digite seu email" name="email" />
                        </div>
                        <div class="senha">
                            <label for="pwd">Senha:</label>
                            <input type="senha" class="form-control" id="pwd" placeholder="Digite sua senha" name="pswd" />
                        </div>
                    </div>

                    <button className="btn">
                        ACESSAR
                    </button>
                    <a className='linkEsq' href="#">Esqueceu a senha?</a>

                </div>

                <div class="divisor">
                    <span class="divisor-texto">ou</span>
                </div>

                <div class="coluna-social">
                    <h2>Cadastrar utilizando uma rede social</h2>

                    <a href="#" class="btn-social google">
                        <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/google-color.png" alt="" />
                        Continuar com o Google
                    </a>
                    <a href="#" class="btn-social facebook">
                        <img src="https://www.logosvg.com.br/logos/facebook-13.svg" alt="" />
                        Continuar com o Facebook
                    </a>
                    <a href="#" class="btn-social linkedin">
                        <img src="https://images.seeklogo.com/logo-png/39/1/linkedin-new-2020-logo-png_seeklogo-393964.png" alt="" />
                        Continuar com o LinkedIn
                    </a>

                </div>
            </div>
       
        </>
    )

}

export default Login;