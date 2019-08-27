// NOTE: used in MathJax
// function fixMathExpressions() {
//     const allMathTexts = document.querySelectorAll('span.math span.mtext');

//     for (let text of allMathTexts) {
//         const letters = Array.from(text.querySelectorAll('span'));
//         const nodeText = text.childNodes[0].nodeValue ? text.childNodes[0].nodeValue : '';
//         const actualText = nodeText + letters.map(function(letterSpan) {
//             return letterSpan.innerText;
//         }).join('');

//         text.style.direction = 'rtl';
//         text.innerText = actualText;
//         text.parentElement.style.width = '100%';
//         text.parentElement.style.textAlign = 'center';
//         text.parentElement.style.margin = '0';
//         text.parentElement.style.transform = 'translateX(-50%)';
//     }
// }


// NOTE: used in KaTeX
function addBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

function basicRenderMathScripts() {
    const allMathScripts = document.querySelectorAll('script[type="math/tex; mode=display"]');

    for (let script of allMathScripts) {
        let latexCode = script.innerHTML.replace(/% <!\[CDATA\[\n(.*) %\]\]>/g, '$1');
        const mathDiv = document.createElement('div');
        mathDiv.classList.add('math');
        katex.render(latexCode, mathDiv, {
            throwOnError: false,
            displayMode: true,
            output: 'html',
            strict: 'ignore'
        });
        addBefore(mathDiv, script);
    }
}

basicRenderMathScripts();
