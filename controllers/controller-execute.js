const { exec } = require('child_process')

module.exports.execute = (req, res) => {    
    const { action, name } = req.body 
    
    switch(action){      

        case 'start':
            exec('docker restart ' + name , (err, stdout, stderr) => {
        
                console.log('Container ' + name + ' started ')
            })
            break
        
        case 'stop':
            exec('docker stop ' + name , (err, stdout, stderr) => {
        
                console.log('Container ' + name + ' stopped ')
            })
            break       
        
        case 'remove':
            exec('docker rm ' + name , (err, stdout, stderr) => {
        
                console.log('Container ' + name + ' removed ')
            })
            break

        default:
            console.log('Something wrong has happenned')
            break
    }   
}