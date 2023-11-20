console.log("connected");

function simulateCookieUsage() {
    const banner = document.getElementById('footer-banner');

    const acceptLink = document.createElement("a");
    acceptLink.href="#";
    acceptLink.addEventListener("click", acceptCookies);

    banner.appendChild(acceptLink);


function acceptCookies () {
    banner.removeChild(acceptLink);

    const acceptedMessage = document.createElement("p");
    acceptedMessage.textContent = "Cookies were accepted. Would you like to revoke?";

    const revokeLink = document.createElement("a");
    revokeLink.href="#";
    revokeLink.textContent = "Revoke";
    revokeLink.addEventListener("click", revokeCookies);

    banner.appendChild(revokeLink);
}

function revokeCookies() {
    banner.removeChild(acceptedMessage);
    banner.removeChild(revokeLink);

    banner.appendChild(acceptLink);
}
}

simulateCookieUsage();

function toggle(button)
{
  if(document.getElementById("1").value=="OFF"){
   document.getElementById("1").value="ON";}

  else if(document.getElementById("1").value=="ON"){
   document.getElementById("1").value="OFF";}
}