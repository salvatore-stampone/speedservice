"use client";

import Link from "next/link";
import { useState } from "react";

const inputFields = [
    { id: "length", label: "Lunghezza" },
    { id: "width", label: "Larghezza" },
    { id: "height", label: "Altezza" },
    { id: "weight", label: "Peso" },
];

const priceMappings = [
    { min: 0, max: 1.01, output: 10 },
    { min: 1.01, max: 3.01, output: 12 },
    { min: 3.01, max: 5.01, output: 15 },
    { min: 5.01, max: 10.01, output: 18 },
    { min: 10.01, max: 15.01, output: 20 },
    { min: 15.01, max: 20.01, output: 24 },
    { min: 20.01, max: 25.01, output: 27 },
    { min: 25.01, max: 30.01, output: 30 },
    { min: 30.01, max: 35.01, output: 35 },
    { min: 35.01, max: 40.01, output: 40 },
    { min: 40.01, max: 45.01, output: 45 },
    { min: 45.01, max: 50.01, output: 50 },
    { min: 50.01, max: 75.01, output: 60 },
    { min: 75.01, max: 100.01, output: 70 },
    { min: 100.01, max: 150.01, output: 105 },
    { min: 150.01, max: 200.01, output: 140 },
    { min: 200.01, max: 250.01, output: 175 },
    { min: 250.01, max: 300.01, output: 210 },
    { min: 300.01, max: 350.01, output: 245 },
    { min: 350.01, max: 400.01, output: 280 },
    { min: 400.01, max: 450.01, output: 315 },
    { min: 450.01, max: 500.01, output: 350 },
];

export default function EstimateSection() {
    const [formData, setFormData] = useState({
        length: 0,
        width: 0,
        height: 0,
        weight: 0,
    });
    const [showEstimate, setShowEstimate] = useState(false);

    const vol =
        formData.height &&
        formData.weight &&
        formData["length"] &&
        formData.width &&
        (
            (formData.height * formData["length"] * formData.width) /
            3333
        ).toFixed(2);

    let valueForPrice = Math.max(vol, formData.weight);

    function mapValue(value, mappings) {
        for (const mapping of mappings) {
            if (value >= mapping.min && value < mapping.max) {
                return mapping.output;
            }
        }
        return false;
    }

    const mappedOutput = mapValue(valueForPrice, priceMappings);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setShowEstimate(false);
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.height === 0 ||
            formData["length"] === 0 ||
            formData.weight === 0 ||
            formData.width === 0
        ) {
            alert(
                "Informazioni mancanti, si prega di compilare tutti i campi."
            );
            return;
        }

        setShowEstimate(true);
    };

    return (
        <section id="estimate" className="section bg-(--primary-clr)">
            <div className="section-five__wrapper px-6">
                <h1 className="section__title">Fai un preventivo!</h1>
                <p className="mb-6 text-[#C7C7C7]">
                    N.b.: il prezzo è soggetto a variazioni e ha quindi solo
                    scopo indicativo.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="mb-10 flex flex-col items-center gap-y-10"
                >
                    {inputFields.map((field) => {
                        return (
                            <div
                                className="flex w-full items-center justify-between gap-x-2"
                                key={field.id}
                            >
                                <label
                                    htmlFor={field.id}
                                    className="font-bold text-(--light-clr)"
                                >
                                    {field.label}
                                </label>
                                <input
                                    type="number"
                                    id={field.id}
                                    className="text-dark min-h-[40px] w-[200px] rounded-full px-5 py-[5px]"
                                    placeholder={field.label + " pacco"}
                                    name={field.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                        );
                    })}
                    {!showEstimate && (
                        <button
                            className="w-[334px] rounded-full bg-(--secondary-clr) py-[5px] text-[24px] font-bold text-(--light-clr)"
                            onSubmit={handleSubmit}
                            type="submit"
                        >
                            Calcola
                        </button>
                    )}
                </form>
                {showEstimate &&
                    (mappedOutput ? (
                        <div className="no-aspect mx-auto grid aspect-square h-[100px] place-items-center rounded-full border-4 border-(--light-clr) bg-(--secondary-clr) text-xl font-bold text-(--light-clr)">
                            {mappedOutput + "€"}
                        </div>
                    ) : (
                        <p className="text-center text-[20px] text-(--light-clr)">
                            Il costo eccede il listino.{" "}
                            <Link
                                href="#contacts"
                                className="transition-[filter] duration-175 hover:drop-shadow-[0_0_4px_var(--light-clr)]"
                            >
                                Contattaci!
                            </Link>
                        </p>
                    ))}
            </div>
        </section>
    );
}
