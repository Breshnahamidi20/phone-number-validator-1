const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

checkBtn.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();
  if (userInputValue === '') {
    window.alert('Please provide a phone number');
    return;
  }
  const validPatterns = [
    /^1?\s?\d{3}-\d{3}-\d{4}$/,
    /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,
    /^1?\(\d{3}\)\d{3}-\d{4}/,
    /^1?\s?\d{3}\s?\d{3}\s?\d{4}$/,
    /^1?\s?\d{10}$/,
  ];
  const isValid = validPatterns.some((pattern) => pattern.test(userInputValue));
  resultsDiv.textContent = isValid ? `Valid US number: ${userInputValue}` : `Invalid US number: ${userInputValue}`;
  resultsDiv.style.color = isValid ? 'green' : 'red';
});
clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
  userInput.value = '';
});