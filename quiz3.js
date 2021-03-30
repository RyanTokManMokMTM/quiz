var typing = () => {
    var p = document.querySelector("#text")

    document.addEventListener("keydown", (e) => {
        console.log(e.key)
        p.textContent += e.key
    });
}