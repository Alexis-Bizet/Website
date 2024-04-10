import { Grid, Typography, Link} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import cv from '../../public/Alexis-Bizet.pdf';


function Header() {
    return (
            <Grid container alignItems="center" sx={{height:'20vh'}}>
                <Grid item xs={6} >
                    <Link href={cv} download>
                        <Typography variant="h5">Alexis Bizet</Typography>
                    </Link>                
                </Grid>
                <Grid container xs={6} justifyContent="flex-end" spacing={1}>
                    <Grid item>
                        <Link href="https://github.com/Alexis-Bizet" target="_blank">
                            <GitHubIcon />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://www.linkedin.com/in/alexis-bizet/" target="_blank">
                            <LinkedInIcon />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="mailto:alexisbzt59@gmail.com">
                            <EmailIcon />
                        </Link>
                    </Grid>
                </Grid>
                <Grid item xs={12}  >
                    <Typography variant="h6" sx={{ fontStyle: 'italic' }} >Développeur Full Stack</Typography>
                </Grid>     
                <Grid item xs={12}>
                    <Typography variant="body1">Étudiant à Epitech, je suis à la recherche d'une alternance !</Typography>
                </Grid>     
            </Grid>
    )
}

export default Header;