const registrationLetter = (name, mail) => `
<div style="color: black; background: transparent; border: 1px solid black; width: 100%; max-width: 600px; height: -webkit-fill-available;
font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Noto Sans,Liberation Sans,
Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji ;
">
    <table style="width: -webkit-fill-available; height: -webkit-fill-available; margin: 0; padding: 0; text-align: center;">
        <tr style="background: transparent; height: 50px">
            <td style="color: inherit; font-size: 42px"> UniJS </td>
        </tr>
        <tr style="background: transparent; height: 200px">
            <td style="color: inherit; font-size: 28px">
                Hello ${name},<br />
                Your registration is done!<br />
                Now you have access to any services
            </td>
        </tr>
        <tr style="height: 250px">
            <td style="font-size: 26px;
            align-items: center">
                <table style="width: -webkit-fill-available; height: -webkit-fill-available; ">
                    <tr> <td> Have a nice day!! </td> </tr>
                    <tr> <td> <span> Your mail: ${mail} </span> </td> </tr>
                </table>
            </td>
        </tr>
        <tr> 
            <td> 
                <div style="width: 200px; height: 50px; margin-left: 34%; background: #0064f8; text-align: center;
                 margin-bottom: 20px;position: absolute; left: 50%; transform: translateX(-50%);">
                    <a href="https://unijs.ru/" style="text-decoration: none !important;
                        color: white !important; font-size: 32px;
                    ">
                        to UniJS
                    </a>
                </div>
            </td>
        </tr>
        <tr style="width: -webkit-fill-available; height: -webkit-fill-available; padding: 0; margin: 0">
            <td style="width: -webkit-fill-available; height: -webkit-fill-available; background: black;
            color: #3f3f3f;">
                for any questions: support@unijs.ru<br />
                main page: https://unijs.ru
            </td>
        </tr>
    </table>
</div>
`;

const verificationLetter = (name, code) => `
<div style="color: black; background: transparent; border: 1px solid black; width: 100%; max-width: 600px; height: -webkit-fill-available;
font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Noto Sans,Liberation Sans,
Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji ;
">
    <table style="width: -webkit-fill-available; height: -webkit-fill-available; margin: 0; padding: 0; text-align: center;">
        <tr style="background: transparent; height: 50px">
            <td style="color: inherit; font-size: 42px"> UniJS </td>
        </tr>
        <tr style="background: transparent; height: 200px">
            <td style="color: inherit; font-size: 28px">
                Hello ${name},<br />
                You need to verify your email!<br />
                After that, we will register you on our platform!
            </td>
        </tr>
        <tr style="height: 250px">
            <td style="font-size: 26px;
            align-items: center">
                <table style="width: -webkit-fill-available; height: -webkit-fill-available; ">
                    <tr> <td> Your verification code: </td> </tr>
                    <tr> <td> <span> Your code: ${code} </span> </td> </tr>
                </table>
            </td>
        </tr>
        <tr> 
            <td> 
                <div style="width: 200px; height: 50px; margin-left: 34%; background: #0064f8; text-align: center;
                 margin-bottom: 20px;position: absolute; left: 50%; transform: translateX(-50%);">
                    <a href="https://unijs.ru/" style="text-decoration: none !important;
                        color: white !important; font-size: 32px;
                    ">
                        To main page
                    </a>
                </div>
            </td>
        </tr>
        <tr style="width: -webkit-fill-available; height: -webkit-fill-available; padding: 0; margin: 0">
            <td style="width: -webkit-fill-available; height: -webkit-fill-available; background: black;
            color: #3f3f3f;">
                for any questions: support@unijs.ru<br />
                main page: https://unijs.ru
            </td>
        </tr>
    </table>
</div>
`;

module.exports = {
    registrationLetter,
    verificationLetter
}