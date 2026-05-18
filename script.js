<<<<<<< HEAD
// =====================================
// CLOUDINARY
// =====================================

const CLOUD_NAME =
"dlqzpx2wa";

const UPLOAD_PRESET =
"etica_upload";



// =====================================
// GUARDAR TEXTO ONLINE
// =====================================

async function saveText(textareaId){

const text =
document.getElementById(textareaId).value;



await setDoc(

doc(db, "texts", textareaId),

{
content:text
}

);



alert("Información guardada online");

}



// =====================================
// GUARDAR NOMBRE ONLINE
// =====================================

async function saveName(inputId){

const name =
document.getElementById(inputId).value;



await setDoc(

doc(db, "names", inputId),

{
content:name
}

);



alert("Nombre guardado online");

}



// =====================================
// CARGAR TEXTO
// =====================================

async function loadText(textareaId){

const docRef =
doc(db, "texts", textareaId);



const docSnap =
await getDoc(docRef);



if(docSnap.exists()){

document
.getElementById(textareaId)
.value =
docSnap.data().content;

}

}



// =====================================
// CARGAR NOMBRE
// =====================================

async function loadName(inputId){

const docRef =
doc(db, "names", inputId);



const docSnap =
await getDoc(docRef);



if(docSnap.exists()){

document
.getElementById(inputId)
.value =
docSnap.data().content;

}

}



// =====================================
// CARGAR TITULOS
// =====================================

async function loadStudentTitle(
nameId,
titleId
){

const docRef =
doc(db, "names", nameId);



const docSnap =
await getDoc(docRef);



if(docSnap.exists()){

const data =
docSnap.data();



const title =
document.getElementById(titleId);



if(title){

title.innerText =
data.content;

}

}

}



// =====================================
// ONLOAD
// =====================================

window.onload = async function(){



// TEXTOS

const textareas =
document.querySelectorAll("textarea");


for(const textarea of textareas){

await loadText(textarea.id);

}



// NOMBRES

const nameInputs =
document.querySelectorAll(
".student-name-input"
);


for(const input of nameInputs){

await loadName(input.id);

}



// TITULOS

await loadStudentTitle(
"name1",
"studentTitle1"
);

await loadStudentTitle(
"name2",
"studentTitle2"
);

await loadStudentTitle(
"name3",
"studentTitle3"
);

}



// =====================================
// SUBIR IMAGEN CLOUDINARY
// =====================================

async function uploadImage(input, previewId){

const preview =
document.getElementById(previewId);



const file =
input.files[0];



if(!file){

return;

}



const formData =
new FormData();

formData.append(
"file",
file
);

formData.append(
"upload_preset",
UPLOAD_PRESET
);



try{

const response =
await fetch(

`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,

{
method:"POST",
body:formData
}

);



const data =
await response.json();



const imageUrl =
data.secure_url;



const container =
document.createElement("div");

container.classList.add(
"image-container"
);



const img =
document.createElement("img");

img.src = imageUrl;

img.classList.add(
"preview-image"
);



// ABRIR GRANDE

img.onclick = function(){

document
.getElementById("modal")
.style.display = "flex";


document
.getElementById("modal-img")
.src = imageUrl;

};



// ELIMINAR

const deleteBtn =
document.createElement("button");

deleteBtn.innerText =
"Eliminar";

deleteBtn.classList.add(
"delete-btn"
);



deleteBtn.onclick =
function(){

container.remove();

};



container.appendChild(img);

container.appendChild(deleteBtn);

preview.appendChild(container);



alert(
"Imagen subida online"
);

}catch(error){

console.error(error);

alert(
"Error al subir imagen"
);

}

}



// =====================================
// CERRAR MODAL
// =====================================

function closeModal(){

document
.getElementById("modal")
.style.display = "none";

=======
// =====================================
// CLOUDINARY
// =====================================

const CLOUD_NAME =
"dlqzpx2wa";

const UPLOAD_PRESET =
"etica_upload";



// =====================================
// GUARDAR TEXTO
// =====================================

function saveText(textareaId){

const text =
document.getElementById(textareaId).value;

localStorage.setItem(textareaId, text);

alert("Información guardada");

}



// =====================================
// GUARDAR NOMBRE
// =====================================

function saveName(inputId){

const name =
document.getElementById(inputId).value;

localStorage.setItem(inputId, name);

alert("Nombre guardado");

}



// =====================================
// CARGAR DATOS
// =====================================

window.onload = function(){


/* =========================
TEXTAREAS
========================= */

const textareas =
document.querySelectorAll("textarea");


textareas.forEach(textarea => {

const savedText =
localStorage.getItem(textarea.id);

if(savedText){

textarea.value = savedText;

}

});



/* =========================
INPUT NOMBRES
========================= */

const nameInputs =
document.querySelectorAll(".student-name-input");


nameInputs.forEach(input => {

const savedName =
localStorage.getItem(input.id);

if(savedName){

input.value = savedName;

}

});



/* =========================
TÍTULOS DINÁMICOS
========================= */

const title1 =
document.getElementById("studentTitle1");

if(title1){

const savedName1 =
localStorage.getItem("name1");

if(savedName1){

title1.innerText = savedName1;

}

}



const title2 =
document.getElementById("studentTitle2");

if(title2){

const savedName2 =
localStorage.getItem("name2");

if(savedName2){

title2.innerText = savedName2;

}

}



const title3 =
document.getElementById("studentTitle3");

if(title3){

const savedName3 =
localStorage.getItem("name3");

if(savedName3){

title3.innerText = savedName3;

}

}

}



// =====================================
// SUBIR IMAGEN A CLOUDINARY
// =====================================

async function uploadImage(input, previewId){

const preview =
document.getElementById(previewId);



const file =
input.files[0];



if(!file){

return;

}



/* =========================
FORM DATA
========================= */

const formData =
new FormData();

formData.append(
"file",
file
);

formData.append(
"upload_preset",
UPLOAD_PRESET
);



try{

/* =========================
SUBIR A CLOUDINARY
========================= */

const response =
await fetch(

`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,

{
method:"POST",
body:formData
}

);



const data =
await response.json();



/* =========================
URL IMAGEN
========================= */

const imageUrl =
data.secure_url;



/* =========================
CREAR CONTENEDOR
========================= */

const container =
document.createElement("div");

container.classList.add(
"image-container"
);



/* =========================
CREAR IMAGEN
========================= */

const img =
document.createElement("img");

img.src = imageUrl;

img.classList.add(
"preview-image"
);



/* =========================
ABRIR GRANDE
========================= */

img.onclick = function(){

document
.getElementById("modal")
.style.display = "flex";


document
.getElementById("modal-img")
.src = imageUrl;

};



/* =========================
BOTÓN ELIMINAR
========================= */

const deleteBtn =
document.createElement("button");

deleteBtn.innerText =
"Eliminar";

deleteBtn.classList.add(
"delete-btn"
);



deleteBtn.onclick =
function(){

container.remove();

};



/* =========================
AGREGAR ELEMENTOS
========================= */

container.appendChild(img);

container.appendChild(deleteBtn);

preview.appendChild(container);



alert(
"Imagen subida correctamente"
);

}catch(error){

console.error(error);

alert(
"Error al subir imagen"
);

}

}



// =====================================
// CERRAR MODAL
// =====================================

function closeModal(){

document
.getElementById("modal")
.style.display = "none";

>>>>>>> 9ac97fa76028464a1364dc9eef6f5fed2f99632e
}