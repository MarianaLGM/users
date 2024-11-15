

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


        const nuevosDatos={
          Age: age,//hacer referencia a la funcion random
          img: {
            // imagen:URL="assets/img.jpeg", 
          }
        } 
          console.log ("estos son los datos nuevos", nuevosDatos)
          listaActualizada=(listaUsuarios,nuevosDatos)
          console.log ("La lista actualizada es ", listaActualizada)

            //const nuevosUsuarios = Object.assign(contenedorUsuarios, nuevosDatos);
        
            //console.log ("los nuevos usuarios serían: ", nuevosUsuarios)
        
      })
    });

  //numero aleatorio para la edad de los usuarios: 
    let min = 25;
    let max = 40;

    const age = Math.floor(Math.random()*(max - min)+min);

    console.log("la edad aleatoria es: ", age);





  



