var change = () => {
    var parnent = document.body
    var button = document.createElement("button")
    button.innerText = "Change the document"
    parnent.append(button)

    button.addEventListener("click", () => {
        var header = document.createElement("h1")
        header.innerHTML = "Really Nice"
        var begin = document.getElementById("try_btn")

        parnent.insertBefore(header, begin)
    })
}