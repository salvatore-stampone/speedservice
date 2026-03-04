import fiat500Red1 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-1.jpeg";
import fiat500Red10 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-10.jpeg";
import fiat500Red11 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-11.jpeg";
import fiat500Red12 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-12.jpeg";
import fiat500Red13 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-13.jpeg";
import fiat500Red14 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-14.jpeg";
import fiat500Red2 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-2.jpeg";
import fiat500Red3 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-3.jpeg";
import fiat500Red4 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-4.jpeg";
import fiat500Red5 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-5.jpeg";
import fiat500Red6 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-6.jpeg";
import fiat500Red7 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-7.jpeg";
import fiat500Red8 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-8.jpeg";
import fiat500Red9 from "public/images/vehicles/cars/fiat-500-red/fiat-500-red-9.jpeg";
import red1 from "public/images/vehicles/cars/fiat-panda-red/red-1.jpg";
import red2 from "public/images/vehicles/cars/fiat-panda-red/red-2.jpg";
import red3 from "public/images/vehicles/cars/fiat-panda-red/red-3.jpg";
import red4 from "public/images/vehicles/cars/fiat-panda-red/red-4.jpg";
import red5 from "public/images/vehicles/cars/fiat-panda-red/red-5.jpg";
import red6 from "public/images/vehicles/cars/fiat-panda-red/red-6.jpg";
import red7 from "public/images/vehicles/cars/fiat-panda-red/red-7.jpg";
import red8 from "public/images/vehicles/cars/fiat-panda-red/red-8.jpg";
import yellow1 from "public/images/vehicles/cars/fiat-panda-yellow/yellow-1.jpg";
import yellow10 from "public/images/vehicles/cars/fiat-panda-yellow/yellow-10.jpg";
import yellow2 from "public/images/vehicles/cars/fiat-panda-yellow/yellow-2.jpg";
import yellow3 from "public/images/vehicles/cars/fiat-panda-yellow/yellow-3.jpg";
import yellow4 from "public/images/vehicles/cars/fiat-panda-yellow/yellow-4.jpg";
import yellow5 from "public/images/vehicles/cars/fiat-panda-yellow/yellow-5.jpg";
import yellow6 from "public/images/vehicles/cars/fiat-panda-yellow/yellow-6.jpg";
import yellow7 from "public/images/vehicles/cars/fiat-panda-yellow/yellow-7.jpg";
import yellow8 from "public/images/vehicles/cars/fiat-panda-yellow/yellow-8.jpg";
import yellow9 from "public/images/vehicles/cars/fiat-panda-yellow/yellow-9.jpg";
import car1 from "public/images/vehicles/cars/fiat-punto/punto-1.jpeg";
import car2 from "public/images/vehicles/cars/fiat-punto/punto-2.jpeg";
import car3 from "public/images/vehicles/cars/fiat-punto/punto-3.jpeg";
import car4 from "public/images/vehicles/cars/fiat-punto/punto-4.jpeg";
import car5 from "public/images/vehicles/cars/fiat-punto/punto-5.jpeg";
import opelAgila1 from "public/images/vehicles/cars/opel-agila/opel-agila-1.jpeg";
import opelAgila2 from "public/images/vehicles/cars/opel-agila/opel-agila-2.jpeg";
import opelAgila3 from "public/images/vehicles/cars/opel-agila/opel-agila-3.jpeg";
import opelAgila4 from "public/images/vehicles/cars/opel-agila/opel-agila-4.jpeg";
import opelAgila5 from "public/images/vehicles/cars/opel-agila/opel-agila-5.jpeg";
import opelAgila6 from "public/images/vehicles/cars/opel-agila/opel-agila-6.jpeg";
import type { Vehicle } from "../types";
import { sortWithSoldLast } from "../utils";

const cars: Vehicle[] = [
    {
        id: 1,
        title: "Fiat Punto",
        year: 2012,
        price: 4500,
        mileage: 95000,
        fuel: "Diesel",
        transmission: "Manuale",
        images: [car3, car1, car2, car4, car5],
        description:
            "Fiat Punto in ottime condizioni, autocarro 1300 cv 90 cv.",
    },
    {
        id: 2,
        title: "Fiat Panda Rossa",
        year: 2004,
        price: 2990,
        mileage: 134000,
        fuel: "Benzina",
        transmission: "Manuale",
        images: [red1, red2, red3, red4, red5, red6, red7, red8],
        description:
            "Fiat Panda rossa in ottime condizioni, cilindrata 1.2 L, cambio manuale, benzina.",
        sold: true,
    },
    {
        id: 3,
        title: "Fiat Panda Gialla",
        year: 2006,
        price: 2990,
        mileage: 215000,
        fuel: "Diesel",
        transmission: "Manuale",
        images: [
            yellow1,
            yellow2,
            yellow3,
            yellow4,
            yellow5,
            yellow6,
            yellow7,
            yellow8,
            yellow9,
            yellow10,
        ],
        description:
            "Fiat Panda gialla in ottime condizioni, cilindrata 1.3 L, cambio manuale, diesel.",
        sold: true,
    },
    {
        id: 4,
        title: "Fiat 500 1.2 Benzina",
        year: 2010,
        price: 4390,
        mileage: 187000,
        fuel: "Benzina",
        transmission: "Manuale",
        images: [
            fiat500Red1,
            fiat500Red2,
            fiat500Red3,
            fiat500Red4,
            fiat500Red5,
            fiat500Red6,
            fiat500Red7,
            fiat500Red8,
            fiat500Red9,
            fiat500Red10,
            fiat500Red11,
            fiat500Red12,
            fiat500Red13,
            fiat500Red14,
        ],
        description:
            "Fiat 500 1.2 benzina full optional. Chiusura centralizzata, tettuccio apribile, comandi a volante, aria condizionata e servosterzo. Frizione appena sostituita. Gommata doppia, due chiavi, interni come nuovi, carrozzeria in ottime condizioni.",
        sold: true,
    },
    {
        id: 5,
        title: "Opel Agila 2008",
        year: 2008,
        price: 2990,
        mileage: 214000,
        fuel: "Benzina",
        transmission: "Manuale",
        images: [
            opelAgila1,
            opelAgila2,
            opelAgila3,
            opelAgila4,
            opelAgila5,
            opelAgila6,
        ],
        description:
            "Opel Agila dicembre 2008, 214.000 km. Tagliando effettuato. Full optional: chiusura centralizzata, aria condizionata, servosterzo, vetri elettrici. Gommata in buone condizioni, disponibile per qualsiasi prova.",
        sold: true,
    },
];

export default sortWithSoldLast(cars);
