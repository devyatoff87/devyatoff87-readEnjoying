const addProgressBar = () => {
    let element = document.createElement('div');
    element.id = 'progress-container';
    element.innerHTML = '<div id="progress-bar"></div>';
    document.body.appendChild(element);
};

const readingProgress = (target) => {

    let winTop = window.pageYOffset - 600 || document.documentElement.scrollTop - 600;
    let targetBottom = target.offsetTop + target.scrollHeight - 780;
    let windowBottom = winTop + window.outerHeight;
    let progress = 100 - (((targetBottom - windowBottom + window.outerHeight / 3) / (targetBottom - window.outerHeight + window.outerHeight / 3)) * 100);

    document.querySelector('#progress-bar').style.width = progress + '%';

    (progress > 100) ? document.querySelector('#progress-container').classList.add('ready') : document.querySelector('#progress-container').classList.remove('ready');
};

document.addEventListener('DOMContentLoaded', () => {
    let content = document.querySelector('.result');
    addProgressBar();
    readingProgress(content);
    let progressBar = document.querySelector('#progress-bar');
    let backtotop = document.querySelector('.back-to-top')
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 600) {
            readingProgress(content);
            progressBar.classList.add('show');
        }
        if (window.pageYOffset > window.innerHeight / 1.5) {
            backtotop.classList.add('show');
        } else {
            backtotop.classList.remove('show');
        }
    });
});