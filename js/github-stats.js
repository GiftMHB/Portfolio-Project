function fetchStats() {
    fetch('data/githubStats.json')
        .then(response => response.json())
        .then(data => {
            
            animateCounter('contributions-count', data.contributions);
            animateCounter('repositories-count', data.repositories);
            animateCounter('pullrequests-count', data.pullRequests);
        })
        .catch(error => {
            console.error('Error fetching GitHub stats:', error);
            
            animateCounter('contributions-count', 191);
            animateCounter('repositories-count', 8);
            animateCounter('pullrequests-count', 4);
        });
}


function animateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
    const duration = 2000; 
    const startValue = 0;
    const increment = targetValue / (duration / 16); // 60fps
    let currentValue = startValue;

    function updateCounter() {
        currentValue += increment;
        
        if (currentValue >= targetValue) {
            element.textContent = targetValue + '+';
        } else {
            element.textContent = Math.floor(currentValue) + '+';
            requestAnimationFrame(updateCounter);
        }
    }
    
    updateCounter();
}

function initializeGitHubSection() {
  
    fetchStats();
    
    const githubBtn = document.getElementById('github-btn');
    githubBtn.addEventListener('click', () => {
        window.open('https://github.com/GiftMHB', '_blank');
    });
}

document.addEventListener('DOMContentLoaded', initializeGitHubSection);