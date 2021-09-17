module.exports.first = (req, res) => {
    const { exec } = require('child_process')

    exec('docker ps -a', (err, stdout, stderr) => {

        let stats = stdout.split('\n')
        let tableHead = []
        let tableBody = []   
        let containerImages = []
        let containerNames = []   

        for (let i = 0; i < stats.length; i++) {

            let innerRow = stats[i].split('  ')
            let filteredInnerRows = innerRow.filter(line => line !== '')            

            if (i === 0) {
                tableHead = [...filteredInnerRows]
            } else {
                if(filteredInnerRows[1] !== undefined){
                    containerImages.push(filteredInnerRows[1])
                }
                if(filteredInnerRows[6] !== undefined){
                    containerNames.push(filteredInnerRows[6])                
                } 
                tableBody.push(filteredInnerRows)
            }
        }       

        res.render('../index', { tableHead, tableBody, containerImages, containerNames})
    })
}