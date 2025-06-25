
  const editor = document.querySelector('.Editor');
  const count = document.querySelector('.word-count');

  editor.addEventListener('input', () => {
    const words = editor.value.trim().split(/\s+/).filter(Boolean);
    count.textContent = `word count: ${words.length}`;
  });
