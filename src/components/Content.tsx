import { Grid, Box, useTheme, Fade, Card, CardMedia, Typography, CardContent, Link } from "@mui/material";
import { useState } from "react";
import Project from "./Project";
import ProjectContent from "./Data/ProjectContent";
import { ProjectType } from './Data/ProjectContent'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonProject from "./Buttons/ButtonProject";
import MenuButton from "./Buttons/MenuButton";  



function Content() {
    const [selectedProject, setSelectedProject] = useState(ProjectContent.find(project => project.name === 'catGenerator'));
    const [checked, setChecked] = useState(true);

    const handleProjectClick = (project: ProjectType) => {
        setChecked(false);
        setTimeout(() => {
            setSelectedProject(project);
            setChecked(true);
        }, 500);
    };

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isSmOrLarger = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Grid container spacing={1} justifyContent={'center'}>
                <Grid item xs={12} sx={{ textAlign:'center'}}>
                    <Project />
                </Grid>
                {isSmOrLarger ? (
                    <ButtonProject 
                        ProjectContent={ProjectContent}
                        isXs={isXs}
                        handleProjectClick={handleProjectClick}
                    />
                ) : (
                    <MenuButton 
                        projects={ProjectContent}
                        handleProjectClick={handleProjectClick}
                        selectedProject={selectedProject}
                    />
                )}
            </Grid>
            <Fade in={checked} timeout={500}>
                <Card sx={{ 
                    maxWidth: {
                        sm:400,
                        md:800
                    }, 
                    marginTop:5, 
                    marginBottom:5 
                    }}
                >
                    <Grid container>
                        <Grid item xs={12} md={7}>
                            <CardMedia
                                component="img"
                                image={selectedProject?.image}
                                alt="cocktail"
                            />
                        </Grid>
                        <Grid item xs={12} md={5} 
                            sx={{
                                display:'flex', 
                                flexDirection:'column', 
                                justifyContent:'center',
                                alignItems:'center',
                                marginBottom:{
                                    xs:2,
                                    sm:2
                                }
                                }}
                        >
                            <Typography 
                                variant="h5" 
                                component="div" 
                                sx={{
                                    color:"black", 
                                    fontWeight:'bold',
                                    m:{
                                        xs:2,
                                    }
                                }}
                            >
                                {selectedProject?.name}
                            </Typography>
                            <CardContent>
                                <Typography variant="body1" color="text.secondary">
                                    {selectedProject?.description}
                                </Typography>
                            </CardContent>
                            <Grid container sx={{justifyContent:'center'}}>
                                {selectedProject?.languages.map((language: string, index: number) => (
                                    <Grid item xs={6} xl={4} lg={4} md={6} sm={6} key={index} sx={{textAlign:'center'}}>
                                        <Typography variant="body2">
                                            <Box 
                                                component="span" 
                                                sx={{ 
                                                    display: 'inline-block', 
                                                    borderRadius:"15px", 
                                                    fontWeight:'bold', 
                                                    backgroundColor:'#6a1b9a', 
                                                    p: 1,
                                                    marginTop:1,
                                                    width:'85px'
                                                }}
                                            >
                                                {language}
                                            </Box>
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Box 
                                sx={{
                                    textAlign:'center',
                                    marginTop:{
                                        xs:1,
                                        sm:2,
                                        md:5,
                                    }
                                }}
                            >
                                <Link href={selectedProject?.gitHub} sx={{color:'black', borderBottom:'2px solid #6a1b9a',}}>
                                    Code disponible sur GitHub
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Fade>        
        </Box>
    );
}

export default Content;