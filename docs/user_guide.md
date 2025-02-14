install from nodejs from https://nodejs.org/en

Open PowerShell as administrator and put in
openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365 -subj "/CN=localhost"

ADDING AUTHENTICATION

Define Your Authentication Method:

{
  "type": "auth",
  "username": "brawndon",
  "password": "password123"
}
