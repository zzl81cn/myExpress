/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-23 17:21:16
 * @version $Id$
 */

var fs = require('fs');

function copy(src, dst) {
	// fs.writeFileSync(dst, fs.readFileSync(src));
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
	copy(argv[0], argv[1]);
}

main(process.argv.slice(2));