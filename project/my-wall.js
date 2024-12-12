function openEditModal() {
    document.getElementById("edit-modal").classList.remove("hidden");
}

function closeEditModal() {
    document.getElementById("edit-modal").classList.add("hidden");
}

document.getElementById("edit-photo").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById("edit-photo-preview").src = e.target.result;
        };
        
        reader.readAsDataURL(file); // Read the file as a data URL
    }
});

function saveChanges() {
    // Handling photo upload
    const photoInput = document.getElementById("edit-photo");
    const photoFile = photoInput.files[0];
    
    if (photoFile) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            document.getElementById("profile-photo").src = e.target.result;
        };
        
        reader.readAsDataURL(photoFile); // This will convert the file to a data URL
    }

    // Save other profile data
    document.getElementById("age").innerText = document.getElementById("edit-age").value;
    document.getElementById("location").innerText = document.getElementById("edit-location").value;
    document.getElementById("cgpa").innerText = document.getElementById("edit-cgpa").value;

    document.getElementById("skills-text").innerText = document.getElementById("edit-skills").value;
    updateList("achievements-list", document.getElementById("edit-achievements").value);
    updateList("courses-list", document.getElementById("edit-courses").value);
    updateList("activities-list", document.getElementById("edit-activities").value);

    closeEditModal();
}

function updateList(elementId, value) {
    const list = value.split(";").map(item => `<li>${item.trim()}</li>`).join("");
    document.getElementById(elementId).innerHTML = list;
}
