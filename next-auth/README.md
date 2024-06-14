This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

////////////////////////////////////////////

## Google Provider Connection

-   Go to https://console.cloud.google.com/
-   From top left hand side, select New project
-   After creating the new project, make sure it is selected
-   Then write apis & services in the search bar
-   Select APIs & Services that has API text as image
-   After going to that page, select OAuth consent screen
-   From there select External for User Type and click on create
-   Give your app a name and select the user support email available to be used
-   Skip the others and add contact developer email address as well
-   You can skip the scopes and add test users page, by clicking on Save and Continue
-   After saving everything, from the left side panel, select Credentials
-   Then select +Create Credentials button, and select OAuth client ID
-   In the opened page, select Web Application for the Application Type
-   Scrolling down below, add JavaScript Origin => https://localhost:3000
-   Then add Authorized Redirect URIs => http://localhost:3000/api/auth/callback/google, and click on Create button to finish.
-   From the opened modal, copy the Client ID and Client secret and paste them inside the .env file with their related key fields: AUTH_GOOGLE_ID and AUTH_GOOGLE_SECRET

## GitHub Provider Connection

-   Go to https://github.com/settings/profile
-   Go all the way down and select Developer Settings from left side panel
-   Then again from left side panel, select OAuth Apps
-   In this page, select New OAuth App button
-   Fill in the information for Homepage URL as http://localhost:3000
-   Fill in the Authorization callback URL with the callback URI below in the [Callback URIs Section](#callback-uris)
-   Then click on Register application button
-   From the opened page, find and copy Client ID and paste it inside .env file next to AUTH_GITHUB_ID.
-   Right next to Client secrets, click on the Generate a new client secret button to generate a new client secret, cooy and paste it inside .env file next to AUTH_GITHUB_SECRET

## CALLBACK URIs

-   Google => https://example.com/api/auth/callback/google
-   GitHub => https://example.com/api/auth/callback/github
