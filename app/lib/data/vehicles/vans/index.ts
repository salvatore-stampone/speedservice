import daily20201 from "public/images/vehicles/vans/iveco-daily-2020/daily-2020-1.jpg";
import daily20202 from "public/images/vehicles/vans/iveco-daily-2020/daily-2020-2.jpg";
import daily20203 from "public/images/vehicles/vans/iveco-daily-2020/daily-2020-3.jpg";
import daily20204 from "public/images/vehicles/vans/iveco-daily-2020/daily-2020-4.jpg";
import daily1 from "public/images/vehicles/vans/iveco-daily/daily-1.jpg";
import daily2 from "public/images/vehicles/vans/iveco-daily/daily-2.jpg";
import daily3 from "public/images/vehicles/vans/iveco-daily/daily-3.jpg";
import daily4 from "public/images/vehicles/vans/iveco-daily/daily-4.jpg";
import daily5 from "public/images/vehicles/vans/iveco-daily/daily-5.jpg";
import daily6 from "public/images/vehicles/vans/iveco-daily/daily-6.jpg";
import trafic1 from "public/images/vehicles/vans/renault-trafic/trafic-1.jpg";
import trafic2 from "public/images/vehicles/vans/renault-trafic/trafic-2.jpg";
import trafic3 from "public/images/vehicles/vans/renault-trafic/trafic-3.jpg";
import trafic4 from "public/images/vehicles/vans/renault-trafic/trafic-4.jpg";
import trafic5 from "public/images/vehicles/vans/renault-trafic/trafic-5.jpg";
import trafic6 from "public/images/vehicles/vans/renault-trafic/trafic-6.jpg";
import { sortWithSoldLast } from "../utils";

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
        sold: true,
    },
    {
        id: 2,
        title: "Iveco Daily",
        year: 2010,
        price: 5490,
        mileage: 300000,
        fuel: "Diesel",
        transmission: "Manuale",
        images: [daily1, daily2, daily3, daily4, daily5, daily6],
        description:
            "Iveco Daily bianco in ottime condizioni, ideale per trasporti e lavoro. Diesel.",
        sold: true,
    },
    {
        id: 3,
        title: "Iveco Daily 2020",
        year: 2020,
        price: 14900,
        mileage: 420000,
        fuel: "Diesel",
        transmission: "Manuale",
        images: [daily20201, daily20202, daily20203, daily20204],
        description:
            "Iveco Daily Max volume anno 2020 cinghia distribuzione, tagliando completo e freni appena eseguiti. 420000 km percorsi esclusivamente in autostrada. Nessun lavoro da eseguire. Qualsiasi prova, anche con un vostro meccanico di fiducia.",
    },
];

export default sortWithSoldLast(vans);
