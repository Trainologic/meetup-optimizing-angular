import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import {registerApi} from './api';
import * as path from 'path';
import config from "./config";

const app = express();

app.use(cors());

app.use(bodyParser.json());

if(config.env == 'prod') {
  const publicPath = path.join(__dirname, "../public");
  console.log("Register static middleware on path " + publicPath);
  app.use(express.static(publicPath));
}

registerApi(app);

app.listen(config.port, function() {
  console.log("Server is running on port " + config.port);
});
