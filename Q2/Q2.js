var resume = [
    {
        name: "Berlin",
        secondName: "Sam",
        age: 23,
        gender: "Male",
        contact: 8015707043
    },
    {
        education: [{
            courseName: "10th",
            cgpa: 9.7
        },
        {
            courseName: '12th',
            cgpa: 8.7
        },
        {
            courseName: "B.E",
            cgpa: 7.7
        }
    ]},
    {
        technicalSkills: ['C programing', 'C# Programing','Python','HTML','CSS','JavaScript'],
        softSkills: ['Team Player','Taking Responsibilities','Logical Thinking']
    },
    {
        certification: [{
            certName: "python",
            certDate: "08/2021",
        },
        {
            certName: "C# Programing",
            certDate: "06/2022"
        },
        {
            certName: "AZ900",
            certDate: '02/2023'
        }]
    },
    {
        hobbies: ["Coding",'Decoding','cricket']
    }
]

console.log(JSON.stringify(resume));