//co
const pesan = document.querySelector("#pesananbarang");
const toast = document.querySelector("#toast-simple");

pesan.onclick = () => {
  toast.classList.add("flex");
  toast.classList.remove("hidden");
};
