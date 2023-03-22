function changeTheme()
{
    var theme;
    var previousTheme = $('body').get(0).className;
    var stylesheets = {
        highlight: $("[href$=\"CSS/highlight.css\"]")[0],
        ayuHighlight: $("[href$=\"CSS/ayu-highlight.css\"]")[0],
    };
    if(previousTheme == "ayu")
    {
        theme = "light";
        stylesheets.ayuHighlight.disabled = true;
        stylesheets.highlight.disabled = false;
    } else 
    {
        theme = "ayu";
        stylesheets.ayuHighlight.disabled = false;
        stylesheets.highlight.disabled = true;
    }
    document.body.className = theme;
}


let section = document.querySelectorAll('section');
let lists = document.querySelectorAll('a');
function activeLink(li) {
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}
lists.forEach((item) =>
    item.addEventListener('click', function(){
        activeLink(this);
    })
);

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            const target = document.querySelector(`[href='#${id}']`);
            activeLink(target);
        }
    })
};