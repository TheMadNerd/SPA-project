import React from "react";

const news = [
    {
        id: 1,
        title: "Czym jest teoria strun?",
        author: "Jan Nowak",
        text: "1111Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?",
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego?",
        author: "Stachu Jones",
        text: "2222Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?",
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia",
        author: "Andrzej Duda",
        text: "3333Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?",
    },
]



const Start = () => {
    const info = news.map(bruh => (<div id={bruh.id}>
            <h3>{bruh.title}</h3>
            <p>{bruh.author}</p>
            <span>{bruh.text}</span>  
        </div>))
    return(
        <div className="home">
            {info}
        </div>
    )
}

export default Start