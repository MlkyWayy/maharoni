const slider = document.querySelector('input[type="range"]');
const tooltip = document.getElementById('tooltip');
        
slider.addEventListener('input', function() {
const value = this.value;
const min = this.min || 0;
const max = this.max || 100;
const percent = ((value - min) / (max - min)) * 100;
tooltip.innerText = value;
tooltip.style.left = `${percent}%`;
});