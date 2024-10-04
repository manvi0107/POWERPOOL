document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.sections');


    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;


        boxes.forEach((sections, index) => {
            const sectionsPosition = sections.getBoundingClientRect().top + window.scrollY;


            if (scrollPosition > sectionsPosition) {
                setTimeout(() => {
                    sections.classList.add('visible');
                }, index * 300); // Delay each box based on its index
            }
        });
    };


    window.addEventListener('scroll', handleScroll);
});
