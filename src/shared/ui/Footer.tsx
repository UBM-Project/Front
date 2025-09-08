import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const footerLinks = [
    {
        title: "Para Empresas",
        links: [
            { label: "Envie seus Projetos", href: "#" },
            { label: "Busque Alunos", href: "#" },
            { label: "Histórias de Sucesso", href: "#" },
            { label: "P&D", href: "#" },
        ],
    },
    {
        title: "UBM",
        links: [
            { label: "Conheça a UBM", href: "#" },
            { label: "Cursos", href: "#" },
            { label: "Venha estudar conosco", href: "#" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Help Center", href: "#" },
            { label: "Contatos", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
        ],
    },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
    return (
        <Box sx={{ minWidth: 120, mb: { xs: 3, md: 0 } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#fff", mb: 1, fontSize: { xs: 15, sm: 16, md: 17 } }}>
                {title}
            </Typography>
            {links.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    underline="none"
                    sx={{
                        display: "block",
                        color: "#bfc7d1",
                        fontSize: { xs: 13, sm: 14, md: 15 },
                        mb: 0.5,
                        "&:hover": { color: "#fff" },
                        transition: "color 0.2s",
                    }}
                >
                    {link.label}
                </Link>
            ))}
        </Box>
    );
}

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                width: "100vw",
                bgcolor: "#181F2A",
                color: "#fff",
                pt: { xs: 5, md: 7 },
                pb: { xs: 2, md: 3 },
                px: 0,
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: { xs: "98vw", sm: 900, md: 1200 },
                    mx: "auto",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "flex-start" },
                    gap: { xs: 4, sm: 0 },
                    px: { xs: 2, sm: 3, md: 0 },
                }}
            >
                {/* Logo & Description */}
                <Box
                    sx={{
                        flexBasis: { xs: "100%", sm: "30%", md: "28%" },
                        minWidth: 180,
                        mb: { xs: 3, sm: 0 },
                        pr: { sm: 2, md: 4 },
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Box
                            sx={{
                                color: "#FFD600",
                                fontSize: 22,
                                mr: 1,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <span role="img" aria-label="link">🔗</span>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", fontSize: { xs: 17, sm: 18, md: 20 } }}>
                            Plataforma UBM
                        </Typography>
                    </Box>
                    <Typography sx={{ color: "#bfc7d1", fontSize: { xs: 13, sm: 14, md: 15 }, mb: 2 }}>
                        Reduzindo a lacuna entre a inovação da indústria e a excelência acadêmica.
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <Link href="#" sx={{ color: "#bfc7d1", "&:hover": { color: "#fff" } }}>
                            <FaLinkedin size={18} />
                        </Link>
                        <Link href="#" sx={{ color: "#bfc7d1", "&:hover": { color: "#fff" } }}>
                            <FaTwitter size={18} />
                        </Link>
                        <Link href="#" sx={{ color: "#bfc7d1", "&:hover": { color: "#fff" } }}>
                            <FaFacebook size={18} />
                        </Link>
                    </Box>
                </Box>
                {/* Columns */}
                <Box
                    sx={{
                        flexBasis: { xs: "100%", sm: "70%", md: "72%" },
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { xs: 2, sm: 4, md: 6 },
                        justifyContent: { sm: "flex-start" },
                        alignItems: { xs: "flex-start", sm: "stretch" },
                    }}
                >
                    {footerLinks.map((col) => (
                        <FooterColumn key={col.title} title={col.title} links={col.links} />
                    ))}
                </Box>
            </Box>
            <Divider sx={{ bgcolor: "#2c3442", my: { xs: 3, md: 4 }, mx: "auto", width: { xs: "92vw", sm: "90vw", md: "80%" } }} />
            <Typography
                sx={{
                    color: "#bfc7d1",
                    fontSize: { xs: 12, sm: 13, md: 14 },
                    textAlign: "center",
                    pb: 1,
                }}
            >
                © 2025 Plataforma UBM. All rights reserved.
            </Typography>
        </Box>
    );
}