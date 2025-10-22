import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { forwardRef, useState } from "react";

const collectFields = [
    {
        id: "collectName",
        label: "Intestazione",
        type: "text",
        placeholder: "Mario Rossi",
    },
    {
        id: "collectAddress",
        label: "Indirizzo",
        type: "text",
        placeholder: "Via Leopardi, 12",
    },
    { id: "collectCity", label: "Città", type: "text", placeholder: "Roma" },
    {
        id: "collectZipCode",
        label: "CAP",
        type: "number",
        placeholder: "00100",
    },
    {
        id: "collectPhoneNumber",
        label: "Cellulare",
        type: "number",
        placeholder: "3339876543",
    },
];

const recipientFields = [
    {
        id: "recipientName",
        label: "Intestazione",
        type: "text",
        placeholder: "Antonio Bianchi",
    },
    {
        id: "recipientAddress",
        label: "Indirizzo",
        type: "text",
        placeholder: "Via Mazzini, 207",
    },
    {
        id: "recipientCity",
        label: "Città",
        type: "text",
        placeholder: "Milano",
    },
    {
        id: "recipientZipCode",
        label: "CAP",
        type: "number",
        placeholder: "20020",
    },
    {
        id: "recipientPhoneNumber",
        label: "Cellulare",
        type: "number",
        placeholder: "3331234567",
    },
];

const parcelFields = [
    {
        id: "parcelsNumber",
        label: "N° di Colli",
        type: "number",
        placeholder: "1",
    },
    {
        id: "length",
        label: "Lunghezza in cm",
        type: "number",
        placeholder: "40",
    },
    {
        id: "width",
        label: "Larghezza in cm",
        type: "number",
        placeholder: "30",
    },
    { id: "height", label: "Altezza in cm", type: "number", placeholder: "20" },
    { id: "weight", label: "Peso in kg", type: "number", placeholder: "1" },
];

// const checkFields = [
//     { id: "payOnDelivery", label: "Contrassegno", type: "checkbox" },
// ];

// const amountFields = [
//     { id: "amountToPay", label: "", type: "number", placeholder: "Importo" },
// ];

const RadixAccordion = () => {
    const initialFormData = {
        collectName: "",
        collectAddress: "",
        collectCity: "",
        collectZipCode: "",
        collectPhoneNumber: "",
        recipientName: "",
        recipientAddress: "",
        recipientCity: "",
        recipientZipCode: "",
        recipientPhoneNumber: "",
        parcelsNumber: 1,
        length: "",
        width: "",
        height: "",
        weight: "",
        payOnDelivery: false,
        amountToPay: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const isNullOrEmpty = (value) => value === "" || value === null;

    const hasEmptyOrNullValues = (obj) => {
        for (const key in obj) {
            if (
                obj.hasOwnProperty(key) &&
                key !== "payOnDelivery" &&
                key !== "amountToPay" &&
                isNullOrEmpty(obj[key])
            ) {
                return true;
            }
        }
        return false;
    };

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            hasEmptyOrNullValues(formData) ||
            (formData.payOnDelivery &&
                (!formData.amountToPay || formData.amountToPay === ""))
        ) {
            alert(
                "Informazioni mancanti, si prega di compilare tutti i campi."
            );
            return;
        }

        if (window.confirm("Sei sicuro di voler richiedere il ritiro?")) {
            setIsFormSubmitted(true);

            emailjs
                .send(
                    "contact_service",
                    "template_pbq6znk",
                    {
                        ...formData,
                        payOnDelivery: formData.payOnDelivery ? "Sì" : "No",
                        amountToPay: formData.amountToPay || 0,
                    },
                    "user_822onMwRmoXrdFmoP0kTE"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );

            setFormData(initialFormData);
        } else {
            alert("La richiesta di ritiro non è stata inviata.");
        }
    };

    return (
        <>
            <Accordion.Root
                className="w-full rounded-md md:min-w-[550px]"
                type="single"
                defaultValue="contact"
                collapsible
            >
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center"
                >
                    {/* COLLECT FIELDS */}
                    <div className="mb-4 flex w-full flex-col">
                        <AccordionItem value="collect">
                            <AccordionTrigger>Ritiro presso</AccordionTrigger>
                            <AccordionContent>
                                {collectFields.map((field) => {
                                    return (
                                        <div
                                            className="mb-4 flex w-full items-center justify-between gap-x-2 last-of-type:mb-0"
                                            key={field.id}
                                        >
                                            <label
                                                htmlFor={field.id}
                                                className="font-bold text-(--light-clr)"
                                            >
                                                {field.label}*
                                            </label>
                                            <input
                                                name={field.id}
                                                type={field.type}
                                                id={field.id}
                                                className="min-h-[40px] w-[200px] rounded-full px-5 py-[5px] md:w-[300px]"
                                                placeholder={field.placeholder}
                                                onChange={handleInputChange}
                                                value={formData[field.id]}
                                                required
                                            />
                                        </div>
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>
                        {/* RECIPIENT FIELDS */}
                        <AccordionItem value="recipient">
                            <AccordionTrigger>Destinatario</AccordionTrigger>
                            <AccordionContent>
                                {recipientFields.map((field) => {
                                    return (
                                        <div
                                            className="mb-4 flex w-full items-center justify-between gap-x-2 last-of-type:mb-0"
                                            key={field.id}
                                        >
                                            <label
                                                htmlFor={field.id}
                                                className="font-bold text-(--light-clr)"
                                            >
                                                {field.label}*
                                            </label>
                                            <input
                                                name={field.id}
                                                type={field.type}
                                                id={field.id}
                                                className="min-h-[40px] w-[200px] rounded-full px-5 py-[5px] md:w-[300px]"
                                                placeholder={field.placeholder}
                                                onChange={handleInputChange}
                                                value={formData[field.id]}
                                                required
                                            />
                                        </div>
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>
                        {/* PARCEL FIELDS */}
                        <AccordionItem value="parcel">
                            <AccordionTrigger>
                                Informazioni Colli
                            </AccordionTrigger>
                            <AccordionContent>
                                {parcelFields.map((field) => {
                                    return (
                                        <div
                                            className="mb-4 flex w-full items-center justify-between gap-x-2 last-of-type:mb-0"
                                            key={field.id}
                                        >
                                            <label
                                                htmlFor={field.id}
                                                className="font-bold text-(--light-clr)"
                                            >
                                                {field.label}*
                                            </label>
                                            <input
                                                name={field.id}
                                                type={field.type}
                                                id={field.id}
                                                className="min-h-[40px] w-[200px] rounded-full px-5 py-[5px] md:w-[300px]"
                                                placeholder={field.placeholder}
                                                onChange={handleInputChange}
                                                value={formData[field.id]}
                                                required
                                            />
                                        </div>
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>
                    </div>
                    <hr className="w-full border-white/50" />
                    {/* CHECK FIELD */}
                    <div className="my-4 flex h-10 w-full items-center gap-x-2 px-5">
                        <label
                            htmlFor="payOnDelivery"
                            className={classNames(
                                "relative cursor-pointer font-bold text-(--light-clr) after:absolute after:top-1/2 after:-right-6 after:aspect-square after:w-4 after:-translate-y-1/2 after:rounded after:content-['']",
                                formData.payOnDelivery
                                    ? "after:bg-primary"
                                    : "after:bg-white"
                            )}
                        >
                            Contrassegno
                        </label>
                        <input
                            name="payOnDelivery"
                            type="checkbox"
                            id="payOnDelivery"
                            className="min-h-[40px] w-[200px] rounded-full px-5 py-[5px] md:w-[300px]"
                            onChange={handleInputChange}
                            checked={formData.payOnDelivery}
                            hidden
                        />
                        {formData.payOnDelivery && (
                            <div className="flex w-full items-center justify-between gap-x-4">
                                <Icon
                                    icon="ic:round-check"
                                    className="z-10 cursor-pointer text-white"
                                    onClick={() =>
                                        setFormData((prevFormData) => ({
                                            ...prevFormData,
                                            payOnDelivery: false,
                                        }))
                                    }
                                />
                                <input
                                    name="amountToPay"
                                    type="number"
                                    id="amountToPay"
                                    className="min-h-[40px] w-[200px] rounded-full px-5 py-[5px] text-black md:w-[300px]"
                                    placeholder="Importo"
                                    onChange={handleInputChange}
                                    value={formData.amountToPay}
                                />
                            </div>
                        )}
                    </div>
                    {!isFormSubmitted && (
                        <button
                            className="w-[334px] rounded-full bg-(--primary-clr) py-[5px] text-[24px] font-bold text-(--light-clr)"
                            onSubmit={handleSubmit}
                            type="submit"
                        >
                            Richiedi
                        </button>
                    )}
                </form>
            </Accordion.Root>

            {isFormSubmitted && (
                <p className="text-light mt-10 max-w-[550px] text-[22px]">
                    La richiesta di ritiro è stata inviata con successo! Presto
                    sarai contattato dal nostro team per la conferma definitiva.
                </p>
            )}
        </>
    );
};

const AccordionItem = forwardRef(function AccordionItem(
    { children, className, ...props },
    forwardedRef
) {
    return (
        <Accordion.Item
            className={classNames(
                "mt-px w-full overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10",
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            {children}
        </Accordion.Item>
    );
});

const AccordionTrigger = forwardRef(function AccordionTrigger(
    { children, className, ...props },
    forwardedRef
) {
    return (
        <Accordion.Header className="flex">
            <Accordion.Trigger
                className={classNames(
                    "group flex h-[45px] flex-1 cursor-pointer items-center justify-between bg-white px-5 text-[15px] leading-none text-black transition-[filter] outline-none hover:brightness-90",
                    className
                )}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <Icon
                    icon="tabler:chevron-down"
                    className="text-black transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] group-data-[state=open]:rotate-180"
                    aria-hidden
                />
            </Accordion.Trigger>
        </Accordion.Header>
    );
});

const AccordionContent = forwardRef(function AccordionContent(
    { children, className, ...props },
    forwardedRef
) {
    return (
        <Accordion.Content
            className={classNames(
                "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden bg-transparent text-[15px] leading-5 text-black",
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            <div className="px-5 py-[15px]">{children}</div>
        </Accordion.Content>
    );
});

export default RadixAccordion;
