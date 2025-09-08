import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaCheckCircle } from "react-icons/fa";
import ButtonComponent from "../../../shared/ui/Button";
import empresas from "../../../assets/imgs/empresas.png"; // Importe a imagem
import ubm from "../../../assets/imgs/ubm.png"; // Importe a imagem
import { theme } from "../../../shared/utils/colors";
const companyBenefits = [
    "Acesso a instalações de pesquisa de ponta",
    "Soluções de P&D com boa relação custo-benefício",
    "Novas perspectivas de especialistas acadêmicos",
    "Cronogramas de inovação acelerados",
];

const universityBenefits = [
    "Oportunidades de financiamento para projetos de pesquisa",
    "Parcerias e networking com a indústria",
    "Aplicação prática do trabalho acadêmico",
    "Reputação e visibilidade aprimoradas",
];
export default function ForCompaniesandColleges() {
    return (
        <Box
            sx={{
                width: "100vw",
                minHeight: "100vh",
                bgcolor: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: { xs: 6, md: 10 },
                py: { xs: 4, md: 8 },
                px: { xs: 1, sm: 2, md: 6 },
                boxSizing: "border-box",
            }}
        >
            {/* For Companies */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: 3, md: 6 },
                    mb: { xs: 4, md: 0 },
                }}
            >
                {/* Image */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "48%" },
                        height: { xs: 180, sm: 240, md: 280 },
                        bgcolor: "#f3f3f3",
                        borderRadius: 4,
                        boxShadow: 3,
                        mb: { xs: 2, md: 0 },
                        overflow: "hidden",
                    }}
                >
                    <img src={empresas} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
                {/* Text */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "48%" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" },
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            fontSize: { xs: 22, sm: 28, md: 32 },
                        }}
                    >
                        Para Empresas
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#555",
                            mb: 2,
                            fontSize: { xs: 15, sm: 16, md: 18 },
                            maxWidth: 500,
                        }}
                    >
                        Acesse recursos de pesquisa de ponta e soluções inovadoras
                    </Typography>
                    <Box sx={{ mb: 2, width: "100%" }}>
                        {companyBenefits.map((benefit) => (
                            <Box
                                key={benefit}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 1,
                                    gap: 1,
                                    fontSize: { xs: 14, sm: 15, md: 16 },
                                }}
                            >
                                <FaCheckCircle style={{ color: theme.primary, fontSize: 20, marginRight: 1 }} />
                                <Typography variant="body2" sx={{ color: "#333", fontSize: { xs: 14, sm: 15, md: 16 } }}>
                                    {benefit}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <ButtonComponent variant="filled">Envie seu Projeto</ButtonComponent>
                </Box>
            </Box>

            {/* For Universities */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row-reverse" },
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: 3, md: 6 },
                    bgcolor: "#FAFBFC",
                    borderRadius: 4,
                    py: { xs: 3, md: 4 },
                    px: { xs: 0, md: 2 },
                }}
            >
                {/* Image */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "48%" },
                        height: { xs: 180, sm: 240, md: 280 },
                        bgcolor: "#f3f3f3",
                        borderRadius: 4,
                        boxShadow: 3,
                        mb: { xs: 2, md: 0 },
                        overflow: "hidden",
                    }}
                >
                    <img src={ubm} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
                {/* Text */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "48%" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" },
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            fontSize: { xs: 22, sm: 28, md: 32 },
                        }}
                    >
                        Para Alunos/UBM
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#555",
                            mb: 2,
                            fontSize: { xs: 15, sm: 16, md: 18 },
                            maxWidth: 500,
                        }}
                    >
                        Transforme a pesquisa acadêmica em impacto no mundo real e garanta financiamento para seus projetos
                    </Typography>
                    <Box sx={{ mb: 2, width: "100%" }}>
                        {universityBenefits.map((benefit) => (
                            <Box
                                key={benefit}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 1,
                                    gap: 1,
                                    fontSize: { xs: 14, sm: 15, md: 16 },
                                }}
                            >
                                <FaCheckCircle style={{ color: theme.primary, fontSize: 20, marginRight: 1 }} />
                                <Typography variant="body2" sx={{ color: "#333", fontSize: { xs: 14, sm: 15, md: 16 } }}>
                                    {benefit}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <ButtonComponent variant="filled">Pesquisa Oportunidades</ButtonComponent>
                </Box>
            </Box>
        </Box>
    );
}