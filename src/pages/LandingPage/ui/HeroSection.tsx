import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import HeroImage from '../../../assets/imgs/heroimage.jpeg'; // Importe a imagem
import ButtonComponent from '../../../shared/ui/Button';

export default function HeroSection() {
    return (
        <Box
            sx={{
                width: '100vw',
                minHeight: { xs: 'auto', md: '80vh' },
                height: { xs: 'auto', md: '80vh' },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                bgcolor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 1, sm: 2, md: 4 },
                py: { xs: 4, md: 0 },
                boxSizing: 'border-box',
            }}
        >
            {/* Seção Esquerda */}
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: { xs: 2, md: 4 },
                    pl: { xs: 0, md: 4 },
                    mb: { xs: 4, md: 0 },
                }}
            >
                {/* Badge */}
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: { xs: 0, md: -2 } }}>
                    <Box
                        sx={{
                            width: 40,
                            height: 40,
                            bgcolor: '#F6EDE6',
                            borderRadius: '50%',
                            display: { xs: 'none', sm: 'block' },
                        }}
                    />
                    <Chip
                        label={
                            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: { xs: 13, sm: 14 } }}>
                                <span role="img" aria-label="megaphone">📢</span> Conectando Inovações
                            </Typography>
                        }
                        sx={{
                            bgcolor: '#FFF6F0',
                            color: '#B71C1C',
                            fontWeight: 600,
                            fontSize: { xs: 13, sm: 14 },
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                        }}
                    />
                </Stack>

                {/* Título */}
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        lineHeight: 1.1,
                        fontSize: { xs: 26, sm: 32, md: 40 },
                        mt: { xs: 2, md: 0 },
                    }}
                >
                    Faça a ponte entre a <br />
                    <Box component="span" sx={{ color: '#B71C1C' }}>Universidade</Box>
                </Typography>

                {/* Descrição */}
                <Typography
                    variant="body1"
                    sx={{
                        color: '#555',
                        maxWidth: 500,
                        mb: 2,
                        fontSize: { xs: 15, sm: 16, md: 18 },
                    }}
                >
                    Conecte sua empresa com a UBM para colaborações inovadoras em P&D. Transforme ideias inovadoras em realidade por meio de parcerias estratégicas
                </Typography>

                {/* Botões */}
                <Stack direction="row" spacing={2} sx={{ mb: 1, flexWrap: 'wrap' }}>
                    <ButtonComponent variant="filled">Encontre Parceiros</ButtonComponent>
                    <ButtonComponent variant="outline">Envie seu Projeto</ButtonComponent>
                </Stack>

                {/* Métricas */}
                <Stack
                    direction="row"
                    spacing={{ xs: 3, sm: 6 }}
                    sx={{
                        mt: { xs: 2, md: 0 },
                        justifyContent: { xs: 'center', md: 'flex-start' },
                    }}
                >
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#B71C1C', fontSize: { xs: 18, sm: 22 } }}>500+</Typography>
                        <Typography variant="body2" sx={{ color: '#555', fontSize: { xs: 13, sm: 15 } }}>Empresas</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#B71C1C', fontSize: { xs: 18, sm: 22 } }}>200+</Typography>
                        <Typography variant="body2" sx={{ color: '#555', fontSize: { xs: 13, sm: 15 } }}>Projetos</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#B71C1C', fontSize: { xs: 18, sm: 22 } }}>1000+</Typography>
                        <Typography variant="body2" sx={{ color: '#555', fontSize: { xs: 13, sm: 15 } }}>Captações de Talentos</Typography>
                    </Box>
                </Stack>
            </Box>

            {/* Seção Direita */}
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    height: { xs: 300, sm: 400, md: '100%' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                {/* Imagem principal */}
                <Box
                    sx={{
                        width: { xs: '90%', sm: '80%' },
                        height: { xs: 200, sm: 280, md: '70%' },
                        bgcolor: '#e0e0e0',
                        borderRadius: 4,
                        boxShadow: 4,
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                    }}
                >
                    <img
                        src={HeroImage}
                        alt="Hero"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                {/* Card flutuante */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: { xs: '5%', sm: '12%' },
                        bottom: { xs: '5%', sm: '18%' },
                        bgcolor: '#fff',
                        borderRadius: 2,
                        boxShadow: 3,
                        px: { xs: 1.5, sm: 2.5 },
                        py: { xs: 1, sm: 1.5 },
                        display: 'flex',
                        alignItems: 'center',
                        minWidth: { xs: 150, sm: 220 },
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: 32, sm: 40 },
                            height: { xs: 32, sm: 40 },
                            bgcolor: '#F6EDE6',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                        }}
                    >
                        <Box component="span" sx={{ fontSize: { xs: 18, sm: 24 } }}>🤝</Box>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: { xs: 13, sm: 16 } }}>
                            Parcerias de Sucesso
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#888', fontSize: { xs: 12, sm: 14 } }}>
                            95% de Match Rate
                        </Typography>
                    </Box>
                </Box>

                {/* Bolinhas decorativas */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: { xs: 8, sm: 24 },
                        right: { xs: 12, sm: 32 },
                        width: { xs: 24, sm: 40 },
                        height: { xs: 24, sm: 40 },
                        bgcolor: '#F6EDE6',
                        borderRadius: '50%',
                        opacity: 0.6,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: { xs: 8, sm: 24 },
                        right: { xs: 8, sm: 24 },
                        width: { xs: 40, sm: 80 },
                        height: { xs: 40, sm: 80 },
                        bgcolor: '#F6EDE6',
                        borderRadius: '50%',
                        opacity: 0.4,
                    }}
                />
            </Box>
        </Box>
    );
}