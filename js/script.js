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

    // === START INDUSTRIES SCROLL CONTROL
    const industriesScrollElement = document.getElementsByClassName("industries-scroll")?.[0];
    const industriesScrollButtonLeft = document.getElementsByClassName("button-slide-left")?.[0];
    const industriesScrollButtonRight = document.getElementsByClassName("button-slide-right")?.[0];
    const totalList = document.getElementsByClassName("cover").length;
    const industriesScrollWidth = industriesScrollElement.scrollWidth;
    const industriesVisibleWidth = industriesScrollElement.clientWidth;
    const scrollLimit = industriesScrollWidth - industriesVisibleWidth;
    const widthListElement = industriesScrollWidth / totalList;
    let industriesScrollPosition = industriesScrollElement.scrollLeft;
    industriesScrollButtonLeft.addEventListener("click", function () {
        if (industriesScrollPosition > 0) {
            industriesScrollPosition -= widthListElement;
            industriesScrollPosition = industriesScrollPosition < 0 ? 0 : industriesScrollPosition;
            industriesScrollElement.scrollTo(industriesScrollPosition, 0);
        }
        if (industriesScrollPosition === 0) {
            industriesScrollButtonLeft.style.visibility = "hidden";
        }
        industriesScrollButtonRight.style.visibility = "visible";
    });
    industriesScrollButtonRight.addEventListener("click", function () {
        if (industriesScrollPosition < scrollLimit) {
            industriesScrollPosition += widthListElement;
            industriesScrollPosition = industriesScrollPosition > scrollLimit ? scrollLimit : industriesScrollPosition;
            industriesScrollElement.scrollTo(industriesScrollPosition, 0);
        }
        if (industriesScrollPosition === scrollLimit) {
            industriesScrollButtonRight.style.visibility = "hidden";
        }
        industriesScrollButtonLeft.style.visibility = "visible";
    });

    // === START ANIMATION ON SCROLL
    // hero el
    const heroElement = document.getElementById("hero");
    const heroLeftElement = document.getElementsByClassName("left-hero")?.[0];
    const heroRightH1 = document.querySelector("#hero section.right-hero h1");
    const heroRightP = document.querySelector("#hero section.right-hero p");
    const heroRightA = document.querySelector("#hero section.right-hero a");
    // contact el
    const contactElement = document.getElementById("form_contact");
    const contactElementInfo = document.querySelector("#form_contact .content-contact .contact-info");
    const contactElementForm = document.querySelector("#form_contact .content-contact .contact-form");
    window.addEventListener("scroll", (event) => {
        const scrollPosition = window.scrollY;
        // console.log(scrollPosition);
        // animated terminal (left hero section)
        if (scrollPosition <= heroElement.offsetHeight) {
            if (scrollPosition <= 180) {
                heroLeftElement.style.transform = `rotate3d(0, 1, 0, ${scrollPosition <= 90 ? scrollPosition : 90}deg)`;
            }
        }
        // animated right hero section H1 / P / A
        scrollPosition > (heroElement.offsetHeight / 6) ? heroRightH1.classList.add("fade-out-right") : heroRightH1.classList.remove("fade-out-right");
        scrollPosition > ((heroElement.offsetHeight / 6) + 100) ? heroRightP.classList.add("fade-out-right") : heroRightP.classList.remove("fade-out-right");
        scrollPosition > ((heroElement.offsetHeight / 6) + 150) ? heroRightA.classList.add("fade-out-right") : heroRightA.classList.remove("fade-out-right");

        // start element animation on scroll for contact
        if ((window.scrollY - contactElement.offsetTop) > -500) {
            (window.scrollY - contactElement.offsetTop) > ((contactElement.offsetHeight / 2) + 200) || (window.scrollY - contactElement.offsetTop) < -420 ? contactElementInfo.classList.add("fade-out-right") : contactElementInfo.classList.remove("fade-out-right");
            (window.scrollY - contactElement.offsetTop) > (contactElement.offsetHeight / 2) || (window.scrollY - contactElement.offsetTop) < -280 ? contactElementForm.classList.add("fade-out-right") : contactElementForm.classList.remove("fade-out-right");
        }
    });
    // === END ANIMATION ON SCROLL

});