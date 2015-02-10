export default urls => {
    let elem = document.querySelector("#gifs");
    elem.innerHTML = urls.map(u => `<img src="${u}">`).join("\n");
}
