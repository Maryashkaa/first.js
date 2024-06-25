// Функция для получения случайного выбора компьютера
function getComputerChoice() {
    const choices = ['Камень', 'Ножницы', 'Бумага']; // Возможные варианты выбора
    const randomIndex = Math.floor(Math.random() * choices.length); // Случайный индекс от 0 до 2
    return choices[randomIndex]; // Возвращаем случайный выбор
}

// Функция для игры одного раунда
function playRound(playerSelection, computerSelection) {
    // Приведение выбора игрока и компьютера к нижнему регистру
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Проверка на ничью
    if (playerSelection === computerSelection) {
        return "Ничья!";
    }

    // Логика игры
    if (
        (playerSelection === 'камень' && computerSelection === 'ножницы') ||
        (playerSelection === 'ножницы' && computerSelection === 'бумага') ||
        (playerSelection === 'бумага' && computerSelection === 'камень')
    ) {
        return `Вы выиграли! ${capitalize(playerSelection)} побеждает ${capitalize(computerSelection)}`;
    } else {
        return `Вы проиграли! ${capitalize(computerSelection)} побеждает ${capitalize(playerSelection)}`;
    }
}

// Вспомогательная функция для приведения строки к формату с заглавной первой буквой
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Функция для игры
function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById('result').textContent = result;
}