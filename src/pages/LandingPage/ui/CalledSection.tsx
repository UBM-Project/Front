import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { FaStar } from "react-icons/fa";
import ButtonComponent from "../../../shared/ui/Button";
import { theme } from "../../../shared/utils/colors";

export default function CalledSection() {
    return (
        <Box sx={{ width: "100vw", bgcolor: "#fff" }}>
            {/* Success Stories */}
            <Box
                sx={{
                    py: { xs: 5, md: 8 },
                    px: { xs: 2, sm: 4, md: 8 },
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 1,
                        fontSize: { xs: 24, sm: 32, md: 36 },
                    }}
                >
                    Projetos de Sucesso
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: "#5A6270",
                        mb: { xs: 4, md: 6 },
                        fontSize: { xs: 15, sm: 17, md: 18 },
                    }}
                >
                    Parcerias reais que criam inovações revolucionárias
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 3, md: 4 },
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        maxWidth: 1200,
                        mx: "auto",
                    }}
                >
                    {/* Card 1 */}
                    <Paper
                        elevation={4}
                        sx={{
                            flex: 1,
                            minWidth: { xs: "100%", md: 340 },
                            maxWidth: 500,
                            p: { xs: 2, sm: 3 },
                            mb: { xs: 2, md: 0 },
                            borderRadius: 4,
                            textAlign: "left",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <Box
                                sx={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: "50%",
                                    bgcolor: "#eee",
                                    mr: 2,
                                    overflow: "hidden",
                                }}
                            >
                                {/* Avatar vazio */}
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 16 }}>
                                    Sarah Chen
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    CTO, TechCorp Industries
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant="body2" sx={{ color: "#444", mb: 2 }}>
                            "A Plataforma UBM nos ajudou a encontrar o parceiro universitário perfeito para o nosso projeto de pesquisa em IA.
                            A colaboração resultou em um algoritmo inovador que agora impulsiona nosso principal produto."
                        </Typography>
                        <Box sx={{ display: "flex", gap: 0.5 }}>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} color="#FFD600" size={18} />
                            ))}
                        </Box>
                    </Paper>
                    {/* Card 2 */}
                    <Paper
                        elevation={4}
                        sx={{
                            flex: 1,
                            minWidth: { xs: "100%", md: 340 },
                            maxWidth: 500,
                            p: { xs: 2, sm: 3 },
                            borderRadius: 4,
                            textAlign: "left",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <Box
                                sx={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: "50%",
                                    bgcolor: "#eee",
                                    mr: 2,
                                    overflow: "hidden",
                                }}
                            >
                                {/* Avatar vazio */}
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 16 }}>
                                    Dr. Michael Rodriguez
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    Professor, UBM
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant="body2" sx={{ color: "#444", mb: 2 }}>
                            "A plataforma conectou nossa pesquisa em energia renovável com líderes do setor. Conseguimos R$ 2 milhões em financiamento
                            e nossas inovações agora estão sendo implementadas nacionalmente."
                        </Typography>
                        <Box sx={{ display: "flex", gap: 0.5 }}>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} color="#FFD600" size={18} />
                            ))}
                        </Box>
                    </Paper>
                </Box>
            </Box>

            {/* Call to Action */}
            <Box
                sx={{
                    width: "100vw",
                    bgcolor: theme.primary,
                    color: "#fff",
                    py: { xs: 6, md: 8 },
                    px: { xs: 2, sm: 4, md: 8 },
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: { xs: 22, sm: 28, md: 34 },
                    }}
                >
                    Pronto para transformar suas ideias em realidade?
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: "#fff",
                        mb: 4,
                        fontSize: { xs: 15, sm: 17, md: 18 },
                        maxWidth: 700,
                        mx: "auto",
                    }}
                >
                    Junte-se para colaboração em inovações revolucionárias
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: 2,
                        mb: 4,
                        justifyContent: "center",
                    }}
                >
                    <ButtonComponent variant="white">Comece como Companhia</ButtonComponent>
                    <ButtonComponent variant="whiteoutline">Comece como Aluno</ButtonComponent>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { xs: 1, sm: 4 },
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 2,
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 18 } }}>
                            24/7
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#fff" }}>
                            Platform Support
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 18 } }}>
                            Segurança
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#fff" }}>
                            Proteção de IP
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: { xs: 16, sm: 18 } }}>
                            Global
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#fff" }}>
                            Network
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}