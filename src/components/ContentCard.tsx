
const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
const isXl = useMediaQuery(theme.breakpoints.up('xl'));

let imgWidth, imgHeight;
if (isXs) {
    imgWidth = '270px';
    imgHeight = '200px';
} else if (isSm) {
    imgWidth = '500px';
} else if (isMd) {
    imgWidth = '600px';
} else if (isLg) {
    imgWidth = '700px';
} else if (isXl) {
    imgWidth = '500px';
    imgHeight = '400px';
}

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
            height: imgHeight,
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