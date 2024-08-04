<!-- script.js -->
let routine = null;
let timer = null;

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function generateRoutine() {
    const difficulty = document.getElementById('difficulty').value;
    const duration = document.getElementById('duration').value;
    const type = document.getElementById('type').value;

    // Aquí simularemos una llamada a un backend para generar la rutina
    routine = {
        difficulty: difficulty,
        duration: duration,
        type: type,
        exercises: [
            { name: "Calentamiento", duration: 5 },
            { name: "Ejercicio principal", duration: duration - 10 },
            { name: "Enfriamiento", duration: 5 }
        ]
    };

    displayRoutine();
    showSection('routine');
}

function displayRoutine() {
    let routineHtml = `<h3>Rutina ${routine.type} - ${routine.difficulty}</h3>`;
    routine.exercises.forEach(exercise => {
        routineHtml += `<p>${exercise.name}: ${exercise.duration} minutos</p>`;
    });
    document.getElementById('routineDetails').innerHTML = routineHtml;
}

function startRoutine() {
    let totalSeconds = routine.duration * 60;
    timer = setInterval(() => {
        totalSeconds--;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        document.getElementById('time').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (totalSeconds <= 0) {
            clearInterval(timer);
            endRoutine();
        }
    }, 1000);
}

function endRoutine() {
    alert("¡Rutina completada! Por favor, danos tu opinión.");
    // Aquí podrías abrir un modal o redirigir a una página de retroalimentación
}

// Inicializar la aplicación mostrando la página de inicio
showSection('home');