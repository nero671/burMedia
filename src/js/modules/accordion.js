export const useAccordion = (accordionWrapper) => {
    const accordion = accordionWrapper;
    const accordionItem = document.querySelectorAll('.accordion__item');
    const accordionTitle = document.querySelectorAll('.accordion__title');
    const accordionDecorative = document.querySelectorAll('#services picture');

    const bw = document.body.clientWidth;
    const toggle = ['click', 'mouseover'];

    const open = (button, dropdown) => {
        closeDrops();
        dropdown.style.height = "".concat(dropdown.scrollHeight + "px");
        button.classList.add('active');
        dropdown.classList.add('active')
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
        // mouseenter
        accordion.addEventListener(`${bw > 1350 ? toggle[1] : toggle[0] }`, function (e) {
            const target = e.target;

            const toggleTab = (index) => {
                for(let i = 0; i < accordionDecorative.length; i++) {
                    if (index === i) {
                        accordionDecorative[i].classList.add('show');
                    } else {
                        accordionDecorative[i].classList.remove('show');
                    }
                }
            }


            if (target.closest('[class*="__title"]')) {
                const parent = target.closest('[class$="__item"]');
                const button = target.closest('[class*="__title"]');
                const dropdown = parent.querySelector('[class*="__content"]');
                // const arrow = parent.querySelector('[class*="__title"] svg');

                if (dropdown.classList.contains('active')) {
                    close(button, dropdown);
                } else {
                    open(button, dropdown);


                    accordionTitle.forEach((item, i) => {
                        if (item === target) {
                            toggleTab(i);
                        }
                    });

                }

            }
        });
    }
};
