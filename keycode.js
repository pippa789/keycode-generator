const one = document.getElementById("which");
const two = document.getElementById("key");
const three = document.getElementById("code")

document.addEventListener("keydown", (event)=>{
    one.textContent = `${event.which}`;
    two.textContent = `${event.key}`;
    three.textContent = `${event.code}`;
});
