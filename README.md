🚀 Kube Credential – Full Stack Assignment

📌 Project Overview

This project is a full-stack credential issuance and verification system built using modern web technologies.

**🎨 Frontend**
        React
        TypeScript
        Vite
**⚙️ Backend**
        Node.js
        TypeScript
        Express
        Microservices architecture
**🐳 DevOps & Deployment**
        Docker (Backend containerization)
**AWS EC2 (Frontend hosting)**
**🔧 Features**
        Issue credentials
        Verify credentials
        Microservice-based backend
        Lightweight JSON-based persistence
        Dockerized backend services
        
**🏗️ Architecture**
        kube-credential/
        ┣ backend/
        ┃ ┣ issuance-service/         # Port 4000
        ┃ ┣ verification-service/     # Port 5000
        ┃ ┗ shared-db/
        ┃   ┗ issued_credentials.json
        ┣ docker-compose.yml
        ┣ frontend/
        ┃ ┗ frontend/
        ┃   ┗ src/
        ┗ package.json

**⚙️ Tech Stack**
  **Frontend**
        React
        TypeScript
        Vite
  **Backend**
        Node.js
        TypeScript
        Express
        DevOps
        Docker
        AWS EC2
        
**🧠 Design Decisions**
        JSON file used as a lightweight database (free-tier friendly)
        Microservices architecture for scalability
        Docker used for containerization
        Backend runs locally (as per assignment scope)
        Frontend hosted on AWS EC2
        Worker IDs simulate distributed processing
        🚀 Getting Started
        🔹 Run Backend (Locally)

  **Issuance Service**
      cd kube-credential/backend/issuance-service
      npm install
      npm run dev

  **Verification Service**
      cd kube-credential/backend/verification-service
      npm install
      npm run dev
      
**🔹 Run Frontend**
      cd kube-credential/frontend/frontend
      npm install
      npm run dev
**🧪 Unit Testing**
      npm test
      
**🐳 Docker Setup (Backend)**
  Issuance Service
      cd backend/issuance-service
      docker build -t kube-credential-issuance-service .
      docker run -d -p 4000:4000 \
      -v ${PWD}/../shared-db:/app/../shared-db \
      --name issuance-service \
      kube-credential-issuance-service

  Verification Service
      cd backend/verification-service
      docker build -t kube-credential-verification-service .
      docker run -d -p 5000:5000 \
      -v ${PWD}/../shared-db:/app/../shared-db \
      --name verification-service \
      kube-credential-verification-service
      
  **☁️ AWS EC2 Deployment (Frontend)**
          sudo yum update -y
          sudo yum install docker -y
          sudo yum install git -y
          
          git clone https://github.com/Arpita740/kube-frontend.git
          cd kube-frontend
          
          sudo systemctl start docker
          sudo docker build -t frontend .
          sudo docker run -dt -p 8080:80 --name frontendContainer frontend
          sudo docker ps
          
**📊 Project Status**
    Requirement	Status
          Two Node.js (TypeScript) APIs	-> ✅ Done
          React (TypeScript) Frontend -> ✅ Done
          JSON-based storage ->	✅ Done
          Independent Docker containers	-> ✅ Done
          Cloud hosting (Frontend on AWS) ->	✅ Done
          Backend hosting	-> ❌ Local only
          Unit testing	-> ✅ Done
          Documentation	-> ✅ Done
  **📝 Notes**
    Frontend is publicly accessible via AWS EC2
    Backend runs locally using Docker containers
    Shared JSON file is mounted using Docker volumes
    Designed for simplicity and clarity over production complexity
    ⚡ React + Vite Notes

This project uses Vite for fast development with HMR.

**Plugins Used**
  @vitejs/plugin-react
  @vitejs/plugin-react-swc (optional)
  ESLint Improvements

**📌 Future Improvements**
  Deploy backend to cloud (AWS/GCP)
  Replace JSON DB with MongoDB/PostgreSQL
  Add authentication & authorization
  Kubernetes deployment


**Submitted by:**
  Arpita Sanyal
