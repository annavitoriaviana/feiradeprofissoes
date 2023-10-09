const toggleButton = document.getElementById('toggleContent');
const content = document.getElementById('content');

toggleButton.addEventListener('click', () => {
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    toggleButton.innerText = 'Sair';
  } else {
    content.style.display = 'none';
    toggleButton.innerText = 'Entrar';
  }
});
