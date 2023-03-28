import express from 'express';
import App from './Utils/App';

const app = new App(express(), Number(process.env.PORT) | 4000);

app.listen();