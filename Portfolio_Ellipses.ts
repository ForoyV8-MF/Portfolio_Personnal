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

    private z_index: number;

    constructor
    (
        width_mut: string = "150px", height_mut: string =  "100px",
        x_position: string =  "80vh", y_position: string =  "80vh",
        color = Colors.DG, Z_INDEX: number = -1
    )
    {
        this.width_mut = width_mut;
        this.height_mut = height_mut;

        this.x_position = x_position;
        this.y_position = y_position;

        this.color = color;
        this.z_index = Z_INDEX;
    }

    get_width_mut(): string { return this.width_mut; }
    get_height_mut(): string { return this.height_mut; }

    get_x_position(): string { return this.x_position; }
    get_y_position(): string { return this.y_position; }

    get_color(): string { return this.color; }

    get_z_index(): number { return this.z_index; }
}

const Ellipse_1: Ellipsis_BG = new Ellipsis_BG("140rem", "80rem", "-20vh", "-45vh", Colors.RDG, 10);
const Ellipse_2: Ellipsis_BG = new Ellipsis_BG("100rem", "60rem", "-30vh", "60vh", Colors.SCG, 40);
const Ellipse_3: Ellipsis_BG = new Ellipsis_BG("90rem", "50rem", "30vh", "65vh", Colors.WG, 30);

const Ellipse_4: Ellipsis_BG = new Ellipsis_BG("140rem", "80rem", "120vh", "-45vh", Colors.SCG, 60);
const Ellipse_5: Ellipsis_BG = new Ellipsis_BG("110rem", "55rem", "150vh", "100vh", Colors.RDG, 60);
const Ellipse_6: Ellipsis_BG = new Ellipsis_BG("100rem", "60rem", "220vh", "-40vh", Colors.WG, 30);
const Ellipse_7: Ellipsis_BG = new Ellipsis_BG("130rem", "65rem", "250vh", "60vh", Colors.SCG, 60);
const Ellipse_8: Ellipsis_BG = new Ellipsis_BG("150rem", "80rem", "320vh", "-45vh", Colors.RDG, 90);

const container = document.getElementById('ellipses-container'); // Balise conteant cette Classe auquel nous allons ajouter du contenu

function apply_Ellipse(Ellipse: Ellipsis_BG): void
{
    if(container)
    {
        console.log('Ellipse Loading');

        const ellipse_element = document.createElement('div');

        ellipse_element.style.clipPath = 'ellipse(50% 50% at 50% 50%)';

        ellipse_element.id = "strange-ellipsoid";
        ellipse_element.style.position = 'fixed';
        ellipse_element.style.overflow = 'hidden';

        ellipse_element.classList.add('ellipse');
        ellipse_element.classList.add('fade-In-Loading');

        ellipse_element.style.top = Ellipse.get_x_position();
        ellipse_element.style.left = Ellipse.get_y_position();

        ellipse_element.style.width = Ellipse.get_width_mut();
        ellipse_element.style.height = Ellipse.get_height_mut();

        ellipse_element.style.backgroundColor = 'var(--' + Ellipse.get_color()+ ')';

        ellipse_element.style.zIndex = Ellipse.get_z_index().toString();

        container.appendChild(ellipse_element);

        console.log('Ellipse Loaded');
    }
    else
    { console.log('EllipsesNotLoaded'); }
}

apply_Ellipse(Ellipse_1);
apply_Ellipse(Ellipse_2);
apply_Ellipse(Ellipse_3);
apply_Ellipse(Ellipse_4);
apply_Ellipse(Ellipse_5);
apply_Ellipse(Ellipse_6);
apply_Ellipse(Ellipse_7);
apply_Ellipse(Ellipse_8);
