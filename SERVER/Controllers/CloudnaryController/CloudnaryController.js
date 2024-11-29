const cloudinary = require("cloudinary");
const getDataUri = require("../../Middlewares/dataUrl");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.CloudeneryTest = async (req, res) => {
  try {
    const avatar = req.file; // This is the file you get from multer (in memory)

    if (!avatar) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileurl = await getDataUri(avatar)

    // Uploading the image buffer to Cloudinary
    const Avatar = await cloudinary.v2.uploader.upload(fileurl.content, {
      resource_type: "auto",  // Automatically detect the file type (image, video, etc.)
      public_id: "custom_name", // Optionally add a custom public_id, otherwise Cloudinary will auto-generate one
    });

    // Create an object to return the image URL and public_id
    const image = {
      public_id: Avatar.public_id,
      url: Avatar.url,  // The URL to the uploaded image
    };

    // Respond with success message and image details
    res.json({
      message: 'Image uploaded successfully!',
      imageUrl: image.url,
      public_id: image.public_id,
    });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ error: 'Failed to upload image' });
  }
};
