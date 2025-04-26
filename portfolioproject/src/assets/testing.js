async function getData() {
    const url = "http://localhost:5173/picturedict.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      var json = await response.json();
      
      json = JSON.parse(JSON.stringify(json));
      console.log(json);
      return json;
    } catch (error) {
      console.error(`Error fetching JSON data ${error}`);
    }
    
  }

info = await getData();
console.log(info["name"]);
