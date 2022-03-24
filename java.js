// window.onload = function(){
//     document.querySelector("h1").style.color ="red";
// };
// window.alert("hello");
// document.write("<h1>hello2</h1>");
// console.log("hello js");
// console.error("error")
// console.table(["osama" , "islam" , "ahmed"]);
// console.log("hello from %cja %cfile" , "color:red; font-size:40px" , "color:blue; font-size:40px")
// ...............[Data Types].......................
// console.log(typeof"osama ali");
// console.log(typeof 5000);
// console.log(typeof [10,15,17]);
// console.log(typeof ["os", "ah", "sa"]);
// console.log(typeof {name:"ahmed", age:17, country:"eg"});
// console.log(typeof true); 
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);
// ..................[variables]....................
// var user ="islam";
// var age =10;
// console.log(user);
// console.log(age);
// helo.innerHTML = "ALIII";

// let a = 1;
// let a = 1;

// console.log(a)

// console.log(a);
// let a = 1;



// ..................[String Syntax And Character Escape]....................

// console.log('elzero web "school"');
// console.log("elzero web 'school'");
// console.log("elzero web \"school\"");
// console.log('elzero web \'school\'');
// console.log("elzero\
//  web\
//  school");
//  console.log("elzero\n web\n school");


// ..................[Concatenation]....................
// let a = "we love";
// let b = "java";

// document.write(a + " " + b)
// console.log(a, b)


// ..................[Template Literals / Template Strings]....................



// let a = "we love";
// let b = "java";
// let c = "html";
// let d = "css";

// console.log(a + " " + b +"\n"+ c + " " + d)

// console.log(`${a} ${b} ${c} ${d}`)


// let Title = "Elzero";
// let markup = `
// <div class="card">
//     <div class="child">
//         <h1>${Title}</h1>
//         <p>Pragraph</p>
//     </div>
// </div>
// `;
// document.write(markup);


// ..................[Concatenation]....................

// let theTitle="Elzero", pageDescription="Elzero Web School", pageDate="25/10";
// let pageStructure = ` <div class="card">
//     <h3>${theTitle}</h3>
//     <p>${pageDescription}</p>
//     <span>${pageDate}</span>
// </div>
// `;
// document.write(pageStructure.repeat(4));

function formValidate() {
    var username = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var error = document.getElementById("error");
    var text = "";
    if (username.length < 5) {
        text = "Please Enter Valid User Name";
        error.innerHTML = text;
        return false;
    }else if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email";
        error.innerHTML = text;
        return false;
    }else if(isNaN (phone) || phone.length != 11 ){
        text = "Please Enter Valid Phone";
        error.innerHTML = text;
        return false;
    }
else{
    alert("Done")
    return true
}








}

































