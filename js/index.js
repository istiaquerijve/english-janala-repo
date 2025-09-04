const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data)
    );
};
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) =>  displayLevelWord(data.data)
    );
}
const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container")
    // wordContainer.innerHTML = "";
    
    words.forEach((word) => {
        console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `

        `;
        wordContainer.append(card);
    })
}

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
                  <button onclick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book"></i>Lesson - ${lesson.level_no} </button>
        `;  
     
         // append 
         levelContainer.append(btnDiv);
    } 
   

}
loadLesson();