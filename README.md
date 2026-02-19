# Social Media Backend & Frontend (Assignment Project)

<div align="center">
  <br />
      <img src="public/readme/Linkup-banner.png" alt="Project Banner">
  <br />
</div>

A full-stack social media mini application built as an assignment project.

This project demonstrates CRUD operations, relational database design, REST API development, and frontend state management using modern tools.

---

## Live Project Documentation

- **Notion Documentation:** [Notion](https://darkened-energy-045.notion.site/Ashraful-sir-task-320323c8d1414609b8cfe1ecb4993d45)

---

## Tech Stack

### Backend
- NestJS
- Prisma ORM
- MySQL (Local)
- REST API
- Cascade delete relationship

### Frontend
- NextJS
- TypeScript
- React Query (TanStack Query)
- ShadCn/UI
- Axios
- Tailwind CSS

---

## Database Design

### User Model
- id
- name
- profileImage
- coverImage
- createdAt

### Post Model
- id
- content
- image
- userId
- createdAt

### Relationship
- One User → Many Posts
- Cascade delete enabled (Deleting a user deletes related posts)

---

## Features

### User
- Create user
- Edit user
- Delete user
- View user list

### Post
- Create post
- Edit post
- Delete post
- Filter posts by user

### Functional Highlights
- React Query for server state management
- Optimized API structure
- Proper error handling
- Clean modular architecture
- Relational DB integrity with cascade delete

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <https://github.com/devtanzir/social_backend-ashraful-sir-task>
```
### 2. Backend Setup

```bash
cd backend
npm install
```

Create .env file:
```bash
DATABASE_URL="mysql://root:password@localhost:3306/social_backend_v2"
```

Generate Prisma:
```bash
pnpm db:generate
```
Run migrations:
```bash
npx prisma migrate dev
```

Start server:
```bash
npm run start:dev
```

### 3. Frontend Setup
```bash
git clone <https://github.com/devtanzir/social_frontend-LInkUp>

cd frontend

npm install

npm run dev
```

## Screenshots

![User List](public/readme/user-list.png)
![Single User Page](public/readme/single-userpage.png)

## Architecture Approach

- Planned in Notion before implementation
- Structured module-based backend
- Custom hooks for API logic separation
- Reusable components
- Clean separation of concerns

## Learning Outcomes

- Full CRUD implementation
- Database relation handling
- Cascade delete implementation
- API & frontend integration
- Handling async state with React Query
- Migration management in Prisma

## Author

Developed as part of an assignment task.