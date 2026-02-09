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
import { sortWithSoldLast } from "../utils";

const cars = [
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
        // features: ["Radio", "Clima", "Sensori Parcheggio"],
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
];

export default sortWithSoldLast(cars);
