class HeaderTemplate extends HTMLElement
{
    constructor()
    {
        super(); // Il faut forcément dériver de HTML Element

        this.header = document.querySelector('.header-main') // Sélectionne la balise correspondante
        this.classList.add('fade-In-Loading')
    }
}

class InfoCardTemplate extends HTMLElement
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

customElements.define('header-main', HeaderTemplate);
customElements.define('info-card', InfoCardTemplate); // Définit la balise correspondante comme customisée