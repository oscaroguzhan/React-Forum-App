# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

////////////////////////////////////////////////

import styled from "styled-components";

export const StyledCard = styled.section`
    .card-container {
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding:40px;
    border-bottom: 1px solid rgba(0,0,0,0.3);

    .card-heading {
        display:flex;
        justify-content:center;
        align-items:center;
        
        .card-title {
            font-size: 2rem;
            color: ${({theme}) => theme.colors.body.homepage.white};
        }
    }
    .post-card {
        display:flex;
        flex-direction:column;
        justify-content:center;
        width: 500px;
        background-color: #fff;
        border: 1px solid #ececec;
        margin: 30px;
        padding: 30px;
        border-radius: 6px;
        box-shadow: 1px 3px #fff;
       

        .post-content {
            margin-bottom: 10px;

            span{
                color: #9b9b9b;
                font-size: 1.2rem;   
            }
        }
        .userId {
            border: 1px solid black;
            display: flex;
            align-items:center;
            
            .person-icon {
                font-size: 1.9rem;
                color: #800080;
                cursor: pointer;
            }
            &:hover {
                font-size: 30px;
            }
            span {
                font-size: 1.1rem;
                margin: 5px;
                font-weight: 600;
            }
        }
    }
}


`;