"use strict";
var Colors;
(function (Colors) {
    Colors["SCG"] = "spring_clear_green";
    Colors["WG"] = "wide_green";
    Colors["CG"] = "clear_green";
    Colors["DG"] = "deep_green";
    Colors["RDG"] = "really_deep_green";
})(Colors || (Colors = {}));
class Ellipsis_BG {
    x_position;
    y_position;
    width_mut;
    height_mut;
    color;
    constructor(width_mut = "150px", height_mut = "100px", x_position = "80vh", y_position = "80vh", color = Colors.DG) {
        this.width_mut = width_mut;
        this.height_mut = height_mut;
        this.x_position = x_position;
        this.y_position = y_position;
        this.color = color;
    }
    get_width_mut() { return this.width_mut; }
    get_height_mut() { return this.height_mut; }
    get_x_position() { return this.x_position; }
    get_y_position() { return this.y_position; }
    get_color() { return this.color; }
}
const Ellipse_1 = new Ellipsis_BG("25rem", "10rem", "20vh", "20vh", Colors.RDG);
const Ellipse_2 = new Ellipsis_BG("3rem", "2rem", "50vh", "70vh", Colors.CG);
function apply_Ellipses() {
    const container = document.getElementById('ellipses-container'); // Balise conteant cette Classe auquel nous allons ajouter du contenu
    if (container) {
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
        ellipse_1.style.backgroundColor = 'var(--' + Ellipse_1.get_color() + ')';
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
        ellipse_2.style.backgroundColor = 'var(--' + Ellipse_2.get_color() + ')';
        ellipse_2.style.position = 'absolute';
        container.appendChild(ellipse_1);
        container.appendChild(ellipse_2);
        console.log('EllipsesLoaded');
    }
    else {
        console.log('EllipsesNotLoaded');
    }
}
window.addEventListener('EllipsesLoaded', apply_Ellipses);
apply_Ellipses();
