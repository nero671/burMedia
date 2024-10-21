export const simpleAccordion = (accordionWrapper) => {
    const accordion = accordionWrapper;
    const accordionItem = document.querySelectorAll('.simple-accordion__item');
    const open = (button, dropdown) => {
        closeDrops();
        dropdown.style.height = "".concat(dropdown.scrollHeight + "px");
        button.classList.add('active');
        dropdown.classList.add('active');
    };

    const close = (button, dropdown) => {
        button.classList.remove('active');
        dropdown.classList.remove('active');
        dropdown.style.height = '';
    };

    const closeDrops = (button, dropdown) => {
        accordionItem.forEach(item => {
            if (item.children[0] !== button && item.children[1] !== dropdown) {
                close(item.children[0], item.children[1]);
            }
        });
    };

    if (accordion) {
        accordion.addEventListener('click', function (e) {
            const target = e.target;
            accordion.classList.toggle('active');

            if (target.closest('[class*="__title"]')) {
                const parent = target.closest('[class$="__item"]');
                const button = target.closest('[class*="__title"]');
                const dropdown = parent.querySelector('[class*="__content"]');
                // const arrow = parent.querySelector('[class*="__title"] svg');

                dropdown.classList.contains('active') ? close(button, dropdown) : open(button, dropdown);
            }
        });
    }
};
