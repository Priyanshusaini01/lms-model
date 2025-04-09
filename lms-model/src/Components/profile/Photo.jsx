import React, { useState } from 'react';

function Photo() {
  const [image, setImage] = useState("https://placehold.co/100x100");
  const [fileName, setFileName] = useState("OIP (16).jpeg");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert("Image saved successfully!");
  };


  return (
    <div>
          <h1 className="text-2xl font-bold">Photo</h1>
        <p className="text-gray-600">Add a nice photo of yourself for your profile.</p>
        <div className="mt-6">
          <h2 className="text-lg font-bold">Image preview</h2>
          <div className="w-full h-32 border border-gray-300 flex items-center justify-center mt-2">
            <img src={image} alt="Preview of the uploaded image" className="h-full object-contain"/>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-bold">Add / Change Image</h2>
          <div className="flex items-center mt-2">
            <input type="file" className="border border-gray-300 p-2" onChange={handleImageChange}/>
            <span className="ml-2">{fileName}</span>
            <button className="ml-4 bg-gray-200 text-black px-4 py-2">Upload image</button>
          </div>
        </div>
        <button className="mt-6 bg-black text-white px-4 py-2" onClick={handleSave}>Save</button>
        </div>
  );
}

export default Photo;
