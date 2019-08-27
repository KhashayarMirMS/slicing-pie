function fixMathExpressions() {
    const allMathTexts = document.querySelectorAll('span.math span.mtext');
    
    for (let text of allMathTexts) {
        const letters = Array.from(text.querySelectorAll('span'));
        const nodeText = text.childNodes[0].nodeValue ? text.childNodes[0].nodeValue : '';
        const actualText = nodeText + letters.map(function(letterSpan) {
            return letterSpan.innerText;
        }).join('');

        text.style.direction = 'rtl';
        text.innerText = actualText;
        text.parentElement.style.width = '100%';
        text.parentElement.style.textAlign = 'center';
        text.parentElement.style.margin = '0';
        text.parentElement.style.transform = 'translateX(-50%)';
    }
}