import axios from "axios";

export default axios.create({
    baseURL:'https://api.linkedin.com/v2/me'
    }
)