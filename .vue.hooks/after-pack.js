const { inspect, promisify } = require('util')
const exec = promisify(require('child_process').exec);

module.exports = async function (context) {
    return new Promise( async (resolve, reject) => {
        
        console.log(`\n\n After Pack Context: \n\n======\n\n${inspect(context)}\n\n======\n\n`);

        var { code, stdout, stderr } =  await exec(`rm -rf ${context.appOutDir}/resources/app/node_modules`);

        console.log("\n\ncode \n\n======\n\n");
        console.log(code);
        console.log("\n\nstdout \n\n======\n\n");
        console.log(stdout);
        console.log("\n\nstderr \n\n======\n\n");
        console.log(stderr);

        var { code, stdout, stderr } =  await exec(`npm install --prefix ${context.appOutDir}/resources/app`);

        console.log("\n\ncode \n\n======\n\n");
        console.log(code);
        console.log("\n\nstdout \n\n======\n\n");
        console.log(stdout);
        console.log("\n\nstderr \n\n======\n\n");
        console.log(stderr);

        resolve();

        // var i = 0;
        // var interval = setInterval( () => console.log(i++), 1000 );
        // var timeout = setTimeout( () => { clearInterval(interval); resolve(); } , 10000 );

    });
}