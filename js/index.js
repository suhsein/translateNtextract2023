window.onload = function() {
  $translate = document.querySelector("#translate");
  $textract = document.querySelector("#textract");
  $translateNtextract = document.querySelector("#translateNtextract");

  $translate.addEventListener("click", () => {
    window.open("./translate.html", (target = "_blank"));
  });
  $textract.addEventListener("click", () => {
    window.open("./textract.html", (target = "_blank"));
  });
  $translateNtextract.addEventListener("click", () => {
    window.open("./translateNtextract.html", (target = "_blank"));
  });

  new ClipboardJS(".btn");
  function msg() {
    alert("복사되었습니다.");
  }
  $email.addEventListener("click", msg);
}