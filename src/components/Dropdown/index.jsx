import { cloneElement, useState } from "react";

export default function Dropdown({ trigger, menu }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className='relative'>
            {cloneElement(trigger, {
                onClick: handleOpen,
            })}
            {open ? (
                <ul className='absolute list-none my-1.5 rounded-2xl w-36 shadow-2xl'>
                    {menu.map((menuItem, index) => (
                        <li key={index} className='bg-light first-of-type:rounded-b-none first-of-type:rounded-t-2xl last-of-type:rounded-t-none last-of-type:rounded-b-2xl hover:bg-gray-200 w-[200px]'>
                            {cloneElement(menuItem, {
                                onClick: () => {
                                    menuItem.props.onClick && menuItem.props.onClick();
                                    setOpen(false);
                                },
                            })}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};