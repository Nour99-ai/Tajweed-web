if (scrollY > 300) {
    let NewButton = document.createElement("button");
    NewButton.classList.add("arrow-up");
    NewButton.innerHTML = "↑";
    document.body.appendChild(NewButton);
    if (scrollY < 300) {
        NewDiv.classList.remove("arrow-up");
        document.body.removeChild(NewDiv);
    }
}
NewButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
