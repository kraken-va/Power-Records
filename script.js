const revealTargets = document.querySelectorAll(".panel, .card, .experience-card, .gallery-card, .apply-form");

revealTargets.forEach((node) => node.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.12
});

revealTargets.forEach((node) => observer.observe(node));
