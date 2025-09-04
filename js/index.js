const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data)
    );
};

const removeActive = () => {
    const lessonButton = document.querySelectorAll(".lesson-btn")
    lessonButton.forEach((btn) => btn.classList.remove("active"))
}

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        removeActive();
        const clickBtn = document.getElementById(`lesson-btn-${id}`)
        clickBtn.classList.add("active")
         displayLevelWord(data.data)
    }
    );
}
const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML = "";

    if(words.length == 0){
    wordContainer.innerHTML = `
        <img class="mx-auto col-span-full" src="./assets/alert-error.png" alt="">
        <div class="text-center col-span-full py-10 space-y-6 rounded-lg">
        <p class="text-xl font-medium text-gray-400 font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="font-bold text-4xl font-bangla">নেক্সট Lesson এ যান</h2>
      </div>
    
    `;
        
        return;
    }
    
    words.forEach((word) => {
        console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 ps-5 space-y-4">
        <h2 class="font-bold text-2xl">${word.word ? word.word : "no word"}</h2>
        <p class="font-semibold">Meaning /Pronounciation</p>
        <h1 class="font-bangla font-semibold text-2xl text-gray-600">${word.meaning ? word.meaning : "no meaning"} / ${word.pronunciation ? word.pronunciation : "no pronunciation"}</h1>
        <div class="flex justify-between items-center">
          <button class="btn bg-sky-100 hover:bg-sky-400"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn bg-sky-100 hover:bg-sky-400 mr-5"><i class="fa-solid fa-volume-high"></i></button>
        </div>
      </div>
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
                  <button id="lesson-btn-${lesson.level_no}" onclick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book"></i>Lesson - ${lesson.level_no} </button>
        `;  
     
         // append 
         levelContainer.append(btnDiv);
    } 
   

}
loadLesson();