const inputs = document.querySelectorAll('input')
const btn = document.querySelector('button')

btn.onclick = () => {
    inputs.forEach(input => {
        console.log(input.value , '|' );
    })
}