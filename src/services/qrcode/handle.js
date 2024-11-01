import qrCode from "qrcode-terminal";
import chalk from "chalk";

export async function handle(err,result){
    try {
        const isSmall = result.type === 2;
        qrCode.generate(result.link,{small:isSmall},(qrcode)=>{
            console.log(chalk.green("Qr Code gerado com Sucesso \n\n" + qrcode));
        });
        
    } catch (error) {
        if(error){
            console.log("erro na aplicação");
            return;
        };

       
    }
}