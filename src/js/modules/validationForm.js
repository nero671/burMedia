import Pristine from 'pristinejs';

const formValidation = () => {
    const config = {
        classTo: 'form-control',
        errorClass: 'form-control--error',
        successClass: 'form-control--success',
        errorTextParent: 'form-control',
        errorTextTag: 'div',
        errorTextClass: 'form-control__message',
    };

    const forms = document.querySelectorAll('.validation-form');
    const thankPopup = document.querySelector('.thank-popup');

    if (!forms.length) return;

    Pristine.addValidator('hyphen', (value) => {
        if (value[value.length - 1] !== '-' && value[0] !== '-') return true;

        return false;
    }, '');

    Pristine.addValidator('space', (value) => {
        if (value[value.length - 1] !== ' ' && value[0] !== ' ') return true;

        return false;
    }, '');

    Pristine.addValidator('custom-email', (value) => {
        // eslint-disable-next-line no-useless-escape
        const regEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

        if (value.match(regEx)) return true;

        return false;
    }, '');

    Pristine.addValidator('only-number', (value) => {
        const regEx = /^\d+$/;

        if (value.match(regEx) || !value.length) return true;

        return false;
    }, '');

    Pristine.addValidator('only-letters', (value) => {
        const regEx = /^[a-zA-Z а-яА-ЯЁё-]+$/;

        if (value.match(regEx) || !value.length) return true;

        return false;
    }, '');

    Pristine.addValidator('letters-num-symb', (value) => {
        const regEx = /^[a-zA-Zа-яА-ЯЁё0-9\s!@#$%^&*()_+-=,.<>?;:'"{}[]|\/\\]+$/;

        if (value.match(regEx) || !value.length) return true;

        return false;
    }, '');

    Pristine.addValidator('phone', (value) => {
        if (!(value.length < 16)) return true;

        return false;
    }, '');

    Pristine.addValidator('only-number-optional', (value) => {
        const regEx = /^\d+$/;

        if (value.match(regEx) || !value.length) return true;

        return false;
    }, '');

    Pristine.addValidator('cyrillic-space-hyphen-point-dash', (value) => {
        // eslint-disable-next-line no-useless-escape
        const regEx = /^[а-яА-ЯёЁ\- \/\.]*$/;

        if (value.match(regEx) || !value.length) return true;

        return false;
    }, '');

    Pristine.addValidator('cyrillic-space-hyphen-point-dash-num', (value) => {
        // eslint-disable-next-line no-useless-escape
        const regEx = /^[а-яА-ЯёЁ0-9\- \/\.]*$/;

        if (value.match(regEx) || !value.length) return true;

        return false;
    }, '');

    Pristine.addValidator('numbers-dash-slash', (value) => {
        // eslint-disable-next-line no-useless-escape
        // const regEx = /[\d\- \/\.]+/;
        const regEx = /^[0-9/-]*$/;

        if (value.match(regEx) || !value.length) return true;

        return false;
    }, '');

    Pristine.addValidator('at-least-lower-and-upper-letter-and-digit', (value) => {
        // const regEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]*$/;
        // const regEx = /^(?=.*[A-Z]|.*[А-ЯЁ])(?=.*[a-z]|.*[а-яё])(?=.*[0-9])[A-Za-zА-Яа-яЁё0-9]*$/;
        const regEx = /^(?=.*[A-ZА-ЯЁa-zа-яё])(?=.*[0-9])[A-Za-zА-Яа-яЁё0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/\-|=]*$/;

        if (value.match(regEx)) return true;

        return false;
    }, '');

    function checkFormCheckBtns(form, event) {
        const inputs = form.querySelectorAll('.form-check-btn__input');

        if (!inputs.length) return;

        let isSuccess;
        const wrapper = form.querySelector('.card-block__box-wrap');

        inputs.forEach((input) => {
            if (input.checked) isSuccess = true;
        });

        if (!isSuccess) {
            event.preventDefault();

            const errorStr = "<div class='form-control__message'>Выберите один из вариантов</div>";
            const errorEl = wrapper.nextElementSibling;

            if (errorEl) errorEl.remove();

            wrapper.insertAdjacentHTML('afterend', errorStr);
        } else {
            const errorEl = wrapper.nextElementSibling;

            if (errorEl) errorEl.remove();
        }
    }

    forms.forEach((form) => {
        const pristine = new Pristine(form, config);

        form.addEventListener('submit', (event) => {
            const valid = pristine.validate();

            checkFormCheckBtns(form, event);

            if (!valid) {
                event.preventDefault();

                event.target.querySelector('.form-control--error').scrollIntoView({ block: 'center' });
            } else {
                form.dispatchEvent(new CustomEvent('valid-form'), {
                    detail: { valid: true },
                });

                thankPopup.classList.add('_is-open');
            }
        });
    });
};

export default formValidation;
