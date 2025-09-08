// src/shared/ui/Nav.tsx
import { Link } from "react-router";
import { styled } from "@mui/material/styles";

type NavItem = {
    label: string;
    to: string; // pode ser "/rota" ou "#id"
};

type NavProps = {
    items: NavItem[];
    width?: string; // ex: "200px", "20%"
};

const NavContainer = styled("nav")<{ width?: string }>(({ width }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center", // centraliza verticalmente
    alignItems: "center",
    height: "100%",
    width: width || "200px",
    minWidth: "150px",
    gap: "1.5rem", // distância entre os itens
}));

const NavItemStyled = styled("div")(() => ({
    fontSize: "1.1rem",
    fontWeight: 500,
    cursor: "pointer",
    "& a": {
        textDecoration: "none",
        color: "#900c27", // usa theme.primary se preferir
    },
    "&:hover a": {
        color: "#c70039", // usa theme.secondary se preferir
    },
}));

export default function Nav({ items, width }: NavProps) {
    return (
        <NavContainer width={width}>
            {items.map((item, i) => (
                <NavItemStyled key={i}>
                    {item.to.startsWith("#") ? (
                        <a href={item.to}>{item.label}</a>
                    ) : (
                        <Link to={item.to}>{item.label}</Link>
                    )}
                </NavItemStyled>
            ))}
        </NavContainer>
    );
}
