import '../styles/styles.scss';

let sectionIntersectionObserver;
let sections = document.querySelectorAll('section');

const sectionFadeIn = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting)
      entry.target.classList.add('text-focus-in');
  })
}

sectionIntersectionObserver = new IntersectionObserver(sectionFadeIn);
sections.forEach((section) => {
  sectionIntersectionObserver.observe(section);
})
