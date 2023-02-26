# translateNtextract2023

## Table of Contents
1. [💻프로젝트 소개](#프로젝트-소개)
2. [⚙️기술 스택](#%EF%B8%8F기술-스택)
3. [⌛개발 기간](#개발-기간)
4. [🛠️Trouble Shooting](#%EF%B8%8Ftrouble-shooting)
5. [👩🏻‍🏫AWS SDK V3 사용법](#AWS-SDK-V3-사용법)
6. [Takeaway](#Takeaway)

## 💻프로젝트 소개

* aws sdk를 사용해 개발한 번역과 텍스트 추출 웹사이트입니다.

* [Demo](https://suhsein.github.io/translateNtextract2023/index.html)
> **Translate**

    * AWS Translate에서 지원하는 모든 언어를 Javascript를 통해 동적으로 등록했습니다.
    * Jquery의 select2 라이브러리를 사용하여 사용자가 원하는 언어를 검색하여 선택할 수 있습니다.
    * change 버튼 클릭으로 시작언어와 도착언어를 빠르게 바꿀 수 있습니다.
    * 클립보드 라이브러리를 사용해 버튼 클릭으로 빠르게 복사할 수 있습니다.
    
<사용방법>
* 좌측 Textarea에 문장을 입력하고 시작언어와 도착언어를 선택한 후, Go 버튼을 누르면 번역을 진행하여 우측 Textarea에 결과를 표시합니다.
* 각각의 Textarea 하단의 copy 버튼을 눌러 내용을 복사할 수 있습니다.

> **Textract**

    * input 태그의 타입을 file로 지정 하여 파일 탐색기에 접근할 수 있도록 했습니다. (jpg와 png 파일로 제한했습니다.)
    * input 태그에 label을 연결하고 기존 input 태그는 display:none으로 하여 심미성을 높였습니다. 
    * textract가 완료될 때까지 textract 버튼을 비활성화하고, 화면에 spinner를 표시합니다.

<사용방법>
 * 상단의 choose File 라벨을 클릭하여 파일탐색기에서 텍스트를 추출하고자 하는 이미지를 선택합니다.(*지원 언어는 영어, 불어, 독일어, 스페인어, 포르투갈어 입니다.*)
 * 파일 선택 후 이미지와 textract 버튼이 표시되고, textract 버튼을 클릭하면 텍스트가 추출되어 우측 Textarea에 결과를 표시합니다.
 * Textarea 하단의 copy 버튼을 눌러 내용을 복사할 수 있습니다.
 
 > **translateNtextract**
 
    * 시작언어는 textract에서 지원하는 5개국 언어로 제한되므로, Translate과 다르게 change 버튼을 제거했습니다.
    
 <사용방법>
   * choose File 라벨을 클릭하여 파일을 업로드 하고 시작언어와 도착언어를 선택한 후, Go 버튼을 누르면 텍스트 추출 및 번역을 진행하여 좌측 Textarea에는 추출한 텍스트를, 우측 Textarea에는 번역된 텍스트를 표시합니다.
    
## ⚙️기술 스택
<img alt="HTML5" src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img alt="CSS3" src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img alt="JS" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img alt="jQuery" src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
<img alt="AWS" src="https://img.shields.io/badge/Amazon AWS-f7f7f7?style=for-the-badge&logo=Amazon AWS&logoColor=f89400">
<img alt="Webpack" src="https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black">
<img alt="SCSS" src="https://img.shields.io/badge/SCSS-cc6699.svg?&amp;style=for-the-badge&amp;logo=Sass&amp;logoColor=white">
<img alt="GitHub" src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

## ⌛개발 기간
* 2023.02.05~2023.02.26 (3주)

## 🛠️Trouble Shooting

> **AWS SDK 사용과 관련된 문제**

문제점
* 기존에는 IAM User만 생성하여 AWS SDK V2를 이용했었는데, User Acces Key Id와 secret Access key를 **하드코딩**했었다.
* 브라우저에서 사용하기 위해 AWS SDK를 이용할 시, **textract 기능은 AWS SDK V2의 사용이 제한**되어 있어서 AWS SDK V3를 사용할 필요가 있었다.

해결 방안

=>    **AWS SDK V3 사용**

AWS SDK V3의 사용법은 다음 차례에 기술했습니다.

> **textract의 parameter 문제**

문제점
* textract의 param으로 들어가는 bytes 타입(Buffer, Typed Array, Blob, String)에 맞게 파일을 처리할 필요가 있었다.

해결 방안

=>  arrayBuffer()로 ArrayBuffer 객체를 생성하고, ArrayBuffer에 저장된 바이너리 데이터를 Uint8Array()로 TypedArray를 생성하여 parameter로 넘겨주었다.


## 👩🏻‍🏫AWS SDK V3 사용법
* 공식 문서를 참고하여 개발하였습니다.

자바스크립트 환경에서 AWS SDK를 이용하기 위한 전처리 과정은 [AWS SDK for Javascript](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-browser.html)를,
자바스크립트 코드 작성 시 AWS SDK의 Client와 Command에 대한 내용은 [AWS SDK for Javascript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)를 참고했습니다.

> **AWS 콘솔에서 할 일**
 1) Amazon IAM에서 User 생성
 2) Amazon conginto에서 Create new identity pool(unauthenticated identities에 대한 접근 반드시 허용)
 3) Amazon IAM에서 생성한 User에 정책 추가(User Permissions에서 Add Permissions를 통해 사용할 기능에 대한 정책을 추가함)
 4) Amazon IAM에서 Roles 관리. 2에서 생성했던 identity pool(연동자격증명)의 Unauthenticated identities role에 3에서 했던 것과 같이 정책을 추가해줌
 
> **AWS CLI에서 할 일**
  * AWS CLI를 설치하여 IAM User 환경변수를 등록

> **Javascript 코드 작성**

  * [AWS SDK for Javascript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)를 참고
  * identity pool id는 AWS cognito에서 생성했던 identity pool에 들어가서 확인할 수 있음
  * Command 사용 시 반드시 Command 별로 import가 필수임 
  * 다음과 같이 작성한 자바스크립트 코드를 Webpack으로 묶은 후, html 파일의 스크립트로 추가해서 AWS SDK 기능을 사용
 ```javascript
 
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
 
const REGION = 'YOUR REGION';
const IDENTITY_POOL_ID = 'YOUR IDENTITY POOL ID';

const translateClient = new TranslateClient({
    region: REGION,
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({region:REGION}),
        identityPoolId: IDENTITY_POOL_ID
    })
});

const params = { 
            SourceLanguageCode: startlang,
            TargetLanguageCode: endlang,
            Text: line
 }
 
const translated = await translateClient.send(new TranslateTextCommand(params));
```

## Takeaway
  * AWS SDK V3 사용법에 대해서 알게되었다.
  * select 박스 검색기능을 사용하기 위해서 jquery의 select2를 사용할 수 있음을 알게되었다.
  * textract 처리 시 input param으로 들어가는 bytes의 타입에 맞게 파일을 처리하며 js의 Arraybuffer 객체와 TypedArray에 대해서 알게되었다.

