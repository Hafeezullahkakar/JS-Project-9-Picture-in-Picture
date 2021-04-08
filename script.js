const videoElement = document.getElementById('video')
const button = document.getElementById('button')


//Ask user to select media stream, pass to video element and then play

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata =()=>{
            videoElement.play();
        }
        
    }
    catch(error){
        console.log('Whoops, error here:', error)
    }
}

button.addEventListener('click', async ()=>{
    //Disable button
    button.disabled = true;
    //Start PiP
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})

// On load
selectMediaStream();