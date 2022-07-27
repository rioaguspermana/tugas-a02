document.addEventListener("DOMContentLoaded", function (event) {
    console.log("document loaded")

    const updateTextTerminal = function () {
        const commandInputTextElement = document.getElementsByClassName("command-input")?.[0];
        if (commandInputTextElement !== undefined) {
            const commandArray = [
                "get <span>-r</span> for /competition",
                "ready <span>-t</span> expand <span>-w</span> us",
                "build <span>-t</span> future <span>-w</span> us",
            ];
            const randomNumber = Math.floor(Math.random() * commandArray.length);
            commandInputTextElement.innerHTML = commandArray[randomNumber];
        }
    }

    setInterval(() => {
        console.log("change text in terminal")
        updateTextTerminal()
    }, 5500);
});