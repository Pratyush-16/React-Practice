/**Build an EmployeeCard component in React to display name, designation and work experience of a person. Pass name, designation and work experience as props.

The colour of “Designation:” should be green.
The colour of “Experience:” should be blue. 
 */
import React from "react"

const EmployeeCard = 
[{ name:"Ronaldo", designation:"Football", workExperience:"8 years" },
{ name:"Dhoni", designation:"Cricket", workExperience:"6 years" },
{ name:"Sania Mirza", designation:"Tennis", workExperience:"11 years" },
{ name:"Saina Nehwal", designation:"Badminton", workExperience:"12 years" }
]
 

export const Employee  =() => {

    return(
        <div>
            <h1>Employee </h1>
            {
                EmployeeCard.map(employee => {
                                    return(
                                        <div key={employee.name}>
                                            <h2>Name: {employee.name}</h2>
                                            <h3 style={{color:"green"}}>Designation: {employee.designation}</h3>
                                            <h3 style={{color:"blue"}}>Work Experience{employee.workExperience}</h3>
                                        </div>
                                    )
                                })
            }
        </div>
    )
    
}