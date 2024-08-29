// Configurar el PDF.js
var pdfjsLib = window['pdfjs-dist/build/pdf'];

// URL del PDF
var url = 'curriculum-programador.pdf';

// Configuración del canvas para renderizar
var pdfDoc = null,
    pageNum = 1,
    scale = 1.5, // Ajusta el scale según sea necesario para el 100%
    canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

document.getElementById('pdf-viewer').appendChild(canvas);

// Cargar el documento PDF
pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
    pdfDoc = pdfDoc_;
    renderPage(pageNum);
});

// Renderizar una página del PDF
function renderPage(num) {
    pdfDoc.getPage(num).then(function(page) {
        var viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        var renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        page.render(renderContext);
    });
}
