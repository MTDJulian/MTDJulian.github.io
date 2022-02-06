const discrod = "6B656566#6268";
document
    .getElementById("user")
    .addEventListener(
        "click",
        () =>
            navigator.clipboard.writeText(discrod) &&
            alert("copied discord discriminator")
    );
