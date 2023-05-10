import React from "react";

const employees = [
    {
      name: "Jack Smith",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 24000
    },
    {
      name: "Mary Robbins",
      level: 3,
      dept: "Fin",
      designation: "Manager",
      salary: 28000
    },
    {
      name: "Steve Williams",
      level: 4,
      dept: "Ops",
      designation: "President",
      salary: 35000
    },
    {
      name: "Bob Andrews",
      level: 1,
      dept: "Fin",
      designation: "Trainee",
      salary: 16500
    },
    {
      name: "Dave Martin",
      level: 2,
      dept: "Fin",
      designation: "Manager",
      salary: 21700
    },
    {
      name: "Julia Clarke",
      level: 3,
      dept: "Ops",
      designation: "Manager",
      salary: 26900
    },
    {
      name: "Kathy Jones",
      level: 4,
      dept: "Tech",
      designation: "President",
      salary: 42500
    },
    {
      name: "Tom Bresnan",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 22200
    }
  ];
  
  export const EmployeeDetails = () => {
    return (
      <div>
        <h1>Employee Data</h1>
  
        <ul>
          {employees.map((employee) => {
            return (
              <li
                style={{ backgroundColor: employee.level === 2 ? "orange" : "" }}
              >
                <h1>{employee.name}</h1>
                <p>Salary: {employee.salary}</p>
                <p>Level: {employee.level}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  