const company = {
  name: "XYZ Inc.",
  Place: "Banglore",
  employees: [
    {
      id: 1001,
      name: "Mohit Patel",
      department: "Engineering",
      position: "Software Engineer",
      salary: 750000,
    },
    {
      id: 1002,
      name: "Priya Shrivastava",
      department: "Marketing",
      position: "Marketing Manager",
      salary: 800000,
    },
    {
      id: 1003,
      name: "Aagman Mehto",
      department: "Human Resources",
      position: "HR Specialist",
      salary: 900000,
    },
    {
      id: 1004,
      name: "Ranjana Jaiswal",
      department: "Back Office Support",
      position: "Back Offic Specialist",
      salary: 50000,
    },
  ],
};

console.log(company.name);
console.log(company.Place);
console.log(company.employees[0].name);
console.log(company.employees[1].position);
console.log(company.employees[2].name);
console.log(company.employees[3].name);
