import trafic1 from "public/images/vehicles/vans/renault-trafic/trafic-1.jpg";
import trafic2 from "public/images/vehicles/vans/renault-trafic/trafic-2.jpg";
import trafic3 from "public/images/vehicles/vans/renault-trafic/trafic-3.jpg";
import trafic4 from "public/images/vehicles/vans/renault-trafic/trafic-4.jpg";
import trafic5 from "public/images/vehicles/vans/renault-trafic/trafic-5.jpg";
import trafic6 from "public/images/vehicles/vans/renault-trafic/trafic-6.jpg";

const vans = [
    {
        id: 1,
        title: "Renault Trafic Terza Serie",
        year: 2015,
        price: 6490,
        mileage: 290000,
        fuel: "Diesel",
        transmission: "Manuale",
        images: [trafic1, trafic2, trafic3, trafic4, trafic5, trafic6],
        description:
            "Renault Trafic bianco in ottime condizioni, ideale per trasporti e lavoro. Volano e frizione appena fatti con fattura dimostrabile. Diesel.",
        // features: [
        //     "Volano e frizione appena fatti",
        //     "Clima",
        //     "Radio CD",
        //     "Sensori Parcheggio",
        // ],
    },
];

export default vans;
