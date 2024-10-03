window.onscroll = function() {
    updateScrollLine();
};

function updateScrollLine() {
    
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    
    let scrolled = (scrollTop / scrollHeight) * 100;

    
    document.getElementById("scroll-line").style.width = scrolled + "%";
}