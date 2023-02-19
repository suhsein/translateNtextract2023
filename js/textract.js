window.onload = function() {
    $chooseFile = document.querySelector('#chooseFile');
    $imgcont = document.querySelector('.imgcont');
    $txtarea = document.querySelector('#txtarea');
    $spinner = document.querySelector('#spinner');
    $textract = document.querySelector('#textract');
    $copy = document.querySelector('#copy');
    $email = document.querySelector('#email');

    let view;
    // textractor의 input param으로 넘겨줌. input type => Buffer, Typed Array, Blob, String

    $chooseFile.addEventListener('change', async () =>{
        $('.imgcont').empty();
        let file = $chooseFile.files[0];
        let buffer;
        await file.arrayBuffer().then(function(result) { buffer = result; });
        view = new Uint8Array(buffer);
        // file 객체를 arraybuffer로 변환 후, arraybuffer 타입 buffer로부터 typed array를 view 변수에 저장함.

        let img = document.createElement('img');
        img.setAttribute('class', 'imgcont');

        let imgsrc = URL.createObjectURL(file);
        img.src = imgsrc;

        $imgcont.appendChild(img);
        $('.imgcont').css({
            "border":"0"
        });
        $('#textract, #txtarea, #copy').css({
            "visibility":"visible"
        })
    });

    $textract.addEventListener('click', () => {  
        myLibrary.textractor(view);
    });

    new ClipboardJS('.btn');
    function msg() {
        alert('복사되었습니다.');
    };
    $copy.addEventListener('click', msg);
    $email.addEventListener('click', msg);
};