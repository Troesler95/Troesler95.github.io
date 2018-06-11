import Typography from 'typography';

const typography = new Typography({
    includeNormalize: false,
    baseFontSize: "20px",
    baseLineHeight: 1.45,
    headerFontFamily: [
        "Quicksand",
        "Helvetica",
        "Arial",
        "sans-serif"
    ],
    bodyFontFamily: [
        "Halant",
        "Times New Roman",
        "Times",
        "serif"
    ],
    googleFonts: [
        {
          name: 'Quicksand',
          styles: [
            '300',
            '400',
            '700',
          ],
        },
        {
            name: 'Halant',
            styles: [
              '300',
              '400',
              '600',
            ],
        },
    ],
})

export default typography;