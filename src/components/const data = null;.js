const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs");
xhr.setRequestHeader("X-RapidAPI-Key", "0778547cd7msh1870d02b69797c7p1770bejsn220be3aa6bbc");
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");

xhr.send(data);