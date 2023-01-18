//準備されているチャットのCSSのインポート
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

export default function Chat() {
  return (
    //画面サイズ
    <div style={{ position: "relative", height: "1000px" }}>
      <br/>
      <br/>
      <br/>
      <MainContainer>
        <ChatContainer>
             
          <MessageList>
            {/*左側のユーザ messageに文字*/}
            <Message
              model={{
                message: "Hello my friend",
              }}
            >
              {/*senderで名前*/}
              <Message.Footer sender="name" />
            </Message>
          </MessageList>
          {/*MessageInputはメッセージを送信するためにいれるもの*/}
          <MessageInput
            placeholder="メッセージを入力してください"
            attachButton={false}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
