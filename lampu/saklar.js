function saklarhidup(actions, lamp) {
    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")

    let toggle1 = document.getElementById("toggle-1")
    let toggle2 = document.getElementById("toggle-2")
    let toggle3 = document.getElementById("toggle-3")

    if (toggle1.checked) {
        console.log("Lampu Menyala")
        lampu1.src = "assets/images/on.png"
    } else {
        console.log("Lampu mati")
        lampu1.src = "assets/images/off.png"
    }

    if (toggle2.checked) {
        console.log("Lampu Menyala")
        lampu2.src = "assets/images/on.png"
    } else {
        console.log("Lampu mati")
        lampu2.src = "assets/images/off.png"
    }

    if (toggle3.checked) {
        console.log("Lampu Menyala")
        lampu3.src = "assets/images/on.png"
    } else {
        console.log("Lampu mati")
        lampu3.src = "assets/images/off.png"
    }

} 