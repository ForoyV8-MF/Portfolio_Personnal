class DirectFading extends HTMLElement
{
    constructor()
    {
        super(); // Il faut forcément dériver de HTML Element
        this.classList.add('fade-In-Loading')
    }
}

class SharkLogo extends DirectFading {}
class HeaderMain extends DirectFading {}

class CanonFadingInfoCards extends HTMLElement
{
    constructor()
    {
        super(); // Il faut forcément dériver de HTML Element

        this.infoCards = document.querySelectorAll('.info-card-template'); // Sélectionne toutes les balises avec la classe de style correspondante
        this.setUpObserver();
    }

    setUpObserver()
    {
        const InfoCardsObserver = new IntersectionObserver(
            (entries, InfoCardsObserver) => {
                entries.forEach(entry => {
                    this.AppearingAnimation(entry, InfoCardsObserver); 
                })
            }, {threshold : 0.5} // Pourcentage d'exposition pour apparition
        );

        this.infoCards.forEach(card => {InfoCardsObserver.observe(card);});
    }

    AppearingAnimation(entry, InfoCardsObserver)
    {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('fade-In-Loading');
            InfoCardsObserver.unobserve(entry.target);
        }
    }
}

// Définit la balise correspondante comme customisée
customElements.define('bouton-requin', SharkLogo);
customElements.define('header-main', HeaderMain);
customElements.define('info-card', CanonFadingInfoCards);
