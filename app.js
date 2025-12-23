document.addEventListener("DOMContentLoaded", function () {

  const jobList = document.getElementById("job-list");
  console.log("jobList:", jobList);

  if (jobList === null) {
    alert("job-list div NOT found");
    return;
  }

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Zoho", location: "Chennai" },
    { id: 2, title: "Software Engineer", company: "Infosys", location: "Bangalore" }
  ];

  jobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job";

    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company} - ${job.location}</p>
    `;

    jobList.appendChild(div);
  });

});
