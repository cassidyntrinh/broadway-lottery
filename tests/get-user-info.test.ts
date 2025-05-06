import { getUserInfo } from "../src/get-user-info";
import { expect, test } from "@jest/globals";

test("Get user info from env", async () => {
  const env = {
    FIRST_NAME: "Cassidy",
    LAST_NAME: "Trinh",
    NUMBER_OF_TICKETS: "2",
    EMAIL: "misssmartypin@yahoo.com",
    DOB_MONTH: "8",
    DOB_DAY: "29",
    DOB_YEAR: "2001",
    ZIP: "11201",
    COUNTRY: "USA",
  };
  const result = getUserInfo(env);
  expect(result).toMatchInlineSnapshot(`
{
  "countryOfResidence": "USA",
  "dateOfBirth": {
    "day": "8",
    "month": "29",
    "year": "2001",
  },
  "email": "misssmartypin@yahoo.com",
  "firstName": "Cassidy",
  "lastName": "Trinh",
  "numberOfTickets": "2",
  "zip": "11201",
}
`);
});

test("Get user info from env - padded numbers", async () => {
  const env = {
    FIRST_NAME: "Cassidy",
    LAST_NAME: "Trinh",
    NUMBER_OF_TICKETS: "2",
    EMAIL: "misssmartypin@yahoo.com",
    DOB_MONTH: "08",
    DOB_DAY: "29",
    DOB_YEAR: "2001",
    ZIP: "11201",
    COUNTRY: "USA",
  };
  const result = getUserInfo(env);
  expect(result).toMatchInlineSnapshot(`
{
  "countryOfResidence": "USA",
  "dateOfBirth": {
    "day": "8",
    "month": "1=29",
    "year": "2001",
  },
  "email": "misssmartypin@yahoo.com",
  "firstName": "Cassidy",
  "lastName": "Trinh",
  "numberOfTickets": "2",
  "zip": "11201",
}
`);
});
