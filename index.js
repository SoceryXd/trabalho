document.querySelectorAll('.carousel-item').forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.bio-container'), {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
        gsap.to(item.querySelector('img'), {
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.bio-container'), {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'power2.in'
        });
        gsap.to(item.querySelector('img'), {
            scale: 1,
            duration: 0.5,
            ease: 'power2.in'
        });
    });
});

function nextSlide() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const firstItem = items[0];
    const secondItem = items[1];

    gsap.to(carousel, {
        x: -firstItem.clientWidth,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
            carousel.appendChild(firstItem);
            gsap.set(carousel, {x: 0});
            updateOpacity();
        }
    });

    // Ajustar a opacidade do próximo item
    gsap.to(secondItem.querySelector('img'), {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut'
    });
}

// Função para atualizar a opacidade dos itens
function updateOpacity() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        if (index === 0) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Intervalo para mover o carrossel automaticamente
setInterval(nextSlide, 3000);

// Inicializar a opacidade dos itens
updateOpacity();
