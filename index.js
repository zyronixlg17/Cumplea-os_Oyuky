document.addEventListener("DOMContentLoaded", () => {
    
    // --- ESTILOS DINÁMICOS DEL CONFETI ---
    const confettiStyles = document.createElement("style");
    confettiStyles.innerHTML = `
        .confeti {
            position: absolute;
            width: 10px;
            height: 10px;
            opacity: 0.8;
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            will-change: transform;
            pointer-events: none;
        }
    `;
    document.head.appendChild(confettiStyles);

    const confetiContainer = document.getElementById("confeti-container");
    const coloresConfeti = ['#e02c6d', '#e67e22', '#1abc9c', '#9b59b6', '#2ecc71', '#f1c40f', '#f39c12', '#fff'];
    
    for (let i = 0; i < 60; i++) {
        const confeti = document.createElement("div");
        confeti.classList.add("confeti");
        
        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.top = "-20px"; 
        
        const scale = Math.random() * 0.8 + 0.4;
        confeti.style.transform = `scale(${scale})`;
        confeti.style.backgroundColor = coloresConfeti[Math.floor(Math.random() * coloresConfeti.length)];
        
        confetiContainer.appendChild(confeti);
        
        gsap.to(confeti, {
            y: "110vh",
            x: `+=${Math.random() * 100 - 50}px`, 
            rotation: Math.random() * 360,
            duration: Math.random() * 5 + 4,
            repeat: -1,
            delay: Math.random() * 5,
            ease: "none"
        });
    }

    function animarAvion() {
        gsap.fromTo(".contenedor-avion", 
            { left: "-100px", top: "15%" },
            { 
                left: "105vw", 
                top: "12%",
                duration: 12, 
                ease: "power1.inOut",
                onComplete: () => {
                    setTimeout(animarAvion, Math.random() * 6000 + 4000);
                }
            }
        );
    }
    
    animarAvion();
});