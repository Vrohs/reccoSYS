// Main JavaScript for Medicine Recommendation System

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Select2 for better dropdown experience
    if (typeof $.fn.select2 !== 'undefined') {
        $('.select2-multiple').select2({
            placeholder: "Type or select symptoms",
            allowClear: true,
            tags: true,
            tokenSeparators: [',', ' '],
        });
    }

    // Handle form submission
    const symptomForm = document.querySelector('form[action="/predict"]');
    if (symptomForm) {
        symptomForm.addEventListener('submit', function(e) {
            const selectedSymptoms = document.getElementById('symptomSelect');
            const hiddenInput = document.getElementById('symptoms');
            
            if (selectedSymptoms && hiddenInput && selectedSymptoms.value) {
                hiddenInput.value = Array.from(selectedSymptoms.selectedOptions).map(option => option.value);
                return true;
            } else if (!selectedSymptoms || !selectedSymptoms.value) {
                e.preventDefault();
                alert('Please select at least one symptom');
                return false;
            }
        });
    }

    // Speech Recognition Implementation
    const startSpeechBtn = document.getElementById('startSpeechRecognition');
    const transcriptionDiv = document.getElementById('transcription');
    
    if (startSpeechBtn && transcriptionDiv) {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = true;
            recognition.lang = 'en-US';
            
            startSpeechBtn.addEventListener('click', function() {
                recognition.start();
                startSpeechBtn.textContent = 'Listening...';
                startSpeechBtn.disabled = true;
                transcriptionDiv.style.display = 'block';
                transcriptionDiv.textContent = 'Listening...';
            });
            
            recognition.onresult = function(event) {
                const transcript = Array.from(event.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('');
                
                transcriptionDiv.textContent = transcript;
                
                // Process recognized speech to find symptoms
                if (event.results[0].isFinal) {
                    processTranscriptForSymptoms(transcript);
                }
            };
            
            recognition.onend = function() {
                startSpeechBtn.textContent = 'Start Speech Recognition';
                startSpeechBtn.disabled = false;
            };
            
            recognition.onerror = function(event) {
                console.error('Speech recognition error', event.error);
                startSpeechBtn.textContent = 'Start Speech Recognition';
                startSpeechBtn.disabled = false;
                transcriptionDiv.textContent = 'Error occurred in recognition: ' + event.error;
            };
        } else {
            startSpeechBtn.style.display = 'none';
        }
    }

    // Function to process transcript and identify symptoms
    function processTranscriptForSymptoms(transcript) {
        // Fetch available symptoms from our API
        fetch('/api/symptoms')
            .then(response => response.json())
            .then(availableSymptoms => {
                const lowerTranscript = transcript.toLowerCase();
                const matches = [];

                // Look for symptoms in the transcript
                availableSymptoms.forEach(symptom => {
                    const normalized = symptom.replace('_', ' ');
                    if (lowerTranscript.includes(normalized)) {
                        matches.push(symptom);
                    }
                });

                // If we have any matches, set them in the select element
                if (matches.length > 0 && $('.select2-multiple').length) {
                    $('.select2-multiple').val(matches).trigger('change');
                }
            })
            .catch(error => console.error('Error fetching symptoms:', error));
    }

    // Handle page transitions with a small animation
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Skip for non-internal links
            if (this.hostname !== window.location.hostname) return;
            
            const body = document.querySelector('body');
            body.style.opacity = '0.5';
            body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                body.style.opacity = '1';
            }, 50);
        });
    });

    // Add floating feedback button
    const feedbackBtn = document.createElement('button');
    feedbackBtn.textContent = 'Feedback';
    feedbackBtn.className = 'btn btn-primary position-fixed';
    feedbackBtn.style.bottom = '20px';
    feedbackBtn.style.right = '20px';
    feedbackBtn.style.zIndex = '1000';
    feedbackBtn.style.borderRadius = '30px';
    feedbackBtn.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    
    feedbackBtn.addEventListener('click', function() {
        alert('Thank you for using our Medical Recommendation System. The feedback feature is coming soon!');
    });
    
    document.body.appendChild(feedbackBtn);
});

// Add 'active' class to current nav item
(function updateActiveNavItem() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
})();
