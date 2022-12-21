(() => {
  const refs = {
    openMenuBtn: document.querySelector('.btn-open'),
    closeMenuBtn: document.querySelector('.btn-close'),
    menu: document.querySelector('.mobile-menu'),
    body: document.querySelector('body')
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scrol');
  }
})();