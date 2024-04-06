import { Grid, Typography, Button, Fade, Box, useTheme, Link } from "@mui/material";
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
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
    const isXl = useMediaQuery(theme.breakpoints.up('xl'));
    
    let imgWidth, imgMinHeight;
    if (isXs) {
        imgWidth = '270px';
        imgMinHeight = '200px';
    } else if (isSm) {
        imgWidth = '500px';
    } else if (isMd) {
        imgWidth = '600px';
    } else if (isLg) {
        imgWidth = '700px';
    } else if (isXl) {
        imgWidth = '800px';
        imgMinHeight = '400px';
    }

    return (
        <Box>
            <Grid container spacing={1} justifyContent={'center'}>
                <Grid item xs={12} sx={{ textAlign:'center'}}>
                    <Project />
                </Grid>
                {ProjectContent.map((project) => (
                    <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={project.id} sx={{textAlign:'center'}}>
                        <Button variant="text" sx={{ color: '#fafafa' }} onClick={() => handleProjectClick(project)}>{project.name}</Button>                
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ 
                textAlign: 'center', 
                display:'flex', 
                alignItems:'center', 
                justifyContent:'center',
                flexDirection:'column',
                marginTop:{
                    xs: '20px',
                    sm: '20px',
                    md: '20px',
                    lg: '20px',
                    xl: '40px',
                },
                }}
            >
                    <Fade in={checked} timeout={500}>
                        <Typography variant="body1" 
                            sx={{
                                marginBottom:{
                                    xs: '20px',
                                    sm: '20px',
                                    md: '20px',
                                    lg: '20px',
                                    xl: '40px',
                                },
                            }}
                        >
                            {selectedProject?.description}
                        </Typography>
                    </Fade>
                <Fade in={checked} timeout={500}>
                <img src={selectedProject?.image} alt={selectedProject?.name} 
                    style={{
                        borderRadius:'15px', 
                        width: imgWidth,
                        minHeight: imgMinHeight,
                    }}
                />
                </Fade>
                <Fade in={checked} timeout={500}>
                    <Link href={selectedProject?.gitHub} target="_blank" 
                        sx={{
                            color:'#fafafa', 
                            textDecoration: 'none', 
                            marginTop:'20px', 
                            cursor:'pointer', 
                            borderBottom:'4px solid #6a1b9a'}}>
                            Code disponible sur GitHub 
                    </Link>
                </Fade>
            </Box>
        </Box>
    );
}

export default Content;