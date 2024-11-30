document.getElementById("add-subject").addEventListener("click", function () {
    const container = document.getElementById("subject-container");

    const subjectDiv = document.createElement("div");
    subjectDiv.className = "subject";

    subjectDiv.innerHTML = `
        <input type="text" placeholder="Subject Name" class="subject-name">
        <input type="number" placeholder="Total Classes" class="total-classes">
        <input type="number" placeholder="Attended Classes" class="attended-classes">
        <button class="remove-btn">Remove</button>
    `;

    container.appendChild(subjectDiv);

    // Add event listener to the new remove button
    subjectDiv.querySelector(".remove-btn").addEventListener("click", function () {
        container.removeChild(subjectDiv);
    });
});

document.getElementById("calculate").addEventListener("click", function () {
    const subjects = document.querySelectorAll(".subject");
    let totalClasses = 0;
    let attendedClasses = 0;

    subjects.forEach(subject => {
        const total = parseInt(subject.querySelector(".total-classes").value) || 0;
        const attended = parseInt(subject.querySelector(".attended-classes").value) || 0;

        totalClasses += total;
        attendedClasses += attended;
    });

    const percentage = totalClasses === 0 ? 0 : ((attendedClasses / totalClasses) * 100).toFixed(2);

    document.getElementById("result").innerText = `Your total attendance is ${percentage}%`;
});

// Add event listener to remove button on page load
document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        btn.parentElement.remove();
    });
});
