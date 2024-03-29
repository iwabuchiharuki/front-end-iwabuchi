import { Button } from "primereact/button";
import img from "./user.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ReactStars from "react-rating-stars-component";
import "./Profile.css";

export default function Profile() {
  /*タグの一覧 変更する場合はここから*/
  const tag = [
    { label: "Shoot" },
    { label: "Capacity" },
    { label: "Judge" },
    { label: "Other" },
  ];

  const tag2 = [
    { label: "Shoot" },
    { label: "Capacity" },
    { label: "Judge" },
    { label: "Other" },
  ];

  const ratingChanged = (newRating) => {};

  return (
    <Box>
      <br />
      <br />
      <br />
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <div class="button">
          <a href="#">編集</a>
        </div>
      </Grid>
      {/*全体位置指定 */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={5} sm={8} pt={5}>
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
        <Grid item xs={5} sm={8} pt={5}>
          <TextField
            id="standard-textarea"
            label="名前"
            placeholder="name"
            multiline
            variant="standard"
          />
        </Grid>
        <Grid item xs={5} sm={8} pt={5}>
          <TextField
            id="standard-textarea"
            label="自己紹介"
            placeholder="hello!!"
            multiline
            variant="standard"
          />
        </Grid>
        {/*メニューバー*/}
        <Grid item xs={5} sm={8} pt={5}>
          教えたい技術
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tag}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="Teaching" />}
          />
        </Grid>
        <Grid item xs={5} sm={8} pt={5}>
          教わりたい技術
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tag2}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="Teaching" />}
          />
        </Grid>
      </Grid>
      {/*ここからレビュー　評価*/}
      <br />
      <hr />
      <div class="item-center">レビュー　評価</div>
      <div class="center-box">
        <div class="scroll">
          <div class="box">
            <img />
            <div>name</div>{/*ここにユーザーの名前*/}
            <>評価</>{/*ここに評価取得*/}
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={20}
              activeColor="#ffd700"
              align="top"
            />
            <div>コメント</div>
            <div>a</div>{/*ここにコメントが入ればいい*/}
          </div>
        </div>
      </div>
    </Box>
  );
}
