function changeTheme()
{
    var html = document.querySelector('html');
    var theme;
    var previousTheme = $('body').get(0).className;
    var stylesheets = {
        // TODO: Usare jQuery per selezionare gli stili
        ayuHighlight: document.querySelector("[href=\"../CSS/ayu-highlight.css\"]"),
        highlight: document.querySelector("[href=\"../CSS/highlight.css\"]"),
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
    console.log($("#syntax").attr("href"));
    document.body.className = theme;
    html.classList.remove(previousTheme);
    html.classList.add(theme);
}


let section = document.querySelectorAll('section');
let lists = document.querySelectorAll('.list');
function activeLink(li) {
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}
lists.forEach((item) =>
    item.addEventListener('click', function(){
        activeLink(this);
    }));

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            const target = document.querySelector(`[href='#${id}']`).parentElement;
            activeLink(target);
        }
    })
};