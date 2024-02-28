function loadImage() {
    var image = document.getElementById('introImage').files[0]; 
    const imageUrl = URL.createObjectURL(image); 
    var text = "<img src=\"" + imageUrl + "\"+>";
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

const attend = document.getElementById('attending');
if(attend){
attend.addEventListener('click', addCourseField);
}
function addCourseField() {
    const box = document.getElementById('courseInput');
   
    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.name = 'courses';
    courseInput.placeholder = 'Name of your course';
    courseInput.required = true;

    const dltButton = document.createElement('button');
    dltButton.type = 'button';
    dltButton.textContent = 'Delete';
    dltButton.onclick = function() {//delete function
        box.removeChild(courseInput); 
        box.removeChild(dltButton); 
    };
    box.appendChild(courseInput);
    box.appendChild(dltButton);
}
document.getElementById('form').addEventListener('submit', function(event) {
    if(checkForm()){
    event.preventDefault();

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
    let image = document.getElementById('introImage');
    const imageUrl = URL.createObjectURL(image);
    const courseInputs = Array.from(document.getElementsByName('courses[]')).map(input => input.value).trim();


    const newForm = document.createElement('div');
        newForm.innerHTML =`
        <h1>Submitted Page:</h1>
        <h2>  ${name} || ${mascot}</h2>
        <img src= "${imageUrl}" alt="Uploaded Image">
        <b><strong>Caption:</strong> ${caption}</b>
        <p><strong>Personal Background: </strong> ${personalBackground}</p>
        <p><strong>Professional Background: </strong> ${professionalBackground}</p>
        <p><strong>Academic Background: </strong> ${academicBackground}</p>
        <p><strong>Web Background: </strong> ${webBackground}</p>
        <p><strong>Platform: </strong> ${platform}</p>
        <p><strong>Funny/Memorable Thought: </strong> ${funny}</p>
        <p><strong>Anything Else: </strong> ${anything}</p>
        <p><strong>Courses Taking:</strong></p>
        <ul>
         ${courseInputs.map(course => `<li>${course}</li>`).join('')}
        </ul>
        <button type="reset" style="background-color: darkblue; color: rgb(255, 255, 255);" id="reset" value="reset">Refresh</button>
    `;
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(newForm); 
} 
});