import './footer.css';
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
    const socialLinks = [
        {
            icon: <Github className="h-5 w-5" />,
            name: "GitHub",
            url: "https://github.com/AndrewRivaldoDeAlbuquerque",
        },
        {
            icon: <Linkedin className="h-5 w-5" />,
            name: "LinkedIn", 
            url: "https://www.linkedin.com/in/andrew-rivaldo-10a17a206/",
        },
        {
            icon: <Mail className="h-5 w-5" />,
            name: "Email",
            url: "mailto:Andrewalbuquerquealves@gmail.com",
        }
    ];

    return (
        <footer className="footer-fixo">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="nome">Andrew Alves</h3>
                    <p>
                        Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis.
                        Especializado em tecnologias modernas e sempre em busca de novos desafios.
                    </p>
                </div>

                <div className="footer-section">
                    <h5>Localização</h5>
                    <p>📍 Recife, PE - Brasil</p>
                    <p>💼 Disponível para novos projetos</p>
                    <p>🌐 Trabalho remoto e presencial</p>
                </div>

                <div className="footer-section">
                    <h5 className="contato">Contato</h5>
                    <div className="space">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                title={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Andrew Alves. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;