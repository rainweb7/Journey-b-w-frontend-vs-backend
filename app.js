console.log("JS loaded");

document.addEventListener("DOMContentLoaded", function () {

  console.log("DOM fully loaded");

  const jobList = document.getElementById("job-list");
  console.log("jobList:", jobList);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Zoho",
      location: "Chennai"
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Infosys",
      location: "Bangalore"
    }
  ];

  jobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job";

    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company} - ${job.location}</p>
      <button>View</button>
    `;

    jobList.appendChild(div);
  });

});
