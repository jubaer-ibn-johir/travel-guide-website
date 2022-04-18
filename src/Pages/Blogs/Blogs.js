import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h4>Q.1 what is the Difference between authorization and authentication?</h4>
            <p>Ans: Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are.
                Once a passenger's identity has been determined, the second step is verifying any special services the passenger has access to, whether it's flying first-class or visiting the VIP lounge.
            </p>

            <h4>Q.2 Why are you using firebase? What other options do you have to implement authentication?</h4>

            <p>Ans: Because,
                * ML Kit helps develop machine learning features for all platforms and devices <br />

                * Custom ML features are easy to develop and install in apps <br />

                * Leverage the power of the Google Cloud platform to improve the accuracy level of the ML features <br />

                * Simple, easy and quick to learn, explore and develop machine learning features for beginners, intermediate and experts <br />

                Alternative of firebase are Auth0, MongoDB, Passport, Okta, Back4App, Kuzzle.
            </p>
            <h4>Q.3 What other services does firebase provide other than authentication</h4>
            <p>Ans: There are many services which Firebase provides, Most useful of them are:

                Cloud Firestore <br />
                Cloud Functions <br />
                Authentication <br />
                Hosting <br />
                Cloud Storage <br />
                Google Analytics <br />
                Predictions <br />
                Cloud Messaging <br />
                Dynamic Links <br />
                Remote Config</p>
        </div>
    );
};

export default Blogs;