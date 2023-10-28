import RadixAccordion from "../Accordion";

const ParcelCollectionSection = (props) => {
    return (
        <section
            id="parcel-collection"
            className="section pt-40 !justify-start"
        >
            <div className="section-five__wrapper px-6">
                <h1 className="section__title">Richiedi un ritiro!</h1>
                <p className="mb-6 text-[#C7C7C7] max-w-[425px] mx-auto">
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
