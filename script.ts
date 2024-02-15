const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        const cvElement = document.getElementById('cv');
        if (cvElement) {
            const cvContent = cvElement.innerHTML;
            const cvBlob = new Blob([cvContent], { type: 'application/pdf' });

            const url = URL.createObjectURL(cvBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'my_cv.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            // Remove event listener to prevent multiple downloads
            downloadBtn.removeEventListener('click', () => {});
        } else {
            console.error('CV element not found.');
        }
    });
} else {
    console.error('Download button not found.');
}
