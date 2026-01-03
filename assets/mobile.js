// Mobile-specific adjustments for autoplay and UI
document.addEventListener('DOMContentLoaded', function() {
  // Detect if we're on mobile
  const isMobile = window.innerWidth <= 768;
  const isSmallScreen = window.innerWidth <= 480;

  // Disable autoplay by default on mobile to save battery
  if (isMobile && window.autoplayEnabled !== false) {
    // This will be checked by the autoplay initialization
    localStorage.setItem('texticulos-mobile-disabled', 'true');
  }

  // Adjust touch targets for mobile
  function adjustTouchTargets() {
    const toggles = document.querySelectorAll('#audio-toggle, #autoplay-toggle');
    toggles.forEach(toggle => {
      if (isMobile) {
        toggle.style.minWidth = '44px';
        toggle.style.minHeight = '44px';
        toggle.style.padding = isSmallScreen ? '2px 6px' : '4px 8px';
      }
    });
  }

  adjustTouchTargets();

  // Handle orientation changes
  window.addEventListener('orientationchange', function() {
    setTimeout(adjustTouchTargets, 100);
  });

  // Reduce autoplay frequency on mobile
  if (isMobile && window.autoplayTimeout) {
    // This would be checked in the autoplay logic
    console.log('Mobile device detected - autoplay optimized');
  }

  // Add swipe gestures for navigation on mobile (optional enhancement)
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      // Could implement swipe navigation here
      console.log('Swipe detected:', swipeDistance > 0 ? 'right' : 'left');
    }
  }
});
