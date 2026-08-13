
class InfoCardTemplate extends HTMLElement
{
    constructor(Infocards, oberserver)
    {
        super();

        this.infoCards = document.querySelectorAll('.info-card-template');

        this.observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    this.AppearingAnimation(entry, observer); 
                })
            }, {threshold : 0.5}
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

customElements.define('info', InfoCardTemplate);