import van1 from "public/images/vehicles/vans/renault-trafic/furgone-1.jpeg";
import van2 from "public/images/vehicles/vans/renault-trafic/furgone-2.jpeg";
import van3 from "public/images/vehicles/vans/renault-trafic/furgone-3.jpeg";

const vans = [
    {
        id: 1,
        title: "Renault Trafic Terza Serie",
        year: 2015,
        price: 6900,
        mileage: 293000,
        fuel: "Diesel",
        transmission: "Manuale",
        images: [van1, van2, van3],
        description:
            "Renault Trafic in ottime condizioni, ideale per trasporti e lavoro. Volano e frizione appena fatti con fattura dimostrabile.",
        features: [
            "Volano e frizione appena fatti",
            "Clima",
            "Radio CD",
            "Sensori Parcheggio",
        ],
    },
];

export default vans;
