import { src, dest } from "gulp";
import sharpResponsive from "gulp-sharp-responsive";

const img = () =>
  src("./images/*.{jpg,png}")
    .pipe(
      sharpResponsive({
        formats: [
          {
            width: 330,
            format: "webp",

            rename: {
              suffix: "-330w",
            },
          },
          {
            width: 768,
            format: "webp",
            rename: {
              suffix: "-768w",
            },
          },
          {
            width: 1024,
            format: "webp",
            rename: {
              suffix: "-1024w",
            },
          },
        ],
      })
    )
    .pipe(dest("./output"));

export { img };
