import React, { FC } from 'react';
import { Button } from '@nextui-org/button';
import './button.css'

interface IButton {
    children: string;
    onClick?: () => void;
    className?: string;
}

export const ButtonBr: FC<IButton> = (props) => {
    const {
        children,
        onClick,
        className,
    } = props
    return (
        <Button
            variant='bordered'
            className={className}
            fullWidth
        >
            {children}
        </Button>
    )
}
