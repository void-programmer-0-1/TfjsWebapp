
async function predict()
{
    user_image = document.getElementById("user-image");

    let input_tensor = tf.browser.fromPixels(user_image);
    //input_tensor.print();

    const model = await tf.loadLayersModel("../cat_vs_dog_tfjs/model.json");
    input_tensor = input_tensor.reshape([1,224,224,3]);
    const prediction = model.predict(input_tensor).dataSync();
    console.log(prediction);
    
    if(prediction > 0.5){
        console.log("DOG");
        document.getElementById("result").innerText = "Boww Boww";
    }
    else{
        console.log("CAT");
        document.getElementById("result").innerText = "Muahhh";
    }
}


