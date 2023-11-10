// Function that controls the opening and closing of an accordion section
function toggleAccordion(details) {
  // Check if the details element is currently closed
  const isOpening = !details.hasAttribute('open');
  // Find the icon element within the details element
  const icon = details.querySelector('.custom-icon');

  // Iterate over all details elements to close any that are open
  document.querySelectorAll('details').forEach(otherDetails => {
    if (otherDetails !== details) {
      otherDetails.removeAttribute('open');
      otherDetails.querySelector('.custom-icon').style.transform = 'rotate(0deg)';
    }
  });

  // Determine if the current details element should open or close
  if (isOpening) {
    details.setAttribute('open', '');
    icon.style.transform = 'rotate(180deg)';
  } else {
    details.removeAttribute('open');
    icon.style.transform = 'rotate(0deg)';
  }
}

// Attach a click event listener to the accordion wrapper for event delegation
document.querySelector('.accordion-wrapper').addEventListener('click', event => {
  // Find the nearest summary element from the clicked target
  const summary = event.target.closest('summary');
  if (summary) {
    // Prevent default to stop the browser from toggling 'open' automatically
    event.preventDefault(); // Prevent the default summary click action
    const details = summary.parentNode; // Reference the parent details of the clicked summary
    toggleAccordion(details); // Call the toggle function to open or close the accordion
  }
});