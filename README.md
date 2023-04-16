
# CareChains 
<h3> Store your medical records securely on blockchain </h3>
CareChains is a blockchain-based electronic health record (EHR) management system that allows patients  to manage and share their medical records securely and efficiently with healthcare providers. 
 
#### Track : Blockchain
#### Team Members :

- [Tushar Singh](https://github.com/tusharsgh)
- [Apoorwa Gupta](https://github.com/apoorwagupta)
- [Aaditya Kumar](https://github.com/asdfqwert2311)

#### Problem Statement:

Traditional medical record keeping systems are centralized and often fragmented across different healthcare providers, making it challenging for patients to access and share their medical history. This lack of accessibility can lead to delays in treatment, duplicate testing, and medical errors. Additionally, centralized systems are vulnerable to cyber-attacks and data breaches, compromising patient privacy and the security of their sensitive medical information.

Therefore, there is a need for a decentralized platform that allows patients to store and manage their medical history securely, while providing healthcare providers with easy access to accurate and up-to-date information. This platform should be designed with privacy and security in mind and should be easily accessible from any device or location. It should also allow for seamless sharing of medical information between healthcare providers, improving coordination and collaboration among the different stakeholders involved in patient care.

#### Methodology:

The platform is built on top of the Ethereum blockchain, which allows for the creation of decentralized applications using smart contracts. Smart contracts are self-executing agreements that are programmed to execute automatically when certain conditions are met. In the case of MedBlock, the smart contracts are used to manage access to medical records and ensure that only authorized parties can view and update them. This ensures that the records are available to authorized parties at all times and can be accessed from anywhere in the world.
The app is deployed on the google cloud platform : [link](https://chatdapps.as.r.appspot.com/)
#### Tech Stack
- Blockchain: 

  <b>Kardiachain &nbsp; - &nbsp; </b><img alt="Solidity" src="https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black"/>

- Frontend


  <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="web3js" src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white"/> <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/> <img alt="MUI" src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white"/> <img alt="MUI" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

- Server


  <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
  <b>&nbsp; Fast2SMS &nbsp;</b>

#### Description of the webpages and their functions in the CareChains application
- Home Page
The home page is the landing page of the web application. It provides an overview of the application and its key features, as well as a call-to-action button to log in and about pages. It features 3 types of login options: Hospital Login, Patient Login , and Admin Login. It also involves options to view any available records.
This  page also explains the purpose of the application and the value it provides to patients and healthcare providers, emphasizes the application's commitment to using blockchain technology to secure and manage medical records, provides a summary of the key functionalities of the application and provides a brief overview of the technology stack used to develope it.

- Log In Page

The log-in page is where existing users can log in and will be redirected to their dashboard page. 
After logging in, we will be directed to the dashboard.

- Dashboard Page
The dashboard page is the main page of the web application. It provides an overview of the user's medical records, including their personal information, medical history, medications, and the dates.
  1. The admin dashboard page: The admin dashboard page is typically reserved for authorized administrators of the application, such as the system administrator or healthcare providers who have been granted administrative privileges. The admin dashboard provides additional functionality and access to features that are not available to regular users such as:
      * User and hospital management: Admins can view and manage user and hospital accounts, such as adding or removing users and hospitals, resetting passwords, or updating user information.
      * Analytics and reporting: Admins can view analytics and reports on user activity, such as the number of logins, medical record updates, and record sharing. 
  2. The patient dashboard page: The patient dashboard page is designed to provide patients with a central location to manage their medical records and view their reports. 
  3. The Hospital dashboard page: The hospital dashboard allows hospitals to manage patient medical records. Providers can view patient records, update existing records, and add new records. It also contains info about the Medical Staff and Diagnosed Patients date-wise as well options to decline any new records.


Overall, the CareChains web application provides a user-friendly and secure platform for patients to manage and share their medical records with healthcare providers. With its intuitive interface and powerful features, CareChains empowers patients to take control of their health information and improve the quality of their care.







### Running the project locally

- Rename ```.env.sample``` files to ```.env```
  ( There are 2 .env.sample files (in root folder & in server folder)
  Enter your twilio & Infura credentials
  
- Install dependencies:
```
npm install && cd server && npm install
```

- Run server:
```
cd server && npm run dev
```

- Run react app:
```
npm start
```


