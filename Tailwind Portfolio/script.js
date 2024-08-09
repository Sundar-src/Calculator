const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
  sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
  sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
  if(scrollY > 50){
    navBar.classList.add("bg-white", "bg-opacity-50", "backdrop-blur-lg", "shadow-sm", "dark:bg-[#001233]/50");
    navLinks.classList.remove("bg-white","bg-opacity-50","shadow-sm", "dark:border-white/70", "dark:border");
  } else{
    navBar.classList.remove("bg-white", "bg-opacity-50", "backdrop-blur-lg", "shadow-sm", "dark:bg-[#001233]/50");
    navLinks.classList.add("bg-white","bg-opacity-50","shadow-sm", "dark:border-white/70", "dark:border");
  }
});

// light mode and dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

function toggleTheme(){
  document.documentElement.classList.toggle('dark');

  if(document.documentElement.classList.contains('dark')){
    localStorage.theme = 'dark';
  }else{
    localStorage.theme = 'light';
  }
}