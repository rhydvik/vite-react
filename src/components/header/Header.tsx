import react from 'assets/react.svg'
import { useStyles } from "./styles"
import {Box, Button} from "@mui/material";

const Header = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.headerContainer}>
      <Box display='flex' justifyContent='space-between' alignItems='center' maxWidth={1280} mx='auto'>
        <img src={react} alt="This is header alt text" height={30}/>
        <Button variant="text">Contact me</Button>
      </Box>
    </div>
  )
}


export default Header;
