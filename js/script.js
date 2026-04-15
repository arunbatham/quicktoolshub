function compress() {
  document.getElementById("result").innerHTML = "Image Compressed ✅";
}

function merge() {
  document.getElementById("result").innerHTML = "PDF Merged ✅";
}

async function removeBG() {
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];

  if (!file) {
    alert("Upload image first!");
    return;
  }

  const formData = new FormData();
  formData.append("image_file", file);

  const response = await fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
      "X-Api-Key": "YOUR_API_KEY_HERE"
    },
    body: formData
  });

  if (!response.ok) {
    alert("Error processing image");
    return;
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  document.getElementById("result").innerHTML = `
    <h3>✅ Background Removed</h3>
    <img src="${url}" width="200"/>
    <br><br>
    <a href="${url}" download="no-bg.png">Download Image</a>
  `;
}