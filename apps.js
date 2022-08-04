var e_id=999 
const employee1={
    employeeId:0,
    fullName:"Ghazi Samer",
    department:"Administration",
    level:"Senior",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0svRFB95ugOv67zhZul7Ibi8duiXYIlly_A&usqp=CAU",
    salary:0,
    gId: function(counter){
        this.employeeId=employeeId+counter
        ++e_id
    },
    gSalary: function(){
        var salary=Math.floor(Math.random()*(2000-1500)+1500)
        var totalSalary=salary-(salary*0.075)
        this.salary=totalSalary
        console.log(`Employee salary: ${employee1.salary}`)

    },
    

}

console.log(`Employee name: ${employee1.fullName}`)
employee1.gSalary()
const employee2={
    employeeId:0,
    fullName:"Lana Ali",
    department:"Finance",
    level:"Senior",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEE3v6PjkC5WIiVylxtAp_q0hiUa8PB1kH5A&usqp=CAU",
    salary:0,
    gId: function(counter){
        this.employeeId=employeeId+counter
        ++e_id
    },
    gSalary: function(){
        var salary=Math.floor(Math.random()*(2000-1500)+1500)
        var totalSalary=salary-(salary*0.075)
        this.salary=totalSalary
        console.log(`Employee salary: ${employee2.salary}`)


    },

}
console.log(`Employee name: ${employee2.fullName}`)
employee2.gSalary()
const employee3={
    employeeId:0,
    fullName:"Tamara Ayoub",
    department:"Marketing",
    level:"Senior",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhW-XoDm3NCHOTYL0etUjliui1Ot6meItbA&usqp=CAU",
    salary:0,
    gId: function(counter){
        this.employeeId=employeeId+counter
        ++e_id
    },
    gSalary: function(){
        var salary=Math.floor(Math.random()*(2000-1500)+1500)
        var totalSalary=salary-(salary*0.075)
        this.salary=totalSalary
        console.log(`Employee salary: ${employee3.salary}`)


    },
   

}
console.log(`Employee name: ${employee3.fullName}`)
employee3.gSalary()
const employee4={
    employeeId:0,
    fullName:"Safi Walid",
    department:"Administration",
    level:"Mid-Senior",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdf5FOnbXMq0AegJxGDPQRmBXGS6n5BHRBhA&usqp=CAU",
    salary:0,
    gId: function(counter){
        this.employeeId=employeeId+counter
        ++e_id
    },
    gSalary: function(){
        var salary=Math.floor(Math.random()*(1500-1000)+1000)
        var totalSalary=salary-(salary*0.075)
        this.salary=totalSalary
        console.log(`Employee salary: ${employee4.salary}`)


    },
}
console.log(`Employee name: ${employee4.fullName}`)
employee4.gSalary()
const employee5={
    employeeId:0,
    fullName:"Omar Zaid",
    department:"Development",
    level:"Senior",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ng3fEtx3duplwqFocE3nY2mnFH1MHDWVYA&usqp=CAU",
    salary:0,

    gId: function(counter){
        this.employeeId=employeeId+counter
        ++e_id
    },
    gSalary: function(){
        var salary=Math.floor(Math.random()*(2000-1500)+1500)
        var totalSalary=salary-(salary*0.075)
        this.salary=totalSalary
        console.log(`Employee salary: ${employee5.salary}`)


    },

}
console.log(`Employee name: ${employee5.fullName}`)
employee5.gSalary()
const employee6={
    employeeId:0,
    fullName:"Rana Saleh",
    department:"Development",
    level:"Junior",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTKVYurVii_uGqCJkNRlKabuK-DfH39YwOw&usqp=CAU",
    salary:0,
    gId: function(counter){
        this.employeeId=employeeId+counter
        ++e_id
    },
    gSalary: function(){
        var salary=Math.floor(Math.random()*(1000-500)+500)
        var totalSalary=salary-(salary*0.075)
        this.salary=totalSalary
        console.log(`Employee salary: ${employee6.salary}`)


    },
}
console.log(`Employee name: ${employee6.fullName} `)
employee6.gSalary()
const employee7={
    employeeId:0,
    fullName:"Hadi Ahmad",
    department:"Finance",
    level:"Mid-Senior",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurZsdRB9FsjvEtfAM9LDwRgsI0xNY7Q7eig&usqp=CAU",
    salary:0,
    gId: function(counter){
        this.employeeId=employeeId+counter
        ++e_id
    },
    gSalary: function(){
        let salary=Math.floor(Math.random()*(1500-1000)+1000)
        let totalSalary=salary-(salary*0.075)
        this.salary=totalSalary
        console.log(`Employee salary: ${employee7.salary}`)


    },
}
console.log(`Employee name: ${employee7.fullName}`)
employee7.gSalary()
