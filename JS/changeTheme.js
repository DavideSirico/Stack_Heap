function changeTheme()
{
    var html = document.querySelector('html');

    var theme;
    var previousTheme = $('body').get(0).className;
    if(previousTheme == "ayu")
    {
        theme = "light";
    } else 
    {
        theme = "ayu";
    }


    document.body.className = theme;
    html.classList.remove(previousTheme);
    html.classList.add(theme);
}