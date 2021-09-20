// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs-extra'
import path from 'path'

export default function helloAPI(req, res) {
  switch (req.method){
    case "GET":
      res.status(200).json( fs.readJsonSync(path.join(__dirname, '../../../../database/settings.json')) )
      break;
    case "POST":
      const settings = req.body
      console.log(settings)
      fs.writeJsonSync(path.join(__dirname, '../../../../database/settings.json'), settings, { spaces: '  ', EOL: '\n' })
      res.status(200).json( "success" )
      break;
  }
}
