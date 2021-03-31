const ul = document.querySelector("ul")
const input = document.querySelector("input")
const form = document.querySelector('form')

load()

async function load() {
    const res = await fetch("http://6b1be95f7494.ngrok.io").then((data) => data.json())
    console.log("load", res.urls)

    res.urls.map(({ name, url }) => addElement({ name, url }))



    // addElement(res.urls[0])


}



function addElement({ name, url }) {
    const li = document.createElement('li')
    const a = document.createElement("a")
    const trash = document.createElement("span")

    a.href = url
    a.innerHTML = name
    a.target = "_blank"

    trash.innerHTML = "x"
    trash.onclick = () => removeElement(trash, name, url)

    li.append(a)
    li.append(trash)
    ul.append(li)

}

function removeElement(el, name, url) {
    if (confirm('Tem certeza que deseja deletar!!!'))
        el.parentNode.remove()
    const data = { name, url }
    console.log("olha", name, url)
    //const data = { username: "Victor Jordan" };
    //http://localhost:3000/?name=google&url=http://google.com&del=1
    fetch("http://6b1be95f7494.ngrok.io/?name=" + name + "&url=" + url + "&del=1")
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    console.log("returna load")
    
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let { value } = input

    console.log("value", value)
    if (!value)
        return alert('Preencha o campo')

    const [name, url] = value.split(",")



    if (!url)
        return alert('formate o texto da maneira correta')

    if (!/^http/.test(url))
        return alert("Digite a url da maneira correta")

    const data = { name, url }
    console.log("mike", data)

  //  fetch("http://localhost:3000").then((data) => data.json())

    fetch("http://6b1be95f7494.ngrok.io/?name=" + name + "&url=" + url)
        .then((response) => response.json())
        .then((data) => {
            console.log("response json");
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });


    addElement({ name, url })
    input.value = ""
    
})