# translateNtextract2023

## Table of Contents
1. [๐ปํ๋ก์ ํธ ์๊ฐ](#ํ๋ก์ ํธ-์๊ฐ)
2. [โ๏ธ๊ธฐ์  ์คํ](#%EF%B8%8F๊ธฐ์ -์คํ)
3. [โ๊ฐ๋ฐ ๊ธฐ๊ฐ](#๊ฐ๋ฐ-๊ธฐ๊ฐ)
4. [๐ ๏ธTrouble Shooting](#%EF%B8%8Ftrouble-shooting)
5. [๐ฉ๐ปโ๐ซAWS SDK V3 ์ฌ์ฉ๋ฒ](#AWS-SDK-V3-์ฌ์ฉ๋ฒ)
6. [Takeaway](#Takeaway)

## ๐ปํ๋ก์ ํธ ์๊ฐ

* aws sdk๋ฅผ ์ฌ์ฉํด ๊ฐ๋ฐํ ๋ฒ์ญ๊ณผ ํ์คํธ ์ถ์ถ ์น์ฌ์ดํธ์๋๋ค.

* [Demo](https://suhsein.github.io/translateNtextract2023/index.html)
> **Translate**

    * AWS Translate์์ ์ง์ํ๋ ๋ชจ๋  ์ธ์ด๋ฅผ Javascript๋ฅผ ํตํด ๋์ ์ผ๋ก ๋ฑ๋กํ์ต๋๋ค.
    * Jquery์ select2 ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ์ฌ ์ฌ์ฉ์๊ฐ ์ํ๋ ์ธ์ด๋ฅผ ๊ฒ์ํ์ฌ ์ ํํ  ์ ์์ต๋๋ค.
    * change ๋ฒํผ ํด๋ฆญ์ผ๋ก ์์์ธ์ด์ ๋์ฐฉ์ธ์ด๋ฅผ ๋น ๋ฅด๊ฒ ๋ฐ๊ฟ ์ ์์ต๋๋ค.
    * ํด๋ฆฝ๋ณด๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํด ๋ฒํผ ํด๋ฆญ์ผ๋ก ๋น ๋ฅด๊ฒ ๋ณต์ฌํ  ์ ์์ต๋๋ค.
    
<์ฌ์ฉ๋ฐฉ๋ฒ>
* ์ข์ธก Textarea์ ๋ฌธ์ฅ์ ์๋ ฅํ๊ณ  ์์์ธ์ด์ ๋์ฐฉ์ธ์ด๋ฅผ ์ ํํ ํ, Go ๋ฒํผ์ ๋๋ฅด๋ฉด ๋ฒ์ญ์ ์งํํ์ฌ ์ฐ์ธก Textarea์ ๊ฒฐ๊ณผ๋ฅผ ํ์ํฉ๋๋ค.
* ๊ฐ๊ฐ์ Textarea ํ๋จ์ copy ๋ฒํผ์ ๋๋ฌ ๋ด์ฉ์ ๋ณต์ฌํ  ์ ์์ต๋๋ค.

> **Textract**

    * input ํ๊ทธ์ ํ์์ file๋ก ์ง์  ํ์ฌ ํ์ผ ํ์๊ธฐ์ ์ ๊ทผํ  ์ ์๋๋ก ํ์ต๋๋ค. (jpg์ png ํ์ผ๋ก ์ ํํ์ต๋๋ค.)
    * input ํ๊ทธ์ label์ ์ฐ๊ฒฐํ๊ณ  ๊ธฐ์กด input ํ๊ทธ๋ display:none์ผ๋ก ํ์ฌ ์ฌ๋ฏธ์ฑ์ ๋์์ต๋๋ค. 
    * textract๊ฐ ์๋ฃ๋  ๋๊น์ง textract ๋ฒํผ์ ๋นํ์ฑํํ๊ณ , ํ๋ฉด์ spinner๋ฅผ ํ์ํฉ๋๋ค.

<์ฌ์ฉ๋ฐฉ๋ฒ>
 * ์๋จ์ choose File ๋ผ๋ฒจ์ ํด๋ฆญํ์ฌ ํ์ผํ์๊ธฐ์์ ํ์คํธ๋ฅผ ์ถ์ถํ๊ณ ์ ํ๋ ์ด๋ฏธ์ง๋ฅผ ์ ํํฉ๋๋ค.(*์ง์ ์ธ์ด๋ ์์ด, ๋ถ์ด, ๋์ผ์ด, ์คํ์ธ์ด, ํฌ๋ฅดํฌ๊ฐ์ด ์๋๋ค.*)
 * ํ์ผ ์ ํ ํ ์ด๋ฏธ์ง์ textract ๋ฒํผ์ด ํ์๋๊ณ , textract ๋ฒํผ์ ํด๋ฆญํ๋ฉด ํ์คํธ๊ฐ ์ถ์ถ๋์ด ์ฐ์ธก Textarea์ ๊ฒฐ๊ณผ๋ฅผ ํ์ํฉ๋๋ค.
 * Textarea ํ๋จ์ copy ๋ฒํผ์ ๋๋ฌ ๋ด์ฉ์ ๋ณต์ฌํ  ์ ์์ต๋๋ค.
 
 > **translateNtextract**
 
    * ์์์ธ์ด๋ textract์์ ์ง์ํ๋ 5๊ฐ๊ตญ ์ธ์ด๋ก ์ ํ๋๋ฏ๋ก, Translate๊ณผ ๋ค๋ฅด๊ฒ change ๋ฒํผ์ ์ ๊ฑฐํ์ต๋๋ค.
    
 <์ฌ์ฉ๋ฐฉ๋ฒ>
   * choose File ๋ผ๋ฒจ์ ํด๋ฆญํ์ฌ ํ์ผ์ ์๋ก๋ ํ๊ณ  ์์์ธ์ด์ ๋์ฐฉ์ธ์ด๋ฅผ ์ ํํ ํ, Go ๋ฒํผ์ ๋๋ฅด๋ฉด ํ์คํธ ์ถ์ถ ๋ฐ ๋ฒ์ญ์ ์งํํ์ฌ ์ข์ธก Textarea์๋ ์ถ์ถํ ํ์คํธ๋ฅผ, ์ฐ์ธก Textarea์๋ ๋ฒ์ญ๋ ํ์คํธ๋ฅผ ํ์ํฉ๋๋ค.
    
## โ๏ธ๊ธฐ์  ์คํ
<img alt="HTML5" src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img alt="CSS3" src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img alt="JS" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img alt="jQuery" src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
<img alt="AWS" src="https://img.shields.io/badge/Amazon AWS-f7f7f7?style=for-the-badge&logo=Amazon AWS&logoColor=f89400">
<img alt="Webpack" src="https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black">
<img alt="SCSS" src="https://img.shields.io/badge/SCSS-cc6699.svg?&amp;style=for-the-badge&amp;logo=Sass&amp;logoColor=white">
<img alt="GitHub" src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

## โ๊ฐ๋ฐ ๊ธฐ๊ฐ
* 2023.02.05~2023.02.26 (3์ฃผ)

## ๐ ๏ธTrouble Shooting

> **AWS SDK ์ฌ์ฉ๊ณผ ๊ด๋ จ๋ ๋ฌธ์ **

๋ฌธ์ ์ 
* ๊ธฐ์กด์๋ IAM User๋ง ์์ฑํ์ฌ AWS SDK V2๋ฅผ ์ด์ฉํ์๋๋ฐ, User Acces Key Id์ secret Access key๋ฅผ **ํ๋์ฝ๋ฉ**ํ์๋ค.
* ๋ธ๋ผ์ฐ์ ์์ ์ฌ์ฉํ๊ธฐ ์ํด AWS SDK๋ฅผ ์ด์ฉํ  ์, **textract ๊ธฐ๋ฅ์ AWS SDK V2์ ์ฌ์ฉ์ด ์ ํ**๋์ด ์์ด์ AWS SDK V3๋ฅผ ์ฌ์ฉํ  ํ์๊ฐ ์์๋ค.

ํด๊ฒฐ ๋ฐฉ์

=>    **AWS SDK V3 ์ฌ์ฉ**

AWS SDK V3์ ์ฌ์ฉ๋ฒ์ ๋ค์ ์ฐจ๋ก์ ๊ธฐ์ ํ์ต๋๋ค.

> **textract์ parameter ๋ฌธ์ **

๋ฌธ์ ์ 
* textract์ param์ผ๋ก ๋ค์ด๊ฐ๋ bytes ํ์(Buffer, Typed Array, Blob, String)์ ๋ง๊ฒ ํ์ผ์ ์ฒ๋ฆฌํ  ํ์๊ฐ ์์๋ค.

ํด๊ฒฐ ๋ฐฉ์

=>  arrayBuffer()๋ก ArrayBuffer ๊ฐ์ฒด๋ฅผ ์์ฑํ๊ณ , ArrayBuffer์ ์ ์ฅ๋ ๋ฐ์ด๋๋ฆฌ ๋ฐ์ดํฐ๋ฅผ Uint8Array()๋ก TypedArray๋ฅผ ์์ฑํ์ฌ parameter๋ก ๋๊ฒจ์ฃผ์๋ค.


## ๐ฉ๐ปโ๐ซAWS SDK V3 ์ฌ์ฉ๋ฒ
* ๊ณต์ ๋ฌธ์๋ฅผ ์ฐธ๊ณ ํ์ฌ ๊ฐ๋ฐํ์์ต๋๋ค.

์๋ฐ์คํฌ๋ฆฝํธ ํ๊ฒฝ์์ AWS SDK๋ฅผ ์ด์ฉํ๊ธฐ ์ํ ์ ์ฒ๋ฆฌ ๊ณผ์ ์ [AWS SDK for Javascript](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-browser.html)๋ฅผ,
์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋ ์์ฑ ์ AWS SDK์ Client์ Command์ ๋ํ ๋ด์ฉ์ [AWS SDK for Javascript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)๋ฅผ ์ฐธ๊ณ ํ์ต๋๋ค.

> **AWS ์ฝ์์์ ํ  ์ผ**
 1) Amazon IAM์์ User ์์ฑ
 2) Amazon conginto์์ Create new identity pool(unauthenticated identities์ ๋ํ ์ ๊ทผ ๋ฐ๋์ ํ์ฉ)
 3) Amazon IAM์์ ์์ฑํ User์ ์ ์ฑ ์ถ๊ฐ(User Permissions์์ Add Permissions๋ฅผ ํตํด ์ฌ์ฉํ  ๊ธฐ๋ฅ์ ๋ํ ์ ์ฑ์ ์ถ๊ฐํจ)
 4) Amazon IAM์์ Roles ๊ด๋ฆฌ. 2์์ ์์ฑํ๋ identity pool(์ฐ๋์๊ฒฉ์ฆ๋ช)์ Unauthenticated identities role์ 3์์ ํ๋ ๊ฒ๊ณผ ๊ฐ์ด ์ ์ฑ์ ์ถ๊ฐํด์ค
 
> **AWS CLI์์ ํ  ์ผ**
  * AWS CLI๋ฅผ ์ค์นํ์ฌ IAM User ํ๊ฒฝ๋ณ์๋ฅผ ๋ฑ๋ก

> **Javascript ์ฝ๋ ์์ฑ**

  * [AWS SDK for Javascript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)๋ฅผ ์ฐธ๊ณ 
  * identity pool id๋ AWS cognito์์ ์์ฑํ๋ identity pool์ ๋ค์ด๊ฐ์ ํ์ธํ  ์ ์์
  * Command ์ฌ์ฉ ์ ๋ฐ๋์ Command ๋ณ๋ก import๊ฐ ํ์์ 
  * ๋ค์๊ณผ ๊ฐ์ด ์์ฑํ ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋๋ฅผ Webpack์ผ๋ก ๋ฌถ์ ํ, html ํ์ผ์ ์คํฌ๋ฆฝํธ๋ก ์ถ๊ฐํด์ AWS SDK ๊ธฐ๋ฅ์ ์ฌ์ฉ
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
  * AWS SDK V3 ์ฌ์ฉ๋ฒ์ ๋ํด์ ์๊ฒ๋์๋ค.
  * select ๋ฐ์ค ๊ฒ์๊ธฐ๋ฅ์ ์ฌ์ฉํ๊ธฐ ์ํด์ jquery์ select2๋ฅผ ์ฌ์ฉํ  ์ ์์์ ์๊ฒ๋์๋ค.
  * textract ์ฒ๋ฆฌ ์ input param์ผ๋ก ๋ค์ด๊ฐ๋ bytes์ ํ์์ ๋ง๊ฒ ํ์ผ์ ์ฒ๋ฆฌํ๋ฉฐ js์ Arraybuffer ๊ฐ์ฒด์ TypedArray์ ๋ํด์ ์๊ฒ๋์๋ค.

