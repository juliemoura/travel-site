const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, "--bg"),
    colorText: getStyle(html, "--color-text"),
    inputColor: getStyle(html, "--input-color"),
    navColor: getStyle(html, "--nav-color"),
    svgColor: getStyle(html, "--svg-color"),
    svgFundo: getStyle(html, "--svg-fundo"),
    btnColor: getStyle(html, "--btn-color"),
}

const darkMode = {
    bg: "#333333",
    colorText: "#FEFEFE", 
    inputColor: "#333333",
    navColor: "#000000",
    svgColor: "#FEFEFE",
    svgFundo: "#000000",
    btnColor: "#000000"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})