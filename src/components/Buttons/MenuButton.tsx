import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, MenuItem, Menu, Button } from '@mui/material';
import { ProjectType } from '../Data/ProjectContent'; 

type ProjectMenuProps = {
    projects: ProjectType[];
    handleProjectClick: (project: ProjectType) => void;
    selectedProject: ProjectType | undefined; 

  };

export default function ProjectMenu({ projects, handleProjectClick, selectedProject }: ProjectMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{marginTop:3}}>
      <Button
        variant="text"
        disableElevation
        onClick={handleClick}
        sx={{
          boxShadow: '0px 4px 4px #6a1b9a',
        }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selectedProject ? selectedProject.name : 'Projet'}
      </Button>
      <Menu
          sx={{ 
            '.MuiPaper-root': { 
              backgroundColor: '#212121', 
              color: '#fafafa',
            },
          }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
        transformOrigin={{ vertical: 'top', horizontal: 'center' }} 
      >
        {projects.map((project) => (
        <MenuItem 
            onClick={() => {
            handleProjectClick(project);
            handleClose();
            }} 
            disableRipple 
            key={project.id}
        >
            {project.name}
        </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}