function SetStatusChanged( status ) {
    let processNode = document.querySelector("#hello");
    console.log(processNode);
    processNode.innerHTML = status;
}
window.onload = () => {
    SetStatusChanged( "Setting Up..." )
}
