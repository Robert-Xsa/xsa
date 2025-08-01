document.addEventListener('DOMContentLoaded', function () {
    const simpleForm = document.getElementById('simpleContactForm');

    if (simpleForm) {
        simpleForm.addEventListener('submit', function (e) {
            e.preventDefault();

            fetch(simpleForm.action, {
                method: simpleForm.method,
                body: new FormData(simpleForm),
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    simpleForm.reset();
                    let successModal = new bootstrap.Modal(document.getElementById('simpleSuccessModal'));
                    successModal.show();
                } else {
                    alert("❌ There was a problem sending your message.");
                }
            }).catch(error => alert("❌ Network error. Please try again."));
        });
    }
});
