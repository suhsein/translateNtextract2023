window.onload = function () {
  const $start = document.querySelector("#start");
  const $startlang = document.querySelector("#startlang");
  const $endlang = document.querySelector("#endlang");
  const $change = document.querySelector("#change");
  const $tran = document.querySelector("#tran");
  const $copy1 = document.querySelector("#copy1");
  const $copy2 = document.querySelector("#copy2");
  const $email = document.querySelector("#email");
  let startlang, endlang;

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

  $change.addEventListener("click", () => {
    startlang = $('#startlang').find(':selected').text();
    endlang = $('#endlang').find(':selected').text();
    $('#startlang').select2().val(value[optiontxt.indexOf(endlang)]).trigger('change');
    $('#endlang').select2().val(value[optiontxt.indexOf(startlang)]).trigger('change');
  });

  $tran.addEventListener("click", () => {
    const line = $start.value;
    startlang = $startlang.value;
    endlang = $endlang.value;
    myLibrary.translator(startlang, endlang, line);
  });

  for(let i=0; i<optiontxt.length; i++){
    let newOption = new Option(optiontxt[i], value[i]);
    $startlang.add(newOption);
    newOption = new Option(optiontxt[i], value[i]);
    $endlang.add(newOption);
  }

  $('#startlang').select2().val('ko').trigger('change');
  $('#endlang').select2().val('en').trigger('change');

  new ClipboardJS(".btn");
  function msg() {
    alert("?????????????????????.");
  }

  $copy1.addEventListener("click", msg);
  $copy2.addEventListener("click", msg);
  $email.addEventListener("click", msg);
};
