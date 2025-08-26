// DOM Elements
const heartsContainer = document.getElementById('hearts');
const floatingContainer = document.getElementById('floating-elements');
const starsContainer = document.getElementById('stars');

// Create floating hearts
function createHearts() {
    if (!heartsContainer) return;
    
    // Clear existing hearts
    heartsContainer.innerHTML = '';
    
    const heartCount = 30;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random positions and animation delays
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 5;
        
        heart.style.left = left + '%';
        heart.style.animationDelay = delay + 's';
        heart.style.animationDuration = duration + 's';
        
        heartsContainer.appendChild(heart);
    }
}

// Create stars
function createStars() {
    if (!starsContainer) return;
    
    // Clear existing stars
    starsContainer.innerHTML = '';
    
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random positions, sizes and animation
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 3;
        const duration = 2 + Math.random() * 5;
        const delay = Math.random() * 5;
        
        star.style.left = left + '%';
        star.style.top = top + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDuration = duration + 's';
        star.style.animationDelay = delay + 's';
        
        starsContainer.appendChild(star);
    }
}

// Create floating elements (stars, hearts, etc.)
function createFloatingElements() {
     return;
    
    // Clear existing floating elements
    floatingContainer.innerHTML = '';
    
    const elements = ['✿', '❀', '❁', '⭐', '✦', '💖', '🎓', '📚'];
    const elementCount = 20;
    
    for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        element.textContent = elements[Math.floor(Math.random() * elements.length)];
        
        // Random positions and animation delays
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 15 + Math.random() * 10;
        
        element.style.left = left + '%';
        element.style.animationDelay = delay + 's';
        element.style.animationDuration = duration + 's';
        
        floatingContainer.appendChild(element);
    }
}

// Love button effect
function setupLoveButton() {
    const loveBtn = document.getElementById('love-btn');
    if (!loveBtn) return;
    
    loveBtn.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-heart"></i> Love & Luck Sent!';
        this.style.background = 'rgba(255, 105, 180, 0.9)';
        
        // Create additional hearts animation
        if (!heartsContainer) return;
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            const left = 40 + Math.random() * 20;
            const delay = 0;
            const duration = 3 + Math.random() * 2;
            
            heart.style.left = left + '%';
            heart.style.animationDelay = delay + 's';
            heart.style.animationDuration = duration + 's';
            
            heartsContainer.appendChild(heart);
            
            // Remove hearts after animation
            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }
        
        // Reset button after 3 seconds
        setTimeout(() => {
            loveBtn.innerHTML = '<i class="fas fa-heart"></i> Send Love & Luck';
            loveBtn.style.background = 'rgba(255, 182, 193, 0.8)';
        }, 3000);
    });
}

// Setup music player
function setupMusicPlayer() {
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    
    if (!musicToggle || !backgroundMusic) return;
    
    // Try to play music automatically
    setTimeout(() => {
        backgroundMusic.play().catch(error => {
            console.log('Autoplay prevented:', error);
            // Show play button if autoplay is blocked
            musicToggle.innerHTML = '<i class="fas fa-play music-icon"></i>';
        });
    }, 1000);
    
    // Toggle music playback
    musicToggle.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-music music-icon"></i>';
        } else {
            backgroundMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-play music-icon"></i>';
        }
    });
}

// Initialize everything
function init() {
    // Create initial elements
    createFloatingElements();
    createStars();
    createHearts();
    
    // Setup page-specific functionality
    setupLoveButton();
    setupMusicPlayer();
}

// Start when page is loaded
window.addEventListener('load', init);