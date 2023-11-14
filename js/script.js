function toggleAccordion(details) {
  // Check if the clicked accordion is currently opening
  const isOpening = !details.hasAttribute('open');

  // Close all other accordions
  document.querySelectorAll('.accordion-div').forEach(otherDetails => {
    if (otherDetails !== details) {
      otherDetails.removeAttribute('open');
      otherDetails.classList.remove('accordion-open');
    }
  });

  // Toggle the open state of the clicked accordion
  if (isOpening) {
    details.setAttribute('open', '');
    details.classList.add('accordion-open');
  } else {
    details.removeAttribute('open');
    details.classList.remove('accordion-open');
  }
}

// Attach a click event listener to the accordion wrapper for event delegation
document.querySelector('.accordion-wrapper').addEventListener('click', event => {
  // Find the nearest summary element from the clicked target
  const summary = event.target.closest('summary');
  if (summary) {
    // Prevent default to stop the browser from toggling 'open' automatically
    event.preventDefault();
    const details = summary.parentNode; // Reference the parent details of the clicked summary
    toggleAccordion(details); // Call the toggle function to open or close the accordion
  }
});