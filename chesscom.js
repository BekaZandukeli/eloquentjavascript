function premiumVideoAccess() {
    const demoVideoLink = document.getElementById("videoElement_html5_api").getAttribute("src");
    
    const fullVideoLink = demoVideoLink.replace("-demo", "");
    
    document.getElementById("videoElement_html5_api").setAttribute("src", fullVideoLink);

    return;
}

premiumVideoAccess();