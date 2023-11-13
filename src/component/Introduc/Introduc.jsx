import './Introduc.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Intro = () => {

    const affiche = [
        { image: "/mario.jpg", titre: "SUPER MARIO", description: "vivre les aventures de mario et lugi. Super Mario est une série de jeux de plateforme créée par Nintendo mettant en vedette leur mascotte, Mario. C'est la série centrale de la grande franchise Mario. Au moins un jeu Super Mario est sorti sur toutes les principales consoles de jeux vidéo Nintendo." },
        { image: "/sonic.jpg", titre: "SONIC LE REBELLE", description: "depasser les limites avec sonic. Sonic Adventure 2 est un jeu de plateforme de 2001 développé par Sonic Team USA et publié par Sega pour Dreamcast. Il présente deux histoires du bien contre le mal : Sonic the Hedgehog," },
        { image: "/adventure.jpg", titre: "ADVENTURE TIME", description: "plongez vous dans un univers completement degeanté.Finn, douze ans, combat le mal au pays d'Ooo. Aidé de son chien magique, Jake, Finn parcourt le pays d'Ooo pour redresser les torts et combattre le mal. Habituellement, ce mal se présente sous la forme du Roi des Glaces, qui est à la recherche d’une épouse. Il a décidé qu'il devrait épouser la princesse Bubblegum, même si elle ne le veut pas" },
        { image: "/storm.jpg", titre: "NARUTO STORM", description: "suivre sa volonté et réaliser ses rêves. Naruto est une série de mangas japonais écrit et illustré par Masashi Kishimoto. Il raconte l'histoire de Naruto Uzumaki, un jeune ninja qui cherche la reconnaissance de ses pairs et rêve de devenir l'Hokage, le chef de son village." },
        { image: "/dbzbudokai.jpg", titre: "DBZ BUDOKAI", description: "l'esprit du combat c'est rélevé à chaque fois de nouveau défis.`Dragon Ball Z` suit les aventures de Goku qui, aux côtés des Z Warriors, défend la Terre contre le mal. Les aventures d'action sont divertissantes et renforcent le concept du bien contre le mal.  " },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    return (
        <div className="Intro-content">
            <div style={{ textAlign: 'center', margin: '20px', fontWeight: 'black' }}>
                <h1 style={{ fontSize: '30px' }}>Soyez informer de nos derniers actualités jeux et Retrogaming <span>🍄🏰🏠🏡</span></h1>
            </div>
            <div className='carroussel-contener'>
                <div className='carroussel-content'>
                    <Slider {...settings}>
                        {
                            affiche.map((elt, index) => (
                                <div className='image-detail' key={index}>
                                    <div id='imag'>
                                        <img src={elt.image} alt="" />
                                    </div>
                                    <div className='detail-img-card'>
                                        <div className='detail-img'>
                                            <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>{elt.titre}</h1>
                                            <p>{elt.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Intro;