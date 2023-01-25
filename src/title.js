import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import './title.css';


export default function title() {
  return (
    <Box class="body2">
      {/*タイトルの位置*/}
      <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={50} >
          <Grid item xs={12} align="center">
            <Typography variant="h2"  class="text1" >Game Skill TeO</Typography>
          </Grid>
          <Grid item xs={12} align="center">
          <Typography variant="h1"class="text1" >ゲームスキルに磨きを</Typography>
          </Grid>
          <Grid item xs={12} align="center">
          <Typography variant="h2" class="text1" >利用手順</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}