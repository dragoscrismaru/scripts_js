// import gulp from "gulp";
// import sharpResponsive from "gulp-sharp-responsive";

// const reponsive_img = () =>
//   gulp
//     .src("./images/*.jpg")
//     .pipe(
//       sharpResponsive({
//         formats: [
//           {
//             width: 330,
//             format: "webp",
//             rename: {
//               suffix: "-330w",
//             },
//           },
//           {
//             width: 768,
//             format: "webp",
//             rename: {
//               suffix: "-768w",
//             },
//           },
//           {
//             width: 1024,
//             format: "webp",
//             rename: {
//               suffix: "-1024w",
//             },
//           },
//         ],
//       })
//     )
//     .pipe(gulp.dest("./output"));

// export { reponsive_img };

import { src, dest } from "gulp";
// import sharpResponsive from "gulp-sharp-responsive";
import sharp from "sharp";

const reponsive_img = () =>
  src("images/*.jpg")
    .pipe(
      sharp({
        formats: [
          // jpeg
          { width: 640, format: "jpeg", rename: { suffix: "-sm" } },
          { width: 768, format: "jpeg", rename: { suffix: "-md" } },
          { width: 1024, format: "jpeg", rename: { suffix: "-lg" } },
          // webp
          { width: 640, format: "webp", rename: { suffix: "-sm" } },
          { width: 768, format: "webp", rename: { suffix: "-md" } },
          { width: 1024, format: "webp", rename: { suffix: "-lg" } },
          // avif
          { width: 640, format: "avif", rename: { suffix: "-sm" } },
          { width: 768, format: "avif", rename: { suffix: "-md" } },
          { width: 1024, format: "avif", rename: { suffix: "-lg" } },
        ],
      })
    )
    .pipe(dest("./output/"));

export { reponsive_img };
