window.onload = function() {
$startlang = document.querySelector('#startlang');
$endlang = document.querySelector('#endlang');
$tran =  document.querySelector('#tran');
$start = document.querySelector('#start');
$end = document.querySelector('#end');
$change = document.querySelector('#change');
$spinner = document.querySelector('#spinner');
$copy1 = document.querySelector('#copy1');
$copy2 = document.querySelector('#copy2');
$email = document.querySelector('#email');

let startlang, endlang, view;

const optiontxt = ['Afrikaans', 'Albanian', 'Amharic', 'Arabic', 'Armenian', 'Azerbaijani', 'Bengali', 'Bosnian', 'Bulgarian', 'Catalan',
'Chinese (Simplified)', 'Chinese (Traditional)', 'Croatian', 'Czech', 'Danish', 'Dari', 'Dutch', 'English', 'Estonian',
'Farsi (Persian)','Filipino, Tagalog','Finnish', 'French',  'French (Canada)', 'Georgian', 'German', 'Greek', 'Gujarati',
'Haitian Creole','Hausa', 'Hebrew', 'Hindi', 'Hungarian', 'Icelandic', 'Indonesian', 'Irish', 'Italian', 'Japanese', 'Kannada',
'Kazakh', 'Korean', 'Latvian', 'Lithuanian', 'Macedonian','Malay', 'Malayalam', 'Maltese', 'Marathi', 'Mongolian', 'Norwegian (Bokmal)', 
'Pashto', 'Polish', 'Portuguese (Brazil)', 'Portuguese (Portugal)', 'Punjabi', 'Romanian', 'Russian', 'Serbian', 'Sinhala', 'Slovak', 
'Slovenian', 'Somali', 'Spanish', 'Spanish (Mexico)', 'Swahili', 'Swedish', 'Tamil', 'Telugu', 'Thai', 'Turkish', 'Ukrainian', 'Urdu', 'Uzbek', 'Vietnamese', 'Welsh'];

const value = ['af', 'sq', 'am', 'ar', 'hy', 'az', 'bn', 'bs', 'bg', 'ca', 'zh', 'zh-TW', 'hr', 'cs', 'da', 'fa-AF', 'nl', 'en', 'et',
'fa', 'tl', 'fi', 'fr', 'fr-CA', 'ka', 'de', 'el', 'gu', 'ht', 'ha', 'he', 'hi', 'hu', 'is', 'id', 'ga', 'it', 'ja', 'kn', 'kk', 'ko',
'lv', 'It', 'mk', 'ms', 'ml', 'mt', 'mr', 'mn', 'no', 'ps', 'pl', 'pt', 'pt-PT', 'par', 'ro', 'ru', 'sr', 'si', 'sk', 'sl', 'so', 'es', 
'es-MX', 'SW', 'SV', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'UZ', 'vi', 'cy'];

$(document).ready(function () {
$("#startlang").select2();
});

$(document).ready(function () {
$("#endlang").select2();
});

Dropzone.autodiscover = false;
Dropzone.options.dz = {
maxFiles:1,
init:function(){
    this.on('maxfilesexceeded', function(file){
        this.removeAllFiles();
        this.addFile(file);
    })
    this.on('addedfile', async function(file){
        let buffer;
        await file.arrayBuffer().then(function(result){ buffer = result; });
        view = new Uint8Array(buffer);
    })
},
url:'./translateNtextract.html',
acceptedFiles: ".jpeg,.jpg,.png,.JPEG,.JPG,.PNG",
uploadMultiple: false,
dictDefaultMessage: "Drop file here or click to upload",
}

$tran.addEventListener('click', ()=> {
startlang = $startlang.value;
endlang = $endlang.value;
myLibrary.trNtr(startlang, endlang, view);
});

for(let i=0; i<optiontxt.length; i++){
let newOption = new Option(optiontxt[i], value[i]);
$endlang.add(newOption);
}

$('#startlang').select2().val('en').trigger('change');
$('#endlang').select2().val('ko').trigger('change');

new ClipboardJS(".btn");
function msg() {
alert("복사되었습니다.");
}

$copy1.addEventListener("click", msg);
$copy2.addEventListener("click", msg);
$email.addEventListener("click", msg);
}