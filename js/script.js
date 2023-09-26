document.querySelectorAll('details').forEach(details => {
    const summary = details.querySelector('summary');
    const icon = summary.querySelector('.custom-icon');

    summary.addEventListener('click', event => {
      // Close all other details elements.
      document.querySelectorAll('details').forEach(otherDetails => {
        if (otherDetails !== details) {
          otherDetails.removeAttribute('open');
          otherDetails.querySelector('.custom-icon').style.transform = 'rotate(0deg)';
        }
      });

      // Delay to let the 'open' attribute get toggled before checking the state.
      window.setTimeout(() => {
        if (details.hasAttribute('open')) {
          icon.style.transform = 'rotate(180deg)';
        } else {
          icon.style.transform = 'rotate(0deg)';
        }
      }, 0);
    });
  });