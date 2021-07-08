function media() {
    var raio = document.getElementById('raio').value;
    var area = (3.14 * (raio * raio)).toFixed(2)
    area = area.toLocaleString('pt-BR')
    
    document.getElementById('res').innerHTML = `A área do seu círculo é de ${area}m²`
}