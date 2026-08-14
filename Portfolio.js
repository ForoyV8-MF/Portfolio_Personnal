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

class CanonFading extends HTMLElement
{
    constructor()
    {
        super(); // Il faut forcément dériver de HTML Element

        this.infoCards = document.querySelectorAll('.info-card-template'); // Sélectionne toutes les balises avec la classe de style correspondante
        this.setUpObserver();
    }

    setUpObserver()
    {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    this.AppearingAnimation(entry, observer); 
                })
            }, {threshold : 0.5} // Pourcentage d'exposition pour apparition
        );

        this.infoCards.forEach(card => {observer.observe(card);});
    }

    AppearingAnimation(entry, observer)
    {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('fade-In-Loading');
            observer.unobserve(entry.target);
        }
    }
}

// Définit la balise correspondante comme customisée
customElements.define('bouton-requin', SharkLogo);
customElements.define('header-main', HeaderMain);
customElements.define('info-card', CanonFading);