import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

//newsカード
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import valo from "./valosen.jpg";
import apex from "./apexsen.jpg";
import spla from "./splasen.jpg";
import "./Home.css";

/*タグの一覧*/

const tag = [
  { label: "Apex Legends" },
  { label: "VALORANT" },
  { label: "Splatoon" },
  { label: "Other" },
];

const tag2 = [
  { label: "Shoot" },
  { label: "Capacity" },
  { label: "Judge" },
  { label: "Other" },
];

export default function Home() {
  return (
    <box>
      {/*アイコン配置 リンク*/}
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Autocomplete
            disablePortal
            id="combo-box"
            options={tag}
            sx={{ width: 200, pt: 10, flex: 1, flexGrow: 1 }}
            renderInput={(params) => <TextField {...params} label="GameName" />}
          />
        </Grid>

        {/*paramsの値で*/}
        <Grid item xs={4}>
          <Autocomplete
            disablePortal
            id="combo-box"
            options={tag2}
            sx={{ width: 200, pt: 10, flex: 1, flexGrow: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="Gameplay Skill" />
            )}
          />
        </Grid>

        <Grid item xs={5} sm={5} pt={5}>
          <a href="Inform.js" target={"_blank"}>
            <IconButton>
              <NotificationsIcon sx={{ fontSize: 100, flexGrow: 1 }} />
            </IconButton>
          </a>
        </Grid>

        <Grid item xs={5} sm={4} pt={3}>
          <a href="Dm.html" target={"_blank"}>
            <IconButton>
              <ForumIcon sx={{ fontSize: 100, flexGrow: 1 }} />
            </IconButton>
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      {/*ニュース的なもの**/}
      <text class="text">
        <>News</>
      </text>
      <hr />
      <br />
      <div class="hrtitle" />
      <text class="game">VALORANT</text>
      <p class="ichigyou">
        <img src={valo} width="300" />
        <a>
          <span>VALORANT champion play game skill</span>
        </a>
        {/*(仮)ユーザの記事？*/}
      </p>
      <hr />

      <text class="game">Apex Legends</text>
      <p class="ichigyou">
        <img src={apex} width="300" />
        <a>
          <span>Apex Legends champion play game skill</span>
        </a>
      </p>
      <hr />

      <text class="game">Splatoon</text>
      <p class="ichigyou">
        <img src={spla} width="300" />
        <a>
          <span>Splatoon champion play game skill</span>
        </a>
      </p>
      <hr />
    </box>
  );
}
