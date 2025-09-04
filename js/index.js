const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data)
    );
};

const displayLesson = (lessons) => {
    
        // get container 
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = "";
    // get into every  lesson 
    for(let lesson of lessons){
        console.log(lesson);
        
        // create element 
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
                  <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book"></i>Lesson - ${lesson.level_no} </button>
        `;  
     
         // append 
         levelContainer.append(btnDiv);
    } 
   

}
loadLesson();