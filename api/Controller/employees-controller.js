/** @format */

import fetch from "node-fetch";

export const get_employees = async (req, res) => {
 try {
  await fetch("https://api.1337co.de/v3/employees", {
   method: "GET",
   headers: {
    Authorization: process.env.API_TOKEN,
   },
  })
   .then((res) => res.json())
   .then((employees) => {
    return res.json({
     success: true,
     message: "ok",
     data: employees,
    });
   });
 } catch (err) {
  return res.json({
   success: false,
   message: "not ok",
   data: null,
  });
 }
};
