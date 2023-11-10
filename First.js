//sticky navbar
window.onscroll = () => {
    const header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>50); 
    console.log("yes");
   
}
