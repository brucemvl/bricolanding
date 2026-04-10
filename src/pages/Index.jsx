import "../styles/Index.scss"
import screen from "../assets/screen1.png"
import screen2 from "../assets/screen2.png"
import screen3 from "../assets/screen3.png"
import screen4 from "../assets/screen4.png"
import screen5 from "../assets/screen5.png"
import apple from "../assets/app.webp"
import android from "../assets/google-play.png"

function Index(){

    return <div className="blocpage__home">

<h1>TROUVER UN BRICOLEUR N'A JAMAIS ETE AUSSI SIMPLE</h1>
        <article className="pro">
            <aside>
            <h2>Vous êtes bricoleur et cherchez des missions près de chez vous?</h2>
            <h3>Trouvez des missions selon vos compétences</h3>
            </aside>
            <img src={screen} className="screen" alt="capture d'ecran coté bricoleur" />
        </article>

        <article className="client">
            <aside>
            <h2>Vous cherchez un artisan pour réaliser des travaux chez vous?</h2>
            <h3>
    Publiez votre demande et recevez des propositions rapidement.
  </h3>
  </aside>
            <img src={screen2} className="screen" alt="capture d'ecran poster une mission" />
        </article>

        <article className="accord">
            <aside>
            <h2>Trouvez le profil idéal</h2>
            <h3>
    Et mettez vous d'accord avant d'echanger vos coordonnées
  </h3>
  </aside>
  <div>
            <img src={screen3} className="screen" alt="capture d'ecran profil bricoleur" />
            <img src={screen4} className="screen" alt="capture d'ecran details mission et conversation" />
            </div>
        </article>

        <article className="telechargez">
          <img src={screen5} className="screen" alt="capture d'ecran" /> 
  <aside>
    <h2>Telechargez l'appli des maintenant</h2>
    <div>
            <a href="https://apps.apple.com/fr/app/briconnect/id6761682000"><img src={apple} className="apple" alt="bouton appstore" /></a>
            <img src={android} className="android" alt="bouton google play store" />
            </div>
            </aside>
        </article>

        </div>

}

export default Index