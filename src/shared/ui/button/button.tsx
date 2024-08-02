import React, { FC } from 'react';
import { Button } from '@nextui-org/button';

interface IButton {
    readonly Icon: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined
        }
    >
    readonly onClick?: () => void
    readonly title: string
    readonly className?: string
}

export const ButtonGl: FC<IButton> = (props) => {
    const {
        title,
        onClick,
        className
    } = props
    return (
        <Button 
        // onClick={onclick}
        color='primary'
        >
            
        </Button>
    )
}
