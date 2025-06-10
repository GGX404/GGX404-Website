const link = document.getElementById("project-link")
function setLinkTarget() {
    if (link.innerHTML === "Portfolio Project") {
  if (link.target === "_blank") {
    link.target = "_self";
  }
}
}
