import React, { useState, useEffect } from "react";
import axios, { formToJSON } from "axios";
import Avatar from "react-avatar-edit";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import apigatewayConf from "../gateway/apigateway";

export default function Edit() {
  /*プロフィール画像処理*/
  const [imagecrop, setimagecrop] = useState("");
  const [src] = useState(false);
  const [profile, setprofile] = useState([]);
  const [pview, setpview] = useState(false);

  /*サムネイル画像処理*/
  const [thumbnail_imagecrop, setthumbnail_imagecrop] = useState("");
  const [thumbnail_src] = useState(false);
  const [thumbnail_profile, setthumbnail_profile] = useState([]);
  const [thumbnail_pview, setthumbnail_pview] = useState(false);

  const profileFinal = profile.map((item) => item.pview);
  const API_ENDPOINT = apigatewayConf.EDIT_END_POINT;

  // const queryParam = '?suid=' + currentUserID;  本来はcurrentUserIDを設定、今はダミーで代用
  const queryParam = "?id=test-id-value-00";
  const getURL = API_ENDPOINT + "/deploy0_0/get" + queryParam;

  //マウント時に初期プロフィール画像を設定
  useEffect(() => {
    console.log(getURL);
    axios
      .get(getURL, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      })
      .then((res) => {
        console.log(res.data[0].picture);
        setpview(res.data[0].picture);
        values.nickname = res.data[0].nickname;
        values.intro = res.data[0].intro;
        values.haveSkill = res.data[0].haveSkill;
        values.wantSkill = res.data[0].wantSkill;
        values.picture = res.data[0].picture;
        values.thumbnail = res.data[0].thumbnail;
        console.log(values);
        console.log("データ取得成功");
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  /*受け取り画像処理*/
  const onClose = () => {
    setpview(null);
  };

  const onCrop = (view) => {
    setpview(view);
  };

  const saveCropImage = () => {
    if (pview != pview) {
      setprofile([...profile, { pview }]);
    } else {
      setimagecrop(false);
    }
  };

  /*タグの一覧 変更する場合はここから*/
  const tag = [
    { label: "ApexLegends" },
    { label: "Splatoon3" },
    { label: "Valolant" },
    { label: "League of Legends" },
  ];

  // 値を変更した時にvalueに保存
  const [values, setValues] = React.useState({
    //ダミーユーザーId
    uid: "test-id-value-00",
    nickname: "",
    intro: "",
    haveSkill: "",
    wantSkill: "",
    picture: "",
    thumbnail: "",
  });

  //nicknameの値を更新
  const handleChange_nick = (nickname) => (event) => {
    setValues({ ...values, [nickname]: event.target.value });
  };

  //introの値を更新
  const handleChange_intro = (intro) => (event) => {
    setValues({ ...values, [intro]: event.target.value });
  };

  //haveSkillの値の更新
  const [inputValue_have, setInputValue_have] = React.useState("");

  //wantSkillの値の更新
  const [inputValue_want, setInputValue_want] = React.useState("");

  //保存ボタンをクリックでAPIで編集結果を送信
  const onClickGetAPI = async () => {
    const sendURL = API_ENDPOINT + "/deploy0_0/send";

    //pictureにプレビューした画像のバイナリを格納
    values.picture = pview;
    values.thumbnail = "ダミー";

    console.log(sendURL);
    console.log(values);
    try {
      const response = await axios.post(sendURL, values, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apigatewayConf.API_KEY,
        },
      });
      console.log(response.data);
      alert("リクエストを送信しました");
    } catch (error) {
      console.error(error);
      alert("リクエスト処理に失敗しました");
    }
  };

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
          {/*画像位置*/}
          <img
            class="anime"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            onClick={() => setimagecrop(true)}
            /*初期画像*/
            src={profileFinal.length ? profileFinal : pview}
            alt=""
          />

          <Dialog
            visible={imagecrop}
            header={() => <p>プロフィール画像選択</p>}
            onHide={() => setimagecrop(false)}
          >
            <Button onHide={() => setimagecrop(false)} label="cansel" />{" "}
            {/*キャンセルボタン*/}
            <Button onClick={saveCropImage} label="save" icon="pi pi-check" />
            {/*保存ボタン*/}
            <Avatar
              width={500}
              height={400}
              onCrop={onCrop}
              onClose={onClose}
              src={src}
              shadingColor={"#474649"}
              backgroundColor={"#474649"}
            />
          </Dialog>
        </Grid>

        <br/>
        <Grid>
          <TextField
            id="standard-textarea"
            label="名前"
            placeholder="name"
            multiline
            variant="standard"
            onChange={handleChange_nick("nickname")}
            //画面描画時に取得したユーザー名を初期値として設定
          />
        </Grid>
        <br/>

        <Grid>
          <TextField
            id="standard-textarea"
            label="自己紹介"
            placeholder="hello!!"
            multiline
            variant="standard"
            onChange={handleChange_intro("intro")}
            //画面描画時に取得した自己紹介を初期値として設定
          />
        </Grid>

        <Grid item xs={5} sm={8} pt={5}>
          教えたい技術
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tag}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Teaching" />}
            //onInputChangeでvaluesにhaveSkillの値を一時的に保存する
            inputValue_have={inputValue_have}
            value={values.haveSkill}
            onInputChange={(event, newInputValue) => {
              console.log(newInputValue);
              setInputValue_have(newInputValue);
              setValues({ ...values, haveSkill: newInputValue });
            }}
          />
        </Grid>

        <Grid item xs={5} sm={8} pt={5}>
          教わりたい技術
          <Autocomplete
            disablePortal
            id="combo-box-demo2"
            options={tag}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="coaching" />}
            //onInputChangeでvaluesにwantSkillの値を一時的に保存する
            inputValue_want={inputValue_want}
            value={values.wantSkill}
            onInputChange={(event, newInputValue) => {
              console.log(newInputValue);
              setInputValue_want(newInputValue);
              setValues({ ...values, wantSkill: newInputValue });
            }}
          />
        </Grid>

        <Grid
          item
          xs={5}
          sm={8}
          pt={5}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <div class="button">
            <a onClick={onClickGetAPI}>保存</a>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
