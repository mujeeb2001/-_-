    document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const ul = document.querySelector('ul');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const input = form.querySelector('input[type="text"]');
      const task = input.value.trim();
  
      if (task !== '') {
        const li = document.createElement('li');
        li.textContent = task;
  
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.classList.add('cancel-button');
        li.appendChild(cancelButton);
  
        ul.appendChild(li);
        input.value = '';
      } else {
        alert('Please enter a task!');
      }
    });
  
    ul.addEventListener('click', function(e) {
      if (e.target.classList.contains('cancel-button')) {
        e.target.parentElement.remove();
      }
    });
  });
  