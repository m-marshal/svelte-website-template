# Svelte Website Template

Welcome to the Svelte Website Template repository! This project provides a foundational template for creating dynamic websites using Svelte. Please note that this project is currently a work in progress, so some features might not work as expected. Your contributions and feedback are highly appreciated! You may also modify and use the source code in any way you like.

## Table of Contents
- [Features](#features)
  - [Layout](#layout)
  - [Users / Login / Cookies](#users--login--cookies)
  - [Forum / Dashboard](#forum--dashboard)
  - [Prisma](#prisma)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
- [Usage](#usage)
  - [Running the Development Server](#running-the-development-server)
- [Plugins](#plugins)
- [Contributing](#contributing)
- [License](#license)

## Features
### Layout
- **Responsive Design**: The template uses TailwindCSS to ensure responsive design and modern UI elements.
- **Dark Mode**: The template comes with a built in dark mode switch.
- **Animated Elements**: Enhance user experience with smoothly animated elements.

### Users / Login / Cookies
- **User Authentication**: A complete user system for login and signup.
- **Persistent Sessions**: Uses cookies to maintain user login sessions.

### Forum / Dashboard
- **Forum Functionality**: Users can create, view, and interact with posts.
- **User Dashboard**: A personal dashboard for users to manage their posts and profile settings.

### Prisma
- **Database Integration**: Supports databases compatible with Prisma.
- **Data Persistence**: Main functionality includes saving user details and forum posts in the database.

## Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:
- **Node.js**: Ensure Node.js is installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
- **npm**: npm is included with Node.js, but you can check if it’s installed by running `npm -v` in your terminal.
- **Prisma**: Prisma CLI installed globally. Install it via npm:
```bash
npm install -g prisma
```

## Installation

### Clone the Repository
```bash
# Clone the repository using HTTPS
git clone https://github.com/s-marshal-dev/svelte-website-template.git
# Navigate to the project directory
cd svelte-website-template
```

### Build the project
```bash
# prisma generate is included in the script
npm run build
```

## Database setup

### Set ENV variable
Make sure you are using a database that is compatible with Prisma.
```bash
# Make sure to run npx prisma generate if you edit the ENV file
DATABASE_URL="your database URL"
```

### Seed the database
```bash
npx prisma db seed
```

This seeder creates 3 Users, JohnDoe, Admin, Moderator. They all have the Password "1234". Additionally it creates 4 Placeholder Forum posts.

```bash
import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt-ts';
const prisma = new PrismaClient();
let passworduser1 = hashSync("1234")
let passworduser2 = hashSync("1234")
let passworduser3 = hashSync("1234")



async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      user_username: 'JohnDoe',
      user_username_lower: 'johndoe',
      user_password_hash: passworduser1,
      user_email: 'johndoe@example.com',
      user_description: 'A regular user',
      user_role: 'USER',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      user_username: 'Admin',
      user_username_lower: 'admin',
      user_password_hash: passworduser2,
      user_email: 'adminuser@example.com',
      user_description: 'An admin user',
      user_role: 'ADMIN',
    },
  });

  const user3 = await prisma.user.create({
    data: {
      user_username: 'Moderator',
      user_username_lower: 'moderator',
      user_password_hash: passworduser3,
      user_email: 'moderator@example.com',
      user_description: 'A moderator user',
      user_role: 'MODERATOR',
    },
  });

  // Create posts
  const post1 = await prisma.post.create({
    data: {
      title: 'My First Post!',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit ',
      author: { connect: { user_id: user1.user_id } },
    },
  });

  const post4 = await prisma.post.create({
    data: {
      title: 'My Second Post!',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit ',
      author: { connect: { user_id: user1.user_id } },
    },
  });  

  const post2 = await prisma.post.create({
    data: {
      title: 'Forum Rules',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit ',
      author: { connect: { user_id: user2.user_id } },
    },
  });

  const post3 = await prisma.post.create({
    data: {
      title: 'A Guide to Moderating',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit ',
      author: { connect: { user_id: user3.user_id } },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```



## Usage

### Plugins
This is a list of currently used Plugins;
1. Tailwindcss
2. Prisma
3. svelte-splide
4. tailwindcss-animated
5. bcrypt-ts

### Running the Development Server
To start the development server, run:
```bash
# Runs only locally, so you can test before commiting anything
npm run dev
```

## Contributing
Contributions are what make the open-source community such an amazing place to be, learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License
Distributed under the Unlicense License. See LICENSE for more information.

Happy coding!
