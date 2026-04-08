import "../styles/Index.scss"
import logo from "../assets/briconnect3.png"
import screen from "../assets/screen1.png"
import screen2 from "../assets/screen2.png"

function Index(){

    return <div className="blocpage__home">

<h1>TROUVER UN BRICOLEUR N'A JAMAIS ETE AUSSI SIMPLE</h1>
        <article className="pro">
            <aside>
            <h2>Vous êtes bricoleur et cherchez des missions près de chez vous?</h2>
            <h3>Trouvez des missions selon vos compétences</h3>
            </aside>
            <img src={screen} className="screen" alt="capture d'ecran" />
        </article>
        <article className="client">
            <aside>
            <h2>Vous cherchez un artisan pour réaliser des travaux chez vous?</h2>
            <h3>
    Publiez votre demande et recevez des propositions rapidement.
  </h3>
  </aside>
            <img src={screen2} className="screen" alt="capture d'ecran" />
        </article>
        </div>

}

export default Index