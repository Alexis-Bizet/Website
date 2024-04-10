import { Grid, Button } from '@mui/material';
import { ProjectType } from '../Data/ProjectContent'; 

type ButtonProjectProps = {
    ProjectContent: ProjectType[];
    isXs: boolean;
    handleProjectClick: (project: ProjectType) => void;
  };
  
  const ButtonProject: React.FC<ButtonProjectProps> = ({ ProjectContent, isXs, handleProjectClick }) => {
    return (
      <>
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
                boxShadow: '0px 4px 4px #6a1b9a' 
              }} 
              onClick={() => handleProjectClick(project)}
            >
              {project.name}
            </Button>                
          </Grid>
        ))}
      </>
    );
  };
  
  export default ButtonProject;