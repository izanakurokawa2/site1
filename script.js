document.addEventListener('DOMContentLoaded', () => {
    const triggerFirst = document.querySelector('.accordionOpenFirst');
    const triggerSecond = document.querySelector('.accordionOpenSecond');
    const triggerThird = document.querySelector('.accordionOpenThird');


    const modalFirst = document.querySelector('.accordionModalFirst');
    const modalSecond = document.querySelector('.accordionModalSecond');
    const modalThird = document.querySelector('.accordionModalThird');



    function openAccardion(trigger, modalFirst) {
        trigger.addEventListener('click', (event) => {
            trigger.classList.toggle('clickTrigger');
            if (event.target = trigger) {
                modalFirst.classList.toggle('openAcc');
            }
        });
    }
    openAccardion(triggerFirst, modalFirst);
    openAccardion(triggerSecond, modalSecond);
    openAccardion(triggerThird, modalThird);


});