function getImages(){
  let fake_a = `<a href = "" id = "fake" download>fakeboi</a>`;
  document.body.innerHTML += fake_a;
  fake_a = document.getElementById("fake")
  let images = [...(document.getElementById("formVerify1").getElementsByTagName("img"))]
  images.forEach((image)=>{
    fake_a.href = image.src;
    alert("getting next one");
    fake_a.click();
  })
}



