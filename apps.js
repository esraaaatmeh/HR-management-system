'use strict';
const body=document.getElementsByClassName('maincontainer')
var e_id=999;
var salary=0;
const allemployee=[];
function Employee(fullName,department,level,imageurl){
    this.g_id=function(counter){
        this.e_id=e_id+counter
        ++e_id ;
        return e_id
    };
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageurl=imageurl;
    this.salary=function(){
        if (this.level=="Junior"){
            var salary=Math.floor(Math.random()*(1000-500)+500)

        }
        else if(this.level=="Mid-Senior"){
            var salary=Math.floor(Math.random()*(1500-1000)+1000)

        }
        else if(this.level=="Senior"){
            var salary=Math.floor(Math.random()*(2000-1500)+1500)

        }
        let totalSalary=salary-(salary*0.075)
        this.salary=totalSalary
        return salary}

}


Employee.prototype.render=function(){
    // document.write(`<br>
    //                 <h1>Employee name: ${this.fullName }</h1>
    //                 <h1>Department: ${this.department}</h1>
    //                 <h1>Employee salary: ${this.salary()}</h1>`)
    const div=document.createElement('div');
    body[0].appendChild(div);

    const imgEl=document.createElement('img');
    imgEl.src=this.imageurl;
    imgEl.alt=this.fullName;
    div.appendChild(imgEl);
    const h1El=document.createElement('h1');
    h1El.textContent=`Name : ${this.fullName}`;
    div.appendChild(h1El);
    const h1El1=document.createElement('h1');
    h1El1.textContent=`Department : ${this.department}`;
    div.appendChild(h1El1);
    const h1El2=document.createElement('h1');
    h1El2.textContent=`Level : ${this.level}`;
    div.appendChild(h1El2);
    const h1El3=document.createElement('h1');
    h1El3.textContent=`Salary : ${this.salary()}`;
    div.appendChild(h1El3);
    div.classList.add("card")



};


const Ghazi= new Employee("Ghazi Samer","Administration","Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0svRFB95ugOv67zhZul7Ibi8duiXYIlly_A&usqp=CAU");
const Lana= new Employee('Lana Al',"Finance","Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEE3v6PjkC5WIiVylxtAp_q0hiUa8PB1kH5A&usqp=CAU");
const Tamara=new Employee("Tamara Ayoub","Marketing","Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhW-XoDm3NCHOTYL0etUjliui1Ot6meItbA&usqp=CAU");
const Saif=new Employee("Safi Walid","Administration","Mid-Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdf5FOnbXMq0AegJxGDPQRmBXGS6n5BHRBhA&usqp=CAU");
const Omar=new Employee("Omar Zaid","Development","Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ng3fEtx3duplwqFocE3nY2mnFH1MHDWVYA&usqp=CAU");
const Rana=new Employee("Rana Saleh","Development","Junior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTKVYurVii_uGqCJkNRlKabuK-DfH39YwOw&usqp=CAU");
const Hadi=new Employee("Hadi Ahmad","Finance","Mid-Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurZsdRB9FsjvEtfAM9LDwRgsI0xNY7Q7eig&usqp=CAU");
Ghazi.render();
Lana.render();
Tamara.render();
Saif.render();
Omar.render();
Rana.render();
Hadi.render();


