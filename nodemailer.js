import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "josueisacsalomonlanda@gmail.com",
      pass: "xvqj mjdj aoxh zwzg",
    },
  });
  

  let email = 'elmersosa2305@gmail.com';
  let asunto = 'CAMBIAR CONTRASEÑA DE CAMPUS VIRTUAL'
  let descripcionCorreo = 'Cambio de contraseña institucional';
  let verificationCode = 100;
  let url = 'https://www.youtube.com/watch?v=nLqi0oqB-HU&list=PLx8wDH_uKUAKIicLDu9ypzL96mhuoJdgU';
  transporter.verify().then(() => {
    console.log('Ready for send emails');
    
    // Intentando enviar el correo
    const DatosCorreo = {
        from: '"UNAH" <josueisacsalomonlanda@gmail.com>',
        to: email,
        subject: asunto,
        html: `
                  <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Título del Correo</title>
      <style>
          body { 
              font-family: Arial, sans-serif; 
              background-color: #f4f4f4; 
              margin: 0; 
          }
          .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background-color: #fff; 
              border-radius: 8px; 
              box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
              position: relative;
          }
          .header { 
              display: flex; 
              align-items: center; 
              justify-content: center; 
              position: relative; 
          }
          h1 { 
              color: #3498db; 
              font-size: 24px; 
              margin: 0; 
              text-align: center;
          }
          h2 { 
              color: #333; 
              text-align: center; 
              font-size: 18px; 
              margin-bottom: 20px; 
          }
          .code { 
              font-size: 36px; 
              font-weight: bold; 
              color: #e67e22; 
              text-align: center; 
              margin: 30px 0; 
              letter-spacing: 2px; 
          }
          p { 
              color: #666; 
              text-align: center; 
              font-size: 16px; 
              line-height: 1.5; 
          }
          .footer { 
              color: #999; 
              text-align: center; 
              font-size: 12px; 
              margin-top: 20px; 
          }
          @keyframes swing {
              0% { transform: rotate(5deg); }
              50% { transform: rotate(-5deg); }
              100% { transform: rotate(5deg); }
          }
          .rana {
              width: 80px;
              height: 80px;
              background: url('https://dircom.unah.edu.hn/dmsdocument/7509-unah-version-horizontal') no-repeat center center;
              background-size: contain;
              animation: swing 2s infinite ease-in-out;
              transform-origin: top center;
              align-self: flex-start;

              position: absolute;
              top: 43px;
              left: 9px;
          }
          .girasol {
              background: url('https://ik.imagekit.io/diancrochet/Fotos/GirasonGIF.gif') no-repeat center center;
              background-size: contain;
              position: absolute;
              z-index: 10;
          }
          .girasol1 {
              width: 40px;
              height: 100px;
              left: 10%;
              top: 77%;
              position: absolute;
              z-index: 10;
          }
          .girasol2 {
              width: 40px;
              height: 100px;
              left: 86%;
              top: 77%;
          }
          .girasol3 {
              width: 40px;
              height: 100px;
              left: 86%;
              top: 10%;
          }
          .girasol4 {
              width: 40px;
              height: 100px;
              left: 27%;
              top: 32%;
          }
          .girasol5 {
              width: 40px;
              height: 100px;
              left: 73%;
              top: 43%;
          }
      </style>
    </head>
    <body>
      <div class="container">
          <div class="header">
              <div class="rana"></div>
              <div>
                  <h1>UNIVERSIDAD NACIONAL AUTÓNOMA DE HONDURAS</h1>
                  <p style="font-size: 18px; color: #333; text-align: center;">${descripcionCorreo}</p>
                  <div style="text-align: center; margin: 30px 0;">
                      <p style="font-size: 16px; color: #666;">Url para reestrablecer tu contraseña:</p>
                      <p style="font-size: 14px; font-weight: bold; color: #e67e22; letter-spacing: 2px; text-shadow: 2px 2px 5px rgba(0,0,0,0.1);">${url}</p>
                      <p style="font-size: 16px; color: #666; text-align: center;">Recuerda no compartir este enlace con nadie.</p>
                      <p style="font-size: 16px; color: #666; text-align: center;">Si no solicitaste este enlace, por favor ignora este mensaje.</p>
                      <hr style="border: none; border-top: 1px solid #ddd;">
                      <p style="text-align: center; color: #999; font-size: 12px;">&copy; 2024 UNAH. Todos los derechos reservados.</p>
                  </div>
              </div>
          </div>
      </div>
    </body>
    </html>
    
              `,
      };
  
    transporter.sendMail(DatosCorreo, (error, info) => {
      if (error) {
        console.error("Error al enviar el correo:", error);
      } else {
        console.log("Correo enviado:", info.response);
      }
    });
  });
  
  