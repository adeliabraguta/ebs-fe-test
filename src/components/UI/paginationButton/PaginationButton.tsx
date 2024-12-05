import {Button} from "./PaginationButton.styled.tsx";
import React from "react";

type ChildrenType = {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    isCurrent?: boolean
}

const PaginationButton: React.FC<ChildrenType> = ({children, disabled, onClick, isCurrent}) => {
    return (
        <Button $isCurrent={isCurrent} disabled={disabled} onClick={onClick}>
            {children}
        </Button>
    )
}

export default PaginationButton;
