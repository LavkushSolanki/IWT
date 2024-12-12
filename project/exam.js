const exams = {
  ssc: [
    {
      name: "SSC CGL",
      tests: 9552,
      img: "https://cdn.testbook.com/resources/productionimages/SSC_All_1594144453.png",
    },
    {
      name: "SSC CHSL",
      tests: 8649,
      img: "https://cdn.testbook.com/resources/productionimages/SSC_All_1594144453.png",
    },
    {
      name: "SSC GD Constable",
      tests: 8705,
      img: "https://cdn.testbook.com/resources/productionimages/SSC_All_1594144453.png",
    },
  ],
  banking: [
    {
      name: "SBI PO",
      tests: 1234,
      img: "https://cdn.testbook.com/resources/productionimages/SBI_All_1717593984.png",
    },
    {
      name: "SBI Clerk",
      tests: 987,
      img: "https://cdn.testbook.com/resources/productionimages/SBI_All_1717593984.png",
    },
    {
      name: "UBI Grade B",
      tests: 675,
      img: "https://cdn.testbook.com/resources/productionimages/SBI_All_1717593984.png",
    },
  ],
  teaching: [
    {
      name: "CTET",
      tests: 500,
      img: "https://cdn.testbook.com/resources/productionimages/teaching_All_1583570997.png",
    },
    {
      name: "TET",
      tests: 340,
      img: "https://cdn.testbook.com/resources/productionimages/teaching_All_1583570997.png",
    },
  ],
  civil: [
    { name: "UPSC CSE", tests: 2500, img: "icons/civil.png" },
    { name: "State PCS", tests: 1200, img: "icons/civil.png" },
  ],
  railways: [
    { name: "RRB NTPC", tests: 890, img: "icons/railway.png" },
    { name: "RRB Group D", tests: 760, img: "icons/railway.png" },
  ],
};

const sidebarItems = document.querySelectorAll(".sidebar ul li");
const examGrid = document.getElementById("examGrid");

// Function to render exams
// Function to render exams
const renderExams = (category) => {
  examGrid.innerHTML = ""; // Clear existing exams
  exams[category].forEach((exam) => {
    const card = document.createElement("div");
    card.className = "exam-card";
    card.innerHTML = `
          <a href="./python-intro.html" onclick="setExamName('${exam.name}')">
          <img src="${exam.img}" alt="${exam.name}">
          <h3>${exam.name}</h3>
          <p>${exam.tests} Tests</p>
          </a>
        `;
    examGrid.appendChild(card);
  });
};

// Function to set the exam name in localStorage
const setExamName = (examName) => {
  localStorage.setItem("selectedExamName", examName);
};

// Initial render for the default active category (SSC)
renderExams("ssc");

// Add click event listeners to sidebar items
sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all items
    sidebarItems.forEach((i) => i.classList.remove("active"));
    // Add active class to clicked item
    item.classList.add("active");
    // Render exams for the clicked category
    renderExams(item.id);
  });
});
