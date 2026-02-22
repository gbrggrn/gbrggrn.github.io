function toggleTimeline(timelineId) {
  const wrappers = document.querySelectorAll('.timeline-wrapper');

  wrappers.forEach(wrapper => {
    wrapper.classList.remove('timeline-visible');
  });

  const target = docuemtn.getElementById(timelineId);
  if (target) {
    target.classList.add('timeline-visible');
  }
}
