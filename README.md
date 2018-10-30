# Linnia Decentralized Application Tutorial
---
This is a tutorial which describes how to setup and use the Linnia Protocol via the LinniaJS library. We will create a sample decentralized application to demonstrate the Linnia Protocol's utility in an applied manner.

Why do we need this setup?  
[See our Beginners to Modern Web Development FAQs](#beginners-to-modern-web-development-faq)

## Sections
- [Background](#background)
- [About the Decentralized App](#about-the-decentralized-app)
- [Setup](#setup)
- [Create File Structure](#create-file-structure)
- [Upload Records With Linnia](#upload-records-with-linnia)
- [View and Remove Permissions](#view-and-remove-permissions)
- [Accepting or Declining](#accepting-or-declining)


## Background
The Linnia Protocol allows users to own and control their data without the need for centralized third parties. Learn what Linnia is all about on our [Linnia Resources](README.md) page.

LinniaJS is the JavaScript library that allows developers to use the Linnia Protocol. Check out the LinniaJS API on [Github](https://github.com/ConsenSys/linnia-js) and [npm](https://www.npmjs.com/package/@linniaprotocol/linnia-js).

## About the Decentralized App
This DApp will be a based on the winning DApp during the first Linnia Hackathon **[insert link]**, by **[insert names]** back in August 2018.

The DApp was called "Real Estate Dapp". It was focused on the solving the problem of sharing data with multiple parties during a real estate transaction such as buying or renting a property.

Since it was a hackathon project, we have cleaned it up the code and removed React to make it more accessible to a wider range of developers. However, we will use ES6 and will need to set up a Webpack to be able to [transpile](https://medium.com/front-end-hacking/a-world-of-javascript-transpilers-b3b7b880a1be) and [bundle](https://medium.com/@gimenete/how-javascript-bundlers-work-1fc0d0caf2da) our code. Having this setup early on solves more headaches than it causes. [See why here](#addFAQExplaintion).

To be brief, many web browsers do not support the state of the art JavaScript language upgrades that make a developer's life easy. Rather than waiting around, we will just use a transpiler and bundler to allow us to use tomorrow's feature today.

If you have any questions regarding this tutorial, please refer to the tutorial FAQ **[add link to FAQs]**.

## Setup:
**Goal**:
In this section, we will describe how setup our project. We will focus on setting up the tools before adding any code.

### Step 1. Install Node
First, we have to make sure that you have NodeJS installed on your computer. NodeJS is a  JavaScript runtime environment that allows you to use JavaScript on the backend like any other programming language. It frees JavaScript from being just a client side language.

To install NodeJs, go to [Nodejs.org](https://nodejs.org/en/) and follow the installation instructions for your operating system.

### Step 2. Create Folder Structure
Next you will create the folder structure and files for this project.

##### Quick setup:
If you wish to get the files directly you can do either of two things

Download the files directly, you can do so [here](https://github.com/).

Or run the following command in your terminal:
```console
  git clone https://github.com/tesla809/Linnia-Dapp-Tutorial.git
```

**Note:** If you are familiar with a standard setup, you can skip to the next section, ["Uploading Records with Linnia"](#upload-records-with-linnia)

### Create File Structure
Ipsum Lorem....


### Upload Records With Linnia
Ipsum Lorem....

### Accepting or Declining
Ipsum Lorem....


## Beginners to Modern Web Development FAQ:
**Q: You said this was accessible?**  
A: While we tried to make this accessible, this is the current state of web development today. Trying to make it simpler without the build tools set up would have ironically made learning about Linnia harder. We get thru the setup quickly.

**Q: Before I get started, why should I invest this time into learning this?**  
A: The setup will be brief. Although there may be some new tools you have never seen, they will quickly seem familiar.

**Q: I just want to use LinniaJS. Why do I have all these dependencies?**  
A: These dependencies are the de-facto standard in modern web development. The setup time is compensated by the ease of which they bring later during the workflow.  

ES6 introduced a bunch of useful things that makes developing web applications easier. However, due to the lack of coordination between browsers, developers had two choices.

Developers could wait for all browsers to adopt all the features, while make life difficult during the time they maintain the code. Or they can use build tools and make semi life difficult only when setting up the tools.

No worries though. We will gloss over going too in-depth with the tools, only set things up and just focus on using Linnia specifically.

**Q: What is NodeJS?**  
NodeJS is a JavaScript runtime environment. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

Basically, NodeJS programs do things faster than others. Why? Because while the program is waiting for the information it has requested, it can do other things. This means it gets more work done, as compared to other environments that wait till the information is received, aka blocking;.

Event-driven means that events initialize the code.

**Q: Why use NodeJS?**  
It faster than most back environments and most developers know JavaScript already, so the learning curve is less steep. NodeJS also has a large developer community that publishes code on NPM, a package manager for Node. Packages of stand alone snippets of code that solve specific problems and can be downloaded by anybody.

These benefits led to the Linnia team deciding to release a JavaScript library first. However, that doesn't stop us from eventually releasing libraries in Python, Ruby or other languages.

**Q: What is Webpack?**  
A: WebPack bundles, preprocess and tweaks files. No need to worry, we  won’t get deep under the hood. Our set up will consist of some simple boiler plate code and a very quick description of what it does.

Our focus will be primarily on Linnia.  

However, will include links for those who wish to learn more.

**Q: Why do we need Webpack?**  
A: We will be using ES6 modules and need to ensure that they work. Hence, we will need a bundler like web pack to  bundle the code up with a bundler
