// ===========================================
// NEXUS LEARNING - LANDING PAGE
// JavaScript - Modales y Carrusel Testimonios
// ===========================================

console.log('🚀 JavaScript cargado');

// ================================
// ESPERAR A QUE EL DOM ESTÉ CARGADO
// ================================

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('✅ DOM cargado completamente');
    
    // ================================
    // OBTENER ELEMENTOS DEL DOM
    // ================================
    
    // Botones CTA
    const btnGuia = document.getElementById('btnGuia');
    const btnComunidad = document.getElementById('btnComunidad');
    
    // Modales
    const modalGuia = document.getElementById('modalGuia');
    const modalComunidad = document.getElementById('modalComunidad');
    
    // Botones de cerrar (X)
    const closeBtns = document.querySelectorAll('.close');
    
    // Formularios
    const formGuia = document.getElementById('formGuiaSubmit');
    const formComunidad = document.getElementById('formComunidadSubmit');
    
    
    // ================================
    // ABRIR MODALES
    // ================================
    
    if (btnGuia) {
        btnGuia.addEventListener('click', function() {
            openModal('modalGuia');
        });
    }
    
    if (btnComunidad) {
        btnComunidad.addEventListener('click', function() {
            openModal('modalComunidad');
        });
    }
    
    if (btnGuia) {
        btnGuia.addEventListener('click', function() {
            openModal('modalGuia');
        });
    }
    
    if (btnComunidad) {
        btnComunidad.addEventListener('click', function() {
            openModal('modalComunidad');
        });
    }
    
    // ================================
    // BOTONES CTA FINAL (mismo comportamiento)
    // ================================
    
    const btnGuiaFinal = document.getElementById('btnGuiaFinal');
    const btnComunidadFinal = document.getElementById('btnComunidadFinal');
    
    if (btnGuiaFinal) {
        btnGuiaFinal.addEventListener('click', function() {
            openModal('modalGuia');
        });
    }
    
    if (btnComunidadFinal) {
        btnComunidadFinal.addEventListener('click', function() {
            openModal('modalComunidad');
        });
    }
    
    // ================================
    // CERRAR MODALES
    // ================================
    
    closeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            closeModal(modalId);
        });
    });
    
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            resetModal(event.target.id);
        }
    });
    
    
    // ================================
    // VALIDACIÓN Y ENVÍO FORMULARIOS
    // ================================
    
    if (formGuia) {
        formGuia.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('emailGuia').value.trim();
            const errorEmail = document.getElementById('errorEmailGuia');
            
            errorEmail.textContent = '';
            
            if (!validateEmail(email)) {
                errorEmail.textContent = 'Por favor, introduce un email válido';
                return;
            }
            
            const formData = {
                email: email,
                tipo: 'guia'
            };
            
            console.log('Datos Guía:', formData);
            
            // CONECTAR CON JavaScript A MAKE
            // Descomentar y agregar tu webhook URL cuando estés listo:
            /*
            fetch('TU_WEBHOOK_MAKE_URL_GUIA', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Éxito:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            */
            
            showSuccess('modalGuia');
        });
    }
    
    if (formComunidad) {
        formComunidad.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombreComunidad').value.trim();
            const email = document.getElementById('emailComunidad').value.trim();
            
            const errorNombre = document.getElementById('errorNombreComunidad');
            const errorEmail = document.getElementById('errorEmailComunidad');
            
            errorNombre.textContent = '';
            errorEmail.textContent = '';
            
            let hasError = false;
            
            if (nombre.length < 2) {
                errorNombre.textContent = 'El nombre debe tener al menos 2 caracteres';
                hasError = true;
            }
            
            if (!validateEmail(email)) {
                errorEmail.textContent = 'Por favor, introduce un email válido';
                hasError = true;
            }
            
            if (hasError) return;
            
            const formData = {
                nombre: nombre,
                email: email,
                tipo: 'comunidad'
            };
            
            console.log('Datos Comunidad:', formData);
            
            // CONECTAR CON JavaScript A MAKE
            // Descomentar y agregar tu webhook URL cuando estés listo:
            /*
            fetch('TU_WEBHOOK_MAKE_URL_COMUNIDAD', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Éxito:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            */
            
            showSuccess('modalComunidad');
        });
    }
    
    
    // ================================
    // FUNCIONES AUXILIARES MODALES
    // ================================
    
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            setTimeout(function() {
                resetModal(modalId);
            }, 300);
        }
    }
    
    window.closeModal = closeModal;
    
    function showSuccess(modalId) {
        const formDiv = document.getElementById(
            modalId === 'modalGuia' ? 'formGuia' : 'formComunidad'
        );
        const successDiv = document.getElementById(
            modalId === 'modalGuia' ? 'successGuia' : 'successComunidad'
        );
        
        if (formDiv) formDiv.style.display = 'none';
        if (successDiv) successDiv.style.display = 'block';
    }
    
    function resetModal(modalId) {
        if (modalId === 'modalGuia') {
            const formDiv = document.getElementById('formGuia');
            const successDiv = document.getElementById('successGuia');
            const form = document.getElementById('formGuiaSubmit');
            const error = document.getElementById('errorEmailGuia');
            
            if (formDiv) formDiv.style.display = 'block';
            if (successDiv) successDiv.style.display = 'none';
            if (form) form.reset();
            if (error) error.textContent = '';
        } else if (modalId === 'modalComunidad') {
            const formDiv = document.getElementById('formComunidad');
            const successDiv = document.getElementById('successComunidad');
            const form = document.getElementById('formComunidadSubmit');
            const errorNombre = document.getElementById('errorNombreComunidad');
            const errorEmail = document.getElementById('errorEmailComunidad');
            
            if (formDiv) formDiv.style.display = 'block';
            if (successDiv) successDiv.style.display = 'none';
            if (form) form.reset();
            if (errorNombre) errorNombre.textContent = '';
            if (errorEmail) errorEmail.textContent = '';
        }
    }
    
    function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
    }
    
    
    // ================================
    // CARRUSEL DE TESTIMONIOS INFINITO
    // ================================
    
    console.log('🎠 Iniciando carrusel...');
    
    const track = document.querySelector('.testimonials-track');
    const originalCards = document.querySelectorAll('.testimonial-card');
    const indicatorsContainer = document.querySelector('.slider-indicators');
    
    console.log('Track encontrado:', track ? 'SÍ' : 'NO');
    console.log('Cards encontradas:', originalCards.length);
    console.log('Indicadores encontrados:', indicatorsContainer ? 'SÍ' : 'NO');
    
    if (!track || originalCards.length === 0 || !indicatorsContainer) {
        console.log('❌ Carrusel no puede iniciar - faltan elementos');
        return;
    }
    
    let currentIndex = 0;
    let cardsToShow = 3;
    let autoplayInterval;
    let isTransitioning = false;
    
    // Clonar cards para crear efecto infinito
    function cloneCards() {
        // Limpiar el track primero
        track.innerHTML = '';
        
        // Clonar todas las cards originales al final para el loop infinito
        originalCards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });
        
        // Si hay pocas cards, duplicar más veces para llenar la vista
        const totalNeeded = cardsToShow * 2;
        if (originalCards.length < totalNeeded) {
            originalCards.forEach(card => {
                const clone = card.cloneNode(true);
                track.appendChild(clone);
            });
        }
        
        console.log('✅ Cards clonadas para efecto infinito');
    }
    
    function updateCardsToShow() {
        if (window.innerWidth <= 768) {
            cardsToShow = 1;
        } else if (window.innerWidth <= 1024) {
            cardsToShow = 2;
        } else {
            cardsToShow = 3;
        }
        console.log('📱 Cards a mostrar:', cardsToShow);
    }
    
    function createDots() {
        indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < originalCards.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'slider-indicator';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', function() {
                goToSlide(i);
                resetAutoplay();
            });
            indicatorsContainer.appendChild(dot);
        }
        
        console.log('✅ Indicadores creados:', originalCards.length);
    }
    
    function goToSlide(index, noTransition = false) {
        if (isTransitioning) return;
        
        const allCards = track.querySelectorAll('.testimonial-card');
        if (allCards.length === 0) return;
        
        currentIndex = index;
        
        const cardWidth = allCards[0].offsetWidth;
        const gap = window.innerWidth <= 768 ? 0 : 30;
        const offset = currentIndex * (cardWidth + gap);
        
        if (noTransition) {
            track.style.transition = 'none';
        } else {
            track.style.transition = 'transform 0.5s ease-in-out';
        }
        
        track.style.transform = `translateX(-${offset}px)`;
        
        // Actualizar indicadores (usar módulo para ciclar)
        const dots = indicatorsContainer.querySelectorAll('.slider-indicator');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === (currentIndex % originalCards.length));
        });
        
        console.log('📍 Slide:', currentIndex, '| Offset:', offset + 'px');
    }
    
    function nextSlide() {
        if (isTransitioning) return;
        
        isTransitioning = true;
        const allCards = track.querySelectorAll('.testimonial-card');
        
        currentIndex++;
        goToSlide(currentIndex);
        
        // Si llegamos al final de las cards clonadas, resetear al inicio
        setTimeout(() => {
            if (currentIndex >= originalCards.length) {
                currentIndex = 0;
                goToSlide(0, true);
            }
            isTransitioning = false;
        }, 500);
        
        console.log('⏭️ Siguiente slide:', currentIndex);
    }
    
    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(nextSlide, 5000);
        console.log('▶️ Autoplay iniciado');
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            console.log('⏸️ Autoplay detenido');
        }
    }
    
    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }
    
    // Detener autoplay al hover
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);
    
    // ================================
    // SOPORTE TÁCTIL/SWIPE PARA MÓVIL
    // ================================
    
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    
    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
        stopAutoplay();
    }, { passive: true });
    
    track.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
        resetAutoplay();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50; // Mínimo de píxeles para considerar un swipe
        const diffX = touchStartX - touchEndX;
        const diffY = Math.abs(touchStartY - touchEndY);
        
        // Solo procesar si el movimiento horizontal es mayor que el vertical
        if (Math.abs(diffX) > diffY && Math.abs(diffX) > swipeThreshold) {
            if (diffX > 0) {
                // Swipe izquierda - siguiente
                nextSlide();
                console.log('👆 Swipe izquierda - siguiente');
            } else {
                // Swipe derecha - anterior
                prevSlide();
                console.log('👆 Swipe derecha - anterior');
            }
        }
    }
    
    function prevSlide() {
        if (isTransitioning) return;
        
        isTransitioning = true;
        
        currentIndex--;
        
        if (currentIndex < 0) {
            // Ir al final
            currentIndex = originalCards.length - 1;
        }
        
        goToSlide(currentIndex);
        
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
        
        console.log('⏮️ Slide anterior:', currentIndex);
    }
    
    // Manejar resize
    window.addEventListener('resize', function() {
        const oldCardsToShow = cardsToShow;
        updateCardsToShow();
        if (oldCardsToShow !== cardsToShow) {
            currentIndex = 0;
            cloneCards();
            createDots();
            setTimeout(() => {
                goToSlide(0, true);
            }, 50);
        }
    });
    
    // Inicializar carrusel
    updateCardsToShow();
    cloneCards();
    createDots();
    
    // Pequeño delay para asegurar que el DOM esté listo
    setTimeout(() => {
        goToSlide(0, true);
        startAutoplay();
        console.log('✅ CARRUSEL COMPLETAMENTE INICIALIZADO');
    }, 100);
    
});

// ================================
// BOTÓN SCROLL TO TOP
// ================================

(function() {
    const scrollBtn = document.getElementById('scrollToTop');
    
    if (!scrollBtn) {
        console.log('Botón scroll to top no encontrado');
        return;
    }
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    // Scroll suave al hacer clic
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    console.log('✅ Scroll to top inicializado');
    
})();

// ================================
// VIDEO EXPLICATIVO - VOLVER AL INICIO
// ================================

(function() {
    const video = document.getElementById('videoExplicativo');
    
    if (!video) {
        return;
    }
    
    // Cuando termina el video, vuelve al inicio
    video.addEventListener('ended', function() {
        this.currentTime = 0;  // Vuelve al segundo 0
        this.load();           // Recarga para mostrar el poster/primera imagen
    });
    
    console.log('✅ Video configurado para volver al inicio');
    
})();

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
