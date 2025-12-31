function nextScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    // Auto-pause reel when moving to photos
    if(id !== 'video-reel') {
        const reel = document.getElementById('myReel');
        if(reel) reel.pause();
    }
}

function startFireworks() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#D4AF37', '#8B0000'] });
    setTimeout(() => nextScreen('video-reel'), 1200);
}

function showPhotos() {
    nextScreen('memories');
    
    // Blast crackers when 50 photos appear
    confetti({ 
        particleCount: 250, 
        spread: 100, 
        origin: { y: 0.6 }, 
        colors: ['#D4AF37', '#8B0000', '#ffffff'] 
    });

    const canvas = document.getElementById('photo-canvas');
    canvas.innerHTML = ''; 

    for (let i = 1; i <= 50; i++) {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'scatter-photo';
        imgDiv.innerHTML = `<img src="img${i}.jpg">`;
        
        // Starting from center
        imgDiv.style.left = "50%";
        imgDiv.style.top = "50%";
        imgDiv.style.transform = "translate(-50%, -50%) scale(0.1)";
        
        canvas.appendChild(imgDiv);

        // Explode delay
        setTimeout(() => {
            const randomX = Math.random() * 85 + 7; 
            const randomY = Math.random() * 70 + 10; 
            const randomRot = Math.random() * 80 - 40; 
            
            imgDiv.style.left = `${randomX}%`;
            imgDiv.style.top = `${randomY}%`;
            imgDiv.style.transform = `translate(-50%, -50%) rotate(${randomRot}deg) scale(1)`;
            imgDiv.style.opacity = "1";
        }, i * 35); // Fast scatter effect
    }
}

function finalCelebration() {
    confetti({ 
        particleCount: 800, 
        spread: 200, 
        origin: { y: 0.5 }, 
        colors: ['#D4AF37', '#8B0000', '#ffffff'] 
    });
}
