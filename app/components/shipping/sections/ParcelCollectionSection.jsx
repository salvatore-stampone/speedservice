import RadixAccordion from "../Accordion";

const ParcelCollectionSection = () => {
    return (
        <section
            id="parcel-collection"
            className="section justify-start! pt-40"
        >
            <div className="section-five__wrapper px-6">
                <h1 className="section__title">Richiedi un ritiro!</h1>
                <p className="mx-auto mb-6 max-w-[425px] text-[#C7C7C7]">
                    N.b.: i colli saranno consegnati presso la nostra sede,
                    salvo diverse tue esplicite disposizioni. Il peso può essere
                    indicativo.
                </p>
                <RadixAccordion />
            </div>
        </section>
    );
};

export default ParcelCollectionSection;
