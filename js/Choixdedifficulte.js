const Facile = document.getElementById("facile");
const Normal = document.getElementById("normal");
const Difficile = document.getElementById("difficile");

var difficulté;

Facile.addEventListener("click", () => {
    difficulté = 100;
    
});

Normal.addEventListener("click", () => {
    difficulté = 200;
});

Difficile.addEventListener("click", () => {
    difficulté = 300;
});
export { difficulté };