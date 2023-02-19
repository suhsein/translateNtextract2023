import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
import { TextractClient, DetectDocumentTextCommand } from "@aws-sdk/client-textract";

const REGION = 'us-east-1';
const IDENTITY_POOL_ID = 'us-east-1:4c68e0fb-82ad-4709-97ce-58aa248284da';

const translateClient = new TranslateClient({
    region: REGION,
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({region:REGION}),
        identityPoolId: IDENTITY_POOL_ID
    })
});

const textractClient = new TextractClient({
    region: REGION,
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({region:REGION}),
        identityPoolId: IDENTITY_POOL_ID
    })
});

const translator = async (startlang, endlang, line) => { 
    try {
        const params = { 
            SourceLanguageCode: startlang,
            TargetLanguageCode: endlang,
            Text: line
        }
        const translated = await translateClient.send(new TranslateTextCommand(params));
        document.querySelector('#end').value = translated.TranslatedText;
    } catch (err){
        console.error(err);
    }
};

const textractor = async (buffer) => {
    try {
        $textract.setAttribute('disabled', 'true');
        $txtarea.value = '';
        $spinner.style.visibility = 'visible';
        // text 추출 완료 시까지 spinner가 보이게 함.

        const textracted = await textractClient.send(new DetectDocumentTextCommand({Document : { Bytes : buffer }}));
        textracted.Blocks.forEach((block)=> {
            if(block.BlockType === 'LINE') {
                $txtarea.value += (block.Text + '\n');
            }
        });
       
       $textract.removeAttribute('disabled');
       $spinner.style.visibility = 'hidden';
    } catch (err){
        console.error(err);
    }
};

export { translator, textractor };