const asyncHandler = require("express-async-handler");
const errors = require("../errors/errorHandler.js");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const Image = require("../schemas/imageSchema");

const postImage = asyncHandler(async (req, res) => {
  // console.log(req);
  console.log(req.file, "file");

  const image = await Image.create({
    name: req.body.name,
    productImage: req.file.path,
  });
  console.log(image, "im");
  res.status(200).send({ image: image });
});

const findImageById = asyncHandler(async (req, res) => {
  const image = await Image.find({});
  // .select("_id name productImage")
  // .exec();

  // const image = await Image.findById(req.params.image_id)
  // .select("_id name productImage")
  // .exec();

  if (image) {
    res.status(200).send({ product: image });
  }

  image;
});

module.exports = { postImage, findImageById };
