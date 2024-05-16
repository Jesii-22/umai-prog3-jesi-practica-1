import axios from "axios";

const cardGrid = [{
    title:'Maybelline Lash Sensational',
    description: 'Pestañas de larga duracion',
    image:'/imagenes/rimmel.png'
},

{
    title:'Maybelline Vinyl',
    description: 'Labial 18hs',
    image:'/imagenes/labial.png'
},

{
    title:'Maybelline The Blushed Nudes',
    description: 'Sombras color nude',
    image:'/imagenes/sombras.png'
},
{
    title:'Maybelline Fit Me',
    description: 'Corrector de larga duracion',
    image:'/imagenes/corrector.png'
}

];
const hanleGetData = async () => {
    try {
        const response = await axios.get(
            "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=The+Strokes&api_key=d659cc02b91f8569a8d3a3e95091db43&format=json"
        );

        const data = response.data.topalbums.album;
    } catch (error){
        console.log("El error es", error);
    }
}

export default cardGrid