const videos = [
    {
        video: "https://www.youtube.com/embed/0NAKpzOfVoY",
        tutulo:"Alcolirykoz - La Típica (Prod. El Arkeólogo)",
        usuario:"Alcolirykoz",
        visitas:"1.0 M de vistas - 4 ago. 2020",
    },
    {
        video: "https://www.youtube.com/embed/LqoVJPFAbf4",
        tutulo:"AlcolirykoZ - Todo lo Bueno Tarda (Prod. El Arkeólogo)",
        usuario:"Alcolirykoz",
        visitas:"1.4 M de vistas - 4 ago. 2020",
    },
    {
        video: "https://www.youtube.com/embed/nmFdyBUAsfQ",
        tutulo:"AlcolirykoZ - Tararea (video oficial) Prod. El Arkeólogo",
        usuario:"Alcolirykoz",
        visitas:"1.2 M de vistas - 4 ago. 2021",
    },
    {
        video: "https://www.youtube.com/embed/MRyZ6faVKWQ",
        tutulo:"Alcolirykoz - Anestesia local (Episodio 2) Prod. El Arkeólogo",
        usuario:"Alcolirykoz",
        visitas:"1.5 M de vistas - 4 ago. 2021",
    }
];

cargarVideos();

function cargarVideos(){
   const bloque1 = document.getElementById("bloque1");
   const bloque2 = document.getElementById("bloque2");
   const bloque3 = document.getElementById("bloque3");


    videos.forEach(elemento => {
        //crear contenedor padre
        const contenedor = document.createElement("div");
        contenedor.classList.add("video-tube-bloque1-item");


        // crear otro elemneto 
        const contenedorVideo=document.createElement("div");
        contenedorVideo.classList.add("video-tube-video1");
        contenedorVideo.classList.add("layout");
        //crear elemneto incrustrado de video
        const video=document.createElement("iframe");
        video.setAttribute("src", elemento.video);

        //añadir elemento video dentro de su contenedor
        contenedorVideo.appendChild(video);
        contenedor.appendChild(contenedorVideo);



       // creacion de contenedor de video
        const contenedorInformacion = document.createElement("div");
        contenedorInformacion.classList.add("video-tube-informacion");
        //otro contenedor
        const contenedorItem = document.createElement("div");
        contenedorItem.classList.add("video-tube-informacion-item");
        
        const contenedorMinautura = document.createElement("div");
        contenedorMinautura.classList.add("video-tube-miniatura");

        const miniatura = document.createElement("div");
        miniatura.classList.add("video-tube-icon2");

        contenedorMinautura.appendChild(miniatura);
        contenedorItem.appendChild(contenedorMinautura);

        const espacio = document.createElement("div");
        espacio.classList.add("video-tube-informacion-spacer");
        contenedorItem.appendChild(espacio);

        
        const contenedorDescripcion= document.createElement("div");
        contenedorMinautura.classList.add("video-tube-informacion-item1");

        const informacion= document.createElement("div");
        informacion.classList.add("video-tube-informacion1");
        informacion.classList.add("layout");

        //creacion de elemento de titulo
        const titulo = document.createElement("h5");
        titulo.classList.add("video-tube-titulo");
        titulo.classList.add("layout");
        titulo.innerHTML = elemento.tutulo;
        informacion.appendChild(titulo);
        //descrpcion del video
        const descripcion= document.createElement("div");
        descripcion.classList.add("video-tube-descripcion");
        descripcion.classList.add("layout");
        //creacion del nombre de usuario
        const usuario = document.createElement("div");
        usuario.classList.add("video-tube-nombre");
        usuario.classList.add("layout");
        usuario.innerHTML = elemento.usuario;
        //descrpcion de video vistas y artista
        const visitas = document.createElement("div");
        visitas.classList.add("video-tube-vistas");
        visitas.classList.add("layout");
        visitas.innerHTML = elemento.visitas;
        // añadiento elemento a sus contenedores padre
        descripcion.appendChild(usuario);
        descripcion.appendChild(visitas);
        contenedorDescripcion.appendChild(informacion);
        contenedorDescripcion.appendChild(descripcion);
        contenedorInformacion.appendChild(contenedorDescripcion);
        contenedorVideo.appendChild(contenedorItem);
        contenedorVideo.appendChild(contenedorInformacion);

        bloque1.appendChild(contenedor);
        

        
    });

    const nuevosVideos=videos.filter(element => element.visitas.endsWith("2021"));
    console.log(nuevosVideos);

    const video =videos.find(element => element.visitas.endsWith("2021"));
    console.log(video);

    localStorage.setItem("titulo-video", "Guardado en memoria");
    const memoria = localStorage.getItem("titulo-video");
    console.log(memoria);
}