function loadImage() {
    var image = document.getElementById('introImage').files[0]; 
    const imageUrl = URL.createObjectURL(image); 
    var text = "<img src=\"" + imageUrl + "\" >";
    document.getElementById('loadImage').innerHTML = text;
}

function checkForm(){
    let name = document.getElementById('name').value();
    let mascot = document.getElementById('Mascot').value();
    let image = document.getElementById('introImage').files[0];
    let caption = document.getElementById('caption').value();
    let personalBackground = document.getElementById('personal_b').value();
    let professionalBackground = document.getElementById('professional_b').value();
    let academicBackground = document.getElementById('academic_b').value();
    let webBackground = document.getElementById('web_b').value();
    let platform = document.getElementById('platform').value();
    let checkbox = document.getElementById('checkbox1').checked;
    if (name === '' || mascot === '' || !image || caption === '' || personalBackground === '' ||
    professionalBackground === '' || academicBackground === '' || webBackground === '' ||
    platform === '' || !checkbox) {
    alert("Make sure to fill all of the required before submitting please.");
    return false; 
}
return true;
}


const resetBtn = document.getElementById('reset');
if(resetBtn){
resetBtn.addEventListener("reset", reset);
}
const reset = () => {
    document.getElementById('form').reset();
    document.getElementById('loadedImage').innerHTML = ''; // Clear any uploaded image
}

const courses= document.getElementById('courses');
const courseButton = document.getElementById("courseButton");
const courseInput = document.getElementById("courseInput");
let check = 0;
courses.addEventListener("click", addCourseField);
function addCourseField() {
    const coursesList = document.getElementById("coursesList");
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.class= "course";
    newInput.required = true;

    const dltButton = document.createElement("button");
    dltButton.type = "button";
    dltButton.textContent = "Delete";
    dltButton.onclick = function () {
        coursesList.removeChild(newInput);
        coursesList.removeChild(dltButton);
    };

    coursesList.appendChild(newInput);
    coursesList.appendChild(dltButton);
}

const image = document.getElementById("introImage");
function submitForm() {
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('Mascot').value;
    const caption = document.getElementById('caption').value;
    const personalBackground = document.getElementById('personal_b').value;
    const professionalBackground = document.getElementById('professional_b').value;
    const academicBackground = document.getElementById('academic_b').value;
    const webBackground = document.getElementById('web_b').value;
    const platform = document.getElementById('platform').value;
    const funny = document.getElementById('funny').value;
    const anything = document.getElementById('anything').value;
    const courses = Array.from(document.getElementsByClassName("course"))
                     .map(course => course.value);
    let imageLoad = image.files[0];
    const imageURL = URL.createObjectURL(imageLoad);
    let text = "<img src=\"" + imageURL + "\" >";
    
    const result = document.getElementById("formResult");
    
    result.innerHTML = ` 
    <h2>Introduction</h2>
    <h2> ${name} || ${mascot}</h2>
    <figure>
        ${text}
        <figcaption>${caption}</figcaption>
    </figure>
        <ol>
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
            <li><b>Funny/Interesting Item to Remember me by:</b> ${funny}</li> 
            <li><b>I'd also like to Share:</b> ${anything}</li>
        </ol>
        <a href="byo_intro.html">Refresh Form Click Here</a>
`;
const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(result); 
}