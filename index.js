
  const editor = document.querySelector('#editor');
  const count = document.querySelector('.word-count');


const quill = new Quill('#editor', {
  theme: 'snow',
  placeholder: 'Let your thoughts flow' ,
   modules: {
    toolbar: '#custom-toolbar'
  }
});
const editorContent = document.querySelector('.ql-editor');
const editorContainer = document.querySelector('.ql-container');

// Auto resize on content change
quill.on('text-change', () => {
  // Wait for content to render
  setTimeout(() => {
    const scrollHeight = editorContent.scrollHeight;
    editorContainer.style.height = scrollHeight + 'px';
  }, 0);
});
// Language Selector
const editable = document.querySelector('.ql-editor');
const langLabel=document.querySelector(`#language-label`);
const flagImg=document.querySelector(`#language-flag`);
const languageSelect = document.getElementById('language-select');
setTimeout(() => {
  const editable = document.querySelector('.ql-editor');
  const languageSelect = document.getElementById('language-select');

  const languages = {
    english: {
      name: "English",
      image: "Images/English.jpg",
      spellcheck: true
    },
    hindi: {
      name: "Hindi",
      image: "Images/India.jpg",
      spellcheck: false
    }
  };

  function updateLanguage(langKey) {
    const lang = languages[langKey];
    if (!lang) return;

    editable.spellcheck = lang.spellcheck;
    editable.setAttribute("spellcheck", lang.spellcheck);
    editable.setAttribute("autocorrect", lang.spellcheck ? "on" : "off");
    editable.setAttribute("autocapitalize", lang.spellcheck ? "on" : "off");
    flagImg.src = lang.image;
  }

  languageSelect.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
  });

  updateLanguage("english");

}, 0);
//Word Counter
quill.on('text-change', () => {
  const text = quill.getText().trim();
  const words = text === '' ? 0 : text.split(/\s+/).length;
  count.textContent = `Word count: ${words}`;
});
