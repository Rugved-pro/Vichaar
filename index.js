
  const editor = document.querySelector('.Editor');
  const count = document.querySelector('.word-count');

 

const quill = new Quill('#quill-editor', {
  theme: 'snow',
  modules: {
    toolbar: false
  }
});
