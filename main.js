const bookingData={
    service:null,
    barber:null
};


// Track current step
    let currentStep = 1;
    // Function to handle card selection
    function selectCard(card, type) {
      // Remove selection from all cards of this type
      const allCards = document.querySelectorAll(`.${type}-card`);
allCards.forEach(c => c.classList.remove('selected'));
card.classList.add('selected');
      
      // Store the selection
      if (type === 'service') {
        bookingData.service = card.getAttribute('data-service');
        document.getElementById('next-btn-1').disabled = false;
        document.getElementById('next-btn-1').classList.remove('bg-gray-400');
        document.getElementById('next-btn-1').classList.add('bg-blue-500', 'hover:bg-blue-600');
      } 
      else if (type === 'barber') {
        bookingData.barber = card.getAttribute('data-barber');
        document.getElementById('next-btn-2').disabled = false;
        document.getElementById('next-btn-2').classList.remove('bg-gray-400');
        document.getElementById('next-btn-2').classList.add('bg-blue-500', 'hover:bg-blue-600');
      }
    }

    function nextStep(step) {
      document.getElementById(`step${step}`).classList.add('hidden');
      document.getElementById(`step${step+1}`).classList.remove('hidden');
    }

    function prevStep(step) {
      document.getElementById(`step${step}`).classList.add('hidden');
      document.getElementById(`step${step-1}`).classList.remove('hidden');
      currentStep = step - 1;
    }
