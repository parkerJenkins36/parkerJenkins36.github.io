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
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('Mascot').value;
    const image = document.getElementById('image').files[0]; // Get the file object
    const caption = document.getElementById('imageCaption').value;
    const personalBackground = document.getElementById('personal_b').value;
    const professionalBackground = document.getElementById('professional_b').value;
    const academicBackground = document.getElementById('academic_b').value;
    const webBackground = document.getElementById('web_b').value;
    const platform = document.getElementById('platform').value;
    const funny = document.getElementById('funny').value;
    const anything = document.getElementById('anything').value;
    const coursesInputs = document.querySelectorAll('.course');
    const courses = [];
    coursesInputs.forEach(input => {
        courses.push(input.value);
    });
    const result = ` <main>
    <h2>Introduction</h2>
    <h2> ${name} || ${mascot}</h2>
    <figure>
    <img src="${URL.createObjectURL(image)}" alt="${image.name}">
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
</main>
`;
    document.querySelector('main').innerHTML = result;
});