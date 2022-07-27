document.addEventListener("DOMContentLoaded", function (event) {
    console.log("document loaded")

    /**
     * Set Event Listener to Menu Button
     */
    const menuButton = document.getElementsByClassName("menu-mobile-navigation")?.[0];
    const mobileNavigation = document.getElementsByClassName("right-navigation")?.[0];
    if (menuButton !== undefined) {
        ["click", "blur"].forEach(function (e) {
            menuButton.addEventListener(e, function () {
                const isFocus = menuButton === document.activeElement;
                if (isFocus) {
                    mobileNavigation.classList.add("mobile-open");
                } else {
                    // add delay to make sure page has been navigate to cliked link
                    setTimeout(() => { mobileNavigation.classList.remove("mobile-open"); }, 100);
                }
            });
        });
    }

    /**
     * to change text randomly on terminal
     */
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
        updateTextTerminal()
    }, 5500);

});