const Jimp = require('jimp');

async function analyze() {
    const files = [
        'src/assets/images/school_view.jpeg',
        'src/assets/images/school_view_2.jpeg',
        'src/assets/images/school_view_3.jpeg',
        'src/assets/images/school_view_4.jpeg',
        'src/assets/images/school_view_5.jpeg'
    ];

    for (const file of files) {
        try {
            const image = await Jimp.read(file);
            let r = 0, g = 0, b = 0;
            image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
                r += this.bitmap.data[idx + 0];
                g += this.bitmap.data[idx + 1];
                b += this.bitmap.data[idx + 2];
            });
            const total = image.bitmap.width * image.bitmap.height;
            r = Math.round(r / total);
            g = Math.round(g / total);
            b = Math.round(b / total);
            
            console.log(`${file}: rgb(${r}, ${g}, ${b})`);
        } catch (err) {
            console.error(`Error reading ${file}:`, err.message);
        }
    }
}
analyze();
