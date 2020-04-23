const modelParams = {
    flipHorizontal: true, // flip e.g for video 
    imageScaleFactor: 0.7, // reduce input image size for gains in speed.
    maxNumBoxes: 20, // maximum number of boxes to detect
    iouThreshold: 0.15, // ioU threshold for non-max suppression
    scoreThreshold: 0.15, // confidence threshold for predictions.
}



navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

//Select everything in html
const video = document.querySelector('#video');
const audio = document.querySelector('#audio');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
let model;

handTrack.startVideo(video).then(status => {
    if (status) {
        navigator.getUserMedia({
                video: {}
            }, stream => {
                video.srcObject = stream;
                setInterval(runDetection, 1000);

            },
            err => console.log(err)
        );
    }
})

function runDetection() {
    model.detect(video).then(predections => {
        console.log(predections);
        if (predections.length > 0) {
            audio.play();
        }
    });
}

handTrack.load(modelParams).then(lmodel => {
    model = lmodel;
});