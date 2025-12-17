fetch('player.json')
    .then(response => response.json())
    .then(player => {
        const leftDiv = document.querySelector('.player-left');
        const rightDiv = document.querySelector('.player-right');

        // Left column
        leftDiv.innerHTML = `
            <h2>${player.name}</h2>
            <p><strong>Position:</strong> ${player.position}</p>
            <p><strong>Age:</strong> ${player.age} (Born ${player.dob})</p>
            <p><strong>Height:</strong> ${player.height}</p>
            <p><strong>Weight:</strong> ${player.weight}</p>
        `;

        // Right column with England flag and small football splash image
        rightDiv.innerHTML = `
            <p><strong>Place of Birth:</strong> ${player.birthPlace}</p>
            <p><strong>Nationality:</strong> 
                <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg" 
                     alt="England Flag" class="flag"> ${player.nationality}
            </p>
            <img src="https://i.ibb.co/1tL39MD9/lovepik-ink-splashing-football-png-image-400310287-wh1200.png" 
                 alt="Football Splash" class="nationality-image">
        `;

        // Populate career table
        const careerBody = document.getElementById('career-body');
        player.career.forEach(club => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${club.club}</td>
                <td>${club.from}</td>
                <td>${club.to}</td>
                <td>${club.apps}</td>
                <td>${club.goals}</td>
                <td class="league">${club.league}</td>
                <td class="fa-cup">${club.faCup}</td>
                <td class="league-cup">${club.leagueCup}</td>
                <td class="other">${club.other}</td>
            `;
            careerBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error loading player data:', error));
