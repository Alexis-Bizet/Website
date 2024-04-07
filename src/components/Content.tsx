import { Grid, Button, Box, useTheme, Fade } from "@mui/material";
import { useState } from "react";
import Project from "./Project";
import ProjectContent from "./ProjectContent";
import useMediaQuery from '@mui/material/useMediaQuery';
import Cards from "./Cards";
  
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
                    <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={project.id} 
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
                            onClick={() => handleProjectClick(project)}>
                                {project.name}
                        </Button>                
                    </Grid>
                ))}
            </Grid>
            <Cards selectedProject={selectedProject} checked={checked}/>
        </Box>
    );
}

export default Content;