// imageConverter.js

import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputFolder = "./images/";
const outputFolder = "./output/";

const convertImagesToWebP = (inputFolder, outputFolder) => {
  const acceptedFormats = ["png", "jpg", "jpeg"];
  const formats = [
    { suffix: "-330", width: 330 },
    { suffix: "-660", width: 660 },
    { suffix: "-1200", width: 1200 },
    { suffix: "-1500", width: 1500 },
    { suffix: "-1920", width: 1920 },
    { suffix: "-2560", width: 2560 },
  ];

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  fs.readdir(inputFolder, (err, files) => {
    if (err) {
      console.error("Error reading input folder:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(inputFolder, file);

      if (
        acceptedFormats.some((format) =>
          file.toLowerCase().endsWith(`.${format}`)
        )
      ) {
        formats.forEach((format) => {
          const outputFile = path.join(
            outputFolder,
            `${path.parse(file).name}${format.suffix}.webp`
          );
          sharp(filePath)
            .webp({ quality: 95 })
            .resize({ width: format.width })
            .toFile(outputFile, (err) => {
              if (err) {
                console.error(`Error converting ${file} to WebP:`, err);
              } else {
                console.log(`Converted ${file} to WebP: ${outputFile}`);
              }
            });
        });
      }
    });
  });
};

convertImagesToWebP(inputFolder, outputFolder);

export default convertImagesToWebP;
