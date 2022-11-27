import Document,{Html,Head,Main,NextScript} from "next/document";

// _document.js 파일은 HTML을 커스터마이징할 수 있게 해줍니다.
// HTML문서를 구성하는 모든 요소를 커스터마이징 한다.

class MyDocument extends Document{
  render(){
    return(
      <Html lang="kr">
        <Head/>
        <body>
          {/* ?? 이렇게 하는 이유? 
            애플리케이션 컴포넌트 트리 외부에 html 콘텐츠를 추가할 수 있게해준다.
          */}
          <div id="overlays"></div>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}
export default MyDocument