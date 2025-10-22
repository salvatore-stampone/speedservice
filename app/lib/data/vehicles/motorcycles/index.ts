import motorcycle1 from "public/images/vehicles/motorcycles/ducati-monster/moto-1.jpeg";
import motorcycle2 from "public/images/vehicles/motorcycles/ducati-monster/moto-2.jpeg";
import motorcycle3 from "public/images/vehicles/motorcycles/ducati-monster/moto-3.jpeg";
import motorcycle4 from "public/images/vehicles/motorcycles/ducati-monster/moto-4.jpeg";

const motorcycles = [
    {
        id: 1,
        title: "Ducati Monster S2R 1000",
        year: 2007,
        price: 3900,
        mileage: 70000,
        engine: "992cc",
        transmission: "Manuale",
        images: [motorcycle1, motorcycle2, motorcycle3, motorcycle4],
        description:
            "Splendida Ducati Monster S2R 1000, tenuta in ottime condizioni. Tagliando completo, olio freni e pastiglie nuove Brembo.",
        features: ["Tagliandata", "Olio freni e pastiglie nuove Brembo"],
    },
];

export default motorcycles;
