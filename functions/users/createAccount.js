import * as functions from "firebase-functions";
import { createAuthUser } from "./createAuthUser";
import { createTemporaryUser } from "./createTemporaryUser";

// should be called like https://us-central1-restaurant-reservations-144e5.cloudfunctions.net/createAccount
// as post request with body
export const createAccount = functions.https.onRequest(async (req, res) => {
  const { newUserInfo } = req.body;

  const authUid = await createAuthUser(newUserInfo);
  await createTemporaryUser(authUid, newUserInfo);

  return res.status(200).send("Success!");
});
