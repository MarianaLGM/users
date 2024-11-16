

/*
- Obtiene datos simulados de usuarios desde la API JSONPlaceholder `https://jsonplaceholder.typicode.com/users`.
    - Agrega una edad aleatoria a cada usuario.
    - Cada usuario tendrá una imagen asociada por `ID` (están en la carpeta assets/img) son extensión `.jpeg`  
    - Muestra detalles específicos de cada usuario en la lista en el DOM: name, age, username, img, phone, email, company, address
    - address tendrá estos datos como valor: usuario.address.street, usuario.address.suite, usuario.address.city
    */
/*
Aprovecha para usar:
- Destructuring
- spread operator. Crea un nuevo array con el objeto y con los nuevos datos a añadir (age, img, address con los nuevos datos)
- Modifica el archivo `styles.css` para cambiar estilos.
- Ajusta el archivo `script.js` para mostrar diferentes detalles de usuarios según tus necesidades.
*/


//3. todos los datos  irán <ul id="listaUsuarios"></ul> utilizaré getelementbyid
//4. dentro de esa lista crearé la img  añadir foto que ya tengo en mi carpeta y va asociada al id

/*
"id": 9,
    "name": "Glenna Reichert",
    AGE añadir
    "username": "Delphine",
    IMG añadir
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
    },
    "phone": "(775)976-6794 x41206",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
*/
 //todo tiene que pasar dentro del fetch!!!!!!!!!!!!!!!!!!!!!

    const listaUsuarios= document.getElementById ("listaUsuarios");//ul html
    fetch ("https://jsonplaceholder.typicode.com/users")
      .then ((response)=>{
        if(!response.ok){
            throw new Error ("No se puede cargar info")
        }
        return response.json ()
      })
      .then (function (users){ 
        console.log("users", users)

    users.forEach((elements) => {// me traigo los datos que quiero mostrar de cada usuario a una nueva variable (li):
        const contenedorUsuarios =document.createElement("li")//creo un li para meter toda la info de los usuarios menos dirección y compañia que van en otro contenedor
        contenedorUsuarios.classList.add ("nuevoli")
        contenedorUsuarios.innerHTML = `
          <img ${elements.img}>
          <h3> Nombre: ${elements.name}</3>
          <h3> Edad: ${elements.age}</3>
          <h3> Username: ${elements.username}</3>
          <h3> Teléfono: ${elements.phone}</3>
          <h3> Email: ${elements.email}</3>
          <h3>Compañía: ${elements.company.name}</3>
          <h3>Dirección: ${elements.address.street}, ${elements.address.suite}, ${elements.address.city}</3>          
        `;
        listaUsuarios.appendChild (contenedorUsuarios);

        console.log("quiero ver los datos del contenedor usuarios", contenedorUsuarios)

        //HASTA AQUÍ FUNCIONA TDO PERFECTAMENTE REVISAR A PARTIR DE AQUI NO!:

        //numero aleatorio para la edad de los usuarios: 
        let min = 25;
        let max = 40;
    
        const age = Math.floor(Math.random()*(max - min)+min);
    
        console.log("la edad aleatoria es: ", age);


        const nuevosDatos={
          Age: age[1],//hace referencia a la funcion random
              
        } 
          //console.log ("estos son los datos nuevos", nuevosDatos)

          listaActualizada=(users,nuevosDatos)

          //console.log ("La lista actualizada es ", listaActualizada)

          const nuevosUsuarios = Object.assign(users, nuevosDatos);
        
          console.log ("los nuevos usuarios serían: ", nuevosUsuarios)
        
      })
    });

    /*Es decir, el primer usuario tiene un id =1 y en la carpeta de assets/img la primera imagen es 1.jpeg
    Tienes que conseguir que cada imagen se asocie con el id.
    Tienes que hacer un bucle donde le digas que el user va a tener al imagen de assets/img, 
    al ser un bucle el primer usuario estará relacionado con la primera imagen y así sucesivamente*/

    /*dentro del bucle

puedes generar en una variable cada src de la imagen.
const imgSrc = ....
y después dentro del innerHTML usar ese src que se ha generado.
img src = imgSrc  alt = ....*/
   
const imagenSrc=("1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg")
/*
for (let i=0; i<users.length; i++){
  if(id=1){
    return (src="1.jpeg")
  }else if (id=2){
    console.log (src="2.jpeg")
  }
}

*/





