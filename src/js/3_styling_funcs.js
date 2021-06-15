const lastParagMargin = () => {
    let parags = document.querySelectorAll('#result-area p');

    for (let i = 0; i < parags.length - 1; i++) {
        if (parags[i].nextElementSibling.tagName == 'H3') {
            parags[i].className = 'last-parag'
        }
    }
}

str.placeholder = placeholder

const styling = (flag = true) => {
    if (flag) {
        message.classList.add('active');
        result.classList.add('active');
        readOptions.classList.add('active')
    } else {
        message.classList.remove('active');
        result.classList.remove('active');
        readOptions.classList.remove('active')
        result.classList.remove('darkmode')
        str.value = '';
        result.innerHTML = '';
        str.placeholder = placeholder;
        makeHeaders.checked = false;
        splitText.checked = false;
    }
}

str.addEventListener('focusin', function () {
    work.disabled = false;
})

const proveFunc = () => {
    if (str.value == '' || str.value == null) {
        str.placeholder = placeholderErr;
        return false;
    }
    return true;
}

function largerFunc(e) {
    let parags = document.querySelectorAll('#result-area p');
    let headers = document.querySelectorAll('#result-area h3');

    const innerFunc = (a, b) => {
        parags.forEach((p) => {
            p.style.fontSize = a;
        })
        headers.forEach((h) => {
            h.style.fontSize = b;
        })
    }

    if (larger.value == 'make larger') {
        larger.value = 'make normal';
        innerFunc(1.4 + 'rem', 2 + 'rem');

    } else if (larger.value == 'make normal') {
        larger.value = 'make larger';
        innerFunc(1 + 'rem', 1.75 + 'rem');
    }
}

function darkModeFunc(e) {
    if (darkmode.value == 'dark mode') {
        darkmode.value = 'day mode';
        result.classList.add('darkmode')

    } else if (darkmode.value == 'day mode') {
        darkmode.value = 'dark mode';
        result.classList.remove('darkmode')
    }
}

splitText.addEventListener('change', function () {
    let group = makeHeaders.closest('div');
    if (this.checked == true) {
        group.style.visibility = 'visible';
    } else {
        group.style.visibility = 'hidden';
    }
})