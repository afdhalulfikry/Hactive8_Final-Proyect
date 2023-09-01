const typed = new Typed("#tulisanBerjalan", {
  strings: [
    "Computer Engineering",
    "Web Development",
    "Computer Network",
    "Front-End Web Developer",
  ],
  typeSpeed: 50,
  backSpeed: 20,
  loop: true,
});

function openPopUp() {
  Swal.fire({
    icon: "success",
    title: "Berhasil Mengirimkan Pesan",
    text: "Terima kasih sudah menghubungi saya!",
  });
}
