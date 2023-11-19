import { PropsWithChildren } from "react";

type Props = {};

const layout = ({ children }: PropsWithChildren<Props>) => {
    return <div>{children}</div>;
};

export default layout;
