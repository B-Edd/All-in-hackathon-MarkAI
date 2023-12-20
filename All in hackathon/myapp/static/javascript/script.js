document.addEventListener("DOMContentLoaded", function () {
    const words = document.getElementById("text-info-words");
    const characters = document.getElementById("text-info-characters");
    const sentences = document.getElementById("text-info-sentences");
    let value_h = document.getElementById("textbox");


    function updateText() {
        let value = value_h.value;
        let length = value.length;
        let words_length = value.trim().split(/\s+/).length;
        let sentence_length = value.trim().split(/[.!?](\s|$)/).length;

        const sentenceArray = value.split(/[.!?](\s|$)/);
        const nonEmptySentences = sentenceArray.filter(sentence => sentence.trim() !== '');
        const sentences_length = nonEmptySentences.length;

        words.innerHTML = "Words: " + words_length;
        characters.innerHTML = "Characters: " + length;
        sentences.innerHTML = "Setences: " + sentences_length;

    }
    setInterval(updateText, 100);
});


/*document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit").addEventListener("click", function () {
        const essayText = document.getElementById("textbox").value;

        // Make an API request to OpenAI
        fetch("https://api.openai.com/v1/engines/davinci/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer apieky"
            },
            body: JSON.stringify({
                prompt: "You are an AI teacher that grades students' essays and gives personalized feedback. You respond by giving a mark, then giving feedback. For example:\n\nA+ You did very well, however, you need to add more details and give more examples, like when you wrote: ... Instead, you could have written:...\n\nUser's Essay: ${essayText}\nAI Feedback:",
                max_tokens: 50
            })
        })
        .then(response => response.json())
        .then(data => {
            const feedback = data.choices[0].text;
            document.getElementById("feedback").textContent = feedback;
        })
        .catch(error => console.error(error));
    });
}); */