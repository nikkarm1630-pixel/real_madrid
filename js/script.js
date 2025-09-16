console.log('فایل جاوا اسکریپت با موفقیت انجام شد')

   const body = document.body;
   const thembutton = document.getElementById('themebutton') 
   const themekey = 'user-theme'
function changeTitle() {
    console.log('اسکریپت دکمه اجراشد')
    window.scrollTo(0, 0);
    const titleElement = document.getElementById('main-title')
    titleElement.innerHTML = "یه سایت بهترین تیم تاریخ خوش امدید";
    titleElement.style.color = "yellow";
}
function toggleTheme() {
    body.classList.toggle('dark-mode')
    console.log('دکمه تغییر تم اجرا شد!');


    if(body.classList.contains('dark-mode')) {
        localStorage.setItem(themekey, 'dark');
    } else {
        localStorage.setItem(themekey, 'light');
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem(themekey);
    if(savedTheme == 'dark'){
        body.classList.add('dark-mode')
    }
    else{
        body.classList.remove('dark-mode')
    }
}

applySavedTheme()

if (thembutton) {
    thembutton.addEventListener('click' , toggleTheme);
}  
