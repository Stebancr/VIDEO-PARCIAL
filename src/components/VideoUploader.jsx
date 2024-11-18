const uploadFile = async () => {
  if (!file) {
    setMessage("Por favor selecciona un archivo.");
    return;
  }

  const reader = new FileReader();
  reader.onload = async () => {
    const base64File = reader.result.split(",")[1];
    const videoData = { name: file.name, data: base64File };

    try {
      const response = await fetch("http://localhost:5000/api/videos/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file: videoData }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Archivo subido con éxito.");
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error al subir el archivo:", error);
      setMessage("Error al subir el archivo.");
    }
  };

  reader.readAsDataURL(file);
};
