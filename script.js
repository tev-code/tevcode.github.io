document.getElementById('downloadBtn').addEventListener('click', function () {
    var cvContent = document.getElementById('cv').innerHTML;
    var cvBlob = new Blob([cvContent], { type: 'application/pdf' });
    var url = URL.createObjectURL(cvBlob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'my_cv.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
