import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AboutSection() {
    return (
        <Box
            sx={{
                width: '100vw',
                height: { xs: 'auto', md: '80vh' },
                bgcolor: '#FAFBFC',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 1, sm: 2, md: 4 },
                py: { xs: 6, md: 0 },
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    color: '#232B36',
                    mb: 1,
                    textAlign: 'center',
                    fontSize: { xs: 26, sm: 32, md: 36 },
                }}
            >
                Como funciona a Plataforma UBM
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    color: '#5A6270',
                    mb: { xs: 4, md: 6 },
                    textAlign: 'center',
                    maxWidth: 700,
                    fontSize: { xs: 15, sm: 17, md: 18 },
                }}
            >
                Passos simples para conectar os desafios da indústria com a inovação acadêmica
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1200,
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: { xs: 'center', sm: 'space-around' },
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    gap: { xs: 5, sm: 0 },
                    mt: 2,
                }}
            >
                {/* Card 1 */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: 320,
                        mb: { xs: 2, sm: 0 },
                        px: { xs: 2, sm: 0 },
                    }}
                >
                    <Box
                        sx={{
                            width: 64,
                            height: 64,
                            bgcolor: '#A0142E',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                        }}
                    >
                        <Box component="span" sx={{ fontSize: 32, color: '#fff' }}>🏢</Box>
                    </Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            textAlign: 'center',
                            fontSize: { xs: 17, sm: 18, md: 20 },
                        }}
                    >
                        Empresas Publicam Desafios
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#5A6270',
                            textAlign: 'center',
                            fontSize: { xs: 14, sm: 15, md: 16 },
                        }}
                    >
                        Envie suas necessidades de P&D, requisitos de projeto e metas de colaboração em nossa plataforma
                    </Typography>
                </Box>
                {/* Card 2 */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: 320,
                        mb: { xs: 2, sm: 0 },
                        px: { xs: 2, sm: 0 },
                    }}
                >
                    <Box
                        sx={{
                            width: 64,
                            height: 64,
                            bgcolor: '#A0142E',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                        }}
                    >
                        <Box component="span" sx={{ fontSize: 32, color: '#fff' }}>🎓</Box>
                    </Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            textAlign: 'center',
                            fontSize: { xs: 17, sm: 18, md: 20 },
                        }}
                    >
                        Resposta da UBM
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#5A6270',
                            textAlign: 'center',
                            fontSize: { xs: 14, sm: 15, md: 16 },
                        }}
                    >
                        A UBM analisa os desafios e submete propostas de pesquisa inovadoras
                    </Typography>
                </Box>
                {/* Card 3 */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: 320,
                        px: { xs: 2, sm: 0 },
                    }}
                >
                    <Box
                        sx={{
                            width: 64,
                            height: 64,
                            bgcolor: '#FFD98B',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                        }}
                    >
                        <Box component="span" sx={{ fontSize: 32, color: '#A0142E' }}>🚀</Box>
                    </Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            textAlign: 'center',
                            fontSize: { xs: 17, sm: 18, md: 20 },
                        }}
                    >
                        A Colaboração Começa
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#5A6270',
                            textAlign: 'center',
                            fontSize: { xs: 14, sm: 15, md: 16 },
                        }}
                    >
                        Parcerias perfeitas colaboram para dar vida a inovações revolucionárias
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}