import { Grid, Button, Box, useTheme, Fade, Card, CardMedia, Typography, CardContent, Link } from "@mui/material";
import { useState } from "react";
import Project from "./Project";
import ProjectContent from "./ProjectContent";
import useMediaQuery from '@mui/material/useMediaQuery';
  
type Project = {
    id: number;
    name: string;
    description: string;
    image: string;
    gitHub: string;
    languages: string[];
};

function Content() {
    const [selectedProject, setSelectedProject] = useState(ProjectContent.find(project => project.name === 'catGenerator'));
    const [checked, setChecked] = useState(true);

    const handleProjectClick = (project: Project) => {
        setChecked(false);
        setTimeout(() => {
            setSelectedProject(project);
            setChecked(true);
        }, 500);
    };

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Grid container spacing={1} justifyContent={'center'}>
                <Grid item xs={12} sx={{ textAlign:'center'}}>
                    <Project />
                </Grid>
                {ProjectContent.map((project) => (
                    <Grid 
                        item xs={6} sm={6} md={4} lg={3} xl={2} 
                        key={project.id} 
                        sx={{
                            textAlign:'center', 
                            mt: {
                                xs: '10px',
                                sm: '10px',
                                md: '20px',
                                lg: '20px',
                                xl: '40px',
                            }
                        }}
                    >
                        <Button 
                            variant="text"         
                            size={isXs ? 'small' : 'medium'}
                            sx={{ 
                                color: '#fafafa', 
                                boxShadow: '0px 4px 4px #6a1b9a' 
                            }} 
                            onClick={() => handleProjectClick(project)}
                        >
                            {project.name}
                        </Button>                
                    </Grid>
                ))}
            </Grid>
            <Fade in={checked} timeout={500}>
                <Card sx={{ maxWidth: 800, marginTop:5, marginBottom:5 }}>
                    <Grid container>
                        <Grid item xs={12} sm={7}>
                            <CardMedia
                                component="img"
                                image={selectedProject?.image}
                                alt="cocktail"
                            />
                        </Grid>
                        <Grid item xs={12} sm={5} sx={{display:'flex', flexDirection:'column', marginBottom:2}}>
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
                            <Box sx={{display:"flex", justifyContent:'center'}}>
                                {selectedProject?.languages.map((language: string, index: number) => (
                                    <Typography 
                                        key={index} 
                                        variant="body2" 
                                        sx={{
                                            backgroundColor:'#6a1b9a' , 
                                            p:1,
                                            marginTop:{
                                                sm:1,
                                                md:5,
                                            },
                                            ml:1, 
                                            borderRadius:"15px", 
                                            fontWeight:'bold'
                                        }}
                                    >
                                        {language}
                                    </Typography>
                                ))}
                            </Box>
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