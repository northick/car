document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var distance = parseFloat(document.getElementById('distance').value);
    var efficiency = parseFloat(document.getElementById('efficiency').value);
    var fuelPrice = parseFloat(document.getElementById('fuel-price').value);
    var electricityPrice = parseFloat(document.getElementById('electricity-price').value);

    var fuelCost = (distance / 100) * efficiency * fuelPrice;
    var electricityCost = (distance / 100) * efficiency * electricityPrice;

    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    var fuelResult = document.createElement('div');
    fuelResult.classList.add('result-item');
    fuelResult.textContent = 'Стоимость поездки на бензиновом автомобиле: ' + fuelCost.toFixed(2) + ' руб.';
    resultContainer.appendChild(fuelResult);

    var electricityResult = document.createElement('div');
    electricityResult.classList.add('result-item');
    electricityResult.textContent = 'Стоимость поездки на электромобиле: ' + electricityCost.toFixed(2) + ' руб.';
    resultContainer.appendChild(electricityResult);

    var copyButton = document.createElement('button');
    copyButton.textContent = 'Скопировать результат';
    copyButton.classList.add('copy-button');
    copyButton.addEventListener('click', function() {
        var textToCopy = resultContainer.textContent;
        navigator.clipboard.writeText(textToCopy).then(function() {
            alert('Результат скопирован!');
        }, function() {
            alert('Не удалось скопировать результат.');
        });
    });
    resultContainer.appendChild(copyButton);
});
