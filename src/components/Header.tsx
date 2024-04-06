import { Grid, Typography, Link} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Header() {

    return (
            <Grid container alignItems="center">
                <Grid item xs={4} >
                    <Typography variant="h5">Alexis Bizet</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">Jeune développeur et étudiant à Epitech, je suis à la recherche d'une alternance !</Typography>
                </Grid>
                <Grid container xs={4} justifyContent="flex-end" spacing={1}>
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
            </Grid>
    )
}

export default Header;