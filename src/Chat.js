import "./Chat.css";

export default function Chat() {
  return (
    <div class="center">
    <div class="title">チャット</div>
    <br/>
    {/*ユーザの名前*/}
    <div>user</div>
    <br/>
    {/*入力したものが表示したい場所*/}
    <text class='arrow_box'>abc</text>
    
    <div class="yohaku"></div>
    {/*入力場所*/}
    <textarea></textarea>
    <button class="button" onClick={onclick}>送信</button>
    </div>
  );
}