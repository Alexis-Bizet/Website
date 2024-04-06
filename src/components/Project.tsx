import { Box, Typography } from "@mui/material";

function Project() {
    return (
        <Box sx={{margin:'20px'}}>
            <Typography variant="h4" sx={{ borderBottom: '5px solid #6a1b9a', display: 'inline', borderRight: '5px solid #6a1b9a', borderRadius: '5px', padding: '10px' }}>
                Mes projets
            </Typography>
        </Box>
    );
}

export default Project;