import { NextApiRequest, NextApiResponse } from "next";
import {google} from "googleapis"

Data = {
    name,
    tanggalLahir,
    beratBadan,
    date
}

export default async function handler(req, res, next) {
    if(req.method !== 'POST'){
        return res.status(405).send({message:'only POST requests are allowed'})
    }

    const { name, tanggalLahir, beratBadan, date } = req.body;
    console.log("masuk BE submit")
    try{

        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
            },
            scope: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })

        const data = google.sheets({
            auth,
            version: 'v4'
        })

        const response = await data.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:D1',
            valueInputOption: 'USER_ENTERED',
            requestBody:{
                values: [
                    [body.name, body.tanggalLahir, body.beratBadan, body.date]
                ]
            }
        })

        return res.status(200).json({
            data: response.data
        })

    }catch(e){
        console.log("Tidak bisa masuk TRY")
        console.log(e)
        return res.status(500).send({message: e.message})
    }
}