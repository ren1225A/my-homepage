document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".scroll-fade");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // 一度だけ発火
            }
        });
    }, {
        threshold: 0.2
    });

    targets.forEach(target => {
        observer.observe(target);
    });
});
