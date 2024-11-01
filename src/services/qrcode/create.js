import prompt from "prompt";
import { promptQrCode } from "../../prompts/prompt-qrcode.js";
import { handle } from "./handle.js";

export async function createQrCode(){
        prompt.get(promptQrCode,handle)
        prompt.start();
}