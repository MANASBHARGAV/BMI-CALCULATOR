var weight, height, measure, bmi, error ;

function calculate() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let error = "Please enter valid values";
    
    // Validate input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("results").innerHTML = "Please enter valid positive values for weight and height.";
        return;
    }

    height /= 100; // Convert height from cm to meters
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1);

    let measure;
    if (bmi <= 18.4) {
        measure = `Your BMI is ${bmi}, which means you are Underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = `Your BMI is ${bmi}, which means you are Normal.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = `Your BMI is ${bmi}, which means you are Overweight.`;
    } else {
        measure = `Your BMI is ${bmi}, which means you are Obese.`;
    }

    // Display result
    document.getElementById("results").innerHTML = measure;
}
