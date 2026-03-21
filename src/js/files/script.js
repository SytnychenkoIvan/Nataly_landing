// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";


const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
	});
});

document.querySelectorAll('.box,.box-toright,.box-toleft,.box-todown').forEach(box => observer.observe(box));

// document.querySelectorAll('.__container').forEach(box => observer.observe(box));