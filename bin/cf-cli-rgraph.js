const program = require('commander');
const rgraph = require('../commands/rgraph');

program
    .command('check')
    .description('Check rating graph for single handle')
    .action(async function() {
        const handle = 'Fefer_Ivan';
        const data = await rgraph.bringGraphData(handle);
        rgraph.showGraphSingle(handle, data);
    });

program
    .command('compare')
    .description('Compare two rating graphs')
    .action(async function() {
        console.log('Section in Progress');        
    });

program.parse(process.argv);