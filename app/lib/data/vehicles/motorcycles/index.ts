import monster1 from "public/images/vehicles/motorcycles/ducati-monster/monster-1.jpg";
import monster2 from "public/images/vehicles/motorcycles/ducati-monster/monster-2.jpg";
import monster3 from "public/images/vehicles/motorcycles/ducati-monster/monster-3.jpg";
// import monster4 from "public/images/vehicles/motorcycles/ducati-monster/monster-4.jpg";
import monster5 from "public/images/vehicles/motorcycles/ducati-monster/monster-5.jpg";
// import motorcycle3 from "public/images/vehicles/motorcycles/ducati-monster/moto-3.jpeg";

const motorcycles = [
    {
        id: 1,
        title: "Ducati Monster S2R 1000",
        year: 2007,
        price: 3250,
        mileage: 70000,
        engine: "992cc",
        fuel: "Benzina",
        transmission: "Manuale",
        images: [monster1, monster2, monster3, monster5],
        description:
            "Splendida Ducati Monster S2R 1000 rossa, tenuta in ottime condizioni. Benzina. Cambio manuale. Tagliando completo, olio freni e pastiglie nuove Brembo.",
        // features: ["Tagliandata", "Olio freni e pastiglie nuove Brembo"],
    },
];

export default motorcycles;
