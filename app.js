// ---------- LOGIN ----------
function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (email === "" || pass === "") {
    error.innerText = "All fields required";
  } else {
    window.location.href = "jobs.html";
  }
}

// ---------- JOB DATA ----------
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Zoho",
    location: "Chennai",
    desc: "HTML, CSS, JavaScript, React"
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Infosys",
    location: "Bangalore",
    desc: "Java, SQL, DSA"
  }
];

// ---------- JOB LIST ----------
if (document.getElementById("job-list")) {
  const list = document.getElementById("job-list");

  jobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job";
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company} - ${job.location}</p>
      <button onclick="viewJob(${job.id})">View</button>
    `;
    list.appendChild(div);
  });
}

function viewJob(id) {
  window.location.href = `job.html?id=${id}`;
}

// ---------- JOB DETAILS ----------
if (document.getElementById("job-details")) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const job = jobs.find(j => j.id == id);
  document.getElementById("job-details").innerHTML = `
    <h2>${job.title}</h2>
    <p>${job.company}</p>
    <p>${job.desc}</p>
    <button onclick="applyJob()">Apply</button>
  `;
}

function applyJob() {
  window.location.href = "apply.html";
}

// ---------- APPLY ----------
function apply() {
  document.getElementById("success").innerText =
    "Application submitted successfully!";
}
