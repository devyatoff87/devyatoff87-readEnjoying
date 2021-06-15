
work.addEventListener('click', function () {
    let proved = proveFunc();

    if (proved && splitText.checked == true) {
        styling(true);
        if (makeHeaders.checked == true) {
            mainFunc(str, /(\.|\!|\?)/, true);
        }
        mainFunc(str, /(\.|\!|\?)/, false);
    }
    else if (proved && splitText.checked == false) {
        styling(true);
        paragsMaker(str.value)
    }

    this.disabled = true;
    clear.disabled = false;
})

clear.disabled = true;

clear.addEventListener('click', function () {
    styling(false);
    work.disabled = false;
    this.disabled = true;
})

larger.addEventListener('click', function (e) {
    let proved = proveFunc();

    if (proved) {
        (largerFunc(e))
    }
})

darkmode.addEventListener('click', function (e) {
    let proved = proveFunc();

    if (proved) {
        (darkModeFunc(e))
    }
})

