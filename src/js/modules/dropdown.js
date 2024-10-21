export const dropdown = () => {
    const jsDropdownWr = document.querySelector('.menu__list .js-dropdown');
    const jsDropdown = document.querySelector('.menu__list .js-dropdown a');

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.js-dropdown')) {
            e.target.classList.toggle('active');
        }
    });

    jsDropdown.addEventListener('click', () => {
        jsDropdownWr.classList.remove('active')
    });


}

