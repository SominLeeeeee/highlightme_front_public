import dotenv from "dotenv";
import path from "path";

// Set the NODE_ENV to 'development' by default
let dotenvResult;
if (process.env.NODE_ENV === "prod") {
  dotenvResult = dotenv.config({
    path: path.join(__dirname, "../../env/.prod.env"),
  });
} else {
  dotenvResult = dotenv.config({
    path: path.join(__dirname, "../../env/.dev.env"),
  });
}
if (dotenvResult.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  url: process.env.URL,
  oauthGoogleClientId: process.env.OAUTH_GOOGLE_CLIENT_ID,
};
