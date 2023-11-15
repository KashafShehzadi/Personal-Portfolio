window.onscroll = () => {
    const header=document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
  };

//scroll section active link 
  