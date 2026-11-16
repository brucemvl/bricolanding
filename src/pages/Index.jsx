import apple from "../assets/app.webp";
import screen from "../assets/convert.webp";
import screen2 from "../assets/convert_1.webp";
import screen3 from "../assets/convert_2.webp";
import screen4 from "../assets/convert_3.webp";
import screen5 from "../assets/convert_4.webp";
import screen6 from "../assets/convert_5.webp";
import screen7 from "../assets/convert_6.webp";
import android from "../assets/google-play.png";
import qrcode from "../assets/qrcode.png";
import "../styles/Index.scss";
import CategoriesCarousel from "../components/CategoriesCarousel";

function Index() {
    return (
        <main className="blocpage__home">

            {/* HERO */}
            <section className="hero">
                <div className="hero__content">
                    <span className="hero__tag">BIENVENUE SUR BRICONNECT</span>

                    <h1>
                        Vos travaux,
                        <span> en toute simplicité.</span>
                    </h1>

                    <p>
                        Trouvez un professionnel près de chez vous ou développez
                        votre activité en réalisant des missions adaptées à vos compétences.
                    </p>

                    <div className="hero__actions">
                        <a href="#telechargement" className="button button--primary">
                            Télécharger l'application
                        </a>
                        <a href="#comment-ca-marche" className="button button--secondary">
                            Découvrir Briconnect
                        </a>
                    </div>

                    <div className="hero__reassurance">
                        <span>✓ Des professionnels à proximité</span>
                        <span>✓ Des échanges simplifiés</span>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__decoration"></div>
                    <img src={screen5} alt="Aperçu de l'application Briconnect" />
                </div>
            </section>

            {/* CATEGORIES */}
            <section className="categories">
                <div className="section-heading">
                    <span>LES COMPÉTENCES</span>
                    <h2>Un besoin, une compétence</h2>
                    <p>
                        Découvrez les différentes catégories de services disponibles
                        sur Briconnect.
                    </p>
                </div>
                <CategoriesCarousel />
            </section>

            {/* DOUBLE CIBLE */}
            <section className="parcours">
                <div className="parcours__card parcours__card--pro">
                    <div>
                        <span className="section-label">CÔTÉ PROFESSIONNEL</span>
                        <h2>Développez votre activité</h2>
                        <p>
                            Vous êtes bricoleur ou artisan ? Trouvez des missions
                            près de chez vous et valorisez vos compétences.
                        </p>
                    </div>
                    <img src={screen} alt="Espace professionnel Briconnect" loading="lazy" />
                </div>

                <div className="parcours__card parcours__card--client">
                    <div>
                        <span className="section-label">CÔTÉ PARTICULIER</span>
                        <h2>Concrétisez vos projets</h2>
                        <p>
                            Publiez votre demande de travaux et recevez des
                            propositions de professionnels adaptés à votre besoin.
                        </p>
                    </div>
                    <img src={screen2} alt="Publication d'une demande de travaux" loading="lazy" />
                </div>
            </section>

            {/* FONCTIONNEMENT */}
            <section className="fonctionnement" id="comment-ca-marche">
                <div className="section-heading">
                    <span>COMMENT ÇA MARCHE ?</span>
                    <h2>Votre projet, étape par étape</h2>
                    <p>
                        Briconnect facilite la mise en relation entre particuliers
                        et professionnels.
                    </p>
                </div>

                <div className="etapes">
                    <article className="etape">
                        <div className="etape__number">01</div>
                        <div className="etape__text">
                            <h3>Trouvez le bon profil</h3>
                            <p>
                                Consultez les profils et découvrez les compétences
                                des professionnels qui vous contactent.
                            </p>
                        </div>
                        <div className="etape__images">
                            <img src={screen4} alt="Détails d'une mission" loading="lazy" />
                            <img src={screen3} alt="Profil d'un professionnel" loading="lazy" />
                        </div>
                    </article>

                    <article className="etape etape--reverse">
                        <div className="etape__number">02</div>
                        <div className="etape__text">
                            <h3>Échangez simplement</h3>
                            <p>
                                Discutez directement via la messagerie et mettez-vous
                                d'accord sur les modalités de votre projet.
                            </p>
                        </div>
                        <div className="etape__images">
                            <img src={screen6} alt="Messagerie Briconnect" loading="lazy" />
                        </div>
                    </article>

                    <article className="etape">
                        <div className="etape__number">03</div>
                        <div className="etape__text">
                            <h3>Faites votre choix en confiance</h3>
                            <p>
                                Consultez les notes et les commentaires pour vous
                                aider à choisir le professionnel qui vous correspond.
                            </p>
                        </div>
                        <div className="etape__images">
                            <img src={screen7} alt="Avis et évaluations des professionnels" loading="lazy" />
                        </div>
                    </article>
                </div>
            </section>

            {/* TELECHARGEMENT */}
            <section className="telechargement" id="telechargement">
                <div className="telechargement__content">
                    <span className="section-label">L'APPLICATION BRICONNECT</span>
                    <h2>Vos projets commencent ici.</h2>
                    <p>
                        Téléchargez Briconnect et trouvez facilement le service
                        ou la mission qu'il vous faut.
                    </p>

                    <div className="telechargement__badges">
                        <a
                            href="https://apps.apple.com/fr/app/briconnect/id6761682000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="store-link"
                        >
                            <span>Télécharger sur</span>
                            <strong>App Store</strong>
                            <img src={apple} alt="" />
                        </a>

                        <a
                            href="https://play.google.com/store/apps/details?id=com.bmdev14.bricoconnect"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="store-link"
                        >
                            <span>Télécharger sur</span>
                            <strong>Google Play</strong>
                            <img src={android} alt="" />
                        </a>
                    </div>
                </div>

                <a
                    href="https://brico-8fih.onrender.com/download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="telechargement__qr"
                >
                    <img src={qrcode} alt="Scanner pour télécharger Briconnect" />
                    <span>Scannez pour télécharger l'application</span>
                </a>
            </section>

        </main>
    );
}

export default Index;