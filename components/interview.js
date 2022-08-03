import { Box, Typography, List, ListItem } from '@mui/material';


const CodeforInterview = () => {
    return (
        <Box m={4} style={{ height: '78vh'}}>
            <Box>
                <Typography variant="h4">Code for Interview</Typography>
                <Typography variant="h6" mt={4}><b>Hey, It's me!</b></Typography>
                <Typography>
                    I'm a Software Engineer based in Pakistan. I've built websites, desktop applications and corporate software.
                    

                </Typography>
                <Typography>  
                    Need something built or simply want to have chat? Reach out to me on&nbsp; 
                
     
                </Typography>
            </Box>
            <Box>

                <Typography variant="h6" mt={3}><b>MY PERSONAL INTERESTS</b></Typography>
                <Typography>When I am not coding my next project, I enjoy spending my time doing any of the following:
                </Typography>
                <List>
                    <ListItem>One with the restless feet because I live to travel</ListItem>
                    <ListItem>Action Movies are resident of my eyes because I am busy watching them</ListItem>
                    <ListItem>I am meeting more people and creating new opportunities.</ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default CodeforInterview;