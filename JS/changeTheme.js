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