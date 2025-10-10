(function() {
  'use strict';

  function insertCredits() {
    const footer = document.querySelector('footer');

    if (!footer) {
      console.warn('Credits Widget: No footer element found');
      return;
    }

    const lastElement = footer.lastElementChild;

    const creditsContainer = document.createElement('div');
    creditsContainer.className = 'credits-widget';
    creditsContainer.setAttribute('data-credits-widget', 'true');
    creditsContainer.style.cssText = 'margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(0,0,0,0.1); font-size: 0.875rem; color: #666;';

    const script = document.querySelector('script[data-credits-config]');
    const config = script ? JSON.parse(script.getAttribute('data-credits-config') || '{}') : {};

    const creditText = config.text || 'Website Credits';
    const creditLink = config.link || '';
    const creditTarget = config.target || '_blank';

    if (creditLink) {
      const link = document.createElement('a');
      link.href = creditLink;
      link.target = creditTarget;
      link.rel = 'noopener noreferrer';
      link.textContent = creditText;
      link.style.cssText = 'color: inherit; text-decoration: none;';
      link.addEventListener('mouseenter', () => link.style.textDecoration = 'underline');
      link.addEventListener('mouseleave', () => link.style.textDecoration = 'none');
      creditsContainer.appendChild(link);
    } else {
      creditsContainer.textContent = creditText;
    }

    if (lastElement) {
      lastElement.insertAdjacentElement('afterend', creditsContainer);
    } else {
      footer.appendChild(creditsContainer);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertCredits);
  } else {
    insertCredits();
  }
})();
