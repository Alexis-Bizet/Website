import { Box, Grid, Link, Typography, CardMedia, CardContent, Card} from '@mui/material';

export default function Cards(selectedProject: any) {

    const content = selectedProject.selectedProject;

  return (
    <Card sx={{ maxWidth: 800, marginTop:5 }}>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <CardMedia
              component="img"
              image={content.image}
              alt="cocktail"
            />
        </Grid>
        <Grid item xs={12} sm={5} sx={{display:'flex', flexDirection:'column'}}>
            <Typography variant="h5" component="div" 
            sx={{
                color:"black", 
                fontWeight:'bold',
                m:{
                    xs:2,
                }
                }}
            >
              {content.name}
            </Typography>
            <CardContent >
              <Typography variant="body1" color="text.secondary">
              {content.description}
              </Typography>
            </CardContent>
            <Box sx={{display:"flex", justifyContent:'center'}}>
                {content.languages.map((language: string, index: number) => (
                <Typography key={index} variant="body2" 
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
                }}>
                <Link href={content.gitHub} sx={{color:'black', borderBottom:'1px solid #6a1b9a'}}>
                    Code disponible sur GitHub
                </Link>
            </Box>
          </Grid>
        </Grid>
    </Card>
  );
}