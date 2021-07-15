import axios from 'axios';

const connectAxios = axios.create({
    DATABASE_URL: process.env.DATABASE_URL
});

export default connectAxios;