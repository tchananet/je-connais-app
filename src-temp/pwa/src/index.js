if ('serviceWorker' in Navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(registration =>{
        console.log("SW regsitered");
        console.log(registration);
    }).catch(error => {
        console.log("SZ not registered");
        console.log(error)
    });
    
}