import car1 from "public/images/vehicles/cars/fiat-punto/punto-1.jpeg";
import car2 from "public/images/vehicles/cars/fiat-punto/punto-2.jpeg";
import car3 from "public/images/vehicles/cars/fiat-punto/punto-3.jpeg";
import car4 from "public/images/vehicles/cars/fiat-punto/punto-4.jpeg";
import car5 from "public/images/vehicles/cars/fiat-punto/punto-5.jpeg";

const cars = [
    {
        id: 1,
        title: "Fiat Punto",
        year: 2012,
        price: 4500,
        mileage: 95000,
        fuel: "Diesel",
        transmission: "Manuale",
        images: [car1, car2, car3, car4, car5],
        description:
            "Fiat Punto in ottime condizioni, autocarro 1300 cv 90 cv.",
        features: ["Radio", "Clima", "Sensori Parcheggio"],
    },
];

export default cars;
