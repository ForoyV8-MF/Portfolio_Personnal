enum Colors
{
    SCG = "spring_clear_green",
    WG = "wide_green",
    CG = "clear_green",
    DG = "deep_green",
    RDG = "really_deep_green"
}

class Ellipsis_BG
{
    private x_position: string;
    private y_position: string;

    private width_mut: string;
    private height_mut: string;

    private color: string;

    constructor
    (
        width_mut: string = "150px", height_mut: string =  "100px",
        x_position: string =  "80vh", y_position: string =  "80vh",
        color = Colors.DG
    )
    {

        this.width_mut = width_mut;
        this.height_mut = height_mut;

        this.x_position = x_position;
        this.y_position = y_position;

        this.color = color;
    }

    get_width_mut(): string { return this.width_mut; }
    get_height_mut(): string { return this.height_mut; }

    get_x_position(): string { return this.x_position; }
    get_y_position(): string { return this.y_position; }

    get_color(): string { return this.color; }
}

const Ellipse_1: Ellipsis_BG = new Ellipsis_BG("25rem", "10rem", "20vh", "20vh", Colors.RDG);
const Ellipse_2: Ellipsis_BG = new Ellipsis_BG("3rem", "2rem", "50vh", "70vh", Colors.CG);

function apply_Ellipses()
{
    const container = document.getElementById('ellipses-container'); // Balise conteant cette Classe auquel nous allons ajouter du contenu

    if(container)
    {
        console.log('EllipsesLoading');

        const ellipse_1 = document.createElement('div');

            ellipse_1.id = "strange-ellipsoid";

            ellipse_1.classList.add('ellipse');
            ellipse_1.classList.add('fade-In-Loading');

            ellipse_1.style.clipPath = 'ellipse(50% 50% at 50% 50%)';

            ellipse_1.style.top = Ellipse_1.get_x_position();
            ellipse_1.style.left = Ellipse_1.get_y_position();

            ellipse_1.style.width = Ellipse_1.get_width_mut();
            ellipse_1.style.height = Ellipse_1.get_height_mut();

            ellipse_1.style.backgroundColor = 'var(--' + Ellipse_1.get_color()+ ')';

            ellipse_1.style.position = 'absolute';

        const ellipse_2 = document.createElement('div');

            ellipse_2.id = "strange-ellipsoid";

            ellipse_2.classList.add('ellipse');
            ellipse_2.classList.add('fade-In-Loading');

            ellipse_2.style.clipPath = 'ellipse(50% 50% at 50% 50%)';

            ellipse_2.style.top = Ellipse_2.get_x_position();
            ellipse_2.style.left = Ellipse_2.get_y_position();

            ellipse_2.style.width = Ellipse_2.get_width_mut();
            ellipse_2.style.height = Ellipse_2.get_height_mut();

            ellipse_2.style.backgroundColor = 'var(--' + Ellipse_2.get_color()+ ')';

            ellipse_2.style.position = 'absolute';

        container.appendChild(ellipse_1);
        container.appendChild(ellipse_2);

        console.log('EllipsesLoaded');
    }
    else
    { console.log('EllipsesNotLoaded'); }
}

window.addEventListener('EllipsesLoaded', apply_Ellipses);

apply_Ellipses();