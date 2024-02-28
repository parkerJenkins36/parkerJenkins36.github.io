function loadImage() {
    var image = document.getElementById('introImage').files[0]; 
    const imageUrl = URL.createObjectURL(image); 
    var text = "<img src=\"" + imageUrl + "\" >";
    document.getElementById('loadImage').innerHTML = text;
}


const resetBtn = document.getElementById('reset');
if(resetBtn){
resetBtn.addEventListener("reset", reset);
}
const reset = () => {
    document.getElementById('form').reset();
    document.getElementById('loadedImage').innerHTML = ''; // Clear any uploaded image
}

function checkForm(){
    let name = document.getElementById('name').value;
    let mascot = document.getElementById('Mascot').value;
    let image = document.getElementById('introImage').files[0];
    let caption = document.getElementById('caption').value;
    let personalBackground = document.getElementById('personal_b').value;
    let professionalBackground = document.getElementById('professional_b').value;
    let academicBackground = document.getElementById('academic_b').value;
    let webBackground = document.getElementById('web_b').value;
    let platform = document.getElementById('platform').value;
    let checkbox = document.getElementById('checkbox1').checked;
    if (name === '' || mascot === '' || !image || caption === '' || personalBackground === '' ||
    professionalBackground === '' || academicBackground === '' || webBackground === '' ||
    platform === '' || !checkbox) {
    alert("Make sure to fill all of the required before submitting please.");
    return false; 
}
return true;
}
function addCourseField() {
    const course = document.getElementById("courses");
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "courses";
    
    const dltButton = document.createElement("button");
    dltButton.type = "button";
    dltButton.textContent = "Delete";
    dltButton.onclick = function() {
        course.removeChild(newInput);
        course.removeChild(dltButton);
    };
    course.appendChild(newInput);
    course.appendChild(dltButton);
}





function submitForm() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("Mascot").value;
    const image = document.getElementById("introImage").value;
    const caption = document.getElementById("caption").value;
    const personalBackground = document.getElementById("personal_b").value;
    const professionalBackground = document.getElementById('professional_b').value;
    const academicBackground = document.getElementById("academic_b").value;
    const webBackground = document.getElementById('web_b').value;
    const platform = document.getElementById('platform').value;
    const funny = document.getElementById('funny').value;
    const anything = document.getElementById('anything').value;

    const coursesTaking = [];
    const courseInputs = document.querySelectorAll('[name="courses"]');
    courseInputs.forEach(courseInput => {
        coursesTaking.push(courseInput.value);
    });

    const result = document.getElementById("form");
    result.innerHTML = `
    <h1>Introduction</h1>
    <h2>${name} || ${mascot}</h2>
    <figure>
        <img src="${image}" class="intro" alt="${caption}">
        <figcaption>${caption}</figcaption>
    </figure>
    <ul>
    <li><b>Personal Background:</b> ${personalBackground}</li>
    <li><b>Professional Background:</b>  ${professionalBackground}</li>
    <li><b>Academic Background:</b> ${academicBackground}</li>
    <li><b>Background in this Subject:</b> ${webBackground}</li>
    <li><b>Primary Computer Platform:</b>  ${platform}</li>
    <li><b>Courses I'm Taking & Why:</b>
    <ul>
    ${courses.map(course => `<li><b>${course}</b></li>`).join("")}
</ul>
    </li>
    <li><b>Funny/Interesting Item about me:</b> ${funny}</li> 
    <li><b>I'd also like to Share:</b> ${anything}</li>
</ul>
    `;
    document.body.innerHTML = result;
}