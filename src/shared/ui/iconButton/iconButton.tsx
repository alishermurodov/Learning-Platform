import React, { FC } from "react";
import { Button } from "@nextui-org/react";

interface IButton {
    children: string;
    onClick?: () => void;
    className?: string;
    startIcon?: any;
    endtIcon?: any;
}

export const IconButton: FC<IButton> = (props) => {
    const {
        children,
        onClick,
        className,
        startIcon,
        endtIcon
    } = props
    return (
        <div className="flex gap-4 items-center">
            <Button
                startContent={startIcon}
                endContent={endtIcon}
                className={className}
                fullWidth
            >
                {children}
            </Button>
        </div>
    );
}
