// src/shared/ui/Header.tsx
import { styled } from "@mui/material/styles";
import Nav from "./Nav";
import ButtonComponent from "./Button";
import { theme } from "../utils/colors";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/material/Menu";

type HeaderProps = {
    title: string;
    navItems: { label: string; to: string }[];
    height?: string; // ex: "80px"
};

const HeaderContainer = styled("header")<{ height?: string }>(({ height }) => ({
    width: "100%",
    height: height || "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    color: "#f9f2f4",
    boxSizing: "border-box",
    borderBottom: "1px solid #0000003c",
    background: "#fff",
    zIndex: 1000,
    position: "relative",
}));

const Title = styled("h1")(() => ({
    fontSize: "1.5rem",
    margin: 0,
    fontWeight: "bold",
    color: theme.primary,
}));

const Actions = styled("div")(() => ({
    display: "flex",
    gap: "1rem",
}));

export default function Header({ title, navItems, height }: HeaderProps) {
    const muiTheme = useTheme();
    const isDesktop = useMediaQuery(muiTheme.breakpoints.up("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <HeaderContainer height={height}>
            <Title>{title}</Title>

            {isDesktop ? (
                <Nav items={navItems} width="auto" />
            ) : (
                <>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setDrawerOpen(true)}
                        sx={{ ml: 1, color: theme.primary }}
                    >
                        <MenuIcon open={false} />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                        PaperProps={{
                            sx: { width: 240 },
                        }}
                    >
                        <List>
                            {navItems.map((item) => (
                                <ListItem key={item.label} disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href={item.to}
                                        onClick={() => setDrawerOpen(false)}
                                    >
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </>
            )}

            <Actions>
                <ButtonComponent variant="outline">Login</ButtonComponent>
                <ButtonComponent variant="filled">Cadastrar</ButtonComponent>
            </Actions>
        </HeaderContainer>
    );
}
