function formValidate() {
    // Function to validate the form
    var myChoiceValue = getSelectedRadioValue("myChoice");
    console.log(myChoiceValue);
    var myChoice1Value = getSelectedRadioValue("myChoice1");
    console.log(myChoice1Value);

    // Validate the fields
    var comments = document.getElementById("cmt").value.trim();
    var name = document.getElementById("name").value.trim();
    var address = document.getElementById("address").value.trim();
    var email = document.getElementById("mail").value.trim();

    // Validation logic for comments, name, and email fields
    if (comments === "" || name === "" || email === "") {
        showError("Please fill in all the required fields.");
        return false;
    }

    // Validation logic for the address field (checking email format)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (address !== "" && !emailRegex.test(email)) {
        showError("Invalid email format in the address field.");
        return false;
    }

    // The form is valid, you can submit it or perform other actions here
    console.log("Form is valid!");

    // Returning false prevents the form from being submitted
    return false;
}

function getSelectedRadioValue(name) {
    var radioInputs = document.getElementsByName(name);

    for (var i = 0; i < radioInputs.length; i++) {
        if (radioInputs[i].checked) {
            return radioInputs[i].value;
        }
    }

    // Return null if no radio input is selected
    return null;
}

function showError(message) {
    var errorContainer = document.querySelector('.errorContainer');
    errorContainer.innerHTML = '<h1>Error:</h1><p>' + message + '</p>';
}
