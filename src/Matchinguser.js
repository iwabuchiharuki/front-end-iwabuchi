import { Button } from "primereact/button";
import img from "./user.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import ReactStars from "react-rating-stars-component";
import "./button.css";

export default function Matchinguser() {
  /*星マークの受付*/
  const ratingChanged = (newRating) => {};

  return (
    <Box>
      <br />
      <br />
      <br />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <div class="button">
          <a href="#">戻る</a>
        </div>
      </Grid>

      {/*全体位置指定*/}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          {/*画像サイズ指定　初期画像は{img}user.jpg*/}
          <img
            src={img}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Grid>

        {/*マッチングしたユーザ名*/}
        <Grid>名前</Grid>

        <br />

        {/*星マーク指定　星の数 星のサイズ*/}
        <Grid>
          評価
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          <br />
          <label>実績: 件</label>
        </Grid>

        <br />
        <Grid>
          <TextField
            id="standard-textarea"
            label="自己紹介"
            placeholder="hello!!"
            multiline
            variant="standard"
          />
        </Grid>

        <Grid item xs={5} sm={8} pt={5}>
          <div class="button2">
            <a href="#">コーチングリクエストを送る</a>
          </div>
        </Grid>

        <Grid item xs={5} sm={8} pt={5}>
          <div class="button2">
            <a href="#">保留する</a>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
