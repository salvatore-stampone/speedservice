import Image from "next/image";
import Link from "next/link";
import spaceCar from "public/images/space-car.svg";

type Props = {};

const page = (props: Props) => {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-y-8">
            <div>
                <Image src={spaceCar} alt="" />
                <p className="text-[6px]">
                    <Link href="https://www.freepik.com/free-vector/starman-concept-illustration_5928996.htm#query=illustrations%20car&position=2&from_view=search&track=ais&uuid=dd92d8b9-beac-417e-956a-0fcc5d02e5e8">
                        Image by storyset
                    </Link>{" "}
                    on Freepik
                </p>
            </div>
            <p className="text-3xl">Lavori in corso...</p>
        </div>
    );
};

export default page;
