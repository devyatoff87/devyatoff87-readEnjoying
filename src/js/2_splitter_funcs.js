

const paragsMaker = (arr) => {
    console.log(arr);
    if (arr == undefined || arr == null) {
        return
    }
    if (typeof arr == Array) {
        arr = arr.join(' ');
    }
    let paragContent = arr;
    let parag = document.createElement('p');
    parag.innerHTML = paragContent;
    result.append(parag);
}

const headerMaker = (arr) => {
    if (arr == undefined || arr == null) {
        return
    }
    let headerContent = arr.toString();
    let header = document.createElement('h3');
    header.innerHTML = headerContent;
    result.append(header);
}

const splitter = (arr, flag) => {
    let arrParag = [];
    let count = 0;
    if (flag == true) {
        headerMaker(arr.shift());
    }
    while (arr.length) {
        for (let i = 0; i < 4; i++) {
            arrParag.push(arr.shift());
            if (i == 3) {
                paragsMaker(arrParag);
                arrParag = [];
                count++;
            }
            if (count == 3 && flag == true) {
                headerMaker(arr.shift());
                count = 0;
            }
        }
    }
}

const mainFunc = (str, pattern, flag = false) => {
    str = str.value;
    let spl = str.split(pattern);
    let arr = [];

    for (let i = 0; i < spl.length - 1; i + 2) {
        arr.push(new Array(spl.shift(), spl.shift()).join('').trim());
    }
    splitter(arr, flag);
    lastParagMargin();
}