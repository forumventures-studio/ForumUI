import Lottie from "lottie-react";

export type LoadingAnimationProps = {
  backgroundColor?: string;
  spinnerColor?: string;
  size?: "small" | "medium" | "large";
};

// Helper function to convert hex color to RGBA
const hexToRgba = (hex: string, alpha = 1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r / 255, g / 255, b / 255, alpha];
};

export default function LoadingAnimation({
  backgroundColor = "#E8F2EF",
  spinnerColor = "#749E91",
  size = "medium",
}: LoadingAnimationProps) {
  const sizeClasses = {
    small: "w-32 h-32",
    medium: "w-52 h-52",
    large: "w-80 h-80",
  };

  const bgRgba = hexToRgba(backgroundColor);
  const spinnerRgba = hexToRgba(spinnerColor);

  const loadingSpinner = {
    v: "5.8.1",
    fr: 30,
    ip: 0,
    op: 60,
    w: 300,
    h: 300,
    nm: "loading_6",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Shape Layer 2",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: {
            a: 1,
            k: [
              {
                i: { x: [0.833], y: [0.833] },
                o: { x: [0.167], y: [0.167] },
                t: 0,
                s: [0],
              },
              { t: 60, s: [360] },
            ],
            ix: 10,
          },
          p: {
            a: 0,
            k: [150.00000000000003, 150.00000000000003, 0],
            ix: 2,
            l: 2,
          },
          a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
          s: {
            a: 0,
            k: [30.000000000000004, 30.000000000000004, 100],
            ix: 6,
            l: 2,
          },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [300, 300], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: spinnerRgba,
                  ix: 3,
                },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 50, ix: 5 },
                lc: 2,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
              },
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
          },
          {
            ty: "tm",
            s: {
              a: 1,
              k: [
                {
                  i: { x: [0.667], y: [1] },
                  o: { x: [0.333], y: [0] },
                  t: 10,
                  s: [0],
                },
                { t: 60, s: [99] },
              ],
              ix: 1,
            },
            e: {
              a: 1,
              k: [
                {
                  i: { x: [0.667], y: [1] },
                  o: { x: [0.333], y: [0] },
                  t: 0,
                  s: [1],
                },
                { t: 50, s: [100] },
              ],
              ix: 2,
            },
            o: {
              a: 1,
              k: [
                {
                  i: { x: [0.833], y: [0.833] },
                  o: { x: [0.167], y: [0.167] },
                  t: 0,
                  s: [0],
                },
                { t: 60, s: [3] },
              ],
              ix: 3,
            },
            m: 1,
            ix: 2,
            nm: "Trim Paths 1",
            mn: "ADBE Vector Filter - Trim",
            hd: false,
          },
        ],
        ip: 0,
        op: 300,
        st: 0,
        bm: 0,
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Shape Layer 1",
        sr: 1,
        ks: {
          o: { a: 0, k: 30, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 0,
            k: [150.00000000000003, 150.00000000000003, 0],
            ix: 2,
            l: 2,
          },
          a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
          s: {
            a: 0,
            k: [30.000000000000004, 30.000000000000004, 100],
            ix: 6,
            l: 2,
          },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [300, 300], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: bgRgba,
                  ix: 3,
                },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 50, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
              },
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
          },
        ],
        ip: 0,
        op: 300,
        st: 0,
        bm: 0,
      },
    ],
    markers: [],
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <Lottie animationData={loadingSpinner} className={sizeClasses[size]} />
      </div>
    </>
  );
}
