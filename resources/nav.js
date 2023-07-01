const aTags = document.querySelectorAll("a");
aTags.forEach((a) => {
    if (!a.textContent) {
        const href = a.getAttribute("href");
        const filename = href.substring(
            href.lastIndexOf("/") + 1,
            href.lastIndexOf(".")
        );
        const formattedFilename = filename
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
        a.textContent = formattedFilename;
    }
});
