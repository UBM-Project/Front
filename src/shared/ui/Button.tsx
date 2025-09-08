// src/shared/ui/ButtonComponent.tsx

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { theme } from "../utils/colors";

type ButtonComponentProps = {
    variant?: "filled" | "outline" | "white" | "whiteoutline";
    children: React.ReactNode;
    onClick?: () => void;
};

const FilledButton = styled(Button)(() => ({
    backgroundColor: theme.primary,
    color: theme.text,
    borderRadius: "10px",
    height: "40px",
    minWidth: 90,
    width: "auto",
    padding: "0 1.5rem",
    border: `2px solid ${theme.primary}`,
    fontSize: "1rem",
    "@media (max-width: 900px)": {
        minWidth: 80,
        fontSize: "0.95rem",
        padding: "0 1.2rem",
    },
    "@media (max-width: 600px)": {
        minWidth: 70,
        fontSize: "0.9rem",
        padding: "0 1rem",
        height: "32px",
    },
    "&:hover": {
        backgroundColor: theme.secondary,
        borderColor: theme.secondary,
    },
}));

const OutlineButton = styled(Button)(() => ({
    backgroundColor: "transparent",
    color: theme.primary,
    borderRadius: "10px",
    height: "40px",
    minWidth: 90,
    width: "auto",
    padding: "0 1.5rem",
    border: `2px solid ${theme.primary}`,
    fontSize: "1rem",
    "@media (max-width: 900px)": {
        minWidth: 80,
        fontSize: "0.95rem",
        padding: "0 1.2rem",
    },
    "@media (max-width: 600px)": {
        minWidth: 70,
        fontSize: "0.9rem",
        padding: "0 1rem",
        height: "32px",
    },
    "&:hover": {
        backgroundColor: theme.primary,
        color: theme.text,
    },
}));

const WhiteButton = styled(Button)(() => ({
    backgroundColor: "white",
    color: theme.primary,
    borderRadius: "10px",
    height: "40px",
    minWidth: 90,
    width: "auto",
    padding: "0 1.5rem",
    border: `2px solid ${theme.primary}`,
    fontSize: "1rem",
    "@media (max-width: 900px)": {
        minWidth: 80,
        fontSize: "0.95rem",
        padding: "0 1.2rem",
    },
    "@media (max-width: 600px)": {
        minWidth: 70,
        fontSize: "0.9rem",
        padding: "0 1rem",
        height: "32px",
    },
    "&:hover": {
        backgroundColor: theme.primary,
        color: theme.text,
    },
}));

const WhiteButtonOut = styled(Button)(() => ({
    backgroundColor: theme.primary,
    color: "white",
    borderRadius: "10px",
    height: "40px",
    minWidth: 90,
    width: "auto",
    padding: "0 1.5rem",
    border: `2px solid ${"white"}`,
    fontSize: "1rem",
    "@media (max-width: 900px)": {
        minWidth: 80,
        fontSize: "0.95rem",
        padding: "0 1.2rem",
    },
    "@media (max-width: 600px)": {
        minWidth: 70,
        fontSize: "0.9rem",
        padding: "0 1rem",
        height: "32px",
    },
    "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.text,
    },
}));

export default function ButtonComponent({
    variant = "filled",
    children,
    onClick,
}: ButtonComponentProps) {
    if (variant === "outline") {
        return <OutlineButton onClick={onClick}>{children}</OutlineButton>;
    }
    if (variant === "white") {
        return <WhiteButton onClick={onClick}>{children}</WhiteButton>;
    }
    if (variant === "whiteoutline") {
        return <WhiteButtonOut onClick={onClick}>{children}</WhiteButtonOut>;
    }
    return <FilledButton onClick={onClick}>{children}</FilledButton>;
}
