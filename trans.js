
function toggleSlide() {
    let panel = document.getElementById("aboutSlide");

    if (panel.style.right === "0px") {
        panel.style.right = "-1000px"; 
    } else {
        panel.style.right = "0px"; 
    }
}

 function toggleInfo(id) {
            const element = document.getElementById(id);
            if (element.style.display === 'none') {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        }

   function toggleInfo(id) {
            const element = document.getElementById(id);
            if (element.style.display === 'none') {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        }

        function sendEmail(event, recipient) {
            event.preventDefault(); n
            const overlay = document.getElementById('email-sent-overlay');
            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 3000); 
        }
